import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from '../../../shared/services/admin';

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  hasNext: boolean;
  hasPrev: boolean;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserList implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  users: User[] = [];
  pagination: Pagination = {
    currentPage: 1,
    totalPages: 0,
    totalUsers: 0,
    hasNext: false,
    hasPrev: false
  };

  // Filtros y búsqueda
  searchTerm: string = '';
  roleFilter: string = '';
  statusFilter: string = '';
  
  // Estados
  isLoading = true;
  error: string | null = null;
  isUpdating: { [key: string]: boolean } = {};

  // Roles disponibles (sin admin)
  roles = ['paciente', 'profesional', 'voluntario'];
  itemsPerPage = 10;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(page: number = 1) {
    this.isLoading = true;
    this.error = null;

    const usersSub = this.adminService.getUsers(
      page,
      this.itemsPerPage,
      this.searchTerm,
      this.roleFilter,
      this.statusFilter // ✅ AGREGADO: Enviar statusFilter al backend
    ).subscribe({
      next: (response) => {
        if (response.success) {
          // Filtrar usuarios que no sean admin y normalizar
          this.users = response.data.users
            .filter((user: any) => user.role !== 'admin')
            .map(user => this.normalizeUser(user));
          this.pagination = response.data.pagination;
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los usuarios';
        this.isLoading = false;
        console.error('Error loading users:', error);
      }
    });

    this.subscriptions.add(usersSub);
  }

  // Normalizar usuario para asegurar que todas las propiedades tengan valores
  private normalizeUser(userData: any): User {
    return {
      _id: userData._id || '',
      name: userData.name || 'Sin nombre',
      lastName: userData.lastName || '',
      email: userData.email || '',
      role: userData.role || 'paciente',
      isActive: Boolean(userData.isActive),
      createdAt: userData.createdAt || new Date().toISOString(),
      lastLogin: userData.lastLogin
    };
  }

  // Búsqueda y filtros
  onSearch() {
    this.pagination.currentPage = 1;
    this.loadUsers();
  }

  onFilterChange() {
    this.pagination.currentPage = 1;
    this.loadUsers();
  }

  clearFilters() {
    this.searchTerm = '';
    this.roleFilter = '';
    this.statusFilter = '';
    this.pagination.currentPage = 1;
    this.loadUsers();
  }

  // Paginación
  nextPage() {
    if (this.pagination.hasNext) {
      this.loadUsers(this.pagination.currentPage + 1);
    }
  }

  prevPage() {
    if (this.pagination.hasPrev) {
      this.loadUsers(this.pagination.currentPage - 1);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.loadUsers(page);
    }
  }

  // Gestión de usuarios
  toggleUserStatus(user: User) {
    this.isUpdating[user._id] = true;

    const toggleSub = this.adminService.toggleUserStatus(user._id).subscribe({
      next: (response) => {
        if (response.success) {
          // Actualización inmediata en el frontend
          user.isActive = Boolean(response.data.isActive);
        }
        this.isUpdating[user._id] = false;
      },
      error: (error) => {
        this.error = 'Error al cambiar el estado del usuario';
        this.isUpdating[user._id] = false;
        console.error('Error toggling user status:', error);
      }
    });

    this.subscriptions.add(toggleSub);
  }

  updateUserRole(user: User, newRole: string) {
    if (user.role === newRole) return;

    this.isUpdating[user._id] = true;

    const roleSub = this.adminService.updateUserRole(user._id, newRole).subscribe({
      next: (response) => {
        if (response.success) {
          // Actualización inmediata en el frontend
          user.role = response.data.role || user.role;
        }
        this.isUpdating[user._id] = false;
      },
      error: (error) => {
        this.error = 'Error al actualizar el rol del usuario';
        this.isUpdating[user._id] = false;
        console.error('Error updating user role:', error);
      }
    });

    this.subscriptions.add(roleSub);
  }

  // Método para manejar cambio de rol desde el template
  onRoleChange(user: User, event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.updateUserRole(user, target.value);
    }
  }

  // Utilidades
  getUserInitials(user: User): string {
    const first = user.name.charAt(0);
    const last = user.lastName.charAt(0);
    return (first + last).toUpperCase() || 'U';
  }

  getRoleBadgeClass(role: string): string {
    const roleClasses: { [key: string]: string } = {
      paciente: 'badge-paciente',
      profesional: 'badge-profesional',
      voluntario: 'badge-voluntario'
    };
    return roleClasses[role] || 'badge-default';
  }

  getRoleDisplayName(role: string): string {
    const roleNames: { [key: string]: string } = {
      paciente: 'Paciente',
      profesional: 'Profesional',
      voluntario: 'Voluntario'
    };
    return roleNames[role] || role;
  }

  getStatusBadgeClass(isActive: boolean): string {
    return isActive ? 'badge-active' : 'badge-inactive';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('es-ES');
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;
    
    // Mostrar máximo 5 páginas alrededor de la actual
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    
    // Ajustar si estamos cerca del inicio o final
    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { 
  ProfessionalService, 
  PatientsResponse 
} from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

interface Patient {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate?: string;
  emergencyContact?: any;
  createdAt: string;
}

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.scss']
})
export class Pacientes implements OnInit, OnDestroy {
  private professionalService = inject(ProfessionalService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Lista de pacientes
  pacientes: Patient[] = [];
  filteredPacientes: Patient[] = [];
  
  // Filtros
  filtros = {
    search: ''
  };

  // Estados
  isLoading = true;
  error = '';
  
  // Paginación - ACTUALIZADO
  pagination = {
    currentPage: 1,
    totalPages: 1,
    totalPacientes: 0,
    hasNext: false,
    hasPrev: false
  };

  private destroy$ = new Subject<void>();

  async ngOnInit(): Promise<void> {
    // Escuchar cambios en los query params
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.filtros.search = params['search'] || '';
        this.pagination.currentPage = parseInt(params['page']) || 1;
        this.loadPacientes();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadPacientes(): Promise<void> {
    this.isLoading = true;
    this.error = '';

    try {
      const response = await this.professionalService.getPatients({
        page: this.pagination.currentPage,
        limit: 10,
        search: this.filtros.search
      }).toPromise();

      if (response?.success && response.data) {
        // ✅ CORREGIDO: Usar la estructura correcta
        this.pacientes = response.data.docs || [];
        this.filteredPacientes = [...this.pacientes];
        
        // ✅ ACTUALIZADO: Usar la estructura correcta de PaginatedResponse
        this.pagination = {
          currentPage: response.data.page || 1,
          totalPages: response.data.totalPages || 1,
          totalPacientes: response.data.totalDocs || 0,
          hasNext: response.data.hasNextPage || false,
          hasPrev: response.data.hasPrevPage || false
        };

        // Aplicar filtro de búsqueda local
        this.aplicarFiltroBusqueda();
      } else {
        this.error = 'Error al cargar los pacientes';
      }
    } catch (error) {
      console.error('Error loading patients:', error);
      this.error = 'Error al cargar los pacientes. Por favor, intenta nuevamente.';
      this.pacientes = [];
      this.filteredPacientes = [];
    } finally {
      this.isLoading = false;
    }
  }

  private aplicarFiltroBusqueda(): void {
    if (!this.filtros.search) {
      this.filteredPacientes = [...this.pacientes];
      return;
    }

    const searchTerm = this.filtros.search.toLowerCase();
    this.filteredPacientes = this.pacientes.filter(paciente => 
      paciente.name.toLowerCase().includes(searchTerm) ||
      paciente.lastName.toLowerCase().includes(searchTerm) ||
      paciente.email.toLowerCase().includes(searchTerm) ||
      (paciente.phone && paciente.phone.toLowerCase().includes(searchTerm))
    );
  }

  // Navegación
  goToDashboard(): void {
    this.router.navigate(['/Panel-profesional']);
  }

  // Filtros
  onSearchChange(): void {
    this.pagination.currentPage = 1;
    this.aplicarFiltroBusqueda();
    this.actualizarQueryParams();
  }

  limpiarFiltros(): void {
    this.filtros.search = '';
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }

  private actualizarQueryParams(): void {
    const queryParams: any = {};
    
    if (this.filtros.search) queryParams.search = this.filtros.search;
    if (this.pagination.currentPage > 1) queryParams.page = this.pagination.currentPage;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

  // Paginación
  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.actualizarQueryParams();
    }
  }

  // ✅ MÉTODOS NUEVOS AGREGADOS PARA EL TEMPLATE

  // Calcular edad a partir de la fecha de nacimiento
  calculateAge(birthDate?: string): string {
    if (!birthDate) return 'Edad no disponible';
    
    try {
      const birth = new Date(birthDate);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      
      return `${age} años`;
    } catch {
      return 'Fecha inválida';
    }
  }

  // Contactar paciente por email o teléfono
  contactarPaciente(paciente: Patient, tipo: 'email' | 'telefono'): void {
    if (tipo === 'email' && paciente.email) {
      window.open(`mailto:${paciente.email}`, '_blank');
    } else if (tipo === 'telefono' && paciente.phone) {
      window.open(`tel:${paciente.phone}`, '_blank');
    } else {
      alert(`No hay ${tipo} disponible para este paciente`);
    }
  }

  // Ver detalles del paciente
  viewPatientDetails(paciente: Patient): void {
    // Aquí puedes navegar a una página de detalles del paciente si la tienes
    // Por ahora mostraremos un alert con la información
    const info = `
      Nombre: ${paciente.name} ${paciente.lastName}
      Email: ${paciente.email}
      Teléfono: ${paciente.phone || 'No disponible'}
      Fecha de nacimiento: ${paciente.birthDate ? this.formatDate(paciente.birthDate) : 'No disponible'}
      Edad: ${this.calculateAge(paciente.birthDate)}
      Registrado: ${this.formatDate(paciente.createdAt)}
    `;
    
    alert(info);
    
    // O si tienes una ruta para detalles del paciente:
    // this.router.navigate(['/profesional/pacientes', paciente._id]);
  }

  // Helper functions
  formatDate(dateString: string): string {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  getInitials(name: string, lastName: string): string {
    return `${name[0]}${lastName[0]}`.toUpperCase();
  }
}
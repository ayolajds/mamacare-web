import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  professionalsCount: number;
  patientsCount: number;
  volunteersCount: number;
  newUsersThisMonth: number;
  userDistribution: {
    pacientes: number;
    profesionales: number;
    voluntarios: number;
  };
}

export interface UserListResponse {
  success: boolean;
  data: {
    users: any[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalUsers: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export interface UserUpdateResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    isActive?: boolean;
    role?: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/admin`;

  // 📊 Obtener estadísticas del dashboard
  getDashboardStats(): Observable<{ success: boolean; data: DashboardStats }> {
    console.log('📊 Obteniendo estadísticas del dashboard...');
    return this.http.get<{ success: boolean; data: DashboardStats }>(
      `${this.baseUrl}/dashboard/stats`
    );
  }

  // 👥 Obtener lista de usuarios (con paginación y filtros) - CORREGIDO
  getUsers(page: number = 1, limit: number = 10, search: string = '', role: string = '', status: string = ''): Observable<UserListResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (search) params = params.set('search', search);
    if (role) params = params.set('role', role);
    if (status) params = params.set('status', status); // ✅ AGREGADO: Parámetro status

    console.log('👥 Obteniendo lista de usuarios:', { page, limit, search, role, status });
    
    return this.http.get<UserListResponse>(`${this.baseUrl}/users`, { params });
  }

  // 🔄 Activar/desactivar usuario
  toggleUserStatus(userId: string): Observable<UserUpdateResponse> {
    console.log('🔄 Cambiando estado del usuario:', userId);
    return this.http.patch<UserUpdateResponse>(
      `${this.baseUrl}/users/${userId}/toggle`,
      {}
    );
  }

  // 🎭 Cambiar rol de usuario
  updateUserRole(userId: string, newRole: string): Observable<UserUpdateResponse> {
    console.log('🎭 Cambiando rol del usuario:', { userId, newRole });
    return this.http.patch<UserUpdateResponse>(
      `${this.baseUrl}/users/${userId}/role`,
      { role: newRole }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Activity {
  userName: string;
  userEmail: string;
  action: string;
  date: Date;
  status: string;
}

interface AppointmentStats {
  totalAppointments: number;
  todayAppointments: number;
  upcomingAppointments: number;
  attendanceRate: number;
  statusStats: { _id: string; count: number }[];
}

interface UserStats {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  professionalsCount: number;
  patientsCount: number;
  volunteersCount: number;
  newUsersThisMonth: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  
  stats: UserStats = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    professionalsCount: 0,
    patientsCount: 0,
    volunteersCount: 0,
    newUsersThisMonth: 0
  };

  appointmentStats: AppointmentStats = {
    totalAppointments: 0,
    todayAppointments: 0,
    upcomingAppointments: 0,
    attendanceRate: 0,
    statusStats: []
  };

  recentActivity: Activity[] = [];
  
  isLoading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.isLoading = true;
    this.error = null;

    // Cargar estadísticas de usuarios desde el endpoint REAL
    this.loadUserStats();
  }

  loadUserStats() {
    this.http.get<{success: boolean; data: any}>(`${environment.apiUrl}/admin/dashboard/stats`).subscribe({
      next: (response) => {
        if (response.success) {
          this.processUserStats(response.data);
          // Luego cargar stats de citas
          this.loadAppointmentStats();
        } else {
          this.error = 'Error en la respuesta del servidor';
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Error loading user stats:', error);
        this.error = 'Error al cargar las estadísticas de usuarios';
        this.isLoading = false;
      }
    });
  }

  processUserStats(backendData: any) {
    console.log('Datos de usuarios recibidos:', backendData);
    
    // Mapear los datos del backend a nuestra interfaz
    this.stats = {
      totalUsers: backendData.totalUsers || 0,
      activeUsers: backendData.activeUsers || 0,
      inactiveUsers: backendData.inactiveUsers || 0,
      professionalsCount: backendData.professionalsCount || 0,
      patientsCount: backendData.patientsCount || 0,
      volunteersCount: backendData.volunteersCount || 0,
      newUsersThisMonth: backendData.newUsersThisMonth || 0
    };
  }

  loadAppointmentStats() {
    this.http.get<{success: boolean; data: any}>(`${environment.apiUrl}/appointments/admin/stats`).subscribe({
      next: (response) => {
        if (response.success) {
          this.processAppointmentStats(response.data);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading appointment stats:', error);
        // Si fallan las citas, al menos mostrar los usuarios
        this.isLoading = false;
      }
    });
  }

  processAppointmentStats(statsData: any) {
    console.log('Datos de citas recibidos:', statsData);
    
    // Citas totales
    this.appointmentStats.totalAppointments = statsData.totalAppointments || 0;
    
    // Citas de hoy (usamos las citas programadas como aproximación)
    this.appointmentStats.todayAppointments = this.calculateTodayAppointments(statsData);
    
    // Próximas sesiones (citas programadas)
    this.appointmentStats.upcomingAppointments = this.calculateUpcomingAppointments(statsData);
    
    // Tasa de asistencia (completadas vs totales)
    this.appointmentStats.attendanceRate = this.calculateAttendanceRate(statsData);
    
    this.appointmentStats.statusStats = statsData.statusStats || [];
  }

  calculateTodayAppointments(statsData: any): number {
    const scheduled = statsData.statusStats?.find((s: any) => s._id === 'scheduled');
    return scheduled?.count || 0;
  }

  calculateUpcomingAppointments(statsData: any): number {
    const scheduled = statsData.statusStats?.find((s: any) => s._id === 'scheduled')?.count || 0;
    const confirmed = statsData.statusStats?.find((s: any) => s._id === 'confirmed')?.count || 0;
    return scheduled + confirmed;
  }

  calculateAttendanceRate(statsData: any): number {
    const completed = statsData.statusStats?.find((s: any) => s._id === 'completed')?.count || 0;
    const total = statsData.totalAppointments || 1;
    
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  }

  // Método público para usar en el template
  calculatePercentage(part: number, total: number): number {
    if (!total || total === 0) return 0;
    return Math.round((part / total) * 100);
  }

  getAppointmentStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      scheduled: 'scheduled',
      confirmed: 'active',
      in_progress: 'new',
      completed: 'active',
      cancelled: 'inactive'
    };
    return statusClasses[status] || 'inactive';
  }

  getAppointmentStatusDisplay(status: string): string {
    const statusDisplay: { [key: string]: string } = {
      scheduled: 'Programadas',
      confirmed: 'Confirmadas',
      in_progress: 'En Progreso',
      completed: 'Completadas',
      cancelled: 'Canceladas'
    };
    return statusDisplay[status] || status;
  }

  // Métodos para las tendencias (usando datos reales)
  getUserGrowth(): number {
    // Simular crecimiento basado en nuevos usuarios este mes
    if (this.stats.totalUsers === 0 || this.stats.newUsersThisMonth === 0) return 0;
    const previousUsers = this.stats.totalUsers - this.stats.newUsersThisMonth;
    if (previousUsers <= 0) return 100;
    return Math.round((this.stats.newUsersThisMonth / previousUsers) * 100);
  }

  getActiveGrowth(): number {
    return this.calculatePercentage(this.stats.activeUsers, this.stats.totalUsers);
  }

  refreshData() {
    this.loadDashboardData();
  }
}
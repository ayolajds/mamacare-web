import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../shared/services/admin';

interface Activity {
  userName: string;
  userEmail: string;
  action: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  
  stats = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    totalKits: 0,
    totalRevenue: 0,
    userGrowth: 0,
    activeGrowth: 0,
    kitsGrowth: 0,
    revenueGrowth: 0,
    professionalsCount: 0,
    patientsCount: 0,
    volunteersCount: 0,
    newUsersThisMonth: 0
  };

  recentActivity: Activity[] = [];
  
  metrics = {
    conversionRate: 0,
    activeSessions: 0,
    avgSessionTime: 0,
    retentionRate: 0
  };

  isLoading = true;
  error: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.isLoading = true;
    this.error = null;

    this.adminService.getDashboardStats().subscribe({
      next: (response) => {
        if (response.success) {
          const backendData = response.data;
          
          // Mapear datos reales del backend
          this.stats = {
            totalUsers: backendData.totalUsers || 0,
            activeUsers: backendData.activeUsers || 0,
            inactiveUsers: backendData.inactiveUsers || 0,
            totalKits: 0, // Por implementar
            totalRevenue: 0, // Por implementar
            userGrowth: this.calculateGrowth(backendData.totalUsers, backendData.newUsersThisMonth),
            activeGrowth: this.calculatePercentage(backendData.activeUsers, backendData.totalUsers),
            kitsGrowth: 0, // Por implementar
            revenueGrowth: 0, // Por implementar
            professionalsCount: backendData.professionalsCount || 0,
            patientsCount: backendData.patientsCount || 0,
            volunteersCount: backendData.volunteersCount || 0,
            newUsersThisMonth: backendData.newUsersThisMonth || 0
          };

          // Cargar actividad reciente (por implementar endpoint)
          this.loadRecentActivity();
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las estadísticas del dashboard';
        this.isLoading = false;
        console.error('Dashboard error:', error);
      }
    });
  }

  // Método público para usar en el template
  calculatePercentage(part: number, total: number): number {
    if (!total || total === 0) return 0;
    return Math.round((part / total) * 100);
  }

  private calculateGrowth(total: number, newItems: number): number {
    if (!total || !newItems || total - newItems <= 0) return 0;
    return Math.round((newItems / (total - newItems)) * 100);
  }

  private loadRecentActivity() {
    // Por ahora vacío - se llenará cuando tengamos el endpoint
    this.recentActivity = [];
  }

  refreshData() {
    this.loadDashboardData();
  }

  onChartPeriodChange(event: any) {
    // Por implementar cuando tengamos endpoints de gráficos
    console.log('Período cambiado:', event.target.value);
  }
}
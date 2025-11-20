import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { PatientService } from '../../shared/services/paciente';
import { AuthService } from '../../shared/services/auth';
import { CitasService } from '../../shared/services/cita';
import { PaqueteService } from '../../shared/services/paquete';

@Component({
  selector: 'app-paciente-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './paciente-panel.html',
  styleUrls: ['./paciente-panel.scss']
})
export class PacientePanel implements OnInit, OnDestroy {
  private patientService = inject(PatientService);
  private authService = inject(AuthService);
  private citasService = inject(CitasService);
  private paquetesService = inject(PaqueteService);
  private router = inject(Router);

  // Datos del dashboard
  dashboardData: any = {
    todaysAppointments: 0,
    recentSymptoms: []
  };
  
  patientName: string = 'Paciente';
  
  // Estados
  isLoading: boolean = true;
  error: string = '';

  // Contadores
  paquetesCount: number = 0;
  kitsCount: number = 0;
  citasPendientesCount: number = 0;
  sintomasCount: number = 0;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.loadAllData();
    this.loadPatientName();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadAllData(): void {
    this.isLoading = true;
    this.error = '';

    // Cargar todos los datos en paralelo
    Promise.all([
      this.loadDashboardData(),
      this.loadCitasPendientes(),
      this.loadPaquetesCount(),
      this.loadKitsCount()
    ]).finally(() => {
      this.isLoading = false;
    });
  }

  private loadDashboardData(): Promise<void> {
    return new Promise((resolve) => {
      this.patientService.getDashboard()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: any) => {
            if (response.success && response.data) {
              this.dashboardData = {
                todaysAppointments: response.data.todaysAppointments || 0,
                recentSymptoms: response.data.recentSymptoms || []
              };
              this.sintomasCount = this.dashboardData.recentSymptoms.length;
            }
            resolve();
          },
          error: (error) => {
            console.error('Error loading dashboard:', error);
            resolve();
          }
        });
    });
  }

  private loadCitasPendientes(): Promise<void> {
    return new Promise((resolve) => {
      this.citasService.getMisSolicitudes()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: any) => {

            const solicitudes = response?.data || response || [];

            
            // Contar solo las solicitudes pendientes
            this.citasPendientesCount = solicitudes.filter((solicitud: any) => 
              solicitud.status === 'pending' || 
              solicitud.estado === 'pendiente' ||
              solicitud.status === 'pendiente'
            ).length;
            

            resolve();
          },
          error: (error) => {
            console.error('❌ Error cargando citas pendientes:', error);
            this.citasPendientesCount = 0;
            resolve();
          }
        });
    });
  }

  private loadPaquetesCount(): Promise<void> {
    return new Promise((resolve) => {
      this.paquetesService.getMisPaquetes()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: any) => {

            const paquetes = response?.data || response || [];

            this.paquetesCount = paquetes.length;

            resolve();
          },
          error: (error) => {
            console.error('❌ Error cargando paquetes:', error);
            // Si falla, intentar con el método del usuario
            this.loadPaquetesFromUser();
            resolve();
          }
        });
    });
  }

  private loadPaquetesFromUser(): void {
    const user = this.authService.currentUser();
    if (user && user.paquetesAcompanamientoComprados) {
      this.paquetesCount = user.paquetesAcompanamientoComprados.length;

    } else {
      this.paquetesCount = 0;
    }
  }

  private loadKitsCount(): Promise<void> {
    return new Promise((resolve) => {
      const user = this.authService.currentUser();
      if (user && user.kitsComprados) {
        this.kitsCount = user.kitsComprados.length;

      } else {
        this.kitsCount = 0;
      }
      resolve();
    });
  }

  private loadPatientName(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.patientName = `${user.name} ${user.lastName}`.trim();
    }
  }

  // ✅ NUEVO MÉTODO: Navegación a Citas Hoy
  goToCitasHoy(): void {
    this.router.navigate(['/citas-hoy']);
  }

  // Navegación
  goToCitas(): void {
    this.router.navigate(['/paciente/citas']);
  }

  goToSalud(): void {
    this.router.navigate(['/paciente/salud']);
  }

  solicitarCita(): void {
    this.router.navigate(['/solicitar-cita']);
  }

  goToMisSolicitudes(): void {
    this.router.navigate(['/mis-solicitudes']);
  }

  goToMisPaquetes(): void {
    this.router.navigate(['/mis-paquetes']);
  }

  goToMisKits(): void {
    this.router.navigate(['/mis-kits']);
  }

  refrescarDatos(): void {

    this.loadAllData();
  }
}
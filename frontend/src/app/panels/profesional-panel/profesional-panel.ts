import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { 
  ProfessionalService, 
  Professional, 
  ProfessionalStats, 
  Appointment,
  AppointmentsResponse 
} from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-professional-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profesional-panel.html',
  styleUrls: ['./profesional-panel.scss']
})
export class ProfesionalPanel implements OnInit, OnDestroy {
  // Inyectar servicios
  private professionalService = inject(ProfessionalService);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Datos del profesional - INICIALIZADOS CON VALORES POR DEFECTO
  profesional: Professional = {
    _id: '',
    name: 'Cargando...',
    specialty: 'Cargando...',
    email: 'cargando@ejemplo.com',
    isActive: true,
    createdAt: '',
    updatedAt: ''
  };

  stats: ProfessionalStats = {
    citasHoy: 0,
    citasPendientes: 0,
    citasEstaSemana: 0,
    pacientesActivos: 0,
    citasCompletadasMes: 0,
    tasaAsistencia: 0
  };

  proximasCitas: Appointment[] = [];
  
  isLoading: boolean = true;
  error: string = '';

  private destroy$ = new Subject<void>();

  async ngOnInit(): Promise<void> {
    await this.loadProfessionalData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async loadProfessionalData(): Promise<void> {
    this.isLoading = true;
    this.error = '';

    try {
      // Cargar datos en paralelo
      await Promise.all([
        this.loadProfessionalProfile(),
        this.loadStats(),
        this.loadProximasCitas()
      ]);
    } catch (error) {
      console.error('Error loading professional data:', error);
      this.error = this.getErrorMessage(error);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadProfessionalProfile(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.professionalService.getProfessionalProfile()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            console.log('👤 Perfil profesional cargado:', response);
            if (response.success && response.data) {
              this.profesional = response.data;
              resolve();
            } else {
              reject(new Error('No se pudo cargar el perfil profesional'));
            }
          },
          error: (error) => {
            console.error('Error loading professional profile:', error);
            // Fallback: usar datos del usuario logueado
            const user = this.authService.currentUser();
            if (user) {
              this.profesional = {
                _id: user.id,
                name: `${user.name} ${user.lastName}`.trim(),
                email: user.email,
                specialty: 'Profesional de Salud',
                phone: user.phone,
                isActive: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              };
              resolve();
            } else {
              reject(error);
            }
          }
        });
    });
  }

  private async loadStats(): Promise<void> {
    return new Promise((resolve) => {
      this.professionalService.getStats()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            console.log('📊 Estadísticas cargadas:', response);
            if (response.success && response.data) {
              this.stats = response.data;
            } else {
              console.warn('⚠️ No se recibieron datos de estadísticas');
              this.stats = this.getDefaultStats();
            }
            resolve();
          },
          error: (error) => {
            console.error('❌ Error loading stats:', error);
            // Stats por defecto en caso de error
            this.stats = this.getDefaultStats();
            resolve();
          }
        });
    });
  }

  private async loadProximasCitas(): Promise<void> {
    return new Promise((resolve) => {
      this.professionalService.getAppointments({
        limit: 5,
        status: 'scheduled,confirmed'
      })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: AppointmentsResponse) => {
            console.log('📅 Próximas citas cargadas:', response);
            this.proximasCitas = this.professionalService.extractAppointments(response);
            resolve();
          },
          error: (error) => {
            console.error('Error loading appointments:', error);
            this.proximasCitas = [];
            resolve();
          }
        });
    });
  }

  private getErrorMessage(error: any): string {
    if (error?.status === 401) {
      return 'No autorizado. Por favor, inicia sesión nuevamente.';
    } else if (error?.status === 403) {
      return 'No tienes permisos para acceder a este panel.';
    } else if (error?.status === 404) {
      return 'Recurso no encontrado.';
    } else if (error?.status >= 500) {
      return 'Error del servidor. Por favor, intenta más tarde.';
    } else {
      return 'Error al cargar los datos del panel. Por favor, intenta nuevamente.';
    }
  }

  private getDefaultStats(): ProfessionalStats {
    return {
      citasHoy: 0,
      citasPendientes: 0,
      citasEstaSemana: 0,
      pacientesActivos: 0,
      citasCompletadasMes: 0,
      tasaAsistencia: 0
    };
  }

  // Helper functions
  getInitials(name: string): string {
    if (!name || name === 'Cargando...') return 'P';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  formatTime(dateString: string): string {
    try {
      return new Date(dateString).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '--:--';
    }
  }

  formatDate(dateString: string): string {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  getStatusDisplay(status: string): string {
    const statusMap: { [key: string]: string } = {
      'scheduled': 'Programada',
      'confirmed': 'Confirmada',
      'completed': 'Completada',
      'cancelled': 'Cancelada',
      'pending': 'Pendiente',
      'in_progress': 'En Progreso',
      'rescheduled': 'Reprogramada',
      'no_show': 'No Presentado'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    const classMap: { [key: string]: string } = {
      'scheduled': 'status-scheduled',
      'confirmed': 'status-confirmed',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled',
      'pending': 'status-scheduled',
      'in_progress': 'status-in-progress',
      'rescheduled': 'status-rescheduled',
      'no_show': 'status-no-show'
    };
    return classMap[status] || '';
  }

  // Navegación
  goToCitas(): void {
    console.log('📍 Navegando a citas...');
    this.router.navigate(['/profesional/citas']);
  }

  goToPacientes(): void {
    console.log('📍 Navegando a pacientes...');
    this.router.navigate(['/profesional/pacientes']);
  }

  // 🎗️ NUEVO: Navegar a crear tratamiento para paciente
  goToCreateTreatment(patientId: string): void {
    console.log('🎗️ Navegando a crear tratamiento para paciente:', patientId);
    this.router.navigate(['/profesional/pacientes', patientId, 'tratamiento']);
  }

  viewCitaDetails(cita: Appointment): void {
    console.log('📍 Ver detalles de cita:', cita._id);
    this.router.navigate(['/profesional/citas', cita._id]);
  }

  refreshData(): void {
    console.log('📍 Refrescando datos...');
    this.loadProfessionalData();
  }
}
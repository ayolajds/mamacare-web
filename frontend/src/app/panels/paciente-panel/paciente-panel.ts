import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { PatientService } from '../../shared/services/paciente';
import { AuthService } from '../../shared/services/auth';

// Interfaces locales
interface CitaPaciente {
  _id: string;
  date: string;
  type?: string;
  status: string;
  professionalId?: {
    name: string;
    specialty?: string;
  };
}

interface TratamientoPaciente {
  treatmentPhase?: string;
  cancerType?: string;
  cancerStage?: string;
  professionalId?: {
    name: string;
  };
}

interface SintomaPaciente {
  symptom: string;
  intensity: number;
  date: string;
  notes?: string;
}

interface DashboardPaciente {
  upcomingAppointments: CitaPaciente[];
  treatment?: TratamientoPaciente;
  todaysAppointments: number;
  recentSymptoms: SintomaPaciente[];
}

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
  private router = inject(Router);

  // Datos del dashboard - INICIALIZADOS CORRECTAMENTE
  dashboardData: DashboardPaciente = {
    upcomingAppointments: [],
    todaysAppointments: 0,
    recentSymptoms: []
  };
  
  patientName: string = 'Paciente';
  
  // Estados
  isLoading: boolean = true;
  error: string = '';

  // Modal de síntomas
  showSymptomModal: boolean = false;
  newSymptom = {
    symptom: '',
    intensity: 3,
    notes: ''
  };
  isSubmittingSymptom: boolean = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadPatientName();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDashboardData(): void {
    this.isLoading = true;
    this.error = '';

    this.patientService.getDashboard()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('✅ Respuesta del dashboard:', response);
          
          if (response.success && response.data) {
            this.dashboardData = {
              upcomingAppointments: response.data.upcomingAppointments || [],
              treatment: response.data.treatment || undefined,
              todaysAppointments: response.data.todaysAppointments || 0,
              recentSymptoms: response.data.recentSymptoms || []
            };
            console.log('✅ Dashboard cargado exitosamente');
          } else {
            this.error = response.message || 'No se pudieron cargar los datos del dashboard';
            console.error('❌ Error en respuesta:', response);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Error loading patient dashboard:', error);
          this.error = this.getErrorMessage(error);
          this.isLoading = false;
        }
      });
  }

  private loadPatientName(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.patientName = `${user.name} ${user.lastName}`.trim();
    }
  }

  // Navegación
  goToCitas(): void {
    this.router.navigate(['/paciente/citas']);
  }

  goToTratamiento(): void {
    this.router.navigate(['/paciente/tratamiento']);
  }

  goToSalud(): void {
    this.router.navigate(['/paciente/salud']);
  }

  solicitarCita(): void {
    this.router.navigate(['/paciente/solicitar-cita']);
  }

  verDetallesCita(cita: CitaPaciente): void {
    this.router.navigate(['/paciente/citas', cita._id]);
  }

  // Gestión de síntomas - MEJORADO CON MÁS DEBUG
  abrirModalSintoma(): void {
    this.showSymptomModal = true;
  }

  cerrarModalSintoma(): void {
    this.showSymptomModal = false;
    this.resetSymptomForm();
  }

  agregarSintoma(): void {
    if (!this.newSymptom.symptom.trim()) {
      alert('Por favor ingresa el síntoma');
      return;
    }

    this.isSubmittingSymptom = true;

    console.log('🔍 Intentando registrar síntoma:', this.newSymptom);
    console.log('🔍 Token disponible:', this.authService.token() ? '✅ Sí' : '❌ No');

    this.patientService.addSymptom(this.newSymptom)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('✅ Respuesta del backend al registrar síntoma:', response);
          
          if (response.success) {
            console.log('🎉 Síntoma registrado exitosamente');
            this.loadDashboardData();
            this.cerrarModalSintoma();
            alert('✅ Síntoma registrado correctamente');
          } else {
            console.error('❌ Error del backend:', response);
            alert(response.message || 'Error al registrar el síntoma');
          }
          this.isSubmittingSymptom = false;
        },
        error: (error) => {
          console.error('❌ Error HTTP al registrar síntoma:', error);
          console.error('❌ Detalles del error:', error.error);
          console.error('❌ Status:', error.status);
          console.error('❌ Status text:', error.statusText);
          
          let errorMessage = 'Error al registrar el síntoma. Por favor, intenta nuevamente.';
          
          if (error.status === 401) {
            errorMessage = '❌ No estás autenticado. Por favor, inicia sesión nuevamente.';
          } else if (error.status === 403) {
            errorMessage = '❌ No tienes permisos para realizar esta acción.';
          } else if (error.status === 404) {
            errorMessage = '❌ No se encontró el servicio. Por favor, contacta con soporte.';
          } else if (error.status >= 500) {
            errorMessage = '❌ Error del servidor. Por favor, intenta más tarde.';
          }
          
          alert(errorMessage);
          this.isSubmittingSymptom = false;
        }
      });
  }

  private resetSymptomForm(): void {
    this.newSymptom = {
      symptom: '',
      intensity: 3,
      notes: ''
    };
  }

  // Helper functions - CON VALIDACIONES
  getFaseTratamientoDisplay(fase: string | undefined): string {
    if (!fase) return 'No especificada';
    
    const faseMap: { [key: string]: string } = {
      'diagnosis': 'Diagnóstico',
      'pre_op': 'Pre-operatorio',
      'post_op': 'Post-operatorio',
      'chemotherapy': 'Quimioterapia',
      'radiotherapy': 'Radioterapia',
      'hormone_therapy': 'Terapia Hormonal',
      'follow_up': 'Seguimiento'
    };
    return faseMap[fase] || fase;
  }

  getTipoCancerDisplay(tipo: string | undefined): string {
    if (!tipo) return 'No especificado';
    
    const tipoMap: { [key: string]: string } = {
      'ductal_in_situ': 'Carcinoma Ductal in Situ',
      'lobular_in_situ': 'Carcinoma Lobulillar in Situ',
      'invasive_ductal': 'Carcinoma Ductal Invasivo',
      'invasive_lobular': 'Carcinoma Lobulillar Invasivo',
      'inflammatory': 'Cáncer Inflamatorio',
      'other': 'Otro tipo'
    };
    return tipoMap[tipo] || tipo;
  }

  formatearFecha(fechaString: string): string {
    try {
      return new Date(fechaString).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  formatearHora(fechaString: string): string {
    try {
      return new Date(fechaString).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '--:--';
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
      'pending': 'status-pending',
      'in_progress': 'status-in-progress',
      'rescheduled': 'status-rescheduled',
      'no_show': 'status-no-show'
    };
    return classMap[status] || 'status-default';
  }

  getColorIntensidad(intensidad: number): string {
    if (intensidad <= 3) return 'intensidad-baja';
    if (intensidad <= 6) return 'intensidad-media';
    return 'intensidad-alta';
  }

  getTextoIntensidad(intensidad: number): string {
    if (intensidad <= 3) return 'Leve';
    if (intensidad <= 6) return 'Moderado';
    return 'Severo';
  }

  // Helper para el template - verificar si hay tratamiento
  tieneTratamiento(): boolean {
    return !!this.dashboardData.treatment && 
           (!!this.dashboardData.treatment.treatmentPhase || 
            !!this.dashboardData.treatment.cancerType ||
            !!this.dashboardData.treatment.cancerStage);
  }

  // Helper para verificar si hay datos en el dashboard
  tieneDatosDashboard(): boolean {
    return this.dashboardData.upcomingAppointments.length > 0 ||
           this.dashboardData.recentSymptoms.length > 0 ||
           this.dashboardData.todaysAppointments > 0 ||
           this.tieneTratamiento();
  }

  private getErrorMessage(error: any): string {
    if (error?.status === 401) {
      return 'No autorizado. Por favor, inicia sesión nuevamente.';
    } else if (error?.status === 403) {
      return 'No tienes permisos para acceder al panel de paciente.';
    } else if (error?.status === 404) {
      return 'No se encontró el servicio solicitado.';
    } else if (error?.status >= 500) {
      return 'Error del servidor. Por favor, intenta más tarde.';
    } else {
      return 'Error al cargar los datos. Por favor, intenta nuevamente.';
    }
  }

  refrescarDatos(): void {
    console.log('🔄 Refrescando datos del dashboard...');
    this.loadDashboardData();
  }

  // Método para forzar recarga completa
  recargarCompletamente(): void {
    console.log('🔄 Recarga completa del dashboard...');
    this.isLoading = true;
    this.error = '';
    setTimeout(() => {
      this.loadDashboardData();
    }, 1000);
  }
}
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

// Servicios
import { ProfessionalService, Appointment, AppointmentsResponse } from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

// ✅ INTERFACE ACTUALIZADA CON CAMPOS NUEVOS
interface AppointmentExtended extends Appointment {
  // ✅ CAMPOS NUEVOS AGREGADOS
  tipoCita?: string;
  motivo?: string;
  sintomas?: string[];
  paqueteId?: number;
  pacienteName?: string;
  pacienteEmail?: string;
  ubicacion?: string;
  solicitud?: {
    motivo?: string;
    sintomas?: string[];
    horarioPreferido?: string;
    tipoPreferido?: string;
  };
}

@Component({
  selector: 'app-cita-detalles',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cita-detalles.html',
  styleUrls: ['./cita-detalles.scss']
})
export class CitaDetalles implements OnInit, OnDestroy {
  private professionalService = inject(ProfessionalService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Datos de la cita
  cita: AppointmentExtended | null = null;
  
  // Notas y observaciones
  notas = {
    notasPaciente: ''
  };

  // Estados
  isLoading = true;
  error = '';
  isEditing = false;
  guardando = false;

  // Filtros adicionales
  filtros = {
    fecha: '',
    estado: '',
    paciente: '',
    tipo: ''
  };

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    const citaId = this.route.snapshot.paramMap.get('id');
    if (citaId) {
      this.loadCitaDetails(citaId);
    } else {
      this.error = 'ID de cita no válido';
      this.isLoading = false;
      this.mostrarError('Error', 'ID de cita no válido');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCitaDetails(citaId: string): void {
    this.isLoading = true;
    this.error = '';

    this.professionalService.getAppointments()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: AppointmentsResponse) => {
          if (response?.success && response?.data?.docs) {
            // Buscar la cita específica por ID
            const citaEncontrada = response.data.docs.find((c: Appointment) => c._id === citaId) as AppointmentExtended;
            
            if (citaEncontrada) {
              this.cita = citaEncontrada;
              
              // Cargar notas existentes
              if (this.cita.notes) {
                this.notas.notasPaciente = this.cita.notes;
              }
              

            } else {
              this.error = 'Cita no encontrada';
              this.mostrarError('Cita no encontrada', 'No se pudo encontrar la cita solicitada.');
            }
          } else {
            this.error = 'Error al cargar los datos de citas';
            this.mostrarError('Error', 'No se pudieron cargar los datos de las citas.');
            console.error('Respuesta inválida:', response);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading appointment details:', error);
          this.error = 'Error al cargar los detalles de la cita';
          this.mostrarError('Error', 'No se pudieron cargar los detalles de la cita.');
          this.isLoading = false;
        }
      });
  }

  // ✅ NUEVOS MÉTODOS PARA MOSTRAR DATOS CRÍTICOS

  /**
   * Obtiene la modalidad de la cita (Virtual, Presencial, Domicilio)
   */
  getModalidadDisplay(): string {
    if (!this.cita) return 'Presencial';
    
    const tipo = this.cita.tipoCita || this.cita.solicitud?.tipoPreferido || 'presencial';
    switch(tipo) {
      case 'virtual': return 'Virtual';
      case 'presencial': return 'Presencial';
      case 'domicilio': return 'Domicilio';
      default: return 'Presencial';
    }
  }

  /**
   * Obtiene la ubicación específica
   */
  getUbicacionDisplay(): string {
    if (!this.cita) return 'Consultorio';
    
    const tipo = this.cita.tipoCita || 'presencial';
    if (tipo === 'virtual') return 'Plataforma Virtual';
    if (tipo === 'domicilio') return 'Domicilio del Paciente';
    return this.cita.ubicacion || 'Consultorio Principal';
  }

  /**
   * Obtiene el nombre del paquete
   */
  getNombrePaquete(): string {
    if (!this.cita?.paqueteId) return 'No especificado';
    
    const paquetes: { [key: number]: string } = {
      1: 'Básico (4 sesiones)',
      2: 'Intermedio (8 sesiones)',
      3: 'Integral (12 sesiones)'
    };
    return paquetes[this.cita.paqueteId] || `Paquete ${this.cita.paqueteId}`;
  }

  /**
   * Obtiene los síntomas (prioridad a campos directos)
   */
  getSintomas(): string[] {
    if (!this.cita) return [];
    return this.cita.sintomas || this.cita.solicitud?.sintomas || [];
  }

  /**
   * Obtiene el motivo (prioridad a campos directos)
   */
  getMotivoDisplay(): string {
    if (!this.cita) return 'No especificado';
    return this.cita.motivo || this.cita.solicitud?.motivo || 'No especificado';
  }

  /**
   * Verifica si hay síntomas
   */
  tieneSintomas(): boolean {
    return this.getSintomas().length > 0;
  }

  /**
   * Obtiene clase CSS para badge de modalidad
   */
  getModalidadBadgeClass(): string {
    const modalidad = this.getModalidadDisplay();
    const badgeClasses: { [key: string]: string } = {
      'Virtual': 'badge-virtual',
      'Presencial': 'badge-presencial',
      'Domicilio': 'badge-domicilio'
    };
    return badgeClasses[modalidad] || 'badge-presencial';
  }

  // ✅ ALERTAS PROFESIONALES CON SWEETALERT2
  private mostrarExito(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success',
      iconColor: '#10b981',
      background: '#f0fdf4',
      color: '#065f46',
      confirmButtonColor: '#10b981',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'sweet-alert-popup',
        title: 'sweet-alert-title',
        confirmButton: 'sweet-alert-confirm-btn'
      }
    });
  }

  private mostrarError(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error',
      iconColor: '#ef4444',
      background: '#fef2f2',
      color: '#991b1b',
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'sweet-alert-popup',
        title: 'sweet-alert-title',
        confirmButton: 'sweet-alert-confirm-btn'
      }
    });
  }

  private mostrarConfirmacion(titulo: string, mensaje: string): Promise<any> {
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      iconColor: '#f59e0b',
      background: '#fffbeb',
      color: '#92400e',
      showCancelButton: true,
      confirmButtonColor: '#f59e0b',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      customClass: {
        popup: 'sweet-alert-popup',
        title: 'sweet-alert-title',
        confirmButton: 'sweet-alert-confirm-btn-warning',
        cancelButton: 'sweet-alert-cancel-btn'
      }
    });
  }

  private mostrarInfo(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'info',
      iconColor: '#3b82f6',
      background: '#eff6ff',
      color: '#1e40af',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'sweet-alert-popup',
        title: 'sweet-alert-title',
        confirmButton: 'sweet-alert-confirm-btn'
      }
    });
  }

  // Navegación
  goBack(): void {
    this.router.navigate(['/profesional/citas']);
  }

  goToCitas(): void {
    this.router.navigate(['/profesional/citas']);
  }

  // ✅ ACCIONES DEL PROFESIONAL CON ALERTAS MEJORADAS
  async iniciarConsulta(): Promise<void> {
    if (!this.cita) return;

    const result = await this.mostrarConfirmacion(
      'Iniciar Consulta',
      '¿Estás seguro de que deseas iniciar la consulta? Esta acción cambiará el estado a "En Progreso".'
    );

    if (!result.isConfirmed) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentStatus(
        this.cita._id, 
        'in_progress'
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data as AppointmentExtended;
        this.mostrarExito('Consulta Iniciada', 'La consulta ha sido iniciada correctamente.');
      } else {
        this.error = 'Error al iniciar la consulta';
        this.mostrarError('Error', 'No se pudo iniciar la consulta. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error starting consultation:', error);
      this.error = 'Error al iniciar la consulta';
      this.mostrarError('Error', 'Ocurrió un error al iniciar la consulta.');
    } finally {
      this.guardando = false;
    }
  }

  async completarCita(): Promise<void> {
    if (!this.cita) return;

    const result = await this.mostrarConfirmacion(
      'Completar Cita', 
      '¿Estás seguro de que deseas marcar esta cita como completada? Se descontará una sesión del paquete del paciente. Esta acción no se puede deshacer.'
    );

    if (!result.isConfirmed) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.completarCita(
        this.cita._id
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data.cita as AppointmentExtended;
        
        this.mostrarExito(
          'Cita Completada', 
          `La cita ha sido marcada como completada correctamente. 
           Sesiones utilizadas: ${response.data.sesionesUtilizadas}/${response.data.sesionesTotales}
           Sesiones restantes: ${response.data.sesionesRestantes}`
        );
        

      } else {
        this.error = 'Error al completar la cita';
        this.mostrarError('Error', 'No se pudo completar la cita. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error completing appointment:', error);
      this.error = 'Error al completar la cita';
      this.mostrarError('Error', 'Ocurrió un error al completar la cita.');
    } finally {
      this.guardando = false;
    }
  }

  async marcarNoPresentado(): Promise<void> {
    if (!this.cita) return;

    const result = await this.mostrarConfirmacion(
      'No Se Presentó',
      '¿Estás seguro de que deseas marcar esta cita como "No se presentó"? El paciente será notificado de esta acción.'
    );

    if (!result.isConfirmed) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentStatus(
        this.cita._id, 
        'no_show'
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data as AppointmentExtended;
        this.mostrarInfo('Cita Actualizada', 'La cita ha sido marcada como "No se presentó" correctamente.');
      } else {
        this.error = 'Error al marcar como no presentado';
        this.mostrarError('Error', 'No se pudo marcar como no presentado. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error marking as no show:', error);
      this.error = 'Error al marcar como no presentado';
      this.mostrarError('Error', 'Ocurrió un error al marcar como no presentado.');
    } finally {
      this.guardando = false;
    }
  }

  async guardarNotas(): Promise<void> {
    if (!this.cita) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentNotes(
        this.cita._id,
        this.notas.notasPaciente
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data as AppointmentExtended;
        this.isEditing = false;
        this.mostrarExito('Notas Guardadas', 'Las notas se han guardado correctamente.');
      } else {
        this.error = 'Error al guardar las notas';
        this.mostrarError('Error', 'No se pudieron guardar las notas. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error saving notes:', error);
      this.error = 'Error al guardar las notas';
      this.mostrarError('Error', 'Ocurrió un error al guardar las notas.');
    } finally {
      this.guardando = false;
    }
  }

  // ✅ GETTERS PARA LOS BOTONES
  get estaConfirmada(): boolean {
    return this.cita?.status === 'confirmed';
  }

  get estaEnProgreso(): boolean {
    return this.cita?.status === 'in_progress';
  }

  get estaCompletada(): boolean {
    return this.cita?.status === 'completed';
  }

  get noSePresento(): boolean {
    return this.cita?.status === 'no_show';
  }

  get puedeIniciarConsulta(): boolean {
    return this.estaConfirmada;
  }

  get puedeCompletar(): boolean {
    return this.estaConfirmada || this.estaEnProgreso;
  }

  get puedeMarcarNoShow(): boolean {
    return this.estaConfirmada;
  }

  // Helper functions
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
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  formatDateTime(dateString: string): string {
    try {
      return new Date(dateString).toLocaleString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  getStatusDisplay(status: string): string {
    const statusMap: { [key: string]: string } = {
      'scheduled': 'Programada',
      'confirmed': 'Confirmada',
      'in_progress': 'En Progreso',
      'completed': 'Completada',
      'cancelled': 'Cancelada',
      'rescheduled': 'Reprogramada',
      'no_show': 'No Se Presentó',
      'pendiente': 'Pendiente',
      'rechazada': 'Rechazada'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    const classMap: { [key: string]: string } = {
      'scheduled': 'status-scheduled',
      'confirmed': 'status-confirmed',
      'in_progress': 'status-in-progress',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled',
      'rescheduled': 'status-rescheduled',
      'no_show': 'status-no-show',
      'pendiente': 'status-pending',
      'rechazada': 'status-rechazada'
    };
    return classMap[status] || '';
  }

  calcularHoraFin(): string {
    if (!this.cita) return '--:--';
    
    try {
      const fechaInicio = new Date(this.cita.date);
      const fechaFin = new Date(fechaInicio.getTime() + this.cita.duration * 60000);
      return fechaFin.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '--:--';
    }
  }

  // Contactar paciente
  contactarPaciente(tipo: 'email' | 'telefono'): void {
    if (!this.cita) return;

    if (tipo === 'email' && this.cita.patientId.email) {
      window.open(`mailto:${this.cita.patientId.email}`, '_blank');
      this.mostrarInfo('Contactar Paciente', `Se abrirá tu cliente de correo para contactar a ${this.cita.patientId.name}`);
    } else if (tipo === 'telefono' && this.cita.patientId.phone) {
      window.open(`tel:${this.cita.patientId.phone}`, '_blank');
      this.mostrarInfo('Llamar Paciente', `Se iniciará una llamada a ${this.cita.patientId.phone}`);
    } else {
      this.mostrarError('Contacto no disponible', 'La información de contacto no está disponible para este paciente.');
    }
  }
}
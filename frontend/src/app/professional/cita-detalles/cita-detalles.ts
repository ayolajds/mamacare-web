import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { ProfessionalService, Appointment, AppointmentsResponse } from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

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
  cita: Appointment | null = null;
  
  // Notas y observaciones
  notas = {
    notasPaciente: ''
  };

  // Estados
  isLoading = true;
  error = '';
  isEditing = false;
  guardando = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    const citaId = this.route.snapshot.paramMap.get('id');
    if (citaId) {
      this.loadCitaDetails(citaId);
    } else {
      this.error = 'ID de cita no válido';
      this.isLoading = false;
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
            const citaEncontrada = response.data.docs.find((c: Appointment) => c._id === citaId);
            
            if (citaEncontrada) {
              this.cita = citaEncontrada;
              
              // Cargar notas existentes
              if (this.cita.notes) {
                this.notas.notasPaciente = this.cita.notes;
              }
              
              console.log('✅ Cita cargada:', this.cita);
            } else {
              this.error = 'Cita no encontrada';
            }
          } else {
            this.error = 'Error al cargar los datos de citas';
            console.error('Respuesta inválida:', response);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading appointment details:', error);
          this.error = 'Error al cargar los detalles de la cita';
          this.isLoading = false;
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

  // ✅ ACCIONES DEL PROFESIONAL
  async iniciarConsulta(): Promise<void> {
    if (!this.cita) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentStatus(
        this.cita._id, 
        'in_progress'
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data;
        this.mostrarMensaje('Consulta iniciada correctamente');
      } else {
        this.error = 'Error al iniciar la consulta';
      }
    } catch (error) {
      console.error('Error starting consultation:', error);
      this.error = 'Error al iniciar la consulta';
    } finally {
      this.guardando = false;
    }
  }

  async completarCita(): Promise<void> {
    if (!this.cita) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentStatus(
        this.cita._id, 
        'completed'
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data;
        this.mostrarMensaje('Cita completada correctamente');
      } else {
        this.error = 'Error al completar la cita';
      }
    } catch (error) {
      console.error('Error completing appointment:', error);
      this.error = 'Error al completar la cita';
    } finally {
      this.guardando = false;
    }
  }

  async marcarNoPresentado(): Promise<void> {
    if (!this.cita) return;

    this.guardando = true;
    try {
      const response = await this.professionalService.updateAppointmentStatus(
        this.cita._id, 
        'no_show'
      ).toPromise();

      if (response?.success && response.data) {
        this.cita = response.data;
        this.mostrarMensaje('Cita marcada como "No se presentó"');
      } else {
        this.error = 'Error al marcar como no presentado';
      }
    } catch (error) {
      console.error('Error marking as no show:', error);
      this.error = 'Error al marcar como no presentado';
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
        this.cita = response.data;
        this.isEditing = false;
        this.mostrarMensaje('Notas guardadas correctamente');
      } else {
        this.error = 'Error al guardar las notas';
      }
    } catch (error) {
      console.error('Error saving notes:', error);
      this.error = 'Error al guardar las notas';
    } finally {
      this.guardando = false;
    }
  }

  private mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
    alert(mensaje);
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

  // ✅ El profesional puede iniciar consulta cuando está confirmada
  get puedeIniciarConsulta(): boolean {
    return this.estaConfirmada;
  }

  // ✅ CORREGIDO: El profesional puede completar cuando está confirmada O en progreso
  get puedeCompletar(): boolean {
    return this.estaConfirmada || this.estaEnProgreso;
  }

  // ✅ Puede marcar "no se presentó" cuando está confirmada
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
      'no_show': 'No Se Presentó'
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
      'no_show': 'status-no-show'
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
    } else if (tipo === 'telefono' && this.cita.patientId.phone) {
      window.open(`tel:${this.cita.patientId.phone}`, '_blank');
    }
  }
}
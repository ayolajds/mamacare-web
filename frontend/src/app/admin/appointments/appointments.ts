// appointments.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  especialidad?: string;
}

// ✅ INTERFACE ACTUALIZADA CON CAMPOS NUEVOS
interface Appointment {
  _id: string;
  title: string;
  date: string;
  duration: number;
  status: 'pendiente' | 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'rechazada';
  type?: string;
  reason?: string;
  meetingPlatform?: string;
  patientId: User | string;
  professionalId: User | string;
  
  // ✅ CAMPOS NUEVOS AGREGADOS
  paqueteId?: number;
  tipoCita?: string;
  motivo?: string;
  sintomas?: string[];
  pacienteId?: string;
  pacienteName?: string;
  pacienteEmail?: string;
  ubicacion?: string;
  
  solicitud?: {
    motivo?: string;
    sintomas?: string[];
    horarioPreferido?: string;
    tipoPreferido?: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface EditAppointmentData {
  date: string;
  time: string;
  professionalId: string;
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Appointments implements OnInit, OnDestroy {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  professionals: User[] = [];
  isLoading: boolean = false;
  error: string = '';
  
  searchTerm: string = '';
  statusFilter: string = '';
  dateFilter: string = '';
  
  pagination: Pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNext: false,
    hasPrev: false
  };
  
  showEditModal: boolean = false;
  editingAppointment: Appointment | null = null;
  
  editAppointmentData: EditAppointmentData = {
    date: '',
    time: '',
    professionalId: ''
  };
  
  isEditing: boolean = false;
  isUpdating: { [key: string]: boolean } = {};
  
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.setupSearch();
    this.loadAppointments();
    this.loadProfessionals();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchSubject.complete();
  }

  volverAtras(): void {
    this.location.back();
  }

  private setupSearch(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.applyFilters();
    });
  }

  loadAppointments(): void {
    this.isLoading = true;
    this.error = '';

    const params: any = {
      page: this.pagination.currentPage.toString(),
      limit: '50',
      status: 'scheduled,confirmed,in_progress,completed,cancelled,rechazada',
      incluirSolicitudes: 'true',
      _t: Date.now()
    };

    console.log('🔍 Cargando citas con parámetros:', params);

    this.http.get<any>(`${environment.apiUrl}/appointments/admin`, { 
      params,
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('✅ RESPUESTA DEL BACKEND:', response);
          
          let rawAppointments: Appointment[] = [];
          
          if (Array.isArray(response)) {
            rawAppointments = response;
          } else if (Array.isArray(response.data)) {
            rawAppointments = response.data;
          } else if (Array.isArray(response.data?.docs)) {
            rawAppointments = response.data.docs;
          } else if (Array.isArray(response.data?.appointments)) {
            rawAppointments = response.data.appointments;
          } else if (Array.isArray(response.appointments)) {
            rawAppointments = response.appointments;
          } else if (response.data && typeof response.data === 'object') {
            rawAppointments = [response.data];
          }
          
          console.log('📊 Citas cargadas:', rawAppointments.length);
          
          // ✅ DEBUG: Mostrar datos críticos de cada cita
          rawAppointments.forEach((apt, index) => {
            console.log(`📋 Cita ${index + 1}:`, {
              id: apt._id,
              tipoCita: apt.tipoCita,
              paqueteId: apt.paqueteId,
              motivo: apt.motivo,
              pacienteName: apt.pacienteName,
              ubicacion: apt.ubicacion
            });
          });
          
          this.appointments = rawAppointments.filter((apt: Appointment) => {
            return apt.status !== 'pendiente';
          });
          
          this.filteredAppointments = [...this.appointments];
          
          this.pagination = {
            currentPage: response.data?.page || response.page || response.currentPage || this.pagination.currentPage,
            totalPages: response.data?.totalPages || response.totalPages || response.pages || 1,
            totalItems: response.data?.totalDocs || response.data?.total || response.totalDocs || response.total || this.appointments.length,
            hasNext: response.data?.hasNextPage || response.hasNextPage || response.hasNext || false,
            hasPrev: response.data?.hasPrevPage || response.hasPrevPage || response.hasPrev || false
          };
          
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Error cargando citas:', error);
          this.error = error.error?.message || 'Error al cargar las sesiones';
          this.isLoading = false;
        }
      });
  }

  loadProfessionals(): void {
    this.http.get<any>(`${environment.apiUrl}/users/professionals`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.professionals = response.data || response;
          console.log('Profesionales cargados:', this.professionals.length);
        },
        error: (error) => {
          console.error('Error cargando profesionales:', error);
        }
      });
  }

  // ✅ NUEVOS MÉTODOS PARA MOSTRAR DATOS CRÍTICOS

  /**
   * Obtiene la modalidad de la cita (Virtual, Presencial, Domicilio)
   */
  getModalidadDisplay(appointment: Appointment): string {
    const tipo = appointment.tipoCita || appointment.solicitud?.tipoPreferido || 'presencial';
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
  getUbicacionDisplay(appointment: Appointment): string {
    const tipo = appointment.tipoCita || 'presencial';
    if (tipo === 'virtual') return 'Plataforma Virtual';
    if (tipo === 'domicilio') return 'Domicilio del Paciente';
    return appointment.ubicacion || 'Consultorio Principal';
  }

  /**
   * Obtiene el nombre del paquete actualizado
   */
  getPackageName(paqueteId: number): string {
    const packages: { [key: number]: string } = {
      1: 'Básico (4 sesiones)',
      2: 'Intermedio (8 sesiones)',
      3: 'Integral (12 sesiones)'
    };
    return packages[paqueteId] || `Paquete ${paqueteId}`;
  }

  /**
   * Obtiene los síntomas (prioridad a campos directos)
   */
  getSymptoms(appointment: Appointment): string[] {
    return appointment.sintomas || appointment.solicitud?.sintomas || [];
  }

  /**
   * Obtiene el motivo (prioridad a campos directos)
   */
  getMotivoDisplay(appointment: Appointment): string {
    return appointment.motivo || appointment.solicitud?.motivo || 'No especificado';
  }

  /**
   * Obtiene el nombre del paciente (prioridad a campos directos)
   */
  getPatientName(appointment: Appointment): string {
    if (appointment.pacienteName) {
      return appointment.pacienteName;
    }
    return typeof appointment.patientId === 'object' ? 
      `${appointment.patientId.name || ''} ${appointment.patientId.lastName || ''}`.trim() : 
      'Paciente no disponible';
  }

  /**
   * Obtiene el email del paciente (prioridad a campos directos)
   */
  getPatientEmail(appointment: Appointment): string {
    if (appointment.pacienteEmail) {
      return appointment.pacienteEmail;
    }
    return typeof appointment.patientId === 'object' ? appointment.patientId.email : '';
  }

  // ✅ MÉTODOS EXISTENTES ACTUALIZADOS

  editAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      this.mostrarAdvertencia('Gestión de Solicitudes', 'Las solicitudes pendientes se gestionan en el módulo de Solicitudes Pendientes');
      return;
    }

    this.editingAppointment = appointment;
    
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split('T')[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    
    this.editAppointmentData = {
      date: dateStr,
      time: timeStr,
      professionalId: this.getProfessionalId(appointment)
    };
    
    this.showEditModal = true;
  }

  updateAppointment(): void {
    if (!this.validateEditForm() || !this.editingAppointment) {
      return;
    }

    this.isEditing = true;

    const fechaSeleccionada = new Date(this.editAppointmentData.date);
    const [horas, minutos] = this.editAppointmentData.time.split(':');
    fechaSeleccionada.setHours(parseInt(horas), parseInt(minutos), 0, 0);

    const appointmentData = {
      professionalId: this.editAppointmentData.professionalId,
      date: fechaSeleccionada.toISOString(),
      title: this.editingAppointment.title,
      duration: 60,
      reason: this.editingAppointment.reason,
      solicitud: this.editingAppointment.solicitud
    };

    console.log('📤 Enviando datos de actualización:', appointmentData);

    this.http.put<Appointment>(
      `${environment.apiUrl}/appointments/${this.editingAppointment._id}`, 
      appointmentData
    ).pipe(takeUntil(this.destroy$))
     .subscribe({
        next: (updatedAppointment) => {
          console.log('✅ Cita actualizada:', updatedAppointment);
          this.loadAppointments();
          this.closeEditModal();
          this.isEditing = false;
          this.mostrarExito('Cita Actualizada', 'La cita se ha actualizado correctamente');
        },
        error: (error) => {
          console.error('❌ Error actualizando cita:', error);
          let mensajeError = 'Error al actualizar la cita';
          if (error.error?.message) {
            mensajeError = error.error.message;
          } else if (error.status === 400) {
            mensajeError = 'Datos inválidos para la actualización';
          } else if (error.status === 404) {
            mensajeError = 'Cita no encontrada';
          }
          this.mostrarError('Error', mensajeError);
          this.isEditing = false;
        }
      });
  }

  cancelAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      this.mostrarAdvertencia('Gestión de Solicitudes', 'Las solicitudes pendientes se gestionan en el módulo de Solicitudes Pendientes');
      return;
    }

    Swal.fire({
      title: '¿Cancelar cita?',
      text: `¿Estás seguro de que deseas cancelar la cita de ${this.getPatientName(appointment)}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, mantener',
      reverseButtons: true,
      customClass: {
        confirmButton: 'swal-confirm-cancel',
        cancelButton: 'swal-cancel'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.procesarCancelacion(appointment);
      }
    });
  }

  private procesarCancelacion(appointment: Appointment): void {
    this.isUpdating[appointment._id] = true;

    this.http.patch(`${environment.apiUrl}/appointments/${appointment._id}/cancel`, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Cita cancelada:', response);
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
          this.mostrarExito('Cita Cancelada', 'La cita se ha cancelado correctamente');
        },
        error: (error) => {
          console.error('Error cancelando cita:', error);
          this.mostrarError('Error', 'Error al cancelar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  confirmAppointment(appointment: Appointment): void {
    if (appointment.status !== 'scheduled') {
      this.mostrarAdvertencia('Confirmación', 'Solo se pueden confirmar citas programadas');
      return;
    }

    this.isUpdating[appointment._id] = true;

    this.http.put(`${environment.apiUrl}/appointments/${appointment._id}`, { 
      status: 'confirmed' 
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Cita confirmada:', response);
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
          this.mostrarExito('Cita Confirmada', 'La cita se ha confirmado correctamente');
        },
        error: (error) => {
          console.error('Error confirmando cita:', error);
          this.mostrarError('Error', 'Error al confirmar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  completeAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      this.mostrarAdvertencia('Completar Cita', 'No se puede completar una solicitud pendiente');
      return;
    }

    this.isUpdating[appointment._id] = true;

    this.http.put(`${environment.apiUrl}/appointments/completar/${appointment._id}`, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Cita completada:', response);
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
          this.mostrarExito('Cita Completada', 'La cita se ha marcado como completada');
        },
        error: (error) => {
          console.error('Error completando cita:', error);
          this.mostrarError('Error', 'Error al completar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  // ✅ MÉTODOS SWEETALERT
  private mostrarExito(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4f46e5',
      timer: 3000,
      timerProgressBar: true
    });
  }

  private mostrarError(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc2626'
    });
  }

  private mostrarAdvertencia(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#f59e0b'
    });
  }

  // ✅ MÉTODO CORREGIDO PARA FORMATEAR FECHAS
  formatDateTime(dateString: string): string {
    if (!dateString) return 'Fecha no disponible';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleString('es-CO', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Error formateando fecha:', error);
      return 'Fecha inválida';
    }
  }

  // Helpers para acceso seguro a datos
  getProfessionalName(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? 
      `${appointment.professionalId.name || ''} ${appointment.professionalId.lastName || ''}`.trim() : 
      'Profesional no asignado';
  }

  getProfessionalId(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? 
      appointment.professionalId._id : appointment.professionalId;
  }

  getProfessionalSpecialty(appointment: Appointment): string {
    if (typeof appointment.professionalId === 'object' && appointment.professionalId) {
      return appointment.professionalId.especialidad || 'Sin especialidad';
    }
    return 'Sin especialidad';
  }

  getPackageDuration(paqueteId: number): string {
    return '60 min/sesión';
  }

  hasSymptoms(appointment: Appointment): boolean {
    return this.getSymptoms(appointment).length > 0;
  }

  // Filtros y utilidades
  onSearch(): void {
    this.searchSubject.next(this.searchTerm);
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = this.appointments;

    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(appointment => 
        appointment.title.toLowerCase().includes(searchLower) ||
        this.getPatientName(appointment).toLowerCase().includes(searchLower) ||
        this.getProfessionalName(appointment).toLowerCase().includes(searchLower)
      );
    }

    if (this.statusFilter) {
      filtered = filtered.filter(appointment => appointment.status === this.statusFilter);
    }

    if (this.dateFilter) {
      filtered = filtered.filter(appointment => {
        try {
          const appointmentDate = new Date(appointment.date).toISOString().split('T')[0];
          return appointmentDate === this.dateFilter;
        } catch (error) {
          return false;
        }
      });
    }

    this.filteredAppointments = filtered;
    this.pagination.totalItems = filtered.length;
    this.pagination.totalPages = Math.ceil(filtered.length / 12);
    this.pagination.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.dateFilter = '';
    this.applyFilters();
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.editingAppointment = null;
    this.editAppointmentData = {
      date: '',
      time: '',
      professionalId: ''
    };
  }

  private validateEditForm(): boolean {
    if (!this.editAppointmentData.date) {
      this.mostrarAdvertencia('Validación', 'La fecha es requerida');
      return false;
    }
    if (!this.editAppointmentData.time) {
      this.mostrarAdvertencia('Validación', 'La hora es requerida');
      return false;
    }
    if (!this.editAppointmentData.professionalId) {
      this.mostrarAdvertencia('Validación', 'Selecciona un profesional');
      return false;
    }
    return true;
  }

  // Utilidades de visualización
  getStatusDisplay(status: string): string {
    const statusMap: { [key: string]: string } = {
      'pendiente': 'Pendiente',
      'scheduled': 'Programada',
      'confirmed': 'Confirmada', 
      'in_progress': 'En Progreso',
      'completed': 'Completada',
      'cancelled': 'Cancelada',
      'rechazada': 'Rechazada'
    };
    return statusMap[status] || status;
  }

  getStatusBadgeClass(status: string): string {
    const badgeClasses: { [key: string]: string } = {
      'pendiente': 'badge-pendiente',
      'scheduled': 'badge-scheduled',
      'confirmed': 'badge-confirmed',
      'in_progress': 'badge-in-progress',
      'completed': 'badge-completed',
      'cancelled': 'badge-cancelled',
      'rechazada': 'badge-rechazada'
    };
    return badgeClasses[status] || '';
  }

  // ✅ NUEVO: Clase CSS para badges de modalidad
  getModalidadBadgeClass(modalidad: string): string {
    const badgeClasses: { [key: string]: string } = {
      'Virtual': 'badge-virtual',
      'Presencial': 'badge-presencial',
      'Domicilio': 'badge-domicilio'
    };
    return badgeClasses[modalidad] || 'badge-presencial';
  }

  // Paginación
  prevPage(): void {
    if (this.pagination.hasPrev) {
      this.pagination.currentPage--;
      this.loadAppointments();
    }
  }

  nextPage(): void {
    if (this.pagination.hasNext) {
      this.pagination.currentPage++;
      this.loadAppointments();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.loadAppointments();
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    
    return pages;
  }

  getPageButtonText(page: number): string {
    return page === -1 ? '...' : page.toString();
  }

  isPageButtonDisabled(page: number): boolean {
    return page === -1;
  }
}
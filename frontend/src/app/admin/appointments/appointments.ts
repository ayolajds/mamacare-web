// appointments.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  especialidad?: string;
}

// ✅ CORREGIDO: solicitud es opcional
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
  paqueteId?: number;
  solicitud?: {  // ✅ Hacer opcional con ?
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
  title: string;
  date: string;
  time: string;
  duration: number;
  professionalId: string;
  reason?: string;
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Appointments implements OnInit, OnDestroy {
  // Estados principales
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  professionals: User[] = [];
  isLoading: boolean = false;
  error: string = '';
  
  // Filtros y búsqueda
  searchTerm: string = '';
  statusFilter: string = '';
  dateFilter: string = '';
  
  // Paginación
  pagination: Pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNext: false,
    hasPrev: false
  };
  
  // Modal de edición
  showEditModal: boolean = false;
  editingAppointment: Appointment | null = null;
  editAppointmentData: EditAppointmentData = {
    title: '',
    date: '',
    time: '',
    duration: 60,
    professionalId: '',
    reason: ''
  };
  isEditing: boolean = false;
  
  // Estados de actualización individual
  isUpdating: { [key: string]: boolean } = {};
  
  // Subject para destrucción
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router
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

  private setupSearch(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.applyFilters();
    });
  }

  /**
   * Carga SOLO citas ya creadas (excluye pendientes)
   */
loadAppointments(): void {
  this.isLoading = true;
  this.error = '';

  // ✅ FORZAR parámetros sin caché
  const params: any = {
    page: this.pagination.currentPage.toString(),
    limit: '50',
    status: 'scheduled,confirmed,in_progress,completed,cancelled,rechazada',
    incluirSolicitudes: 'true',
    _t: Date.now()  // ← Agregar timestamp para evitar caché
  };

  console.log('🔍 Cargando citas con parámetros:', params);
  console.log('🌐 URL completa:', `${environment.apiUrl}/appointments/admin?${new URLSearchParams(params)}`);

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
        
        // Verificar la estructura exacta de la respuesta
        console.log('📦 Estructura de data:', response.data);
        console.log('📚 docs dentro de data:', response.data?.docs);
        
        // Datos crudos de la respuesta - PROBAR DIFERENTES ESTRUCTURAS
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
          // Si data es un objeto único en lugar de array
          rawAppointments = [response.data];
        }
        
        console.log('📊 Citas ANTES de filtrar:', rawAppointments);
        console.log('🔢 Total de citas crudas:', rawAppointments.length);
        
        // Mostrar cada cita individualmente
        rawAppointments.forEach((apt, index) => {
          console.log(`📋 Cita ${index + 1}:`, {
            id: apt._id,
            title: apt.title,
            status: apt.status,
            date: apt.date,
            patient: apt.patientId,
            professional: apt.professionalId
          });
        });
        
        // Filtrar citas pendientes
        this.appointments = rawAppointments.filter((apt: Appointment) => {
          const isPending = apt.status === 'pendiente';
          if (isPending) {
            console.log('❌ Excluyendo cita pendiente:', apt._id, apt.title);
          }
          return !isPending;
        });
        
        console.log('🎯 Citas DESPUÉS de filtrar:', this.appointments);
        console.log('📈 Citas activas:', this.appointments.length);
        
        this.filteredAppointments = [...this.appointments];
        
        this.pagination = {
          currentPage: response.data?.page || response.page || response.currentPage || this.pagination.currentPage,
          totalPages: response.data?.totalPages || response.totalPages || response.pages || 1,
          totalItems: response.data?.totalDocs || response.data?.total || response.totalDocs || response.total || this.appointments.length,
          hasNext: response.data?.hasNextPage || response.hasNextPage || response.hasNext || false,
          hasPrev: response.data?.hasPrevPage || response.hasPrevPage || response.hasPrev || false
        };
        
        console.log('📄 Paginación:', this.pagination);
        
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Error cargando citas:', error);
        console.error('📨 Error completo:', error);
        this.error = error.error?.message || 'Error al cargar las sesiones';
        this.isLoading = false;
      }
    });
}

  /**
   * Carga profesionales para edición
   */
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

  /**
   * Abre modal para editar cita
   */
  editAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      alert('Las solicitudes pendientes se gestionan en el módulo de Solicitudes Pendientes');
      return;
    }

    this.editingAppointment = appointment;
    
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split('T')[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    
    this.editAppointmentData = {
      title: appointment.title,
      date: dateStr,
      time: timeStr,
      duration: appointment.duration,
      professionalId: this.getProfessionalId(appointment),
      reason: appointment.reason || appointment.solicitud?.motivo || ''
    };
    
    this.showEditModal = true;
  }

  /**
   * Actualiza la cita
   */
  updateAppointment(): void {
    if (!this.validateEditForm() || !this.editingAppointment) {
      return;
    }

    this.isEditing = true;

    const dateTime = `${this.editAppointmentData.date}T${this.editAppointmentData.time}:00.000Z`;

    const appointmentData = {
      title: this.editAppointmentData.title,
      date: dateTime,
      duration: this.editAppointmentData.duration,
      professionalId: this.editAppointmentData.professionalId,
      reason: this.editAppointmentData.reason
    };

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
        },
        error: (error) => {
          console.error('Error actualizando cita:', error);
          alert('Error al actualizar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isEditing = false;
        }
      });
  }

  /**
   * Cancela una cita (solo citas scheduled/confirmed)
   */
  cancelAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      alert('Las solicitudes pendientes se gestionan en el módulo de Solicitudes Pendientes');
      return;
    }

    if (!confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
      return;
    }

    this.isUpdating[appointment._id] = true;

    this.http.patch(`${environment.apiUrl}/appointments/${appointment._id}/cancel`, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Cita cancelada:', response);
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
        },
        error: (error) => {
          console.error('Error cancelando cita:', error);
          alert('Error al cancelar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  /**
   * Confirma una cita programada
   */
  confirmAppointment(appointment: Appointment): void {
    if (appointment.status !== 'scheduled') {
      alert('Solo se pueden confirmar citas programadas');
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
        },
        error: (error) => {
          console.error('Error confirmando cita:', error);
          alert('Error al confirmar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  /**
   * Marca cita como completada
   */
  completeAppointment(appointment: Appointment): void {
    if (appointment.status === 'pendiente') {
      alert('No se puede completar una solicitud pendiente');
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
        },
        error: (error) => {
          console.error('Error completando cita:', error);
          alert('Error al completar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  /**
   * Reagenda una cita cancelada
   */
  rescheduleAppointment(appointment: Appointment): void {
    if (appointment.status !== 'cancelled') {
      alert('Solo se pueden reagendar citas canceladas');
      return;
    }

    if (!confirm('¿Reagendar esta cita cancelada?')) {
      return;
    }

    this.isUpdating[appointment._id] = true;

    this.http.put(`${environment.apiUrl}/appointments/${appointment._id}`, {
      status: 'scheduled'
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Cita reagendada:', response);
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
        },
        error: (error) => {
          console.error('Error reagendando cita:', error);
          alert('Error al reagendar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  // Helpers para acceso seguro a datos
  getPatientName(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? 
      `${appointment.patientId.name || ''} ${appointment.patientId.lastName || ''}`.trim() : 
      'Paciente no disponible';
  }

  getProfessionalName(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? 
      `${appointment.professionalId.name || ''} ${appointment.professionalId.lastName || ''}`.trim() : 
      'Profesional no asignado';
  }

  getProfessionalId(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? 
      appointment.professionalId._id : appointment.professionalId;
  }

  getPatientEmail(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? appointment.patientId.email : '';
  }

  /**
   * Obtiene la especialidad del profesional de forma segura
   */
  getProfessionalSpecialty(appointment: Appointment): string {
    if (typeof appointment.professionalId === 'object' && appointment.professionalId) {
      return appointment.professionalId.especialidad || 'Sin especialidad';
    }
    return 'Sin especialidad';
  }

  /**
   * Obtiene el nombre del paquete
   */
  getPackageName(paqueteId: number): string {
    const packages: { [key: number]: string } = {
      1: 'Básico',
      2: 'Intermedio',
      3: 'Integral'
    };
    return packages[paqueteId] || `Paquete ${paqueteId}`;
  }

  /**
   * Obtiene la duración del paquete
   */
  getPackageDuration(paqueteId: number): string {
    const durations: { [key: number]: string } = {
      1: '50 min/sesión',
      2: '60 min/sesión',
      3: '60 min/sesión'
    };
    return durations[paqueteId] || '60 min/sesión';
  }

  /**
   * Obtiene los síntomas de forma segura
   */
  getSymptoms(appointment: Appointment): string[] {
    return appointment.solicitud?.sintomas || [];
  }

  /**
   * Verifica si hay síntomas
   */
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
      title: '',
      date: '',
      time: '',
      duration: 60,
      professionalId: '',
      reason: ''
    };
  }

  private validateEditForm(): boolean {
    if (!this.editAppointmentData.title.trim()) {
      alert('El título es requerido');
      return false;
    }
    if (!this.editAppointmentData.date) {
      alert('La fecha es requerida');
      return false;
    }
    if (!this.editAppointmentData.time) {
      alert('La hora es requerida');
      return false;
    }
    if (!this.editAppointmentData.professionalId) {
      alert('Selecciona un profesional');
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

  formatDateTime(dateString: string): string {
    try {
      if (!dateString) return 'Fecha no disponible';
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Fecha no disponible';
    }
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
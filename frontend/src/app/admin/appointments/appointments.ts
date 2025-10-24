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
}

// Interface para cuando el backend NO popula los datos
interface AppointmentResponse {
  _id: string;
  title: string;
  date: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  type: 'consultation' | 'therapy' | 'follow_up' | 'emergency' | 'evaluation';
  reason?: string;
  meetingPlatform: 'zoom' | 'teams' | 'google_meet' | 'in_person' | 'phone';
  patientId: string | User;        // Puede ser ID string O objeto User
  professionalId: string | User;   // Puede ser ID string O objeto User
  createdAt: string;
  updatedAt: string;
}

// Interface para cuando SÍ tenemos datos populados
interface PopulatedAppointment {
  _id: string;
  title: string;
  date: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  type: 'consultation' | 'therapy' | 'follow_up' | 'emergency' | 'evaluation';
  reason?: string;
  meetingPlatform: 'zoom' | 'teams' | 'google_meet' | 'in_person' | 'phone';
  patientId: User;        // Siempre objeto User
  professionalId: User;   // Siempre objeto User
  createdAt: string;
  updatedAt: string;
}

// Tipo unión para usar en el componente
type Appointment = AppointmentResponse | PopulatedAppointment;

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface CreateAppointmentData {
  title: string;
  date: string;
  time: string;
  duration: number;
  type: string;
  reason?: string;
  patientId: string;
  professionalId: string;
}

interface RescheduleData {
  date: string;
  time: string;
  duration: number;
}

@Component({
  selector: 'app-appointments-management',
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
  patients: User[] = [];
  isLoading: boolean = false;
  isCreating: boolean = false;
  error: string = '';
  
  // Filtros y búsqueda
  searchTerm: string = '';
  statusFilter: string = '';
  typeFilter: string = '';
  dateFilter: string = '';
  
  // Paginación
  pagination: Pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNext: false,
    hasPrev: false
  };
  
  // Modal y formularios
  showCreateModal: boolean = false;
  newAppointment: CreateAppointmentData = {
    title: '',
    date: '',
    time: '',
    duration: 60,
    type: 'consultation',
    reason: '',
    patientId: '',
    professionalId: ''
  };

  // Estados para edición
  showEditModal: boolean = false;
  editingAppointment: Appointment | null = null;
  editAppointmentData: CreateAppointmentData = {
    title: '',
    date: '',
    time: '',
    duration: 60,
    type: 'consultation',
    reason: '',
    patientId: '',
    professionalId: ''
  };
  isEditing: boolean = false;
  
  // NUEVO: Estados para reagendar
  showRescheduleModal: boolean = false;
  reschedulingAppointment: Appointment | null = null;
  rescheduleData: RescheduleData = {
    date: '',
    time: '',
    duration: 60
  };
  isRescheduling: boolean = false;
  
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
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchSubject.complete();
  }

  /**
   * Configura el debounce para la búsqueda
   */
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
   * Carga todas las sesiones
   */
  loadAppointments(): void {
    this.isLoading = true;
    this.error = '';

    const params: any = {
      page: this.pagination.currentPage.toString(),
      limit: '12'
    };

    // Agregar filtros si existen
    if (this.statusFilter) params.status = this.statusFilter;
    if (this.typeFilter) params.type = this.typeFilter;
    if (this.dateFilter) params.date = this.dateFilter;
    if (this.searchTerm) params.search = this.searchTerm;

    this.http.get<any>(`${environment.apiUrl}/appointments/admin`, { params })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Appointments response:', response);
          
          // Probar diferentes formatos de respuesta
          this.appointments = response.appointments || response.data?.appointments || 
                             response.data?.docs || response.data || response.docs || 
                             response || [];
          
          this.filteredAppointments = [...this.appointments];
          
          // Paginación adaptativa
          this.pagination = {
            currentPage: response.data?.page || response.page || response.currentPage || this.pagination.currentPage,
            totalPages: response.data?.totalPages || response.totalPages || response.pages || 1,
            totalItems: response.data?.totalDocs || response.data?.total || response.totalDocs || response.total || this.appointments.length,
            hasNext: response.data?.hasNextPage || response.hasNextPage || response.hasNext || false,
            hasPrev: response.data?.hasPrevPage || response.hasPrevPage || response.hasPrev || false
          };
          
          this.isLoading = false;
          console.log('Appointments loaded:', this.appointments.length);
        },
        error: (error) => {
          console.error('Error loading appointments from /appointments/admin:', error);
          this.error = error.error?.message || 'Error al cargar las sesiones';
          this.isLoading = false;
        }
      });
  }

  /**
   * Carga usuarios (profesionales y pacientes) usando las NUEVAS rutas
   */
  loadUsers(): void {
    console.log('🔍 Cargando usuarios desde nuevas rutas...');

    // Cargar profesionales usando la nueva ruta
    this.http.get<any>(`${environment.apiUrl}/users/professionals`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.professionals = response.data || response;
          console.log('✅ Profesionales cargados:', this.professionals.length);
          
          // Si no hay profesionales, intentar con ruta por rol
          if (this.professionals.length === 0) {
            this.loadProfessionalsFallback();
          }
        },
        error: (error) => {
          console.error('❌ Error cargando profesionales:', error);
          this.loadProfessionalsFallback();
        }
      });

    // Cargar pacientes usando la nueva ruta
    this.http.get<any>(`${environment.apiUrl}/users/patients`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.patients = response.data || response;
          console.log('✅ Pacientes cargados:', this.patients.length);
          
          // Si no hay pacientes, intentar con ruta por rol
          if (this.patients.length === 0) {
            this.loadPatientsFallback();
          }
        },
        error: (error) => {
          console.error('❌ Error cargando pacientes:', error);
          this.loadPatientsFallback();
        }
      });
  }

  /**
   * Fallback para cargar profesionales
   */
  private loadProfessionalsFallback(): void {
    console.log('🔄 Intentando cargar profesionales con ruta alternativa...');
    
    this.http.get<any>(`${environment.apiUrl}/users/role/professional`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.professionals = response.data || response;
          console.log('✅ Profesionales cargados (fallback):', this.professionals.length);
          
          // Si aún no hay datos, usar la ruta de admin
          if (this.professionals.length === 0) {
            this.loadUsersFromAdmin();
          }
        },
        error: (err) => {
          console.error('❌ Error en fallback de profesionales:', err);
          this.loadUsersFromAdmin();
        }
      });
  }

  /**
   * Fallback para cargar pacientes
   */
  private loadPatientsFallback(): void {
    console.log('🔄 Intentando cargar pacientes con ruta alternativa...');
    
    this.http.get<any>(`${environment.apiUrl}/users/role/patient`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.patients = response.data || response;
          console.log('✅ Pacientes cargados (fallback):', this.patients.length);
          
          // Si aún no hay datos, usar la ruta de admin
          if (this.patients.length === 0) {
            this.loadUsersFromAdmin();
          }
        },
        error: (err) => {
          console.error('❌ Error en fallback de pacientes:', err);
          this.loadUsersFromAdmin();
        }
      });
  }

  /**
   * Carga todos los usuarios desde admin y los filtra por rol
   */
  private loadUsersFromAdmin(): void {
    console.log('🔄 Cargando usuarios desde ruta de admin...');
    
    this.http.get<any>(`${environment.apiUrl}/admin/users`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          const allUsers = response.users || response.data || response;
          
          if (Array.isArray(allUsers)) {
            // Filtrar usando los roles REALES de tu base de datos
            this.professionals = allUsers.filter(user => 
              user.role === 'professional' || 
              user.role === 'profesional' || 
              user.role === 'doctor' ||
              user.role === 'terapeuta' ||
              user.role === 'psicologo' ||
              user.role === 'medico'
            );
            
            this.patients = allUsers.filter(user => 
              user.role === 'patient' || 
              user.role === 'paciente' || 
              user.role === 'usuario' ||
              user.role === 'cliente'
            );
            
            console.log('✅ Usuarios cargados desde admin - Profesionales:', this.professionals.length);
            console.log('✅ Usuarios cargados desde admin - Pacientes:', this.patients.length);
            
            // Si aún no hay datos, mostrar advertencia
            if (this.professionals.length === 0 && this.patients.length === 0) {
              console.warn('⚠️ No se encontraron usuarios en el sistema');
              this.showNoUsersWarning();
            }
          }
        },
        error: (error) => {
          console.error('❌ Error cargando usuarios desde admin:', error);
          this.showNoUsersWarning();
        }
      });
  }

  /**
   * Muestra advertencia cuando no hay usuarios
   */
  private showNoUsersWarning(): void {
    console.warn('⚠️ No se pudieron cargar los usuarios del sistema');
    // Dejar los arrays vacíos en lugar de usar datos ficticios
    this.professionals = [];
    this.patients = [];
  }

  /**
   * Maneja cambios en la búsqueda
   */
  onSearch(): void {
    this.searchSubject.next(this.searchTerm);
  }

  /**
   * Maneja cambios en los filtros
   */
  onFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Aplica todos los filtros
   */
  private applyFilters(): void {
    let filtered = this.appointments;

    // Filtro por término de búsqueda
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(appointment => 
        appointment.title.toLowerCase().includes(searchLower) ||
        this.getPatientName(appointment)?.toLowerCase().includes(searchLower) ||
        this.getPatientLastName(appointment)?.toLowerCase().includes(searchLower) ||
        this.getProfessionalName(appointment)?.toLowerCase().includes(searchLower) ||
        this.getProfessionalLastName(appointment)?.toLowerCase().includes(searchLower) ||
        this.getPatientEmail(appointment)?.toLowerCase().includes(searchLower) ||
        this.getProfessionalEmail(appointment)?.toLowerCase().includes(searchLower)
      );
    }

    // Filtro por estado
    if (this.statusFilter) {
      filtered = filtered.filter(appointment => appointment.status === this.statusFilter);
    }

    // Filtro por tipo
    if (this.typeFilter) {
      filtered = filtered.filter(appointment => appointment.type === this.typeFilter);
    }

    // Filtro por fecha
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

  /**
   * Helper para obtener nombre del paciente de forma segura
   */
  getPatientName(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? appointment.patientId.name : '';
  }

  /**
   * Helper para obtener apellido del paciente de forma segura
   */
  getPatientLastName(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? appointment.patientId.lastName : '';
  }

  /**
   * Helper para obtener email del paciente de forma segura
   */
  getPatientEmail(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? appointment.patientId.email : '';
  }

  /**
   * Helper para obtener nombre del profesional de forma segura
   */
  getProfessionalName(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? appointment.professionalId.name : '';
  }

  /**
   * Helper para obtener apellido del profesional de forma segura
   */
  getProfessionalLastName(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? appointment.professionalId.lastName : '';
  }

  /**
   * Helper para obtener email del profesional de forma segura
   */
  getProfessionalEmail(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? appointment.professionalId.email : '';
  }

  /**
   * Helper para obtener ID del paciente de forma segura
   */
  getPatientId(appointment: Appointment): string {
    return typeof appointment.patientId === 'object' ? appointment.patientId._id : appointment.patientId;
  }

  /**
   * Helper para obtener ID del profesional de forma segura
   */
  private getProfessionalId(appointment: Appointment): string {
    return typeof appointment.professionalId === 'object' ? appointment.professionalId._id : appointment.professionalId;
  }

  /**
   * Limpia todos los filtros
   */
  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = '';
    this.typeFilter = '';
    this.dateFilter = '';
    this.applyFilters();
  }

  /**
   * Obtiene la clase CSS para el estado de la tarjeta
   */
  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'scheduled': 'status-scheduled',
      'confirmed': 'status-confirmed',
      'in_progress': 'status-in-progress',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return statusClasses[status] || '';
  }

  /**
   * Obtiene la clase CSS para el badge de estado
   */
  getStatusBadgeClass(status: string): string {
    const badgeClasses: { [key: string]: string } = {
      'scheduled': 'badge-scheduled',
      'confirmed': 'badge-confirmed',
      'in_progress': 'badge-in-progress',
      'completed': 'badge-completed',
      'cancelled': 'badge-cancelled'
    };
    return badgeClasses[status] || '';
  }

  /**
   * Obtiene el texto display para el estado
   */
  getStatusDisplay(status: string): string {
    const statusMap: { [key: string]: string } = {
      'scheduled': 'Programada',
      'confirmed': 'Confirmada',
      'in_progress': 'En Progreso',
      'completed': 'Completada',
      'cancelled': 'Cancelada'
    };
    return statusMap[status] || status;
  }

  /**
   * Obtiene el texto display para el tipo
   */
  getTypeDisplay(type: string): string {
    const typeMap: { [key: string]: string } = {
      'consultation': 'Consulta',
      'therapy': 'Terapia',
      'follow_up': 'Seguimiento',
      'emergency': 'Emergencia',
      'evaluation': 'Evaluación'
    };
    return typeMap[type] || type;
  }

  /**
   * Obtiene el texto display para la plataforma
   */
  getPlatformDisplay(platform: string): string {
    const platformMap: { [key: string]: string } = {
      'in_person': 'Presencial',
      'zoom': 'Zoom',
      'google_meet': 'Google Meet',
      'teams': 'Microsoft Teams',
      'phone': 'Teléfono'
    };
    return platformMap[platform] || platform;
  }

  /**
   * Formatea fecha y hora con manejo robusto de errores
   */
  formatDateTime(dateString: string): string {
    try {
      if (!dateString) return 'Fecha no disponible';
      
      let date: Date;
      
      // Intentar diferentes formatos de fecha
      if (dateString.includes('T')) {
        date = new Date(dateString);
      } else if (dateString.includes(' ')) {
        date = new Date(dateString.replace(' ', 'T'));
      } else {
        date = new Date(dateString);
      }
      
      // Verificar si la fecha es válida
      if (isNaN(date.getTime())) {
        console.warn('Fecha inválida:', dateString);
        return 'Fecha no disponible';
      }
      
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formateando fecha:', error, 'Fecha original:', dateString);
      return 'Fecha no disponible';
    }
  }

  /**
   * Obtiene la fecha actual en formato YYYY-MM-DD
   */
  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Cancela una cita
   */
  cancelAppointment(appointment: Appointment): void {
    if (!confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
      return;
    }

    this.isUpdating[appointment._id] = true;

    this.http.patch(`${environment.apiUrl}/appointments/${appointment._id}/cancel`, {})
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Appointment cancelled:', response);
          // Recargar toda la lista para asegurar datos frescos
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
        },
        error: (error) => {
          console.error('Error cancelling appointment:', error);
          alert('Error al cancelar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  /**
   * Confirma una cita
   */
  confirmAppointment(appointment: Appointment): void {
    this.isUpdating[appointment._id] = true;

    this.http.put(`${environment.apiUrl}/appointments/${appointment._id}`, { 
      status: 'confirmed' 
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log('Appointment confirmed:', response);
          // Recargar toda la lista para asegurar datos frescos
          this.loadAppointments();
          this.isUpdating[appointment._id] = false;
        },
        error: (error) => {
          console.error('Error confirming appointment:', error);
          alert('Error al confirmar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isUpdating[appointment._id] = false;
        }
      });
  }

  /**
   * Abre el modal de edición
   */
  editAppointment(appointment: Appointment): void {
    this.editingAppointment = appointment;
    this.showEditModal = true;
    
    // Convertir la fecha al formato del input
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split('T')[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    
    // Precargar los datos en el formulario usando los helpers seguros
    this.editAppointmentData = {
      title: appointment.title,
      date: dateStr,
      time: timeStr,
      duration: appointment.duration,
      type: appointment.type,
      reason: appointment.reason || '',
      patientId: this.getPatientId(appointment),
      professionalId: this.getProfessionalId(appointment)
    };
  }

  /**
   * Guarda los cambios de la cita editada - VERSIÓN SEGURA
   */
  updateAppointment(): void {
    if (!this.validateEditForm()) {
      return;
    }

    this.isEditing = true;

    // Combinar fecha y hora
    const dateTime = `${this.editAppointmentData.date}T${this.editAppointmentData.time}:00.000Z`;

    const appointmentData = {
      title: this.editAppointmentData.title,
      date: dateTime,
      duration: this.editAppointmentData.duration,
      type: this.editAppointmentData.type,
      reason: this.editAppointmentData.reason,
      patientId: this.editAppointmentData.patientId,
      professionalId: this.editAppointmentData.professionalId
    };

    this.http.put<Appointment>(`${environment.apiUrl}/appointments/${this.editingAppointment!._id}`, appointmentData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (updatedAppointment) => {
          console.log('✅ Cita actualizada, recargando lista completa...');
          
          // RECARGAR LISTA COMPLETA - GARANTIZA DATOS FRESCOS Y POPULADOS
          this.loadAppointments();
          
          this.closeEditModal();
          this.isEditing = false;
        },
        error: (error) => {
          console.error('Error updating appointment:', error);
          alert('Error al actualizar la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isEditing = false;
        }
      });
  }

  /**
   * Cierra el modal de edición
   */
  closeEditModal(): void {
    this.showEditModal = false;
    this.editingAppointment = null;
    this.editAppointmentData = {
      title: '',
      date: '',
      time: '',
      duration: 60,
      type: 'consultation',
      reason: '',
      patientId: '',
      professionalId: ''
    };
  }

  /**
   * Valida el formulario de edición
   */
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

    if (!this.editAppointmentData.patientId) {
      alert('Selecciona un paciente');
      return false;
    }

    if (!this.editAppointmentData.professionalId) {
      alert('Selecciona un profesional');
      return false;
    }

    return true;
  }

  /**
   * NUEVO: Abre el modal de reagendar
   */
  openRescheduleModal(appointment: Appointment): void {
    this.reschedulingAppointment = appointment;
    
    // Convertir la fecha al formato del input
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split('T')[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    
    this.rescheduleData = {
      date: dateStr,
      time: timeStr,
      duration: appointment.duration
    };
    
    this.showRescheduleModal = true;
  }

  /**
   * NUEVO: Cierra el modal de reagendar
   */
  closeRescheduleModal(): void {
    this.showRescheduleModal = false;
    this.reschedulingAppointment = null;
    this.rescheduleData = {
      date: '',
      time: '',
      duration: 60
    };
    this.isRescheduling = false;
  }

  /**
   * NUEVO: Ejecuta el reagendo de la cita
   */
  async rescheduleAppointment(): Promise<void> {
    if (!this.validateRescheduleForm()) {
      return;
    }

    if (!this.reschedulingAppointment) {
      return;
    }

    this.isRescheduling = true;

    try {
      // Combinar fecha y hora
      const dateTime = `${this.rescheduleData.date}T${this.rescheduleData.time}:00.000Z`;
      
      const response = await this.http.put<any>(
        `${environment.apiUrl}/appointments/${this.reschedulingAppointment._id}/reschedule`, 
        {
          newDate: dateTime,
          newDuration: this.rescheduleData.duration
        }
      ).pipe(takeUntil(this.destroy$)).toPromise();

      console.log('✅ Cita reagendada exitosamente:', response);
      
      // Recargar lista completa
      this.loadAppointments();
      this.closeRescheduleModal();
      
      // Mostrar notificación de éxito
      this.showNotification('Cita reagendada exitosamente', 'success');
      
    } catch (error: any) {
      console.error('Error reagendando cita:', error);
      alert('Error al reagendar la cita: ' + (error.error?.message || 'Error desconocido'));
    } finally {
      this.isRescheduling = false;
    }
  }

  /**
   * NUEVO: Valida el formulario de reagendar
   */
  private validateRescheduleForm(): boolean {
    if (!this.rescheduleData.date) {
      alert('La fecha es requerida');
      return false;
    }

    if (!this.rescheduleData.time) {
      alert('La hora es requerida');
      return false;
    }

    // Validar que la fecha no sea en el pasado
    const selectedDateTime = new Date(`${this.rescheduleData.date}T${this.rescheduleData.time}`);
    if (selectedDateTime < new Date()) {
      alert('No puedes reagendar citas en fechas pasadas');
      return false;
    }

    return true;
  }

  /**
   * NUEVO: Muestra notificación (puedes implementar tu sistema de notificaciones)
   */
  private showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    // Aquí puedes integrar tu sistema de notificaciones
    // Por ahora usamos alert para simplificar
    if (type === 'success') {
      alert(`✅ ${message}`);
    } else if (type === 'error') {
      alert(`❌ ${message}`);
    } else {
      alert(`ℹ️ ${message}`);
    }
  }

  /**
   * Abre el modal de creación
   */
  openCreateModal(): void {
    this.showCreateModal = true;
    // Resetear el formulario
    this.newAppointment = {
      title: '',
      date: '',
      time: '',
      duration: 60,
      type: 'consultation',
      reason: '',
      patientId: '',
      professionalId: ''
    };
  }

  /**
   * Cierra el modal de creación
   */
  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  /**
   * Crea una nueva cita - COMO ADMIN
   */
  createAppointment(): void {
    if (!this.validateAppointmentForm()) {
      return;
    }

    this.isCreating = true;

    // Combinar fecha y hora
    const dateTime = `${this.newAppointment.date}T${this.newAppointment.time}:00.000Z`;

    const appointmentData = {
      title: this.newAppointment.title,
      date: dateTime,
      duration: this.newAppointment.duration,
      type: this.newAppointment.type,
      reason: this.newAppointment.reason,
      patientId: this.newAppointment.patientId,
      professionalId: this.newAppointment.professionalId
    };

    // ✅ USAR RUTA DE ADMIN para crear citas
    this.http.post<Appointment>(`${environment.apiUrl}/appointments/admin`, appointmentData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (appointment) => {
          // Recargar lista completa para mostrar la nueva cita
          this.loadAppointments();
          this.closeCreateModal();
          this.isCreating = false;
        },
        error: (error) => {
          console.error('Error creating appointment:', error);
          alert('Error al crear la cita: ' + (error.error?.message || 'Error desconocido'));
          this.isCreating = false;
        }
      });
  }

  /**
   * Valida el formulario de creación
   */
  private validateAppointmentForm(): boolean {
    if (!this.newAppointment.title.trim()) {
      alert('El título es requerido');
      return false;
    }

    if (!this.newAppointment.date) {
      alert('La fecha es requerida');
      return false;
    }

    if (!this.newAppointment.time) {
      alert('La hora es requerida');
      return false;
    }

    if (!this.newAppointment.patientId) {
      alert('Selecciona un paciente');
      return false;
    }

    if (!this.newAppointment.professionalId) {
      alert('Selecciona un profesional');
      return false;
    }

    // Validar que la fecha no sea en el pasado
    const selectedDateTime = new Date(`${this.newAppointment.date}T${this.newAppointment.time}`);
    if (selectedDateTime < new Date()) {
      alert('No puedes crear citas en fechas pasadas');
      return false;
    }

    return true;
  }

  /**
   * Navega a la página anterior
   */
  prevPage(): void {
    if (this.pagination.hasPrev) {
      this.pagination.currentPage--;
      this.loadAppointments();
    }
  }

  /**
   * Navega a la página siguiente
   */
  nextPage(): void {
    if (this.pagination.hasNext) {
      this.pagination.currentPage++;
      this.loadAppointments();
    }
  }

  /**
   * Va a una página específica
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.loadAppointments();
    }
  }

  /**
   * Obtiene los números de página para la paginación
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;
    
    if (totalPages <= 7) {
      // Mostrar todas las páginas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con ellipsis
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      }
    }
    
    return pages;
  }

  /**
   * Obtiene el texto para el botón de paginación
   */
  getPageButtonText(page: number): string {
    return page === -1 ? '...' : page.toString();
  }

  /**
   * Verifica si un botón de página está deshabilitado
   */
  isPageButtonDisabled(page: number): boolean {
    return page === -1;
  }
}
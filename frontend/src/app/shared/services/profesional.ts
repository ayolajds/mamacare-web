import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Professional {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
  specialty: string;
  phone?: string;
  avatar?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProfessionalStats {
  citasHoy: number;
  citasPendientes: number;
  citasEstaSemana: number;
  pacientesActivos: number;
  citasCompletadasMes: number;
  tasaAsistencia: number;
}

export interface Appointment {
  _id: string;
  title: string;
  date: string;
  duration: number;
  status: 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
  type: string;
  notes?: string;
  reason?: string;
  symptoms?: string;
  priority?: string;
  meetingPlatform?: string;
  meetingUrl?: string;
  patientId: {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  professionalId: string;
  createdAt: string;
  updatedAt: string;
  endDate?: string;
}

export interface PaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface AppointmentsResponse {
  success: boolean;
  data: PaginatedResponse<Appointment>;
  message?: string;
}

export interface StatsResponse {
  success: boolean;
  data: ProfessionalStats;
}

export interface ProfessionalResponse {
  success: boolean;
  data: Professional;
}

export interface PatientsResponse {
  success: boolean;
  data: PaginatedResponse<any>;
}

// ✅ NUEVA INTERFAZ PARA TRATAMIENTOS
export interface TreatmentResponse {
  success: boolean;
  data: any;
  message?: string;
}

export interface TreatmentData {
  diagnosis: string;
  cancerType: 'ductal_in_situ' | 'lobular_in_situ' | 'invasive_ductal' | 'invasive_lobular' | 'inflammatory' | 'other';
  cancerStage: '0' | 'I' | 'II' | 'III' | 'IV';
  treatmentPhase: 'diagnosis' | 'pre_op' | 'post_op' | 'chemotherapy' | 'radiotherapy' | 'hormone_therapy' | 'follow_up';
  treatmentPlan: string;
  medications?: any[];
}

// ✅ NUEVAS INTERFACES PARA HORARIOS
export interface HorarioDisponible {
  fecha: string;
  hora: string;
  disponible: boolean;
}

export interface ProfessionalsListResponse {
  success: boolean;
  data: Professional[];
}

export interface AvailableSlotsResponse {
  success: boolean;
  data: {
    horarios: HorarioDisponible[];
    professionalId: string;
  };
}

// ✅ NUEVA INTERFAZ PARA RESPUESTA DE COMPLETAR CITA
export interface CompletarCitaResponse {
  success: boolean;
  message: string;
  data: {
    cita: Appointment;
    sesionesUtilizadas: number;
    sesionesTotales: number;
    sesionesRestantes: number;
    paqueteEstado: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/professional`;
  private appointmentsBaseUrl = `${environment.apiUrl}/appointments`;

  // 👤 Obtener perfil del profesional
  getProfessionalProfile(): Observable<ProfessionalResponse> {
    return this.http.get<ProfessionalResponse>(`${this.baseUrl}/profile`);
  }

  // 📊 Obtener estadísticas del dashboard profesional
  getStats(): Observable<StatsResponse> {
    return this.http.get<StatsResponse>(`${this.baseUrl}/stats`);
  }

  // ✅ NUEVO MÉTODO: Obtener lista de profesionales disponibles
  getProfessionalsList(): Observable<ProfessionalsListResponse> {
    return this.http.get<ProfessionalsListResponse>(`${this.baseUrl}/list`);
  }

  // ✅ NUEVO MÉTODO: Obtener horarios disponibles de un profesional
  getAvailableSlots(professionalId: string, fecha?: string): Observable<AvailableSlotsResponse> {
    
    let params = new HttpParams();
    if (fecha) {
      params = params.set('fecha', fecha);
    }

    return this.http.get<AvailableSlotsResponse>(
      `${this.baseUrl}/${professionalId}/available-slots`,
      { params }
    );
  }

  // 📅 Obtener citas del profesional (con filtros y ordenamiento)
  getAppointments(params: {
    page?: number;
    limit?: number;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
  } = {}): Observable<AppointmentsResponse> {
    
    let httpParams = new HttpParams();
    
    if (params.page) httpParams = httpParams.set('page', params.page.toString());
    if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    if (params.status) httpParams = httpParams.set('status', params.status);
    if (params.dateFrom) httpParams = httpParams.set('dateFrom', params.dateFrom);
    if (params.dateTo) httpParams = httpParams.set('dateTo', params.dateTo);

    
    return this.http.get<AppointmentsResponse>(`${this.baseUrl}/appointments`, { 
      params: httpParams 
    }).pipe(
      map(response => {
        if (response.success && response.data?.docs) {
          // Ordenar citas: Confirmadas primero, luego por fecha más próxima
          response.data.docs.sort((a, b) => {
            // Prioridad de estados
            const priority = {
              'confirmed': 1,    // Máxima prioridad
              'in_progress': 2,  // Segunda prioridad  
              'completed': 3,    // Tercera prioridad
              'no_show': 4,      // Cuarta prioridad
              'cancelled': 5     // Última prioridad
            };

            const priorityA = priority[a.status] || 6;
            const priorityB = priority[b.status] || 6;

            // Si tienen diferente prioridad, ordenar por prioridad
            if (priorityA !== priorityB) {
              return priorityA - priorityB;
            }

            // Si misma prioridad, ordenar por fecha más cercana primero
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          });
        }
        return response;
      })
    );
  }

  // ✅ MÉTODO PARA OBTENER CITAS CON FILTROS LOCALES
  getAppointmentsWithLocalFilters(filters: {
    status?: string;
    paciente?: string;
    fecha?: string;
  } = {}): Observable<AppointmentsResponse> {
    return this.getAppointments().pipe(
      map(response => {
        if (response.success && response.data?.docs) {
          let citasFiltradas = [...response.data.docs];
          
          // Filtro por estado
          if (filters.status) {
            citasFiltradas = citasFiltradas.filter(cita => 
              cita.status === filters.status
            );
          }
          
          // Filtro por paciente
          if (filters.paciente) {
            const searchTerm = filters.paciente.toLowerCase();
            citasFiltradas = citasFiltradas.filter(cita =>
              cita.patientId.name.toLowerCase().includes(searchTerm) ||
              cita.patientId.lastName.toLowerCase().includes(searchTerm)
            );
          }
          
          // Filtro por fecha
          if (filters.fecha) {
            citasFiltradas = citasFiltradas.filter(cita =>
              cita.date.startsWith(filters.fecha!)
            );
          }
          
          // Actualizar la respuesta con las citas filtradas
          response.data.docs = citasFiltradas;
          response.data.totalDocs = citasFiltradas.length;
          response.data.totalPages = Math.ceil(citasFiltradas.length / (response.data.limit || 10));
        }
        return response;
      })
    );
  }

  // ✅ MÉTODO HELPER PARA EXTRAER CITAS - ACTUALIZADO
  extractAppointments(response: AppointmentsResponse): Appointment[] {
    if (!response.success) {
      return [];
    }
    
    return response.data?.docs || [];
  }

  // ➕ Crear nueva cita
  createAppointment(appointmentData: any): Observable<{success: boolean; data: Appointment}> {
    return this.http.post<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments`,
      appointmentData
    );
  }

  // ✏️ Actualizar cita
  updateAppointment(appointmentId: string, updateData: any): Observable<{success: boolean; data: Appointment}> {
    return this.http.put<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}`,
      updateData
    );
  }

  // 🗑️ Cancelar cita
  cancelAppointment(appointmentId: string): Observable<{success: boolean; message: string}> {
    return this.http.patch<{success: boolean; message: string}>(
      `${this.baseUrl}/appointments/${appointmentId}/cancel`,
      {}
    );
  }

  // 👥 Obtener pacientes del profesional
  getPatients(params: {
    page?: number;
    limit?: number;
    search?: string;
  } = {}): Observable<PatientsResponse> {
    
    let httpParams = new HttpParams();
    
    if (params.page) httpParams = httpParams.set('page', params.page.toString());
    if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    if (params.search) httpParams = httpParams.set('search', params.search);

    httpParams = httpParams.set('_t', Date.now().toString());

    
    return this.http.get<PatientsResponse>(
      `${this.baseUrl}/patients`,
      { params: httpParams }
    );
  }

  // 🔄 Actualizar estado de cita (PARA ESTADOS QUE NO REQUIEREN DESCONTAR SESIONES)
  updateAppointmentStatus(appointmentId: string, status: string): Observable<{success: boolean; data: Appointment}> {
    return this.http.patch<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}/status`,
      { status }
    );
  }

  // ✅ NUEVO MÉTODO: INICIAR CONSULTA (cambia a "in_progress")
  iniciarConsulta(appointmentId: string): Observable<{success: boolean; data: Appointment}> {
    return this.http.patch<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}/status`,
      { status: 'in_progress' }
    );
  }

  // ✅ NUEVO MÉTODO: COMPLETAR CITA (DESCUENTA SESIÓN DEL PAQUETE)
// ✅ CAMBIA A (PATCH)
completarCita(appointmentId: string): Observable<CompletarCitaResponse> {
  return this.http.patch<CompletarCitaResponse>(
    `${this.appointmentsBaseUrl}/${appointmentId}/completar`,
    {}
  );
}

  // 📝 Actualizar notas de cita
  updateAppointmentNotes(appointmentId: string, notes: string): Observable<{success: boolean; data: Appointment}> {
    return this.http.patch<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}/notes`,
      { notes }
    );
  }
}
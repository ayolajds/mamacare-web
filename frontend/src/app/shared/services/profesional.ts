import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'rescheduled' | 'no_show';
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

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/professional`;

  // 👤 Obtener perfil del profesional
  getProfessionalProfile(): Observable<ProfessionalResponse> {
    console.log('👤 Obteniendo perfil del profesional...');
    return this.http.get<ProfessionalResponse>(`${this.baseUrl}/profile`);
  }

  // 📊 Obtener estadísticas del dashboard profesional
  getStats(): Observable<StatsResponse> {
    console.log('📊 Obteniendo estadísticas del profesional...');
    return this.http.get<StatsResponse>(`${this.baseUrl}/stats`);
  }

  // ✅ NUEVO MÉTODO: Obtener lista de profesionales disponibles
  getProfessionalsList(): Observable<ProfessionalsListResponse> {
    console.log('👥 Obteniendo lista de profesionales...');
    return this.http.get<ProfessionalsListResponse>(`${this.baseUrl}/list`);
  }

  // ✅ NUEVO MÉTODO: Obtener horarios disponibles de un profesional
  getAvailableSlots(professionalId: string, fecha?: string): Observable<AvailableSlotsResponse> {
    console.log('📅 Obteniendo horarios disponibles para profesional:', professionalId);
    
    let params = new HttpParams();
    if (fecha) {
      params = params.set('fecha', fecha);
    }

    return this.http.get<AvailableSlotsResponse>(
      `${this.baseUrl}/${professionalId}/available-slots`,
      { params }
    );
  }

  // 📅 Obtener citas del profesional (con filtros)
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

    console.log('📅 Obteniendo citas del profesional:', params);
    
    return this.http.get<AppointmentsResponse>(`${this.baseUrl}/appointments`, { 
      params: httpParams 
    });
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
    console.log('➕ Creando nueva cita:', appointmentData);
    return this.http.post<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments`,
      appointmentData
    );
  }

  // ✏️ Actualizar cita
  updateAppointment(appointmentId: string, updateData: any): Observable<{success: boolean; data: Appointment}> {
    console.log('✏️ Actualizando cita:', { appointmentId, updateData });
    return this.http.put<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}`,
      updateData
    );
  }

  // 🗑️ Cancelar cita
  cancelAppointment(appointmentId: string): Observable<{success: boolean; message: string}> {
    console.log('🗑️ Cancelando cita:', appointmentId);
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

    console.log('👥 Obteniendo pacientes del profesional:', params);
    
    return this.http.get<PatientsResponse>(
      `${this.baseUrl}/patients`,
      { params: httpParams }
    );
  }

  // 🔄 Actualizar estado de cita
  updateAppointmentStatus(appointmentId: string, status: string): Observable<{success: boolean; data: Appointment}> {
    console.log('🔄 Actualizando estado de cita:', { appointmentId, status });
    return this.http.patch<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}/status`,
      { status }
    );
  }

  // 📝 Actualizar notas de cita
  updateAppointmentNotes(appointmentId: string, notes: string): Observable<{success: boolean; data: Appointment}> {
    console.log('📝 Actualizando notas de cita:', { appointmentId, notes });
    return this.http.patch<{success: boolean; data: Appointment}>(
      `${this.baseUrl}/appointments/${appointmentId}/notes`,
      { notes }
    );
  }

  // 🎗️ CREAR TRATAMIENTO PARA PACIENTE - NUEVO MÉTODO
  createPatientTreatment(patientId: string, treatmentData: TreatmentData): Observable<TreatmentResponse> {
    console.log('🎗️ Creando tratamiento para paciente:', { patientId, treatmentData });
    return this.http.post<TreatmentResponse>(
      `${this.baseUrl}/patients/${patientId}/treatment`,
      treatmentData
    );
  }

  // 🎗️ OBTENER TRATAMIENTO DE PACIENTE - NUEVO MÉTODO
  getPatientTreatment(patientId: string): Observable<TreatmentResponse> {
    console.log('🎗️ Obteniendo tratamiento del paciente:', patientId);
    return this.http.get<TreatmentResponse>(
      `${this.baseUrl}/patients/${patientId}/treatment`
    );
  }
}
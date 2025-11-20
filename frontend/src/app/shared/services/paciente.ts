import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth'; // ← IMPORTAR AuthService

// Interfaces para el Panel Paciente
export interface PatientTreatment {
  _id: string;
  diagnosis: string;
  cancerType: string;
  cancerStage: string;
  treatmentPhase: string;
  treatmentPlan: string;
  medications: Medication[];
  symptoms: Symptom[];
  professionalId?: {
    _id: string;
    name: string;
    specialty: string;
    email: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
}

export interface Symptom {
  _id?: string;
  date: string;
  symptom: string;
  intensity: number;
  notes?: string;
}

export interface MedicalHistory {
  familyHistory: {
    breastCancer: boolean;
    ovarianCancer: boolean;
    otherCancers: boolean;
    details: string;
  };
  personalHistory: {
    menarcheAge: number;
    firstPregnancyAge: number;
    menopause: boolean;
    menopauseAge: number;
    hormoneTherapy: boolean;
    previousBiopsies: boolean;
    details: string;
  };
  habits: {
    smoker: boolean;
    alcohol: boolean;
    physicalActivity: string;
    diet: string;
  };
  allergies: string[];
  currentMedications: string[];
}

export interface DashboardData {
  upcomingAppointments: any[];
  treatment?: PatientTreatment;
  todaysAppointments: number;
  recentSymptoms: Symptom[];
}

export interface PatientAppointmentsResponse {
  success: boolean;
  data: {
    appointments: any[];
    totalPages: number;
    currentPage: number;
    total: number;
  };
}

export interface SymptomResponse {
  success: boolean;
  message: string;
  data: Symptom;
}

// Interfaces para solicitud de citas
export interface AppointmentRequest {
  professionalId: string;
  requestedDate: string;
  reason: string;
  notes?: string;
  preferredTime?: string;
}

export interface AppointmentRequestResponse {
  success: boolean;
  message: string;
  data?: {
    _id: string;
    status: string;
    requestedDate: string;
    reason: string;
  };
}

// Interface para actualizar perfil
export interface UpdateProfileRequest {
  name?: string;
  lastName?: string;
  phone?: string;
  birthDate?: string;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  user?: any;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private http = inject(HttpClient);
  private authService = inject(AuthService); // ← INYECTAR AuthService
  private baseUrl = `${environment.apiUrl}/patient`;

  // 🔑 MÉTODO PRIVADO: Obtener headers de autenticación
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.token();
    
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    } else {
      console.warn('⚠️ No hay token de autenticación disponible');
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }

  // 📊 Obtener datos del dashboard del paciente
  getDashboard(): Observable<{ success: boolean; data: DashboardData }> {
    return this.http.get<{ success: boolean; data: DashboardData }>(
      `${this.baseUrl}/dashboard`,
      { headers: this.getAuthHeaders() }
    );
  }

  // 🏥 Obtener información del tratamiento
  getTreatment(): Observable<{ success: boolean; data: PatientTreatment }> {

    return this.http.get<{ success: boolean; data: PatientTreatment }>(
      `${this.baseUrl}/treatment`,
      { headers: this.getAuthHeaders() }
    );
  }

  // 📋 Obtener historial médico
  getMedicalHistory(): Observable<{ success: boolean; data: MedicalHistory }> {

    return this.http.get<{ success: boolean; data: MedicalHistory }>(
      `${this.baseUrl}/medical-history`,
      { headers: this.getAuthHeaders() }
    );
  }

  // 📅 Obtener citas del paciente
  getAppointments(params: {
    page?: number;
    limit?: number;
    status?: string;
  } = {}): Observable<PatientAppointmentsResponse> {
    
    let httpParams = new HttpParams();
    
    if (params.page) httpParams = httpParams.set('page', params.page.toString());
    if (params.limit) httpParams = httpParams.set('limit', params.limit.toString());
    if (params.status) httpParams = httpParams.set('status', params.status);


    
    return this.http.get<PatientAppointmentsResponse>(
      `${this.baseUrl}/appointments`, 
      { 
        params: httpParams,
        headers: this.getAuthHeaders()
      }
    );
  }

  // ❤️ Registrar síntoma - CORREGIDO CON HEADERS
  addSymptom(symptomData: {
    symptom: string;
    intensity: number;
    notes?: string;
  }): Observable<SymptomResponse> {
    
    return this.http.post<SymptomResponse>(
      `${this.baseUrl}/symptoms`,
      symptomData,
      { headers: this.getAuthHeaders() }
    );
  }

  // 📝 Solicitar nueva cita
  requestAppointment(appointmentData: AppointmentRequest): Observable<AppointmentRequestResponse> {
    return this.http.post<AppointmentRequestResponse>(
      `${environment.apiUrl}/appointments/request`,
      appointmentData,
      { headers: this.getAuthHeaders() }
    );
  }

  // 🗑️ Cancelar cita
  cancelAppointment(appointmentId: string): Observable<{ success: boolean; message: string }> {
    return this.http.patch<{ success: boolean; message: string }>(
      `${environment.apiUrl}/appointments/${appointmentId}/cancel`,
      {},
      { headers: this.getAuthHeaders() }
    );
  }

  // 🔄 Reagendar cita
  rescheduleAppointment(appointmentId: string, newDate: string): Observable<{ success: boolean; data: any }> {
    return this.http.patch<{ success: boolean; data: any }>(
      `${environment.apiUrl}/appointments/${appointmentId}/reschedule`,
      { date: newDate },
      { headers: this.getAuthHeaders() }
    );
  }

  // 👤 Obtener perfil del paciente
  getPatientProfile(): Observable<{ success: boolean; data: any }> {

    return this.http.get<{ success: boolean; data: any }>(
      `${environment.apiUrl}/users/profile`,
      { headers: this.getAuthHeaders() }
    );
  }

  // ✏️ Actualizar perfil del paciente
  updateProfile(profileData: UpdateProfileRequest): Observable<UpdateProfileResponse> {
    return this.http.put<UpdateProfileResponse>(
      `${environment.apiUrl}/users/profile`,
      profileData,
      { headers: this.getAuthHeaders() }
    );
  }

  // 🔐 Cambiar contraseña
  changePassword(passwordData: {
    currentPassword: string;
    newPassword: string;
  }): Observable<{ success: boolean; message: string }> {
    return this.http.put<{ success: boolean; message: string }>(
      `${environment.apiUrl}/users/change-password`,
      passwordData,
      { headers: this.getAuthHeaders() }
    );
  }

  // 📊 Obtener estadísticas del paciente (si el backend las tiene)
  getPatientStats(): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(
      `${this.baseUrl}/stats`,
      { headers: this.getAuthHeaders() }
    );
  }

  // 🗂️ Obtener documentos del paciente (si el backend los tiene)
  getPatientDocuments(): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(
      `${this.baseUrl}/documents`,
      { headers: this.getAuthHeaders() }
    );
  }

  // Métodos helper para el frontend

  // Extraer citas de la respuesta
  extractAppointments(response: PatientAppointmentsResponse): any[] {
    if (!response.success) {
      console.warn('⚠️ Respuesta no exitosa al extraer citas');
      return [];
    }
    return response.data?.appointments || [];
  }

  // Formatear fase de tratamiento para display
  getTreatmentPhaseDisplay(phase: string): string {
    const phaseMap: { [key: string]: string } = {
      'diagnosis': 'Diagnóstico',
      'pre_op': 'Pre-operatorio',
      'post_op': 'Post-operatorio',
      'chemotherapy': 'Quimioterapia',
      'radiotherapy': 'Radioterapia',
      'hormone_therapy': 'Terapia Hormonal',
      'follow_up': 'Seguimiento'
    };
    return phaseMap[phase] || phase;
  }

  // Formatear tipo de cáncer para display
  getCancerTypeDisplay(type: string): string {
    const typeMap: { [key: string]: string } = {
      'ductal_in_situ': 'Carcinoma Ductal in Situ',
      'lobular_in_situ': 'Carcinoma Lobulillar in Situ',
      'invasive_ductal': 'Carcinoma Ductal Invasivo',
      'invasive_lobular': 'Carcinoma Lobulillar Invasivo',
      'inflammatory': 'Cáncer Inflamatorio',
      'other': 'Otro tipo'
    };
    return typeMap[type] || type;
  }

  // CORREGIDO: Formatear intensidad de síntoma para display
  getIntensityDisplay(intensity: number): string {
    if (intensity <= 3) return 'Leve';
    if (intensity <= 6) return 'Moderado';
    return 'Severo';
  }

  // CORREGIDO: Obtener clase CSS para intensidad
  getIntensityClass(intensity: number): string {
    if (intensity <= 3) return 'intensity-low';
    if (intensity <= 6) return 'intensity-medium';
    return 'intensity-high';
  }

  // Formatear fecha para display
  formatDate(dateString: string): string {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  // Formatear hora para display
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

  // Verificar si hay tratamiento activo
  hasActiveTreatment(treatment: PatientTreatment | undefined): boolean {
    return !!treatment && treatment.isActive;
  }

  // Obtener medicamentos activos
  getActiveMedications(treatment: PatientTreatment | undefined): Medication[] {
    if (!treatment || !treatment.medications) return [];
    
    const now = new Date();
    return treatment.medications.filter(med => {
      const endDate = med.endDate ? new Date(med.endDate) : null;
      return !endDate || endDate > now;
    });
  }

  // Obtener síntomas recientes (últimos 7 días)
  getRecentSymptoms(treatment: PatientTreatment | undefined, days: number = 7): Symptom[] {
    if (!treatment || !treatment.symptoms) return [];
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return treatment.symptoms
      .filter(symptom => new Date(symptom.date) >= cutoffDate)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Obtener el estado de la cita en español
  getAppointmentStatusDisplay(status: string): string {
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

  // Obtener clase CSS para el estado de la cita
  getAppointmentStatusClass(status: string): string {
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
}
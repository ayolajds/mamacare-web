import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CitaSolicitud {
  tipoPreferido: string;
  motivo: string;
  sintomas: string[];
  paqueteId?: string;
}

export interface Paquete {
  _id: string;
  nombre: string;
  sesionesDisponibles: number;
  sesionesTotales: number;
  tipo: string; // 'presencial' | 'virtual' | 'mixto'
}

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  // Solicitar una nueva cita (SOLO PREFERENCIAS)
  solicitarCita(citaData: CitaSolicitud): Observable<any> {
    return this.http.post(`${environment.apiUrl}/appointments/solicitar`, citaData);
  }

  // Obtener citas del paciente actual - DEVUELVE LA RESPUESTA COMPLETA
  getMisCitas(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/appointments/mis-citas`);
  }

  // Obtener solicitudes pendientes del paciente - DEVUELVE LA RESPUESTA COMPLETA
  getMisSolicitudes(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/appointments/mis-solicitudes`);
  }

  // Cancelar cita
  cancelarCita(citaId: string): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/appointments/${citaId}/cancel`, {});
  }

  // Obtener información de un paquete
  getPaquete(paqueteId: string): Observable<Paquete> {
    return this.http.get<Paquete>(`${environment.apiUrl}/packages/${paqueteId}`);
  }

  // Verificar sesiones disponibles
  verificarSesionesDisponibles(pacienteId?: string): Observable<any> {
    const params: any = {};
    if (pacienteId) {
      params.pacienteId = pacienteId;
    }
    return this.http.get(`${environment.apiUrl}/appointments/check-sesiones`, { params });
  }
}
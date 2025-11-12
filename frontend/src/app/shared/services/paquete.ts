import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PaqueteAcompanamiento {
  id: number;
  nombre: string;
  categoria: 'basico' | 'intermedio' | 'integral';
  precio: number;
  kitIncluidoId: number;
  imagen?: string;
  descripcion?: string;
  elementos: string[];
  beneficios: {
    titulo: string;
    descripcion: string;
  }[];
  sesionesIncluidas: number;
  duracionSesion: number;
  tipoSesiones: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PaqueteComprado {
  paqueteId: number;
  paqueteNombre: string;
  fechaCompra: string;
  fechaExpiracion: string;
  estado: 'activo' | 'expirado' | 'proximamente';
  sesionesUsadas: number;
  sesionesTotales: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  private http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}/paquetes-acompanamiento`;

  // Obtener paquetes comprados por el usuario
  getMisPaquetes(): Observable<{success: boolean; data: PaqueteComprado[]}> {
    return this.http.get<{success: boolean; data: PaqueteComprado[]}>(`${this.BASE_URL}/mis-paquetes`);
  }

  // Agrega este método al servicio existente
usarSesion(paqueteId: number): Observable<{success: boolean; message: string; data: any}> {
  return this.http.put<{success: boolean; message: string; data: any}>(
    `${this.BASE_URL}/usar-sesion`,
    { paqueteId }
  );
}
}
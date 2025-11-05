import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface OrdenPaquete {
  _id: string;
  usuarioId: string;
  paqueteId: string;
  estado: string;
  metodoPago: string;
  bancoSeleccionado: string;
  total: number;
  createdAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class AcompanamientoService {
  private http = inject(HttpClient);
  // ✅ CORREGIR: Quitar el /api/v1 extra
  private readonly BASE_URL = `${environment.apiUrl}/paquetes-acompanamiento`;

  crearOrden(paqueteId: number, bancoSeleccionado: string): Observable<ApiResponse<OrdenPaquete>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = {
      paqueteId,
      bancoSeleccionado
    };

    // ✅ URL CORRECTA: http://localhost:4000/api/v1/paquetes-acompanamiento/orden
    return this.http.post<ApiResponse<OrdenPaquete>>(`${this.BASE_URL}/orden`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error creando orden:', error);
        const errorMessage = error.error?.message || 'Error al procesar la solicitud';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Obtener paquetes del usuario
  getMisPaquetes(): Observable<ApiResponse<any[]>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ApiResponse<any[]>>(`${this.BASE_URL}/mis-paquetes`, { headers }).pipe(
      catchError(error => {
        console.error('Error obteniendo paquetes:', error);
        const errorMessage = error.error?.message || 'Error al cargar tus paquetes';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Obtener todos los paquetes disponibles
  getPaquetes(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(this.BASE_URL).pipe(
      catchError(error => {
        console.error('Error obteniendo paquetes:', error);
        const errorMessage = error.error?.message || 'Error al cargar los paquetes';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private getToken(): string | null {
    return localStorage.getItem('MaCare_access');
  }
}
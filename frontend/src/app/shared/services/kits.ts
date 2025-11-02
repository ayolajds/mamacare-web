import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Orden {
  _id: string;
  usuarioId: string;
  kitId: string;
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
export class KitsService {
  private http = inject(HttpClient);
  private readonly BASE_URL = `${environment.apiUrl}/kits`;

  crearOrden(kitId: number, bancoSeleccionado: string): Observable<ApiResponse<Orden>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = {
      kitId,
      bancoSeleccionado
    };

    return this.http.post<ApiResponse<Orden>>(`${this.BASE_URL}/orden`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error creando orden:', error);
        const errorMessage = error.error?.message || 'Error al procesar la solicitud';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private getToken(): string | null {
    return localStorage.getItem('MaCare_access');
  }
}
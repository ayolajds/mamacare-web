import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TestimonioService {
  private apiUrl = `${environment.apiUrl}/testimonios`;

  constructor(private http: HttpClient) {}

  // Obtener solo testimonios APROBADOS (público)
  obtenerTestimonios(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // Tu backend devuelve { success: true, testimonios: [...] }
        if (response?.success && Array.isArray(response.testimonios)) {
          return response.testimonios;
        }
        return [];
      }),
      catchError(err => {
        console.warn('Error obteniendo testimonios:', err);
        return of([]); // Siempre devuelve array vacío en error
      })
    );
  }

  // Crear testimonio (va a estado "pendiente")
  crearTestimonio(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData).pipe(
      catchError((error) => {
        console.error('❌ Error enviando testimonio:', error);
        // Tu backend devuelve { message: '...' } en errores
        const errorMessage = error?.error?.message || error?.message || 'Error al enviar testimonio';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Verificar permisos del usuario
  verificarPermisos(): Observable<{ puedeDarTestimonio: boolean }> {
    return this.http.get<{ success: boolean; puedeDarTestimonio: boolean }>(
      `${this.apiUrl}/verificar-permisos`
    ).pipe(
      map(response => ({
        puedeDarTestimonio: response?.puedeDarTestimonio ?? false
      })),
      catchError((error) => {
        console.warn('Error verificando permisos:', error);
        return of({ puedeDarTestimonio: false });
      })
    );
  }

  // ====== MÉTODOS PARA ADMIN ======

  // Obtener TODOS los testimonios (para admin)
  obtenerTodosTestimonios(estado?: string): Observable<any[]> {
    let params = new HttpParams();
    if (estado) {
      params = params.set('estado', estado);
    }

    return this.http.get<any>(`${this.apiUrl}/admin/todos`, { params }).pipe(
      map(response => {
        if (response?.success && Array.isArray(response.testimonios)) {
          return response.testimonios;
        }
        return [];
      }),
      catchError(err => {
        console.warn('Error obteniendo testimonios admin:', err);
        return of([]);
      })
    );
  }

  // Obtener un testimonio específico (admin)
  obtenerTestimonio(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/${id}`).pipe(
      map(response => response?.testimonio || null),
      catchError(err => {
        console.warn('Error obteniendo testimonio:', err);
        return of(null);
      })
    );
  }

  // Aprobar testimonio (admin)
  aprobarTestimonio(id: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/admin/${id}/aprobar`, {}).pipe(
      catchError((error) => {
        console.error('❌ Error aprobando testimonio:', error);
        const errorMessage = error?.error?.message || 'Error al aprobar testimonio';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Rechazar testimonio (admin)
  rechazarTestimonio(id: string, motivo: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/admin/${id}/rechazar`, { motivo }).pipe(
      catchError((error) => {
        console.error('❌ Error rechazando testimonio:', error);
        const errorMessage = error?.error?.message || 'Error al rechazar testimonio';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // Eliminar testimonio (admin)
  eliminarTestimonio(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/admin/${id}`).pipe(
      catchError((error) => {
        console.error('❌ Error eliminando testimonio:', error);
        const errorMessage = error?.error?.message || 'Error al eliminar testimonio';
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
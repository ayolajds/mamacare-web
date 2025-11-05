import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'; // ajusta la ruta si es necesario

@Injectable({ providedIn: 'root' })
export class TestimonioService {
  // Si environment.apiUrl = 'http://localhost:4000/api/v1'
  // entonces aquí queda 'http://localhost:4000/api/v1/testimonios'
  private apiUrl = `${environment.apiUrl}/testimonios`;
  private backendDisponible = false;

  constructor(private http: HttpClient) {
    this.verificarBackend();
  }

  private verificarBackend() {
    const params = new HttpParams().set('t', Date.now().toString()); // cache-buster
    this.http.get(this.apiUrl, { params })
      .pipe(
        tap(() => this.backendDisponible = true),
        catchError(() => {
          this.backendDisponible = false;
          return of(null);
        })
      ).subscribe();
  }

  // 🔥 Devuelve SIEMPRE un array (aunque el backend responda {success, testimonios})
  // y evita el cache con un cache-buster 't'
  obtenerTestimonios(): Observable<any[]> {
    if (!this.backendDisponible) return of([]);

    const params = new HttpParams()
      .set('estado', 'todos')              // ver todo (si el back lo soporta)
      .set('t', Date.now().toString());    // evita 304

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(r => Array.isArray(r) ? r : (r?.testimonios ?? [])),
      tap(list => console.log('📥 testimonios recibidos:', list.length)),
      catchError(err => {
        console.warn('Backend no disponible o error al obtener testimonios:', err);
        this.backendDisponible = false;
        return of([]);
      })
    );
  }

  // ✅ Recibe FormData; NO seteamos Content-Type (el navegador pone boundary)
  crearTestimonio(formData: FormData): Observable<any> {
    if (!this.backendDisponible) {
      return throwError(() => new Error('Backend no disponible. Intenta más tarde.'));
    }
    return this.http.post<any>(this.apiUrl, formData).pipe(
      catchError((error) => {
        // Propaga el error real del servidor para debug útil
        return throwError(() => (error?.error || error || new Error('Error al conectar con el servidor.')));
      })
    );
  }

  verificarPermisos(): Observable<{ puedeDarTestimonio: boolean }> {
    if (!this.backendDisponible) return of({ puedeDarTestimonio: false });

    const params = new HttpParams().set('t', Date.now().toString()); // cache-buster
    return this.http.get<{ puedeDarTestimonio: boolean }>(`${this.apiUrl}/verificar-permisos`, { params }).pipe(
      catchError(() => of({ puedeDarTestimonio: false }))
    );
  }
}

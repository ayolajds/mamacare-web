import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// 🔥 INTERFACES ACTUALIZADAS CON ENTREGA FÍSICA
export interface KitComprado {
  _id?: string;
  kitId: number;
  kitNombre: string;
  fechaCompra: string;
  sesionesUsadas: number;
  estado: 'activo' | 'inactivo' | 'expirado';
  fechaExpiracion?: string;
  sesionesTotales?: number;
  
  // 🔥 NUEVO: Campos para entrega física
  estadoEntrega?: 'disponible' | 'agendado' | 'entregado';
  ubicacionRecogida?: string;
  codigoRecogida?: string;
  fechaEntregaReal?: string;
}

export interface Ubicacion {
  id: number;
  nombre: string;
  direccion: string;
  horario: string;
  telefono: string;
}

export interface Orden {
  _id: string;
  usuarioId: string;
  kitId: number;
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

  // 🔥 OBTENER MIS KITS COMPRADOS
  getMisKits(): Observable<ApiResponse<KitComprado[]>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ApiResponse<KitComprado[]>>(`${this.BASE_URL}/mis-kits`, { headers }).pipe(
      catchError(error => {
        console.error('Error obteniendo kits:', error);
        const errorMessage = error.error?.message || 'Error al obtener los kits';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 CREAR ORDEN DE KIT
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

  // 🔥 OBTENER TODOS LOS KITS DISPONIBLES
  getKitsDisponibles(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.BASE_URL}`).pipe(
      catchError(error => {
        console.error('Error obteniendo kits disponibles:', error);
        const errorMessage = error.error?.message || 'Error al obtener los kits disponibles';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 NUEVO: OBTENER UBICACIONES DE RECOGIDA
  getUbicaciones(): Observable<ApiResponse<Ubicacion[]>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ApiResponse<Ubicacion[]>>(`${this.BASE_URL}/ubicaciones`, { headers }).pipe(
      catchError(error => {
        console.error('Error obteniendo ubicaciones:', error);
        const errorMessage = error.error?.message || 'Error al obtener las ubicaciones';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 NUEVO: AGENDAR RECOGIDA DE KIT
  agendarRecogida(kitId: string, ubicacionId: number): Observable<ApiResponse<any>> {
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
      ubicacionId
    };

    return this.http.post<ApiResponse<any>>(`${this.BASE_URL}/agendar-recogida`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error agendando recogida:', error);
        const errorMessage = error.error?.message || 'Error al agendar la recogida';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 NUEVO: Verificar código (para voluntarios)
  verificarCodigo(codigoRecogida: string): Observable<ApiResponse<any>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = { codigoRecogida };

    return this.http.post<ApiResponse<any>>(`${this.BASE_URL}/verificar-codigo`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error verificando código:', error);
        const errorMessage = error.error?.message || 'Error al verificar el código';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 NUEVO: Marcar como entregado (para voluntarios)
  marcarKitEntregado(codigoRecogida: string): Observable<ApiResponse<any>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = { codigoRecogida };

    return this.http.post<ApiResponse<any>>(`${this.BASE_URL}/marcar-entregado`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error marcando como entregado:', error);
        const errorMessage = error.error?.message || 'Error al marcar como entregado';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  // 🔥 NUEVO: Obtener estadísticas (para voluntarios)
  getEstadisticasEntrega(): Observable<ApiResponse<any>> {
    const token = this.getToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ApiResponse<any>>(`${this.BASE_URL}/estadisticas-entrega`, { headers }).pipe(
      catchError(error => {
        console.error('Error obteniendo estadísticas:', error);
        const errorMessage = error.error?.message || 'Error al obtener las estadísticas';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  private getToken(): string | null {
    return localStorage.getItem('MaCare_access');
  }
  // En kits.service.ts
getHistorialEntregas(): Observable<ApiResponse<any[]>> {
  const token = this.getToken();
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get<ApiResponse<any[]>>(`${this.BASE_URL}/historial-entregas`, { headers });
}
}
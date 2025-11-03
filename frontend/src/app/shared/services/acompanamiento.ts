import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// ✅ TIPOS MEJOR DEFINIDOS
export type PlanNombre = 'Esencial' | 'Integral' | 'Premium';
export type KitNombre = 'Básico' | 'Intermedio' | 'Premium';

// ✅ NUEVAS INTERFACES PARA ÓRDENES DE PLAN
export interface OrdenPlan {
  _id: string;
  usuarioId: string;
  planNombre: PlanNombre;
  tipo: 'plan';
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

export interface Plan {
  nombre: PlanNombre;
  sesionesTotales: number;
  modalidades: string[];
  kitIncluido: KitNombre;
  vencimientoMeses: number;
  precio: number;
}

export interface PlanUsuario {
  _id?: string;
  nombre: PlanNombre;
  sesionesTotales: number;
  sesionesUsadas: number;
  estado: string;
  fechaCompra: string;
  vencimiento?: string;
  modalidades: string[];
  sesionesDisponibles: number;
  progreso: number;
  diasRestantes?: number;
  kitIncluido?: KitNombre;
}

export interface CompraPlanResponse {
  success: boolean;
  message: string;
  data: {
    plan: PlanUsuario;
    kitIncluido: string;
    sesionesDisponibles: number;
  };
}

export interface MisPlanesResponse {
  success: boolean;
  data: {
    planes: PlanUsuario[];
    tienePlanActivo: boolean;
    sesionesDisponiblesTotales: number;
  };
}

// ✅ INTERFACES PARA PAGOS CON PSE
export interface PagoPSEPlanRequest {
  planNombre: PlanNombre;
  tipoPersona: 'natural' | 'juridica';
  tipoDocumento: 'cc' | 'ce' | 'nit';
  numeroDocumento: string;
  nombre: string;
  email: string;
  telefono: string;
  banco: string;
}

export interface PagoPSEResponse {
  success: boolean;
  message: string;
  data: {
    idTransaccion: string;
    estado: string;
    urlPago: string;
    sessionId?: string;
  };
}

// ✅ INTERFACES PARA LOS OBJETOS DE CONFIGURACIÓN
interface PlanDescriptions {
  Esencial: string;
  Integral: string;
  Premium: string;
}

interface PlanFeatures {
  Esencial: string[];
  Integral: string[];
  Premium: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AcompanamientoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/plans`;

  // ✅ OBJETOS CON TIPOS EXPLÍCITOS
  private descriptions: PlanDescriptions = {
    'Esencial': 'Ideal para comenzar con acompañamiento cercano y herramientas esenciales.',
    'Integral': 'Programa completo que combina modalidades para una experiencia profunda.',
    'Premium': 'Máxima personalización, acompañamiento intensivo y recursos exclusivos.'
  };

  private features: PlanFeatures = {
    'Esencial': [
      '4 sesiones psicológicas presenciales',
      'Evaluación y plan terapéutico',
      'Seguimiento básico entre sesiones',
      'Materiales de apoyo digital',
      'Kit Básico incluido'
    ],
    'Integral': [
      '8 sesiones (presenciales + virtuales)',
      'Plan terapéutico integral',
      'Seguimiento continuo y recursos QR',
      'Acceso a comunidad de apoyo',
      '2 sesiones familiares incluidas',
      'Kit Intermedio incluido'
    ],
    'Premium': [
      '12 sesiones (presenciales + virtuales + a domicilio)',
      'Seguimiento intensivo y recursos premium',
      'Acompañamiento familiar completo',
      'Sesiones de emergencia incluidas',
      'Coaching emocional personalizado',
      'Kit Premium incluido'
    ]
  };

  /**
   * Obtener todos los planes disponibles
   */
  getPlanes(): Observable<{ success: boolean; data: Plan[] }> {
    return this.http.get<{ success: boolean; data: Plan[] }>(this.apiUrl);
  }

  /**
   * Comprar/activar un plan (DIRECTO - sin pasarela)
   */
  comprarPlan(planNombre: PlanNombre): Observable<CompraPlanResponse> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` }),
      'Content-Type': 'application/json'
    });

    console.log('🔐 Enviando token en headers para comprar plan:', !!token);

    return this.http.post<CompraPlanResponse>(
      `${this.apiUrl}/comprar`, 
      { planNombre },
      { headers }
    );
  }

  /**
   * ✅ NUEVO: Crear orden de compra para plan (igual que kits)
   */
  crearOrdenPlan(planNombre: PlanNombre, bancoSeleccionado: string): Observable<ApiResponse<OrdenPlan>> {
    const token = this.getAuthToken();
    
    if (!token) {
      return throwError(() => new Error('Usuario no autenticado'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const body = {
      planNombre,
      bancoSeleccionado
    };

    return this.http.post<ApiResponse<OrdenPlan>>(`${this.apiUrl}/orden`, body, { headers }).pipe(
      catchError(error => {
        console.error('Error creando orden de plan:', error);
        const errorMessage = error.error?.message || 'Error al procesar la solicitud';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * ✅ NUEVO: Procesar pago con PSE
   */
  procesarPagoPSE(pagoRequest: PagoPSEPlanRequest): Observable<PagoPSEResponse> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` }),
      'Content-Type': 'application/json'
    });

    console.log('💳 Procesando pago PSE para plan:', pagoRequest.planNombre);

    return this.http.post<PagoPSEResponse>(
      `${this.apiUrl}/pago-pse`, 
      pagoRequest,
      { headers }
    );
  }

  /**
   * ✅ NUEVO: Verificar estado de pago PSE
   */
  verificarEstadoPagoPSE(idTransaccion: string): Observable<any> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get(
      `${this.apiUrl}/estado-pago-pse/${idTransaccion}`,
      { headers }
    );
  }

  /**
   * Obtener los planes del usuario actual
   */
  getMisPlanes(): Observable<MisPlanesResponse> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get<MisPlanesResponse>(
      `${this.apiUrl}/mis-planes`,
      { headers }
    );
  }

  /**
   * Consumir una sesión (para uso interno del sistema)
   */
  consumirSesion(): Observable<{ success: boolean; message: string; sesionesDisponibles: number }> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` }),
      'Content-Type': 'application/json'
    });

    return this.http.post<{ success: boolean; message: string; sesionesDisponibles: number }>(
      `${this.apiUrl}/consumir-sesion`, 
      {},
      { headers }
    );
  }

  /**
   * Verificar si el usuario tiene un plan activo
   */
  tienePlanActivo(): Observable<{ success: boolean; data: { tienePlanActivo: boolean } }> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get<{ success: boolean; data: { tienePlanActivo: boolean } }>(
      `${this.apiUrl}/mis-planes`,
      { headers }
    );
  }

  /**
   * Obtener sesiones disponibles del usuario
   */
  getSesionesDisponibles(): Observable<{ success: boolean; data: { sesionesDisponiblesTotales: number } }> {
    const token = this.getAuthToken();
    
    const headers = new HttpHeaders({
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get<{ success: boolean; data: { sesionesDisponiblesTotales: number } }>(
      `${this.apiUrl}/mis-planes`,
      { headers }
    );
  }

  /**
   * Helper: Obtener información detallada de un plan por nombre
   */
  getPlanInfo(planNombre: PlanNombre): Observable<Plan | undefined> {
    return new Observable(subscriber => {
      this.getPlanes().subscribe({
        next: (response) => {
          const plan = response.data.find(p => p.nombre === planNombre);
          subscriber.next(plan);
          subscriber.complete();
        },
        error: (error) => {
          subscriber.error(error);
        }
      });
    });
  }

  /**
   * Helper: Calcular precio formateado
   */
  formatPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(precio);
  }

  /**
   * Helper: Obtener descripción del plan
   */
  getPlanDescription(planNombre: PlanNombre): string {
    return this.descriptions[planNombre] || '';
  }

  /**
   * Helper: Obtener características del plan
   */
  getPlanFeatures(planNombre: PlanNombre): string[] {
    return this.features[planNombre] || [];
  }

  /**
   * Helper: Validar si un string es un nombre de plan válido
   */
  isValidPlanNombre(nombre: string): nombre is PlanNombre {
    return ['Esencial', 'Integral', 'Premium'].includes(nombre);
  }

  /**
   * ✅ NUEVO: Obtener token de autenticación
   */
  private getAuthToken(): string | null {
    return localStorage.getItem('mamacare_access') || 
           localStorage.getItem('MaCare_access') ||
           localStorage.getItem('token');
  }

  /**
   * ✅ NUEVO: Obtener precios de planes
   */
  getPreciosPlanes(): { [key in PlanNombre]: number } {
    return {
      'Esencial': 280000,
      'Integral': 650000,
      'Premium': 1200000
    };
  }

  /**
   * ✅ NUEVO: Obtener bancos disponibles para PSE
   */
  getBancosPSE(): Array<{id: string, nombre: string}> {
    return [
      { id: 'bancolombia', nombre: 'Bancolombia' },
      { id: 'davivienda', nombre: 'Davivienda' },
      { id: 'bbva', nombre: 'BBVA' },
      { id: 'bogota', nombre: 'Banco de Bogotá' },
      { id: 'popular', nombre: 'Banco Popular' },
      { id: 'av_villas', nombre: 'AV Villas' },
      { id: 'caja_social', nombre: 'Banco Caja Social' },
      { id: 'occidente', nombre: 'Banco de Occidente' }
    ];
  }

  /**
   * ✅ NUEVO: Obtener tipos de documento para PSE
   */
  getTiposDocumento(): Array<{id: string, nombre: string}> {
    return [
      { id: 'cc', nombre: 'Cédula de Ciudadanía' },
      { id: 'ce', nombre: 'Cédula de Extranjería' },
      { id: 'nit', nombre: 'NIT' }
    ];
  }

  /**
   * ✅ NUEVO: Obtener tipos de persona para PSE
   */
  getTiposPersona(): Array<{id: string, nombre: string}> {
    return [
      { id: 'natural', nombre: 'Persona Natural' },
      { id: 'juridica', nombre: 'Persona Jurídica' }
    ];
  }
}
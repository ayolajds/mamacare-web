import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
}

// ✅ INTERFACE ACTUALIZADA CON kitsComprados
export interface KitComprado {
  kitId: number;
  kitNombre: string;
  fechaCompra: string;
  sesionesUsadas: number;
  estado: string;
}

// ✅ NUEVA INTERFACE PARA PAQUETES DE ACOMPAÑAMIENTO
export interface PaqueteAcompanamientoComprado {
  paqueteId: number;
  paqueteNombre: string;
  fechaCompra: string;
  sesionesUsadas: number;
  sesionesTotales: number;
  estado: string;
  fechaExpiracion?: string;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role?: string;
  phone?: string;
  birthDate?: string;
  createdAt?: string;
  kitsComprados?: KitComprado[]; // ✅ AGREGADO
  paquetesAcompanamientoComprados?: PaqueteAcompanamientoComprado[]; // ✅ NUEVO
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface UpdateProfileRequest {
  name: string;
  lastName: string;
  phone: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  user?: T;
  data?: any;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  resetToken?: string;
  resetURL?: string;
  userEmail?: string;
}

export interface VerifyTokenResponse {
  message: string;
  user: {
    email: string;
    name: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  private readonly MOCK = false;
  private readonly BASE = `${environment.apiUrl}/auth`;
  private readonly USERS_BASE = `${environment.apiUrl}/users`;
  private readonly KITS_BASE = `${environment.apiUrl}/kits`;
  private readonly PAQUETES_BASE = `${environment.apiUrl}/paquetes-acompanamiento`; // ✅ NUEVO
  private readonly ACCESS_KEY = 'MaCare_access';
  private readonly USER_KEY = 'MaCare_user';

  login(payload: LoginRequest): Observable<LoginResponse> {
    if (this.MOCK) {
      const mock: LoginResponse = {
        token: 'simulated-token',
        user: {
          id: '1',
          name: 'Usuario',
          lastName: 'Demo',
          email: payload.email,
          role: 'paciente',
          phone: '+57 300 123 4567',
          birthDate: '1990-01-01',
          kitsComprados: [], // ✅ AGREGADO
          paquetesAcompanamientoComprados: [] // ✅ NUEVO
        }
      };
      return of(mock).pipe(
        delay(500),
        tap(res => this.persist(res))
      );
    }

    return this.http.post<LoginResponse>(`${this.BASE}/login`, payload).pipe(
      tap(res => this.persist(res)),
      catchError(err => throwError(() => err))
    );
  }

  register(payload: RegisterRequest): Observable<User> {
    if (this.MOCK) {
      const mockUser: User = {
        id: crypto.randomUUID(),
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email,
        role: 'paciente',
        phone: payload.phone,
        birthDate: payload.birthDate,
        kitsComprados: [], // ✅ AGREGADO
        paquetesAcompanamientoComprados: [] // ✅ NUEVO
      };
      return of(mockUser).pipe(delay(500));
    }

    return this.http.post<LoginResponse>(`${this.BASE}/register`, payload).pipe(
      tap(res => this.persist(res)),
      map(res => res.user),
      catchError(err => throwError(() => err))
    );
  }

  updateProfile(payload: UpdateProfileRequest): Observable<ApiResponse<User>> {
    if (this.MOCK) {
      const updatedUser: User = {
        ...this.currentUser()!,
        ...payload
      };
      const mockResponse: ApiResponse<User> = {
        success: true,
        user: updatedUser
      };
      return of(mockResponse).pipe(
        delay(500),
        tap(response => {
          if (response.success && response.user) {
            this.updateLocalUser(response.user);
          }
        })
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });

    return this.http.put<ApiResponse<User>>(`${this.USERS_BASE}/profile`, payload, { headers }).pipe(
      tap(response => {
        if (response.success && response.user) {
          this.updateLocalUser(response.user);
        }
      }),
      catchError(err => throwError(() => err))
    );
  }

  changePassword(payload: ChangePasswordRequest): Observable<ApiResponse> {
    if (this.MOCK) {
      const mockResponse: ApiResponse = {
        success: true,
        message: 'Contraseña actualizada correctamente'
      };
      return of(mockResponse).pipe(delay(500));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });

    const { confirmPassword, ...backendPayload } = payload;

    return this.http.put<ApiResponse>(`${this.USERS_BASE}/change-password`, backendPayload, { headers }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  me(): Observable<User | null> {
    if (this.MOCK) return of(this.currentUser());

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });

    return this.http.get<{ user: User }>(`${this.BASE}/me`, { headers }).pipe(
      map(r => r.user),
      tap(u => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(u));
      }),
      catchError((error) => {
        console.error('Error en /me endpoint:', error);
        return of(null);
      })
    );
  }

  // ✅ FORGOT PASSWORD - CONECTADO AL BACKEND REAL
  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    if (this.MOCK) {
      return of({
        success: true,
        message: 'Si el email existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña'
      }).pipe(delay(1500));
    }

    return this.http.post<ForgotPasswordResponse>(`${this.BASE}/forgot-password`, { email })
      .pipe(
        catchError(error => {
          console.error('Error en forgotPassword:', error);
          return throwError(() => new Error(
            error.error?.message || 'Error al enviar el correo de recuperación'
          ));
        })
      );
  }

  // ✅ VERIFY RESET TOKEN - CONECTADO AL BACKEND REAL
  verifyResetToken(token: string): Observable<VerifyTokenResponse> {
    if (this.MOCK) {
      return of({
        message: 'Token válido',
        user: {
          email: 'test@example.com',
          name: 'Usuario Test'
        }
      }).pipe(delay(1000));
    }

    return this.http.get<VerifyTokenResponse>(`${this.BASE}/verify-reset-token/${token}`)
      .pipe(
        catchError(error => {
          console.error('Error en verifyResetToken:', error);
          return throwError(() => new Error(
            error.error?.message || 'Token inválido o expirado'
          ));
        })
      );
  }

  // ✅ RESET PASSWORD - CONECTADO AL BACKEND REAL
  resetPassword(token: string, newPassword: string): Observable<ApiResponse> {
    if (this.MOCK) {
      return of({
        success: true,
        message: 'Contraseña restablecida exitosamente'
      }).pipe(delay(1500));
    }

    return this.http.post<ApiResponse>(`${this.BASE}/reset-password/${token}`, { password: newPassword })
      .pipe(
        catchError(error => {
          console.error('Error en resetPassword:', error);
          return throwError(() => new Error(
            error.error?.message || 'Error al restablecer la contraseña'
          ));
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.ACCESS_KEY);
  }

  token(): string | null {
    return localStorage.getItem(this.ACCESS_KEY);
  }

  currentUser(): User | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  // ✅ MÉTODO CORREGIDO: Obtener usuario actual
  obtenerUsuarioActual(): User | null {
    return this.currentUser();
  }

  estaLogueado(): boolean {
    return this.isLoggedIn();
  }

  // ✅ MÉTODO NUEVO: Forzar actualización del usuario
  actualizarUsuarioDesdeBackend(): Observable<User | null> {
    return this.me();
  }

  // ✅ MÉTODO NUEVO: Actualizar usuario localmente
  actualizarUsuario(usuarioActualizado: User): void {
    if (this.estaLogueado()) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(usuarioActualizado));
    }
  }

  // ✅ MÉTODO NUEVO: Actualizar kits comprados desde el backend
  async actualizarKitsComprados(): Promise<void> {
    if (!this.estaLogueado()) {
      return;
    }

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token()}`
      });

      const response = await this.http.get<any>(`${this.KITS_BASE}/mis-kits`, { headers }).toPromise();
      
      if (response && response.success) {
        const usuario = this.obtenerUsuarioActual();
        if (usuario) {
          usuario.kitsComprados = response.data || [];
          this.actualizarUsuario(usuario);

        }
      }
    } catch (error) {
      console.error('💥 Error actualizando kits comprados:', error);
    }
  }

  // ✅ MÉTODO NUEVO: Verificar si usuario tiene un kit comprado
  tieneKitComprado(kitId: number): boolean {
    const usuario = this.obtenerUsuarioActual();
    if (!usuario || !usuario.kitsComprados) return false;

    return usuario.kitsComprados.some(
      (kit: KitComprado) => kit.kitId === kitId && kit.estado === 'activo'
    );
  }

  // ✅ MÉTODO NUEVO: Obtener IDs de kits comprados
  obtenerKitsCompradosIds(): number[] {
    const usuario = this.obtenerUsuarioActual();
    if (!usuario || !usuario.kitsComprados) return [];

    return usuario.kitsComprados
      .filter((kit: KitComprado) => kit.estado === 'activo')
      .map((kit: KitComprado) => kit.kitId);
  }

  // ✅ MÉTODOS NUEVOS PARA PAQUETES DE ACOMPAÑAMIENTO
  async actualizarPaquetesAcompanamientoComprados(): Promise<void> {
    if (!this.estaLogueado()) {
      return;
    }

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token()}`
      });

      const response = await this.http.get<any>(`${this.PAQUETES_BASE}/mis-paquetes`, { headers }).toPromise();
      
      if (response && response.success) {
        const usuario = this.obtenerUsuarioActual();
        if (usuario) {
          usuario.paquetesAcompanamientoComprados = response.data || [];
          this.actualizarUsuario(usuario);
        }
      } else {
        console.error('❌ Error en respuesta de mis-paquetes:', response);
      }
    } catch (error) {
      console.error('💥 Error actualizando paquetes de acompañamiento:', error);
    }
  }

  // ✅ Verificar si usuario tiene un paquete de acompañamiento comprado
  tienePaqueteAcompanamientoComprado(paqueteId: number): boolean {
    const usuario = this.obtenerUsuarioActual();
    if (!usuario || !usuario.paquetesAcompanamientoComprados) return false;

    return usuario.paquetesAcompanamientoComprados.some(
      (paquete: PaqueteAcompanamientoComprado) => 
        paquete.paqueteId === paqueteId && paquete.estado === 'activo'
    );
  }

  // ✅ Obtener IDs de paquetes de acompañamiento comprados
  obtenerPaquetesAcompanamientoCompradosIds(): number[] {
    const usuario = this.obtenerUsuarioActual();
    if (!usuario || !usuario.paquetesAcompanamientoComprados) return [];

    return usuario.paquetesAcompanamientoComprados
      .filter((paquete: PaqueteAcompanamientoComprado) => paquete.estado === 'activo')
      .map((paquete: PaqueteAcompanamientoComprado) => paquete.paqueteId);
  }

  // ✅ MÉTODO NUEVO: Actualizar ambos (kits y paquetes)
  async actualizarTodo(): Promise<void> {
    await Promise.all([
      this.actualizarKitsComprados(),
      this.actualizarPaquetesAcompanamientoComprados()
    ]);
  }

  private updateLocalUser(updatedUser: User): void {
    const currentUser = this.currentUser();
    if (currentUser) {
      const mergedUser = { ...currentUser, ...updatedUser };
      localStorage.setItem(this.USER_KEY, JSON.stringify(mergedUser));
    }
  }

  private persist(res: LoginResponse) {
    localStorage.setItem(this.ACCESS_KEY, res.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
  }
}
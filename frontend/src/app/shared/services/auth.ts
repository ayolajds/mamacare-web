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

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role?: string;
  phone?: string;
  birthDate?: string;
  createdAt?: string;
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
  private readonly ACCESS_KEY = 'Ma´Care_access';
  private readonly USER_KEY = 'Ma´Care_user';

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
          birthDate: '1990-01-01'
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
        birthDate: payload.birthDate
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
      tap(u => localStorage.setItem(this.USER_KEY, JSON.stringify(u))),
      catchError(() => of(null))
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
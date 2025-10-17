// src/app/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap, map, catchError } from 'rxjs/operators';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  nombre: string;
  email: string;
  role?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  /** Cambia a `false` para usar tu backend real */
  private readonly MOCK = true;

  private readonly BASE = '/api/auth';
  private readonly ACCESS_KEY = 'mamacare_access';
  private readonly USER_KEY = 'mamacare_user';

  // ======= Auth API =======

  login(payload: LoginRequest): Observable<LoginResponse> {
    if (this.MOCK) {
      return of({
        token: 'simulated-token',
        user: { id: '1', nombre: 'Usuario', email: payload.email }
      }).pipe(delay(800), tap(res => this.persist(res)));
    }

    return this.http.post<LoginResponse>(`${this.BASE}/login`, payload).pipe(
      tap(res => this.persist(res)),
      catchError(err => throwError(() => err))
    );
  }

  register(payload: RegisterRequest): Observable<User> {
    if (this.MOCK) {
      return of({
        id: crypto.randomUUID(),
        nombre: payload.nombre,
        email: payload.email
      }).pipe(delay(800));
    }

    return this.http.post<LoginResponse>(`${this.BASE}/register`, payload).pipe(
      tap(res => this.persist(res)),
      map(res => res.user),
      catchError(err => throwError(() => err))
    );
  }

  me(): Observable<User | null> {
    if (this.MOCK) return of(this.currentUser());
    return this.http.get<User>(`${this.BASE}/me`).pipe(
      tap(u => localStorage.setItem(this.USER_KEY, JSON.stringify(u))),
      catchError(() => of(null))
    );
  }

  logout(): void {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // ======= Helpers =======

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

  private persist(res: LoginResponse) {
    localStorage.setItem(this.ACCESS_KEY, res.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
  }
}

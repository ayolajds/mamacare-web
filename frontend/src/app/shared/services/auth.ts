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
  name: string;              // ← AGREGADO
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

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  private readonly MOCK = false;
  private readonly BASE = `${environment.apiUrl}/auth`;
  private readonly ACCESS_KEY = 'mamacare_access';
  private readonly USER_KEY = 'mamacare_user';

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

  private persist(res: LoginResponse) {
    localStorage.setItem(this.ACCESS_KEY, res.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
  }
}
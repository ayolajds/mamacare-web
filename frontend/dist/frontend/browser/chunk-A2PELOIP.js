import {
  environment
} from "./chunk-BPEFTJA2.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-6P7TFCYF.js";
import {
  Injectable,
  __objRest,
  __spreadValues,
  catchError,
  delay,
  inject,
  map,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-DEJWN6HZ.js";

// src/app/shared/services/auth.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  MOCK = false;
  BASE = `${environment.apiUrl}/auth`;
  USERS_BASE = `${environment.apiUrl}/users`;
  ACCESS_KEY = "Ma\xB4Care_access";
  USER_KEY = "Ma\xB4Care_user";
  login(payload) {
    if (this.MOCK) {
      const mock = {
        token: "simulated-token",
        user: {
          id: "1",
          name: "Usuario",
          lastName: "Demo",
          email: payload.email,
          role: "paciente",
          phone: "+57 300 123 4567",
          birthDate: "1990-01-01"
        }
      };
      return of(mock).pipe(delay(500), tap((res) => this.persist(res)));
    }
    return this.http.post(`${this.BASE}/login`, payload).pipe(tap((res) => this.persist(res)), catchError((err) => throwError(() => err)));
  }
  register(payload) {
    if (this.MOCK) {
      const mockUser = {
        id: crypto.randomUUID(),
        name: payload.name,
        lastName: payload.lastName,
        email: payload.email,
        role: "paciente",
        phone: payload.phone,
        birthDate: payload.birthDate
      };
      return of(mockUser).pipe(delay(500));
    }
    return this.http.post(`${this.BASE}/register`, payload).pipe(tap((res) => this.persist(res)), map((res) => res.user), catchError((err) => throwError(() => err)));
  }
  updateProfile(payload) {
    if (this.MOCK) {
      const updatedUser = __spreadValues(__spreadValues({}, this.currentUser()), payload);
      const mockResponse = {
        success: true,
        user: updatedUser
      };
      return of(mockResponse).pipe(delay(500), tap((response) => {
        if (response.success && response.user) {
          this.updateLocalUser(response.user);
        }
      }));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });
    return this.http.put(`${this.USERS_BASE}/profile`, payload, { headers }).pipe(tap((response) => {
      if (response.success && response.user) {
        this.updateLocalUser(response.user);
      }
    }), catchError((err) => throwError(() => err)));
  }
  changePassword(payload) {
    if (this.MOCK) {
      const mockResponse = {
        success: true,
        message: "Contrase\xF1a actualizada correctamente"
      };
      return of(mockResponse).pipe(delay(500));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });
    const _a = payload, { confirmPassword } = _a, backendPayload = __objRest(_a, ["confirmPassword"]);
    return this.http.put(`${this.USERS_BASE}/change-password`, backendPayload, { headers }).pipe(catchError((err) => throwError(() => err)));
  }
  me() {
    if (this.MOCK)
      return of(this.currentUser());
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`
    });
    return this.http.get(`${this.BASE}/me`, { headers }).pipe(map((r) => r.user), tap((u) => localStorage.setItem(this.USER_KEY, JSON.stringify(u))), catchError(() => of(null)));
  }
  // ✅ FORGOT PASSWORD - CONECTADO AL BACKEND REAL
  forgotPassword(email) {
    if (this.MOCK) {
      return of({
        success: true,
        message: "Si el email existe en nuestro sistema, recibir\xE1s un enlace para restablecer tu contrase\xF1a"
      }).pipe(delay(1500));
    }
    return this.http.post(`${this.BASE}/forgot-password`, { email }).pipe(catchError((error) => {
      console.error("Error en forgotPassword:", error);
      return throwError(() => new Error(error.error?.message || "Error al enviar el correo de recuperaci\xF3n"));
    }));
  }
  // ✅ VERIFY RESET TOKEN - CONECTADO AL BACKEND REAL
  verifyResetToken(token) {
    if (this.MOCK) {
      return of({
        message: "Token v\xE1lido",
        user: {
          email: "test@example.com",
          name: "Usuario Test"
        }
      }).pipe(delay(1e3));
    }
    return this.http.get(`${this.BASE}/verify-reset-token/${token}`).pipe(catchError((error) => {
      console.error("Error en verifyResetToken:", error);
      return throwError(() => new Error(error.error?.message || "Token inv\xE1lido o expirado"));
    }));
  }
  // ✅ RESET PASSWORD - CONECTADO AL BACKEND REAL
  resetPassword(token, newPassword) {
    if (this.MOCK) {
      return of({
        success: true,
        message: "Contrase\xF1a restablecida exitosamente"
      }).pipe(delay(1500));
    }
    return this.http.post(`${this.BASE}/reset-password/${token}`, { password: newPassword }).pipe(catchError((error) => {
      console.error("Error en resetPassword:", error);
      return throwError(() => new Error(error.error?.message || "Error al restablecer la contrase\xF1a"));
    }));
  }
  logout() {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
  isLoggedIn() {
    return !!localStorage.getItem(this.ACCESS_KEY);
  }
  token() {
    return localStorage.getItem(this.ACCESS_KEY);
  }
  currentUser() {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  updateLocalUser(updatedUser) {
    const currentUser = this.currentUser();
    if (currentUser) {
      const mergedUser = __spreadValues(__spreadValues({}, currentUser), updatedUser);
      localStorage.setItem(this.USER_KEY, JSON.stringify(mergedUser));
    }
  }
  persist(res) {
    localStorage.setItem(this.ACCESS_KEY, res.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(res.user));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-A2PELOIP.js.map

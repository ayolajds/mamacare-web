import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

// 👇 tu AuthService está en app/services/auth.ts
import { AuthService, LoginRequest } from '../../../shared/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  private router = inject(Router);
  private auth = inject(AuthService);

  email = '';
  password = '';
  showPassword = false;
  loading = false;
  errorMsg = '';

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid || this.loading) return;

    const payload: LoginRequest = {
      email: this.email.trim(),
      password: this.password
    };

    this.loading = true;
    this.errorMsg = '';

    this.auth.login(payload).subscribe({
      next: (res) => {
        this.loading = false;
        // ✅ token y user ya quedaron en localStorage por el servicio
        this.router.navigate(['/profile']); // ← página de perfil
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'Credenciales incorrectas';
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // tus rutas del router
  }

  navigateToResetPassword() {
    // cámbialo a '/reset-password' cuando exista
    this.router.navigate(['/contacto']);
  }
}

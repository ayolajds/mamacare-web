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
    
    // ✅ REDIRECCIÓN AUTOMÁTICA SEGÚN ROL
    const user = this.auth.currentUser(); // O usar res.user si está disponible
    const role = user?.role?.toLowerCase() || '';
    
    console.log('🔍 Rol detectado para redirección:', role);
    
    // Mapeo de redirecciones
    const roleRedirects: { [key: string]: string } = {
      'admin': '/Panel-admin',
      'administrador': '/Panel-admin',
      'profesional': '/Panel-profesional', 
      'professional': '/Panel-profesional',
      'paciente': '/Panel-paciente',
      'patient': '/Panel-paciente',
      'voluntario': '/Panel-voluntario',
      'volunteer': '/Panel-voluntario'
    };
    
    const redirectTo = roleRedirects[role] || '/profile';
    console.log('🎯 Redirigiendo a:', redirectTo);
    
    this.router.navigate([redirectTo]);
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
  this.router.navigate(['/forgot-password']);
}
}

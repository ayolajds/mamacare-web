import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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
    if (loginForm.invalid || this.loading) {
      this.showErrorAlert('Formulario incompleto', 'Por favor completa todos los campos requeridos');
      return;
    }

    const payload: LoginRequest = {
      email: this.email.trim(),
      password: this.password
    };

    this.loading = true;
    this.errorMsg = '';

    this.auth.login(payload).subscribe({
      next: (res) => {
        this.loading = false;
        
        // Mostrar SweetAlert de éxito con animación
        this.showSuccessAlert().then(() => {
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
        });
      },
      error: (err) => {
        this.loading = false;
        this.showErrorAlert('Error de acceso', err?.error?.message || 'Credenciales incorrectas');
      }
    });
  }

  // SweetAlert de éxito con animación
  private showSuccessAlert() {
    return Swal.fire({
      title: '¡Acceso exitoso!',
      text: 'Bienvenido/a de vuelta',
      icon: 'success',
      iconColor: '#4CAF50',
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      },
      showConfirmButton: true,
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#4CAF50',
      timer: 3000,
      timerProgressBar: true
    });
  }

  // SweetAlert de error
  private showErrorAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      iconColor: '#d32f2f',
      showClass: {
        popup: 'animate__animated animate__headShake animate__faster'
      },
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d33'
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToResetPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
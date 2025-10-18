import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [FormsModule, CommonModule],
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class Login {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Simulación de login exitoso
      const user = {
        id: 1,
        firstName: 'Usuario',
        lastName: 'Mamacare',
        email: this.email,
        role: 'user'
      };

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');

      // Redirigir directamente sin SweetAlert
      this.router.navigate(['/dashboard/mi-cuenta']);
    } else {
      // Mostrar alerta nativa si el formulario no es válido
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Método para redirigir a la página de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Método para redirigir a la página de restablecer contraseña
  navigateToResetPassword() {
    this.router.navigate(['/auth/reset-password']);
  }
}
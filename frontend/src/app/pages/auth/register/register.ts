import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, RegisterRequest } from '../../../shared/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  private router = inject(Router);
  private auth = inject(AuthService);

  // form model - TODO EN INGLÉS para consistencia
  name = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  birthDate = '';
  phone = '';

  // UI state
  showPassword = false;
  showConfirmPassword = false;
  loading = false;
  errorMsg = '';

  // date limits
  minDate = '';
  maxDate = '';

  ngOnInit() {
    const today = new Date();

    // mínima: 80 años atrás
    const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());
    this.minDate = eightyYearsAgo.toISOString().split('T')[0];

    // máxima: 18 años atrás
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    // por defecto: 18 años atrás
    this.birthDate = this.maxDate;
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.loading) return;

    // contraseñas iguales
    if (this.password !== this.confirmPassword) {
      this.errorMsg = 'Las contraseñas no coinciden.';
      return;
    }

    // validación de edad (18+)
    const birthDate = new Date(this.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age--;
    if (age < 18) {
      this.errorMsg = 'Debes tener al menos 18 años para registrarte.';
      return;
    }

    // payload que espera tu backend
    const payload: RegisterRequest = {
      name: this.name.trim(),
      lastName: this.lastName.trim(),
      email: this.email.trim(),
      password: this.password,
      phone: this.phone.trim(),
      birthDate: this.birthDate
    };

    this.loading = true;
    this.errorMsg = '';

    this.auth.register(payload).subscribe({
      next: (user) => {
        this.loading = false;
        // éxito: tu AuthService ya guardó token y user en localStorage
        alert(`✅ Registro exitoso: ${user.name} ${user.lastName}`);
        // redirige donde quieras:
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'Error al registrarse';
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
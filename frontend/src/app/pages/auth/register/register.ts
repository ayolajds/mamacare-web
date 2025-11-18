import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, RegisterRequest } from '../../../shared/services/auth';
import Swal from 'sweetalert2';

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

  // form model
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

  // Prevenir que se escriban números en nombre y apellido
  onNameKeyPress(event: KeyboardEvent) {
    const charCode = event.keyCode || event.which;
    const charStr = String.fromCharCode(charCode);
    
    // Permitir solo letras, espacios y caracteres con acento
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(charStr)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Prevenir que se escriban letras en teléfono
  onPhoneKeyPress(event: KeyboardEvent) {
    const charCode = event.keyCode || event.which;
    const charStr = String.fromCharCode(charCode);
    
    // Permitir solo números y teclas de control
    if (!/^\d$/.test(charStr) && 
        charCode !== 8 &&  // backspace
        charCode !== 9 &&  // tab
        charCode !== 37 && // left arrow
        charCode !== 39 && // right arrow
        charCode !== 46) { // delete
      event.preventDefault();
      return false;
    }
    return true;
  }

  // Validar y limpiar nombre y apellido
  onNameInput(event: any, field: 'name' | 'lastName') {
    const value = event.target.value;
    // Remover números y caracteres especiales (excepto espacios y acentos)
    const cleaned = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    if (this[field] !== cleaned) {
      this[field] = cleaned;
    }
  }

  // Validar y limpiar teléfono
  onPhoneInput(event: any) {
    const value = event.target.value;
    // Remover todo excepto números
    const numbersOnly = value.replace(/\D/g, '');
    // Limitar a 10 caracteres
    const limited = numbersOnly.slice(0, 10);
    if (this.phone !== limited) {
      this.phone = limited;
    }
  }

  // Validar que la contraseña tenga al menos 8 caracteres
  isPasswordValid(): boolean {
    return this.password.length >= 8;
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.loading) {
      this.showErrorAlert('Formulario incompleto', 'Por favor completa todos los campos requeridos');
      return;
    }

    // Validar nombre y apellido (solo letras)
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    if (!nameRegex.test(this.name.trim())) {
      this.showErrorAlert('Nombre inválido', 'El nombre solo puede contener letras y debe tener al menos 2 caracteres');
      return;
    }

    if (!nameRegex.test(this.lastName.trim())) {
      this.showErrorAlert('Apellido inválido', 'El apellido solo puede contener letras y debe tener al menos 2 caracteres');
      return;
    }

    // Validar teléfono (exactamente 10 números)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(this.phone)) {
      this.showErrorAlert('Teléfono inválido', 'El teléfono debe tener exactamente 10 números');
      return;
    }

    // Validar contraseña
    if (!this.isPasswordValid()) {
      this.showErrorAlert('Contraseña muy corta', 'La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // contraseñas iguales
    if (this.password !== this.confirmPassword) {
      this.showErrorAlert('Contraseñas no coinciden', 'Las contraseñas deben ser iguales');
      return;
    }

    // validación de edad (18+)
    const birthDate = new Date(this.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age--;
    if (age < 18) {
      this.showErrorAlert('Edad insuficiente', 'Debes tener al menos 18 años para registrarte');
      return;
    }

    // payload que espera tu backend
    const payload: RegisterRequest = {
      name: this.name.trim(),
      lastName: this.lastName.trim(),
      email: this.email.trim().toLowerCase(),
      password: this.password,
      phone: this.phone,
      birthDate: this.birthDate
    };

    this.loading = true;
    this.errorMsg = '';

    this.auth.register(payload).subscribe({
      next: (user) => {
        this.loading = false;
        this.showSuccessAlert('¡Registro exitoso!', `Bienvenido/a ${user.name} ${user.lastName}`);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        this.showErrorAlert('Error en registro', err?.error?.message || 'Error al registrarse. Por favor intenta nuevamente.');
      }
    });
  }

  // Métodos para SweetAlert
  private showSuccessAlert(title: string, message?: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      timer: 4000,
      showConfirmButton: true,
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#4CAF50'
    });
  }

  private showErrorAlert(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#d33'
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
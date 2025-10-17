import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  nombre = '';
  apellido = '';
  email = '';
  password = '';
  confirmPassword = '';
  fechaNacimiento = '';
  telefono = '';
  showPassword = false;
  showConfirmPassword = false;
  loading = false;

  minDate: string = '';
  maxDate: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const today = new Date();
    
    // Fecha mínima: hace 80 años
    const eightyYearsAgo = new Date(
      today.getFullYear() - 80,
      today.getMonth(),
      today.getDate()
    );
    this.minDate = eightyYearsAgo.toISOString().split('T')[0];

    // Fecha máxima: hoy menos 18 años
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    this.maxDate = eighteenYearsAgo.toISOString().split('T')[0];

    // Preseleccionar fecha por defecto (18 años atrás)
    this.fechaNacimiento = this.maxDate;
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.loading) return;

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Validación de edad
    const birthDate = new Date(this.fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      alert('Debes tener al menos 18 años para registrarte.');
      return;
    }

    this.loading = true;

    // Simulación de registro exitoso
    setTimeout(() => {
      const user = {
        id: 1,
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        fechaNacimiento: this.fechaNacimiento,
        telefono: this.telefono
      };

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      
      alert('✅ Registro exitoso');
      this.router.navigate(['/dashboard/mi-cuenta']);
      this.loading = false;
    }, 1500);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User, UpdateProfileRequest, ChangePasswordRequest } from '../../../shared/services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  private auth = inject(AuthService);
  private router = inject(Router);

  user: User | null = null;
  loading = true;
  showPasswordForm = false;
  updating = false;

  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  passwordVisibility = {
    current: false,
    new: false,
    confirm: false
  };

  // Datos editables del usuario
  editableUserData = {
    name: '',
    lastName: '',
    phone: ''
  };

  ngOnInit() {
    // 1) rellena al instante con cache
    const cached = this.auth.currentUser();
    if (cached) {
      this.user = cached as any;
      this.loadEditableData();
      this.loading = false;
    }

    // 2) refresca desde el backend
    this.auth.me().subscribe(u => {
      if (u) {
        this.user = u;
        this.loadEditableData();
      }
      this.loading = false;
    });
  }

  private loadEditableData() {
    if (this.user) {
      this.editableUserData = {
        name: this.user.name || '',
        lastName: this.user.lastName || '',
        phone: this.user.phone || ''
      };
    }
  }

  age(): number | null {
    if (!this.user?.birthDate) return null;
    const b = new Date(this.user.birthDate);
    const t = new Date();
    let a = t.getFullYear() - b.getFullYear();
    const m = t.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && t.getDate() < b.getDate())) a--;
    return a;
  }

  togglePasswordVisibility(field: 'current' | 'new' | 'confirm') {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }

  // 👇 MÉTODO ACTUALIZADO - LLAMADA REAL AL BACKEND
  updatePassword() {
    if (this.updating) return;

    // Validar que las contraseñas coincidan
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Validar longitud mínima
    if (this.passwordData.newPassword.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La nueva contraseña debe tener al menos 6 caracteres',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    this.updating = true;

    const passwordRequest: ChangePasswordRequest = {
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword,
      confirmPassword: this.passwordData.confirmPassword
    };



    this.auth.changePassword(passwordRequest).subscribe({
      next: (response) => {

        this.updating = false;
        
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Contraseña actualizada correctamente',
            confirmButtonText: 'Continuar',
            timer: 3000
          });
          this.showPasswordForm = false;
          this.resetPasswordForm();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error: ' + response.message,
            confirmButtonText: 'Entendido'
          });
        }
      },
      error: (error) => {

        this.updating = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al cambiar contraseña: ' + (error.error?.message || error.message),
          confirmButtonText: 'Entendido'
        });
      }
    });
  }

  // 👇 MÉTODO ACTUALIZADO - LLAMADA REAL AL BACKEND
  updateUserInfo() {
    if (this.updating) return;

    this.updating = true;

    const profileRequest: UpdateProfileRequest = {
      name: this.editableUserData.name,
      lastName: this.editableUserData.lastName,
      phone: this.editableUserData.phone
    };



    this.auth.updateProfile(profileRequest).subscribe({
      next: (response) => {

        this.updating = false;
        
        if (response.success && response.user) {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Información actualizada correctamente',
            confirmButtonText: 'Continuar',
            timer: 3000
          });
          // Actualizar datos locales con la respuesta del backend
          this.user = response.user;
          this.loadEditableData(); // Recargar datos editables por si acaso
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error: ' + response.message,
            confirmButtonText: 'Entendido'
          });
        }
      },
      error: (error) => {

        this.updating = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al actualizar información: ' + (error.error?.message || error.message),
          confirmButtonText: 'Entendido'
        });
      }
    });
  }

  private resetPasswordForm() {
    this.passwordData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    
    // Resetear visibilidad
    this.passwordVisibility = {
      current: false,
      new: false,
      confirm: false
    };
  }

  goChangePassword() {
    this.showPasswordForm = true;
  }
}
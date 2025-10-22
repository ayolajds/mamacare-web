import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User, UpdateProfileRequest, ChangePasswordRequest } from '../../../shared/services/auth'; // 👈 Agregar imports
import { Router } from '@angular/router';

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
  updating = false; // 👈 Agregar estado de carga

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
      this.user = cached;
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
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar longitud mínima
    if (this.passwordData.newPassword.length < 6) {
      alert('La nueva contraseña debe tener al menos 6 caracteres');
      return;
    }

    this.updating = true;

    const passwordRequest: ChangePasswordRequest = {
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword,
      confirmPassword: this.passwordData.confirmPassword
    };

    console.log('🔄 Enviando cambio de contraseña al backend...');

    this.auth.changePassword(passwordRequest).subscribe({
      next: (response) => {
        console.log('✅ Respuesta del backend:', response);
        this.updating = false;
        
        if (response.success) {
          alert('Contraseña actualizada correctamente');
          this.showPasswordForm = false;
          this.resetPasswordForm();
        } else {
          alert('Error: ' + response.message);
        }
      },
      error: (error) => {
        console.log('❌ Error del backend:', error);
        this.updating = false;
        alert('Error al cambiar contraseña: ' + (error.error?.message || error.message));
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

    console.log('🔄 Enviando actualización de perfil al backend...', profileRequest);

    this.auth.updateProfile(profileRequest).subscribe({
      next: (response) => {
        console.log('✅ Respuesta del backend:', response);
        this.updating = false;
        
        if (response.success && response.user) {
          alert('Información actualizada correctamente');
          // Actualizar datos locales con la respuesta del backend
          this.user = response.user;
          this.loadEditableData(); // Recargar datos editables por si acaso
        } else {
          alert('Error: ' + response.message);
        }
      },
      error: (error) => {
        console.log('❌ Error del backend:', error);
        this.updating = false;
        alert('Error al actualizar información: ' + (error.error?.message || error.message));
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
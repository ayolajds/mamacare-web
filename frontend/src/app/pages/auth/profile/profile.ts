import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, User } from '../../../shared/services/auth';
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

  updatePassword() {
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

    // Aquí iría la lógica para actualizar la contraseña
    console.log('Actualizando contraseña...', this.passwordData);
    
    // Simular actualización
    setTimeout(() => {
      alert('Contraseña actualizada correctamente');
      this.showPasswordForm = false;
      this.resetPasswordForm();
    }, 1000);
  }

  updateUserInfo() {
    // Aquí iría la lógica para actualizar la información del usuario
    console.log('Actualizando información del usuario...', this.editableUserData);
    
    // Simular actualización
    setTimeout(() => {
      alert('Información actualizada correctamente');
      if (this.user) {
        this.user.name = this.editableUserData.name;
        this.user.lastName = this.editableUserData.lastName;
        this.user.phone = this.editableUserData.phone;
      }
    }, 1000);
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
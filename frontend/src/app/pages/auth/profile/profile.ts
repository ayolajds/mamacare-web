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

  ngOnInit() {
    // 1) rellena al instante con cache
    const cached = this.auth.currentUser();
    if (cached) {
      this.user = cached;
      this.loading = false;
    }

    // 2) refresca desde el backend
    this.auth.me().subscribe(u => {
      if (u) this.user = u;
      this.loading = false;
    });
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

  getRegistrationDate(): string {
    if (!this.user?.createdAt) return '—';
    const date = new Date(this.user.createdAt);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  goChangePassword() {
    // cuando tengas la ruta, cámbiala aquí
    this.router.navigate(['/cambiar-password']);
  }
}
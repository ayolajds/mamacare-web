import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../shared/services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  private auth = inject(AuthService);
  private router = inject(Router);

  /* ===== Estados existentes ===== */
  isMobileMenuOpen = false;
  isLangOpen = false;
  currentLang: 'es' | 'en' = (localStorage.getItem('lang') as 'es' | 'en') || 'es';
  private langCloseTimeout: any;

  /* ===== NUEVO: Menú de usuario ===== */
  isUserMenuOpen = false;

  /* ===== Helpers de sesión ===== */
  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  get user(): User | null {
    return this.auth.currentUser();
  }

  get displayName(): string {
    const u = this.user;
    if (!u) return 'Mi cuenta';
    const name = (u.name || '').trim();
    const last = (u.lastName || '').trim();
    return [name].filter(Boolean).join(' ') || u.email;
  }

  // ✅ NUEVOS: Helpers para roles
  get isAdmin(): boolean {
    return (this.user?.role || '').toLowerCase() === 'admin';
  }

  get isProfesional(): boolean {
    const role = (this.user?.role || '').toLowerCase();
    return role === 'profesional' || role === 'professional';
  }

  get isPaciente(): boolean {
    const role = (this.user?.role || '').toLowerCase();
    return role === 'paciente' || role === 'patient';
  }

  get isVoluntario(): boolean {
    const role = (this.user?.role || '').toLowerCase();
    return role === 'voluntario' || role === 'volunteer';
  }

  /* ===== Acciones menú usuario ===== */
  toggleUserMenu(evt: Event): void {
    evt.stopPropagation();
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu(): void {
    this.isUserMenuOpen = false;
  }

  onLogout(): void {
    this.auth.logout();
    this.closeUserMenu();
    this.closeMobileMenu();
    this.router.navigate(['/inicio']);
  }

  /* ===== Métodos existentes (idioma) ===== */
  openLang(): void { 
    this.clearLangTimeout();
    this.isLangOpen = true; 
  }

  closeLang(): void { 
    this.clearLangTimeout();
    this.isLangOpen = false; 
  }

  closeLangWithDelay(): void {
    this.clearLangTimeout();
    this.langCloseTimeout = setTimeout(() => {
      this.isLangOpen = false;
    }, 300);
  }

  keepLangOpen(): void {
    this.clearLangTimeout();
  }

  private clearLangTimeout(): void {
    if (this.langCloseTimeout) {
      clearTimeout(this.langCloseTimeout);
      this.langCloseTimeout = null;
    }
  }

  toggleLang(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
    this.clearLangTimeout();
  }

  setLanguage(event: Event, lang: 'es' | 'en'): void {
    event.preventDefault();
    event.stopPropagation();
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.isLangOpen = false;
    this.clearLangTimeout();
  }

  /* ===== Métodos móvil ===== */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.closeLang();
      this.closeUserMenu();
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeLang();
    this.closeUserMenu();
  }

  /* ===== HostListeners ===== */
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;

    // Cerrar menús si el click fue fuera
    if (this.isMobileMenuOpen) {
      const clickedBurger = !!target.closest('.navbar__burger');
      const clickedMobilePanel = !!target.closest('.mobile');
      if (!clickedBurger && !clickedMobilePanel) {
        this.closeMobileMenu();
      }
    }

    if (this.isLangOpen) {
      const insideLang = !!target.closest('.lang');
      if (!insideLang) {
        this.closeLang();
      }
    }

    // Cerrar menú de usuario móvil si se hace click fuera
    if (this.isUserMenuOpen) {
      const insideUserMenu = !!target.closest('.mobile-user');
      if (!insideUserMenu) {
        this.closeUserMenu();
      }
    }
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeLang();
    this.closeUserMenu();
    this.closeMobileMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  ngOnDestroy(): void {
    this.clearLangTimeout();
  }
}
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  /* Desktop: Servicios */
  isDropdownOpen = false;
  private closeTimeout: any;

  /* Desktop: Idioma */
  isLangOpen = false;
  currentLang: 'es' | 'en' = (localStorage.getItem('lang') as 'es' | 'en') || 'es';

  /* Mobile */
  isMobileMenuOpen = false;
  isMobileServicesOpen = false;

  /* ===== Desktop: Servicios ===== */
  openDropdown(): void {
    this.clearCloseTimeout();
    this.isDropdownOpen = true;
    this.isLangOpen = false;
  }
  closeDropdown(): void {
    this.closeTimeout = setTimeout(() => (this.isDropdownOpen = false), 140);
  }
  keepDropdownOpen(): void {
    this.clearCloseTimeout();
    this.isDropdownOpen = true;
  }
  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) this.isLangOpen = false;
  }
  closeAllDropdowns(): void {
    this.clearCloseTimeout();
    this.isDropdownOpen = false;
    this.isLangOpen = false;
  }
  private clearCloseTimeout(): void {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }

  /* ===== Desktop: Idioma ===== */
  openLang(): void { this.isLangOpen = true; this.isDropdownOpen = false; }
  closeLang(): void { this.isLangOpen = false; }
  toggleLang(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
    if (this.isLangOpen) this.isDropdownOpen = false;
  }
  setLanguage(event: Event, lang: 'es' | 'en'): void {
    event.preventDefault();
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.isLangOpen = false;
    // integrar con i18n si aplica: this.translate.use(lang);
  }

  /* ===== Mobile ===== */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.isMobileServicesOpen = false;
    this.closeAllDropdowns();
  }
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isMobileServicesOpen = false;
  }
  toggleMobileServices(): void {
    this.isMobileServicesOpen = !this.isMobileServicesOpen;
  }

  /* Cerrar todo al hacer click fuera */
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;

    // Si panel móvil está abierto y el click NO fue en el burger, ciérralo con backdrop
    if (this.isMobileMenuOpen) {
      const clickedBurger = !!target.closest('.navbar__burger');
      const clickedMobilePanel = !!target.closest('.mobile');
      if (!clickedBurger && !clickedMobilePanel) {
        this.closeMobileMenu();
        return;
      }
    }

    const insideDropdown = !!target.closest('.navbar__dropdown');
    const insideLang = !!target.closest('.lang');
    if (!insideDropdown && !insideLang) this.closeAllDropdowns();
  }

  /* Escape cierra menús */
  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeAllDropdowns();
    this.closeMobileMenu();
  }

  /* Al redimensionar: si paso a desktop, cierro panel móvil */
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) this.closeMobileMenu();
  }
}

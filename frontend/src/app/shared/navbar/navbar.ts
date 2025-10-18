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
  /* ===== Desktop: Idioma ===== */
  isLangOpen = false;
  currentLang: 'es' | 'en' = (localStorage.getItem('lang') as 'es' | 'en') || 'es';
  private langCloseTimeout: any;

  /* ===== Mobile ===== */
  isMobileMenuOpen = false;

  /* ----- Desktop: Idioma ----- */
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
    }, 300); // Pequeño delay para permitir movimiento entre botón y menú
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
    // Si usas i18n: this.translate.use(lang);
  }

  /* ----- Mobile ----- */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.closeLang();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeLang();
  }

  /* Cerrar al hacer click fuera */
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event): void {
    const target = e.target as HTMLElement;

    // Si panel móvil está abierto y el click NO fue en el burger ni en el panel, ciérralo
    if (this.isMobileMenuOpen) {
      const clickedBurger = !!target.closest('.navbar__burger');
      const clickedMobilePanel = !!target.closest('.mobile');
      if (!clickedBurger && !clickedMobilePanel) {
        this.closeMobileMenu();
        return;
      }
    }

    // Cerrar selector de idioma si el click fue fuera (solo para desktop)
    if (this.isLangOpen) {
      const insideLang = !!target.closest('.lang');
      if (!insideLang) {
        this.closeLang();
      }
    }
  }

  /* Escape cierra menús */
  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeLang();
    this.closeMobileMenu();
  }

  /* Al redimensionar: si paso a desktop, cierro panel móvil */
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  /* Limpiar timeout al destruir componente */
  ngOnDestroy(): void {
    this.clearLangTimeout();
  }
}
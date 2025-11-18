import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss']
})
export class Inicio implements OnInit, OnDestroy {

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  // ===== HERO =====
  slides = [
    { image: 'img/1.jpg', alt: 'Acompañamiento emocional', title: 'Un espacio seguro para ser escuchada', subtitle: 'Te acompañamos con calidez, ciencia y comunidad.' },
    { image: 'img/2.jpg', alt: 'Resiliencia y liderazgo',  title: 'Tu fortaleza inspira cada paso',        subtitle: 'Transforma tu historia en poder personal.' },
    { image: 'img/3.jpg', alt: 'Bienestar y autocuidado',  title: 'Cuidarte es también disfrutar de quienes amas', subtitle: 'Pequeños hábitos, grandes cambios.' },
    { image: 'img/4.jpg', alt: 'Comunidad',                title: 'Juntas construimos comunidad',          subtitle: 'Vínculos que sostienen y transforman.' },
    { image: 'img/5.jpg', alt: 'Talleres educativos',      title: 'Aprender también es sanar',             subtitle: 'Herramientas prácticas para tu día a día.' },
    { image: 'img/6.jpg', alt: 'Esperanza y alegría',      title: 'En cada abrazo, la esperanza florece',  subtitle: 'Celebra cada avance, por pequeño que sea.' },
  ];

  primaryCta   = { label: 'Conócenos',         link: '/quienes-somos' };
  secondaryCta = { label: 'Explorar recursos', link: '/recursos' };

  currentSlide = 0;
  private intervalId?: number;
  private readonly autoMs = 6000;

  ngOnInit(): void {
    // marcar SVGs como seguros para que Angular no los elimine
    this.pilares = this.pilares.map(p => ({
      ...p,
      iconSafe: this.sanitizer.bypassSecurityTrustHtml(p.icon)
    }));

    // Sanitizar iconos de pasos
    this.pasos = this.pasos.map(p => ({
      ...p,
      iconSafe: this.sanitizer.bypassSecurityTrustHtml(p.icon)
    }));

    this.start();
  }

  ngOnDestroy(): void { this.stop(); }

  private start(): void {
    this.stop();
    this.intervalId = window.setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, this.autoMs);
  }

  private stop(): void {
    if (this.intervalId !== undefined) {
      window.clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  // Pausar cuando la pestaña no está visible (ahorra CPU)
  @HostListener('document:visibilitychange')
  onVisibility(): void {
    if (document.hidden) this.stop();
    else this.start();
  }

  // Navegar a historias con scroll arriba
  goToStories(): void {
    this.router.navigate(['/historias']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== CONTENIDO DE LAS SECCIONES =====

  pilares: Array<{ title: string; desc: string; icon: string; iconSafe?: SafeHtml }> = [
    {
      title: 'Información confiable',
      desc : 'Artículos y guías validadas por profesionales sobre salud mental y cáncer de mama.',
      icon : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M4 4h9a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.79.407L10 15l-4.21 2.907A.5.5 0 0 1 5 17.5V6a2 2 0 0 1 2-2Z"/>
              </svg>`
    },
    {
      title: 'Apoyo profesional',
      desc : 'Sesiones psicológicas y talleres para manejar ansiedad, estrés y depresión.',
      icon : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"/>
              </svg>`
    },
    {
      title: 'Comunidad',
      desc : 'Conecta con mujeres que entienden por lo que estás pasando.',
      icon : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-2.7 0-8 1.35-8 4v2h16v-2c0-2.65-5.3-4-8-4Zm-8 1c-2.21 0-6 1.1-6 3v2h6v-2c0-1.03.44-1.95 1.18-2.73A11.4 11.4 0 0 0 8 14Z"/>
              </svg>`
    }
  ];

  pasos: Array<{ n: number; t: string; d: string; icon: string; iconSafe?: SafeHtml }> = [
    { 
      n: 1, 
      t: 'Escucha',        
      d: 'Validamos tus emociones y tu contexto sin prisa ni juicios.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-9h2v6h-2zm0-4h2v2h-2z"/>
            </svg>`
    },
    { 
      n: 2, 
      t: 'Herramientas',   
      d: 'Mindfulness, respiración, escritura terapéutica y psicoeducación.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1zM9 4h6v2H9zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8h2v2h12V8h2z"/>
            </svg>`
    },
    { 
      n: 3, 
      t: 'Acompañamiento', 
      d: 'Metas realistas, seguimiento y cuidado también a tu familia.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm5-9h-2v2h2v2h-2v2h-2v-2h-2v2H9v-2H7v-2h2v-2H7V9h2V7h2v2h2V7h2v2h2z"/>
            </svg>`
    }
  ];

  testimonios = [
    {
      nombre: 'María',
      meta: '3 años en remisión',
      texto: 'Encontré un espacio seguro para hablar del miedo y volver a dormir.',
      img: 'inspiran/1.jpg'
    },
    {
      nombre: 'Carolina',
      meta: 'En tratamiento',
      texto: 'Las herramientas me ayudaron a organizar mis días y bajar la ansiedad.',
      img: 'inspiran/2.jpg'
    },
    {
      nombre: 'Carmen',
      meta: '10 años en remisión',
      texto: 'Ser mentora me permite dar lo que recibí. No hay mayor satisfacción que acompañar a otras.',
      img: 'inspiran/3.jpg'
    }
  ];

  servicios = [
    {
      title: 'Sesiones individuales',
      desc: 'Espacios personalizados uno a uno con psicólogas especializadas en cáncer de mama, para trabajar emociones, ansiedad y resiliencia.',
      img: 'img/1.jpg',
      link: '/servicios/sesiones'
    },
    {
      title: 'Terapia grupal',
      desc: 'Encuentros con otras mujeres que viven procesos similares. Compartir fortalece, inspira y ayuda a no sentirse sola.',
      img: 'img/4.jpg',
      link: '/servicios/grupal'
    },
    {
      title: 'Talleres educativos',
      desc: 'Actividades prácticas sobre autocuidado, manejo del estrés, comunicación familiar y herramientas psicológicas.',
      img: 'img/2.jpg',
      link: '/servicios/talleres'
    }
  ];

  // CTA WhatsApp
  whatsappPhone = '573243199016';
  get whatsappUrl(): string { return `https://wa.me/${this.whatsappPhone}`; }
}
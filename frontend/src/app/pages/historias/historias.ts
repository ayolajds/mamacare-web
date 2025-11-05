import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TestimonioService } from '../../shared/services/testimonio';

declare const lucide: any;

// Interface para backend + locales
interface Testimonio {
  id: number;               // Para testimonios locales (UI)
  _id?: string;             // Backend
  usuarioId?: string;       // Backend
  nombre: string;
  email?: string;           // Backend
  meta: string;
  textoCorto: string;
  historiaCompleta: string;
  impacto?: string;
  tags: string[];
  foto: string;
  colorCard?: string;
  ciudad?: string;          // Backend
  estado?: string;          // Backend
  createdAt?: string;       // Backend
}

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historias.html',
  styleUrls: ['./historias.scss']
})
export class Historias implements OnInit, AfterViewInit {

  private router = inject(Router);
  private testimonioService = inject(TestimonioService);

  modalAbierto = false;
  testimonioSeleccionado: Testimonio | null = null;

  // Paleta de colores suaves para las cards
  private cardColors = [
    'linear-gradient(135deg, #FF6B9D, #FFB6C1)', // Rosa
    'linear-gradient(135deg, #A78BFA, #C4B5FD)', // Lavanda
    'linear-gradient(135deg, #34D399, #6EE7B7)', // Verde menta
    'linear-gradient(135deg, #FCD34D, #FDE68A)', // Amarillo
  ];

  // Mapeo de tags a iconos Lucide
  private tagIcons: { [key: string]: string } = {
    'Ansiedad': 'brain',
    'Sueño': 'moon',
    'Aceptación': 'check-circle',
    'Organización': 'calendar',
    'Grupo de apoyo': 'users',
    'Mindfulness': 'eye',
    'Mentoría': 'graduation-cap',
    'Resiliencia': 'shield',
    'Propósito': 'target',
    'Vulnerabilidad': 'heart',
    'Autenticidad': 'user-check',
    'Expresión emocional': 'message-circle'
  };

  // Testimonios locales
  testimoniosLocales: Testimonio[] = [
    {
      id: 1,
      nombre: 'María González',
      meta: '3 años en remisión',
      textoCorto: 'Encontré un espacio seguro para hablar del miedo y volver a dormir tranquila.',
      historiaCompleta: `
        <p>Cuando me diagnosticaron cáncer de mama, el mundo se me vino encima...</p>
      `,
      impacto: 'He podido retomar mi trabajo como docente...',
      tags: ['Ansiedad', 'Sueño', 'Aceptación'],
      foto: 'inspiran/1.jpg',
      colorCard: this.cardColors[0]
    },
    {
      id: 2,
      nombre: 'Carolina Rodríguez',
      meta: 'En tratamiento activo',
      textoCorto: 'Las herramientas me ayudaron a organizar mis días y encontrar calma en la incertidumbre.',
      historiaCompleta: `
        <p>El tratamiento de quimioterapia era abrumador...</p>
      `,
      impacto: 'Manejo mejor los efectos secundarios...',
      tags: ['Organización', 'Grupo de apoyo', 'Mindfulness'],
      foto: 'inspiran/2.jpg',
      colorCard: this.cardColors[1]
    },
    {
      id: 3,
      nombre: 'Carmen Silva',
      meta: '10 años en remisión',
      textoCorto: 'Ser mentora me permite dar lo que recibí...',
      historiaCompleta: `
        <p>Hace una década, cuando me dijeron que tenía cáncer...</p>
      `,
      impacto: 'He acompañado a más de 20 mujeres...',
      tags: ['Mentoría', 'Resiliencia', 'Propósito'],
      foto: 'inspiran/3.jpg',
      colorCard: this.cardColors[2]
    }
  ];

  // Lista combinada
  testimonios: Testimonio[] = [...this.testimoniosLocales];

  ngOnInit(): void {
    this.cargarTestimoniosBackend();
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Cargar desde backend (el servicio YA devuelve array siempre)
  cargarTestimoniosBackend(): void {
    this.testimonioService.obtenerTestimonios().subscribe({
      next: (testimoniosBackend) => {
        const base = this.testimoniosLocales.length;

        const testimoniosTransformados: Testimonio[] = (testimoniosBackend || []).map((t: any, idx: number) => ({
          id: base + idx + 1,
          _id: t._id,
          usuarioId: t.usuarioId,
          nombre: t.nombre || 'Anónimo',
          email: t.email,
          meta: t.meta || 'En proceso de sanación',
          textoCorto: t.textoCorto || '',
          historiaCompleta: t.historiaCompleta || t.textoCorto || '',
          impacto: t.impacto || '',
          tags: Array.isArray(t.tags) ? t.tags : [],
          foto: t.foto || t.imagenPath || 'inspiran/default.jpg',
          colorCard: this.cardColors[(base + idx) % this.cardColors.length],
          ciudad: t.ciudad,
          estado: t.estado,
          createdAt: t.createdAt
        }));

        this.testimonios = [...this.testimoniosLocales, ...testimoniosTransformados];

        // Re-render de iconos (por si el DOM se actualizó)
        setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 0);
      },
      error: (error) => {
        console.error('Error cargando testimonios del backend:', error);
        // Mantén solo locales si falla
        this.testimonios = [...this.testimoniosLocales];
      }
    });
  }

  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }

  getTagIcon(tag: string): string {
    return this.tagIcons[tag] || 'help-circle';
  }

  handleImageError(event: Event, testimonio: Testimonio): void {
    const img = event.target as HTMLImageElement;
    const placeholder = document.createElement('div');
    placeholder.className = 'avatar-placeholder';
    placeholder.style.background = this.getCardColor(this.testimonios.indexOf(testimonio));
    placeholder.textContent = testimonio.nombre.charAt(0);
    img.parentNode?.replaceChild(placeholder, img);
  }

  handleModalImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const placeholder = document.createElement('div');
    placeholder.className = 'modal-avatar-placeholder';
    placeholder.textContent = this.testimonioSeleccionado?.nombre.charAt(0) || '?';
    img.parentNode?.replaceChild(placeholder, img);
  }

  abrirModal(testimonio: Testimonio): void {
    this.testimonioSeleccionado = testimonio;
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 100);
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.testimonioSeleccionado = null;
    document.body.style.overflow = 'auto';
  }

  verMasTestimonios(): void {
    this.router.navigate(['/mi-testimonio']);
  }

  compartirHistoria(): void {
    if (this.testimonioSeleccionado) {
      const texto = `"${this.testimonioSeleccionado.textoCorto}" - ${this.testimonioSeleccionado.nombre}`;
      if (navigator.share) {
        navigator.share({ title: 'Historia Inspiradora - Ma´Care', text: texto, url: window.location.href });
      } else {
        alert(`Comparte esta historia: ${texto}`);
      }
    }
  }

  inspirarme(): void {
    this.router.navigate(['/mi-testimonio']);
  }
}

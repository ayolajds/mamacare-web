import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TestimonioService } from '../../shared/services/testimonio';
import { environment } from '../../environments/environment'; // Asegúrate de importar environment

declare const lucide: any;

interface Testimonio {
  id: number;
  _id?: string;
  usuarioId?: string;
  nombre: string;
  email?: string;
  meta: string;
  textoCorto: string;
  historiaCompleta: string;
  impacto?: string;
  tags: string[];
  foto: string;
  colorCard?: string;
  ciudad?: string;
  estado?: string;
  createdAt?: string;
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
  cargando = true;
  private apiUrl = environment.apiUrl; // Agregar esta línea

  // Paleta de colores
  private cardColors = [
    'linear-gradient(135deg, #FF6B9D, #FFB6C1)',
    'linear-gradient(135deg, #A78BFA, #C4B5FD)', 
    'linear-gradient(135deg, #34D399, #6EE7B7)',
    'linear-gradient(135deg, #FCD34D, #FDE68A)',
  ];

  // Mapeo de tags a iconos
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

  // EMPEZAR VACÍO - sin datos locales
  testimonios: Testimonio[] = [];

  ngOnInit(): void {
    this.cargarTestimonios();
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  cargarTestimonios(): void {
    this.cargando = true;
    
    this.testimonioService.obtenerTestimonios().subscribe({
      next: (testimoniosBackend) => {

        // Transformar los datos del backend al formato que necesita la UI
        this.testimonios = (testimoniosBackend || []).map((t: any, idx: number) => {
          // Tu backend ya devuelve tags como array
          const tagsArray = Array.isArray(t.tags) ? t.tags : [];

          return {
            id: idx + 1,
            _id: t._id,
            usuarioId: t.usuarioId,
            nombre: t.nombre || 'Anónimo',
            email: t.email,
            meta: t.meta || 'En proceso de sanación',
            textoCorto: t.textoCorto || '',
            historiaCompleta: t.historiaCompleta || t.textoCorto || '',
            impacto: t.impacto || '',
            tags: tagsArray,
            // 🔧 CORREGIDO: Usar el método getImagenUrl para construir la URL correcta
            foto: this.getImagenUrl(t.imagenPath) || 'assets/images/default-avatar.jpg',
            colorCard: this.cardColors[idx % this.cardColors.length],
            ciudad: t.ciudad,
            estado: t.estado,
            createdAt: t.createdAt
          };
        });

        this.cargando = false;
        
        // Re-render de iconos después de que se actualice el DOM
        setTimeout(() => { 
          if (typeof lucide !== 'undefined') lucide.createIcons(); 
        }, 0);
      },
      error: (error) => {
        console.error('Error cargando testimonios:', error);
        this.testimonios = [];
        this.cargando = false;
        
        // Asegurar iconos incluso en error
        setTimeout(() => { 
          if (typeof lucide !== 'undefined') lucide.createIcons(); 
        }, 0);
      }
    });
  }

  // 🔧 AGREGAR ESTE MÉTODO PARA CONSTRUIR URLs DE IMAGEN
  getImagenUrl(imagenPath: string): string {
    if (!imagenPath) {
      return this.getDefaultAvatar('U');
    }



    // Base URL sin /api/v1
    const baseUrl = this.apiUrl.replace('/api/v1', '');
    
    // Si ya es una URL completa, devolverla tal cual
    if (imagenPath.startsWith('http')) {
      return imagenPath;
    }
    
    // Si la ruta YA INCLUYE /uploads/
    if (imagenPath.startsWith('/uploads/')) {
      const urlFinal = `${baseUrl}${imagenPath}`;

      return urlFinal;
    }
    
    // Si es solo el nombre del archivo
    if (!imagenPath.includes('/')) {
      const urlFinal = `${baseUrl}/uploads/${imagenPath}`;

      return urlFinal;
    }
    
    // Para cualquier otro caso
    const urlFinal = `${baseUrl}${imagenPath}`;

    return urlFinal;
  }

  // Avatar por defecto con inicial
  getDefaultAvatar(inicial: string): string {
    const colors = ['#4A90E2', '#50E3C2', '#9013FE', '#F5A623', '#D0021B'];
    const color = colors[inicial.charCodeAt(0) % colors.length];
    
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="${color}"/>
        <text x="50" y="60" text-anchor="middle" fill="white" font-size="40" font-family="Arial, sans-serif">${inicial}</text>
      </svg>
    `)}`;
  }

  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }

  getTagIcon(tag: string): string {
    return this.tagIcons[tag] || 'help-circle';
  }

  // 🔧 CORREGIR EL MANEJO DE ERRORES DE IMAGEN
  handleImageError(event: Event, testimonio: Testimonio): void {
    const img = event.target as HTMLImageElement;
    console.warn('❌ Error cargando imagen en historias:', testimonio.foto);
    
    // Usar avatar con inicial
    const inicial = testimonio.nombre.charAt(0).toUpperCase();
    img.src = this.getDefaultAvatar(inicial);
    
    // Prevenir futuros intentos
    testimonio.foto = this.getDefaultAvatar(inicial);
  }

  handleModalImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const inicial = this.testimonioSeleccionado?.nombre.charAt(0).toUpperCase() || '?';
    img.src = this.getDefaultAvatar(inicial);
  }

  abrirModal(testimonio: Testimonio): void {
    this.testimonioSeleccionado = testimonio;
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
    
    // Asegurar que los iconos del modal se rendericen
    setTimeout(() => { 
      if (typeof lucide !== 'undefined') lucide.createIcons(); 
    }, 100);
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
        navigator.share({ 
          title: 'Historia Inspiradora - Ma´Care', 
          text: texto, 
          url: window.location.href 
        });
      } else {
        // Fallback para navegadores que no soportan Web Share API
        const shareText = `${texto}\n\nLee más historias inspiradoras en: ${window.location.href}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(shareText).then(() => {
            alert('Historia copiada al portapapeles. ¡Compártela donde quieras!');
          });
        } else {
          alert(`Comparte esta historia:\n\n${shareText}`);
        }
      }
    }
  }

  inspirarme(): void {
    this.router.navigate(['/mi-testimonio']);
  }
}
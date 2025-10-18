import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare const lucide: any;

interface Testimonio {
  id: number;
  nombre: string;
  meta: string;
  textoCorto: string;
  historiaCompleta: string;
  impacto?: string;
  tags: string[];
  foto: string;
  colorCard?: string;
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

  modalAbierto = false;
  testimonioSeleccionado: Testimonio | null = null;

  // Paleta de colores suaves para las cards
  private cardColors = [
    'linear-gradient(135deg, #FF6B9D, #FFB6C1)', // Rosa suave
    'linear-gradient(135deg, #A78BFA, #C4B5FD)', // Lavanda
    'linear-gradient(135deg, #34D399, #6EE7B7)', // Verde menta
    'linear-gradient(135deg, #FCD34D, #FDE68A)', // Amarillo suave
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

  testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'María González',
      meta: '3 años en remisión',
      textoCorto: 'Encontré un espacio seguro para hablar del miedo y volver a dormir tranquila.',
      historiaCompleta: `
        <p>Cuando me diagnosticaron cáncer de mama, el mundo se me vino encima. El miedo era mi compañero constante, especialmente en las noches cuando todo estaba en silencio.</p>
        
        <p>Llegar a MamaCare fue encontrar un faro en la tormenta. A través de las sesiones de terapia y el kit de memorias, aprendí a expresar mis emociones de manera sana. Cada carta que escribía, cada foto que guardaba en mi caja de recuerdos, era un paso hacia la aceptación y la paz.</p>
        
        <p>Hoy, tres años después, miro hacia atrás y veo cómo cada herramienta, cada sesión, cada palabra de aliento, me ayudó a reconstruir mi vida no solo como sobreviviente, sino como una mujer más fuerte y consciente de su valor.</p>
      `,
      impacto: 'He podido retomar mi trabajo como docente y ahora ayudo a otras mujeres que atraviesan por lo mismo.',
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
        <p>El tratamiento de quimioterapia era abrumador. Los días se mezclaban, las citas médicas se acumulaban y la ansiedad por lo que vendría me paralizaba.</p>
        
        <p>El paquete integral de MamaCare llegó en el momento perfecto. Las sesiones virtuales me permitían conectar con mi psicóloga desde la comodidad de mi casa en los días difíciles, y el kit intermedio me dio estructura. Empecé a usar la agenda para organizar mis medicamentos y citas, y los ejercicios de mindfulness me ayudaban a centrarme en el presente.</p>
        
        <p>Lo más valioso fue entender que no estaba sola. El grupo de apoyo se convirtió en mi red de contención, donde podía compartir mis miedos y celebrar mis pequeños logros con mujeres que realmente entendían por lo que estaba pasando.</p>
      `,
      impacto: 'Manejo mejor los efectos secundarios del tratamiento y he encontrado una comunidad de apoyo invaluable.',
      tags: ['Organización', 'Grupo de apoyo', 'Mindfulness'],
      foto: 'inspiran/2.jpg',
      colorCard: this.cardColors[1]
    },
    {
      id: 3,
      nombre: 'Carmen Silva',
      meta: '10 años en remisión',
      textoCorto: 'Ser mentora me permite dar lo que recibí. No hay mayor satisfacción que acompañar a otras.',
      historiaCompleta: `
        <p>Hace una década, cuando me dijeron que tenía cáncer, pensé que mi vida había terminado. Hoy sé que fue un nuevo comienzo.</p>
        
        <p>El proceso con MamaCare no solo me ayudó a sanar emocionalmente, sino que me mostró la belleza de la resiliencia. Las herramientas que aprendí las he aplicado en cada área de mi vida, y la fuerza que encontré en mi propio proceso me llevó a querer ayudar a otras.</p>
        
        <p>Ahora, como mentora voluntaria, tengo el privilegio de caminar junto a otras mujeres en su proceso. Verlas transformar su miedo en fortaleza, su dolor en propósito, es el regago más grande que he recibido. Cada historia que acompaño sana una parte más de la mía.</p>
      `,
      impacto: 'He acompañado a más de 20 mujeres en su proceso y fundé un grupo de mentoras en mi ciudad.',
      tags: ['Mentoría', 'Resiliencia', 'Propósito'],
      foto: 'inspiran/3.jpg',
      colorCard: this.cardColors[2]
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }

  getTagIcon(tag: string): string {
    return this.tagIcons[tag] || 'help-circle';
  }

  handleImageError(event: Event, testimonio: Testimonio): void {
    const img = event.target as HTMLImageElement;
    // Crear placeholder con inicial del nombre
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
    
    // Re-inicializar icons en el modal
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.testimonioSeleccionado = null;
    document.body.style.overflow = 'auto';
  }

  verMasTestimonios(): void {
    // Aquí podrías cargar más testimonios o navegar a una página con todos
    alert('Próximamente tendremos más historias inspiradoras para ti');
  }

  compartirHistoria(): void {
    if (this.testimonioSeleccionado) {
      const texto = `"${this.testimonioSeleccionado.textoCorto}" - ${this.testimonioSeleccionado.nombre}`;
      if (navigator.share) {
        navigator.share({
          title: 'Historia Inspiradora - MamaCare',
          text: texto,
          url: window.location.href
        });
      } else {
        // Fallback para navegadores que no soportan Web Share API
        alert(`Comparte esta historia: ${texto}`);
      }
    }
  }

  inspirarme(): void {
    alert('¡Qué bonito que esta historia te haya inspirado! ¿Te gustaría compartir tu propia experiencia?');
  }
}
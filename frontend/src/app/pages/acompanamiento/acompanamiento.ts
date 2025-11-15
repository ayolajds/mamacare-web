import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth';
import { AcompanamientoService } from '../../shared/services/acompanamiento';

declare var lucide: any;

// Interfaces ACTUALIZADAS
interface Beneficio {
  titulo: string;
  descripcion: string;
}

interface PaqueteAcompanamiento {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
  elementos: string[];
  beneficios: Beneficio[];
  sesionesIncluidas: number;
  duracionSesion: number;
  tipoSesiones: string[];
}

interface PaqueteComprado {
  paqueteId: number;
  paqueteNombre: string;
  fechaCompra: string;
  sesionesUsadas: number;
  sesionesTotales: number;
  estado: string;
}

@Component({
  selector: 'app-acompanamiento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acompanamiento.html',
  styleUrls: ['./acompanamiento.scss'],
})
export class Acompanamiento implements OnInit, AfterViewInit {
  private authService = inject(AuthService);
  private acompanamientoService = inject(AcompanamientoService);
  private router = inject(Router);

  // ✅ DATOS ESTÁTICOS ACTUALIZADOS
  paquetes: PaqueteAcompanamiento[] = [
    {
      id: 1,
      nombre: "Paquete Básico de Acompañamiento",
      categoria: "basico",
      precio: 378180,
      imagen: "assets/images/paquete-basico.jpg",
      descripcion: "Ideal para comenzar con acompañamiento cercano y herramientas esenciales.",
      elementos: [
        "4 sesiones psicológicas presenciales",
        "Evaluación y plan terapéutico",
        "Seguimiento básico entre sesiones", 
        "Materiales de apoyo digital",
        "Kit Básico incluido"
      ],
      beneficios: [
        {
          titulo: "Acompañamiento inicial",
          descripcion: "Proceso guiado para comenzar tu sanación emocional"
        },
        {
          titulo: "Herramientas prácticas",
          descripcion: "Técnicas y estrategias para el manejo emocional diario"
        },
        {
          titulo: "Espacio seguro",
          descripcion: "Ambiente confidencial para expresar tus emociones libremente"
        }
      ],
      sesionesIncluidas: 4,
      duracionSesion: 60,
      tipoSesiones: ["individual"]
    },
    {
      id: 2,
      nombre: "Paquete Intermedio de Acompañamiento",
      categoria: "intermedio",
      precio: 505120,
      imagen: "assets/images/paquete-intermedio.jpg",
      descripcion: "Programa completo que combina modalidades para una experiencia profunda.",
      elementos: [
        "8 sesiones (presenciales + virtuales)",
        "Plan terapéutico integral", 
        "Seguimiento continuo y recursos QR",
        "Acceso a comunidad de apoyo",
        "2 sesiones familiares incluidas",
        "Kit Intermedio incluido"
      ],
      beneficios: [
        {
          titulo: "Atención integral",
          descripcion: "Combinación de trabajo individual y apoyo grupal"
        },
        {
          titulo: "Proceso profundo",
          descripcion: "Acompañamiento sostenido para trabajo emocional más intenso"
        },
        {
          titulo: "Red de apoyo", 
          descripcion: "Conecta con otras personas en procesos similares"
        },
        {
          titulo: "Seguimiento continuo",
          descripcion: "Monitoreo constante de tu evolución y ajuste de estrategias"
        }
      ],
      sesionesIncluidas: 8,
      duracionSesion: 60,
      tipoSesiones: ["individual", "grupal"]
    },
    {
      id: 3,
      nombre: "Paquete Integral de Acompañamiento",
      categoria: "integral",
      precio: 684420,
      imagen: "assets/images/paquete-integral.jpg",
      descripcion: "Máxima personalización, acompañamiento intensivo y recursos exclusivos.",
      elementos: [
        "12 sesiones (presenciales + virtuales + a domicilio)",
        "Seguimiento intensivo y recursos premium",
        "Acompañamiento familiar completo", 
        "Sesiones de emergencia incluidas",
        "Coaching emocional personalizado",
        "Kit Integral incluido"
      ],
      beneficios: [
        {
          titulo: "Atención integral",
          descripcion: "Acompañamiento completo e integral para transformación profunda"
        },
        {
          titulo: "Enfoque familiar",
          descripcion: "Incluye trabajo con tu sistema familiar para apoyo integral"
        },
        {
          titulo: "Talleres especializados",
          descripcion: "Acceso a workshops exclusivos sobre temas específicos"
        },
        {
          titulo: "Soporte prioritario",
          descripcion: "Atención y seguimiento continuo durante todo el proceso"
        },
        {
          titulo: "Recursos ilimitados",
          descripcion: "Acceso completo a toda nuestra biblioteca de recursos"
        }
      ],
      sesionesIncluidas: 12,
      duracionSesion: 60,
      tipoSesiones: ["individual", "grupal", "taller"]
    }
  ];

  filteredPaquetes: PaqueteAcompanamiento[] = [];
  selectedPaquete: PaqueteAcompanamiento | null = null;
  activeFilter: string = 'all';
  isLoading: boolean = false;
  
  // Para trackear paquetes comprados con sesiones disponibles
  paquetesConSesiones: number[] = [];

  // Modalidades de atención
  modalidades = [
    {
      titulo: 'Sesiones Individuales',
      icon: 'user',
      bullets: [
        'Atención personalizada one-on-one',
        'Enfoque en tus necesidades específicas',
        'Horarios flexibles',
        'Seguimiento continuo'
      ],
      cta: {
        label: 'Ver paquetes individuales',
        link: '/acompanamiento#paquetes'
      }
    },
    {
      titulo: 'Sesiones Grupales',
      icon: 'users',
      bullets: [
        'Grupos de apoyo reducidos',
        'Intercambio de experiencias',
        'Aprendizaje colectivo',
        'Red de apoyo emocional'
      ],
      cta: {
        label: 'Ver grupos disponibles',
        link: '/acompanamiento#paquetes'
      }
    },
    {
      titulo: 'Acompañamiento Familiar',
      icon: 'heart',
      bullets: [
        'Sesiones con familiares',
        'Fortalecimiento de vínculos',
        'Comunicación efectiva',
        'Apoyo integral familiar'
      ],
      cta: {
        label: 'Conocer más',
        link: '/acompanamiento#paquetes'
      }
    }
  ];

  ngOnInit(): void {
    this.loadPaquetes();
    this.cargarPaquetesComprados();
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  private loadPaquetes(): void {
    this.filteredPaquetes = this.paquetes;
    this.initIcons();
  }

  private cargarPaquetesComprados(): void {
    if (this.authService.estaLogueado()) {
      this.authService.actualizarPaquetesAcompanamientoComprados().then(() => {
        const usuario = this.authService.obtenerUsuarioActual();
        if (usuario && usuario.paquetesAcompanamientoComprados) {
          // ✅ SOLO considerar paquetes con sesiones disponibles
          this.paquetesConSesiones = usuario.paquetesAcompanamientoComprados
            .filter((paquete: PaqueteComprado) => 
              paquete.estado === 'activo' && 
              paquete.sesionesUsadas < paquete.sesionesTotales
            )
            .map((paquete: PaqueteComprado) => paquete.paqueteId);
          
          console.log('💝 Paquetes con sesiones disponibles:', this.paquetesConSesiones);
        }
      });
    }
  }

  // ✅ MÉTODO PRINCIPAL: Solicitar paquete
  solicitarPaquete(paquete: PaqueteAcompanamiento): void {
    console.log('🔄 SOLICITANDO PAQUETE:', paquete.nombre, paquete.id);

    // ✅ VALIDAR SI YA TIENE EL PAQUETE CON SESIONES DISPONIBLES
    if (this.yaTienePaqueteConSesiones(paquete.id)) {
      alert('✅ Ya tienes este paquete con sesiones disponibles. Puedes acceder a él desde tu panel de usuario.');
      return;
    }

    if (!this.authService.estaLogueado()) {
      const confirmar = confirm('Para solicitar un paquete necesitas estar logueado. ¿Deseas ir al login?');
      if (confirmar) {
        this.router.navigate(['/login'], { 
          queryParams: { returnUrl: `/pago-acompanamiento/${paquete.id}` } 
        });
      }
      return;
    }

    // Navegar al componente de pagos
    this.router.navigate(['/pago-acompanamiento', paquete.id]);
  }

  // ✅ Verificar si ya tiene un paquete CON SESIONES DISPONIBLES
  yaTienePaqueteConSesiones(paqueteId: number): boolean {
    return this.paquetesConSesiones.includes(paqueteId);
  }

  // ✅ Verificar si ya tuvo el paquete pero se le acabaron las sesiones
  tuvoPaqueteAnteriormente(paqueteId: number): boolean {
    const usuario = this.authService.obtenerUsuarioActual();
    if (!usuario?.paquetesAcompanamientoComprados) return false;
    
    return usuario.paquetesAcompanamientoComprados.some(
      (p: PaqueteComprado) => p.paqueteId === paqueteId
    );
  }

  filterPaquetes(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredPaquetes = this.paquetes;
    } else {
      this.filteredPaquetes = this.paquetes.filter(paquete => paquete.categoria === category);
    }
  }

  showPaqueteDetails(paquete: PaqueteAcompanamiento): void {
    this.selectedPaquete = paquete;
    this.initIcons();
  }

  closeModal(): void {
    this.selectedPaquete = null;
  }

  getPaqueteIcon(category: string): string {
    switch(category) {
      case 'basico':
        return '<i data-lucide="user"></i>';
      case 'intermedio':
        return '<i data-lucide="users"></i>';
      case 'integral':
        return '<i data-lucide="crown"></i>';
      default:
        return '<i data-lucide="heart"></i>';
    }
  }

  getBenefitIcon(): string {
    return '<i data-lucide="check-circle"></i>';
  }

  getCategoryName(category: string): string {
    switch(category) {
      case 'basico': return 'Básico';
      case 'intermedio': return 'Intermedio';
      case 'integral': return 'Integral';
      default: return category;
    }
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Métodos de navegación
  agendarCita(): void {
    this.router.navigate(['/contacto']);
  }

  scrollToPaquetes(): void {
    document.getElementById('paquetes')?.scrollIntoView({ behavior: 'smooth' });
  }

  contactar(): void {
    this.router.navigate(['/contacto']);
  }

  iconFor(tipo: string): string {
    switch(tipo) {
      case 'individual': return 'user';
      case 'grupal': return 'users';
      case 'familiar': return 'heart';
      case 'taller': return 'settings';
      default: return 'circle';
    }
  }

  // ✅ MÉTODO MEJORADO - Texto del botón según estado
  getTextoBoton(paquete: PaqueteAcompanamiento): string {
    if (this.yaTienePaqueteConSesiones(paquete.id)) {
      return '✅ Sesiones Activas';
    }
    
    if (this.tuvoPaqueteAnteriormente(paquete.id)) {
      return '🔄 Comprar Nuevamente';
    }
    
    return 'Comprar Paquete';
  }

  private initIcons(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }
}
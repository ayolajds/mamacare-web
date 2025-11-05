import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth';
import { AcompanamientoService } from '../../shared/services/acompanamiento';

declare var lucide: any;

// Interfaces
interface Beneficio {
  titulo: string;
  descripcion: string;
}

interface PaqueteAcompanamiento {
  id: number;
  nombre: 'Paquete 1' | 'Paquete 2' | 'Paquete 3';
  categoria: string;
  precio: number;
  precioOriginal?: number;
  descuento?: number;
  imagen: string;
  descripcion: string;
  elementos: string[];
  beneficios: Beneficio[];
  sesionesIncluidas: number;
  duracionSesion: number;
  tipoSesiones: string[];
  stock: number;
  popular: boolean;
  nuevo: boolean;
  badge?: string;
  kit: string;
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

  // ✅ DATOS ESTÁTICOS con nombres Esencial, Integral, Premium
  paquetes: PaqueteAcompanamiento[] = [
    {
      id: 1,
      nombre: "Paquete 1",
      categoria: "Paquete 1",
      precio: 378180,
      imagen: "assets/images/paquete-basico.jpg",
      descripcion: "Ideal para comenzar con acompañamiento cercano y herramientas esenciales.",
      elementos: [
      "Kit Básico",
      "Terapia Presencial",
      "Talleres psicoeducativos",
      "Acceso digital"
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
      duracionSesion: 50,
      tipoSesiones: ["individual"],
      stock: 10,
      popular: true,
      nuevo: true,
      kit: "Básico"
    },
    {
      id: 2,
      nombre: "Paquete 2",
      categoria: "Paquete 2",
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
      tipoSesiones: ["individual", "grupal"],
      stock: 8,
      popular: true,
      nuevo: false,
      badge: "RECOMENDADO",
      kit: "Intermedio"
    },
    {
      id: 3,
      nombre: "Paquete 3",
      categoria: "Paquete 3",
      precio: 684420,
      imagen: "assets/images/paquete-premium.jpg",
      descripcion: "Máxima personalización, acompañamiento intensivo y recursos exclusivos.",
      elementos: [
        "12 sesiones (presenciales + virtuales + a domicilio)",
        "Seguimiento intensivo y recursos premium",
        "Acompañamiento familiar completo",
        "Sesiones de emergencia incluidas",
        "Coaching emocional personalizado",
        "Kit Premium incluido"
      ],
      beneficios: [
        {
          titulo: "Atención premium",
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
      tipoSesiones: ["individual", "grupal", "taller"],
      stock: 5,
      popular: false,
      nuevo: true,
      kit: "Premium"
    }
  ];

  filteredPaquetes: PaqueteAcompanamiento[] = [];
  selectedPaquete: PaqueteAcompanamiento | null = null;
  activeFilter: string = 'all';
  isLoading: boolean = false;
  
  // Para trackear paquetes comprados
  paquetesComprados: number[] = [];

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
          this.paquetesComprados = usuario.paquetesAcompanamientoComprados
            .filter((paquete: PaqueteComprado) => paquete.estado === 'activo')
            .map((paquete: PaqueteComprado) => paquete.paqueteId);
          console.log('💝 Paquetes comprados cargados:', this.paquetesComprados);
        }
      });
    }
  }

  // ✅ MÉTODO PRINCIPAL: Solicitar paquete
  solicitarPaquete(paquete: PaqueteAcompanamiento): void {
    console.log('🔄 SOLICITANDO PAQUETE:', paquete.nombre, paquete.id);

    // ✅ VALIDAR SI YA TIENE EL PAQUETE
    if (this.yaTienePaquete(paquete.id)) {
      alert('✅ Ya tienes este paquete comprado. Puedes acceder a él desde tu panel de usuario.');
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

  // ✅ Verificar si ya tiene un paquete
  yaTienePaquete(paqueteId: number): boolean {
    return this.paquetesComprados.includes(paqueteId);
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

  tieneDescuento(paquete: PaqueteAcompanamiento): boolean {
    return !!paquete.descuento && paquete.descuento > 0;
  }

  estaEnStock(paquete: PaqueteAcompanamiento): boolean {
    return paquete.stock > 0;
  }

  getBadgeClass(paquete: PaqueteAcompanamiento): string {
    if (paquete.badge) return 'badge-recomendado';
    if (paquete.nuevo) return 'badge-new';
    if (paquete.popular) return 'badge-popular';
    if (paquete.descuento) return 'badge-discount';
    return '';
  }

  getBadgeText(paquete: PaqueteAcompanamiento): string {
    if (paquete.badge) return paquete.badge;
    if (paquete.nuevo) return 'Nuevo';
    if (paquete.popular) return 'Popular';
    if (paquete.descuento) return `-${paquete.descuento}%`;
    return '';
  }

  getStockClass(paquete: PaqueteAcompanamiento): string {
    if (paquete.stock === 0) return 'out-of-stock';
    if (paquete.stock < 5) return 'low-stock';
    return 'in-stock';
  }

  getStockText(paquete: PaqueteAcompanamiento): string {
    if (paquete.stock === 0) return 'Agotado temporalmente';
    if (paquete.stock < 5) return `Últimas ${paquete.stock} unidades`;
    return `Disponible (${paquete.stock} en stock)`;
  }

  getPaqueteIcon(category: string): string {
    switch(category) {
      case 'basico':
        return '<i data-lucide="user"></i>';
      case 'intermedio':
        return '<i data-lucide="users"></i>';
      case 'premium':
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
      case 'premium': return 'Premium';
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

  getTextoBoton(paquete: PaqueteAcompanamiento): string {
    if (this.yaTienePaquete(paquete.id)) return '✅ Ya Comprado';
    if (!this.estaEnStock(paquete)) return 'Agotado';
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
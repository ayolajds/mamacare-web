import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth';

interface Beneficio {
  titulo: string;
  descripcion: string;
}

interface Kit {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  precioOriginal?: number;
  descuento?: number;
  imagen: string;
  descripcion: string;
  elementos: string[];
  beneficios: Beneficio[];
  stock: number;
  popular: boolean;
  nuevo: boolean;
}

// ✅ INTERFACE ACTUALIZADA CON kitsComprados
interface KitComprado {
  kitId: number;
  kitNombre: string;
  fechaCompra: string;
  sesionesUsadas: number;
  estado: string;
}

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role?: string;
  phone?: string;
  birthDate?: string;
  createdAt?: string;
  kitsComprados?: KitComprado[]; // ✅ AGREGADO
}

declare var lucide: any;

@Component({
  selector: 'app-kits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kits.html',
  styleUrls: ['./kits.scss'],
})
export class Kits implements OnInit, AfterViewInit {
  // ✅ INYECTAR servicios
  private authService = inject(AuthService);
  private router = inject(Router);

  kits: Kit[] = [];
  filteredKits: Kit[] = [];
  selectedKit: Kit | null = null;
  activeFilter: string = 'all';
  isLoading: boolean = true;
  
  // ✅ NUEVA PROPIEDAD para trackear kits comprados
  kitsComprados: number[] = [];

  // Solo 3 kits como solicitado
  private sampleKits: Kit[] = [
    {
      id: 1,
      nombre: 'Kit Esencial de Recuerdos',
      categoria: 'basico',
      precio: 89900,
      precioOriginal: 119900,
      descuento: 25,
      imagen: 'assets/images/kit-basico.jpg',
      descripcion: 'Perfecto para comenzar a preservar tus momentos más especiales de forma organizada y emotiva.',
      elementos: [
        'Caja de memorias con diseño premium',
        '5 sobres archivadores para fotos',
        'Etiquetas decorativas personalizables',
        'Kit de escritura con pluma especial',
        'Guía de preservación de recuerdos',
        'Tarjetas para anotaciones emocionales'
      ],
      beneficios: [
        {
          titulo: 'Organización terapéutica',
          descripcion: 'Ayuda a procesar emociones mediante la organización de recuerdos'
        },
        {
          titulo: 'Conexión emocional',
          descripcion: 'Fomenta la reflexión y conexión con momentos significativos'
        },
        {
          titulo: 'Reducción de estrés',
          descripcion: 'Actividad mindfulness que promueve la calma mental'
        }
      ],
      stock: 15,
      popular: true,
      nuevo: true
    },
    {
      id: 2,
      nombre: 'Kit Memoria Avanzada',
      categoria: 'intermedio',
      precio: 169900,
      imagen: 'assets/images/kit-intermedio.jpg',
      descripcion: 'Para quienes buscan profundizar en la preservación de sus historias con elementos especializados.',
      elementos: [
        'Archivo expandible de alta calidad',
        'Sobres de conservación acid-free',
        'Kit completo de scrapbooking',
        'Materiales para journaling creativo',
        'Plantillas de documentación',
        'Accesorios de decoración premium',
        'Guía avanzada de preservación'
      ],
      beneficios: [
        {
          titulo: 'Expresión creativa',
          descripcion: 'Libera tu creatividad mientras preservas momentos importantes'
        },
        {
          titulo: 'Legado familiar',
          descripcion: 'Crea un tesoro familiar que perdurará por generaciones'
        },
        {
          titulo: 'Terapia narrativa',
          descripcion: 'Sanación a través de la organización y narración de tu historia'
        },
        {
          titulo: 'Mindfulness profundo',
          descripcion: 'Inmersión total en el momento presente mediante recuerdos'
        }
      ],
      stock: 8,
      popular: true,
      nuevo: false
    },
    {
      id: 3,
      nombre: 'Kit Legado Eterno',
      categoria: 'premium',
      precio: 299900,
      imagen: 'assets/images/kit-premium.jpg',
      descripcion: 'La experiencia definitiva para crear un legado familiar que trascienda el tiempo.',
      elementos: [
        'Caja de conservación museum-grade',
        'Sistema completo de archivo profesional',
        'Materiales de preservación de máxima calidad',
        'Kit de digitalización incluido',
        'Asesoría personalizada de organización',
        'Elementos heirloom de lujo',
        'Certificado de autenticidad',
        'Acceso a comunidad exclusiva'
      ],
      beneficios: [
        {
          titulo: 'Preservación eterna',
          descripcion: 'Tus recuerdos se conservarán en perfecto estado por décadas'
        },
        {
          titulo: 'Herencia emocional',
          descripcion: 'Crea un patrimonio familiar cargado de significado y amor'
        },
        {
          titulo: 'Sanación generacional',
          descripcion: 'Proceso terapéutico que beneficia a toda la familia'
        },
        {
          titulo: 'Legado tangible',
          descripcion: 'Transforma memorias en un tesoro físico perdurable'
        }
      ],
      stock: 5,
      popular: false,
      nuevo: true
    }
  ];

  ngOnInit(): void {
    this.loadKits();
    this.cargarKitsComprados(); // ✅ Cargar kits comprados al iniciar
  }

  ngAfterViewInit(): void {
    // Inicializar icons de Lucide después de que la vista se renderice
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  private loadKits(): void {
    this.isLoading = true;
    
    setTimeout(() => {
      this.kits = this.sampleKits;
      this.filteredKits = this.kits;
      this.isLoading = false;
      
      // Re-inicializar icons después de cargar los datos
      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 100);
    }, 1500);
  }

  // ✅ MÉTODO CORREGIDO: Cargar kits comprados del usuario
  private cargarKitsComprados(): void {
    if (this.authService.estaLogueado()) {
      const usuario = this.authService.obtenerUsuarioActual();
      console.log('👤 Usuario actual:', usuario);
      
      if (usuario && usuario.kitsComprados) {
        // Obtener solo los IDs de los kits activos
        this.kitsComprados = usuario.kitsComprados
          .filter((kit: KitComprado) => kit.estado === 'activo')
          .map((kit: KitComprado) => kit.kitId);
        console.log('📦 Kits comprados cargados:', this.kitsComprados);
      } else {
        console.log('ℹ️ Usuario no tiene kits comprados');
        this.kitsComprados = [];
      }
    } else {
      console.log('🔒 Usuario no logueado');
      this.kitsComprados = [];
    }
  }

  // ✅ MÉTODO: Verificar si ya tiene un kit
  yaTieneKit(kitId: number): boolean {
    const tiene = this.kitsComprados.includes(kitId);
    console.log(`🔍 Verificando kit ${kitId}: ${tiene ? 'YA COMPRADO' : 'DISPONIBLE'}`);
    return tiene;
  }

  filterKits(category: string): void {
    this.activeFilter = category;
    
    if (category === 'all') {
      this.filteredKits = this.kits;
    } else {
      this.filteredKits = this.kits.filter(kit => kit.categoria === category);
    }
  }

  showKitDetails(kit: Kit): void {
    this.selectedKit = kit;
    // Re-inicializar icons cuando se abre el modal
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  closeModal(): void {
    this.selectedKit = null;
  }

  // ✅ MÉTODO CORREGIDO - Con validación de kit comprado
  solicitarKit(kit: Kit): void {
    console.log('🔄 SOLICITANDO KIT:', kit.id);
    console.log('📦 Kits comprados actuales:', this.kitsComprados);
    console.log('❓ ¿Ya tiene kit?:', this.yaTieneKit(kit.id));

    // ✅ VALIDAR SI YA TIENE EL KIT
    if (this.yaTieneKit(kit.id)) {
      alert('✅ Ya tienes este kit comprado. Puedes acceder a él desde tu panel de usuario.');
      return;
    }

    if (!this.authService.estaLogueado()) {
      const confirmar = confirm('Para solicitar un kit necesitas estar logueado. ¿Deseas ir al login?');
      if (confirmar) {
        this.router.navigate(['/login'], { 
          queryParams: { returnUrl: `/pagos/${kit.id}` } 
        });
      }
      return;
    }

    // Navegar al componente de pagos
    this.router.navigate(['/pagos', kit.id]);
  }

  // Métodos auxiliares
  tieneDescuento(kit: Kit): boolean {
    return !!kit.descuento && kit.descuento > 0;
  }

  estaEnStock(kit: Kit): boolean {
    return kit.stock > 0;
  }

  getBadgeClass(kit: Kit): string {
    if (kit.nuevo) return 'badge-new';
    if (kit.popular) return 'badge-popular';
    if (kit.descuento) return 'badge-discount';
    return '';
  }

  getBadgeText(kit: Kit): string {
    if (kit.nuevo) return 'Nuevo';
    if (kit.popular) return 'Popular';
    if (kit.descuento) return `-${kit.descuento}%`;
    return '';
  }

  getStockClass(kit: Kit): string {
    if (kit.stock === 0) return 'out-of-stock';
    if (kit.stock < 5) return 'low-stock';
    return 'in-stock';
  }

  getStockText(kit: Kit): string {
    if (kit.stock === 0) return 'Agotado temporalmente';
    if (kit.stock < 5) return `Últimas ${kit.stock} unidades`;
    return `Disponible (${kit.stock} en stock)`;
  }

  getKitIcon(category: string): string {
    switch(category) {
      case 'basico':
        return '<i data-lucide="archive"></i>';
      case 'intermedio':
        return '<i data-lucide="layers"></i>';
      case 'premium':
        return '<i data-lucide="crown"></i>';
      default:
        return '<i data-lucide="package"></i>';
    }
  }

  getBenefitIcon(): string {
    return '<i data-lucide="heart"></i>';
  }

  getCategoryName(category: string): string {
    switch(category) {
      case 'basico': return 'Kit Básico';
      case 'intermedio': return 'Kit Intermedio';
      case 'premium': return 'Kit Premium';
      default: return category;
    }
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
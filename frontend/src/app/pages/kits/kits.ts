import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth';

interface Kit {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion: string;
  elementos: string[];
}

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
  kitsComprados?: KitComprado[];
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
  private authService = inject(AuthService);
  private router = inject(Router);

  kits: Kit[] = [];
  filteredKits: Kit[] = [];
  selectedKit: Kit | null = null;
  activeFilter: string = 'all';
  isLoading: boolean = true;
  kitsComprados: number[] = [];

private sampleKits: Kit[] = [
  {
    id: 1,
    nombre: 'Kit Básico',
    categoria: 'basico', // ✅ DEBE SER 'basico' (minúscula)
    precio: 63800,
    imagen: 'assets/images/kit-basico.jpg', // ✅ Ruta completa
    descripcion: 'Selección básica para iniciar tu ritual y documentar tus momentos.',
    elementos: ["Diario", "Mazo", "Accesorio"]
  },
  {
    id: 2,
    nombre: 'Kit Intermedio', 
    categoria: 'intermedio', // ✅ DEBE SER 'intermedio' (minúscula)
    precio: 79200,
    imagen: 'assets/images/kit-intermedio.jpg', // ✅ Ruta completa
    descripcion: 'Incluye acceso digital y elementos extra para profundizar en tu cuidado.',
    elementos: ["Acceso digital (QR)", "Espejo", "Accesorio"]
  },
  {
    id: 3,
    nombre: 'Kit Integral',
    categoria: 'integral', // ✅ CAMBIAR de 'Kit Integral' a 'integral'
    precio: 112200,
    imagen: 'assets/images/kit-integral.jpg', // ✅ Ruta completa
    descripcion: 'Experiencia completa con elementos para un ritual más profundo.',
    elementos: ["Vela", "Pañoleta", "Caja"]
  }
];

  ngOnInit(): void {
    this.loadKits();
    this.cargarKitsComprados();
  }

  ngAfterViewInit(): void {
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
      
      setTimeout(() => {
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }, 100);
    }, 1500);
  }

  private cargarKitsComprados(): void {
    if (this.authService.estaLogueado()) {
      const usuario = this.authService.obtenerUsuarioActual();
      console.log('👤 Usuario actual:', usuario);
      
      if (usuario && usuario.kitsComprados) {
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
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }

  closeModal(): void {
    this.selectedKit = null;
  }

  solicitarKit(kit: Kit): void {
    console.log('🔄 SOLICITANDO KIT:', kit.id);
    console.log('📦 Kits comprados actuales:', this.kitsComprados);
    console.log('❓ ¿Ya tiene kit?:', this.yaTieneKit(kit.id));

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

    this.router.navigate(['/pagos', kit.id]);
  }

  getKitIcon(category: string): string {
    switch(category) {
      case 'basico':
        return '<i data-lucide="archive"></i>';
      case 'intermedio':
        return '<i data-lucide="layers"></i>';
      case 'integral':
        return '<i data-lucide="crown"></i>';
      default:
        return '<i data-lucide="package"></i>';
    }
  }

getCategoryName(category: string): string {
  switch(category) {
    case 'basico': return 'Kit Básico';
    case 'intermedio': return 'Kit Intermedio';
    case 'integral': return 'Kit Integral'; // ✅ CORREGIR "integral" no "integral"
    default: return category;
  }
}

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
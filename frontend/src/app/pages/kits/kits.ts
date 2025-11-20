import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth';
import Swal from 'sweetalert2';

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
      categoria: 'basico',
      precio: 63800,
      imagen: '/imagenes/basic.png',
      descripcion: 'Selección básica para iniciar tu ritual y documentar tus momentos.',
      elementos: ["Diario", "Mazo", "Accesorio"]
    },
    {
      id: 2,
      nombre: 'Kit Intermedio', 
      categoria: 'intermedio',
      precio: 79200,
      imagen: 'imagenes/inter.png',
      descripcion: 'Incluye acceso digital y elementos extra para profundizar en tu cuidado.',
      elementos: ["Acceso digital (QR)", "Espejo", "Accesorio"]
    },
    {
      id: 3,
      nombre: 'Kit Integral',
      categoria: 'integral',
      precio: 112200,
      imagen: 'imagenes/inte.png',
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

      
      if (usuario && usuario.kitsComprados) {
        this.kitsComprados = usuario.kitsComprados
          .filter((kit: KitComprado) => kit.estado === 'activo')
          .map((kit: KitComprado) => kit.kitId);

      } else {

        this.kitsComprados = [];
      }
    } else {

      this.kitsComprados = [];
    }
  }

  yaTieneKit(kitId: number): boolean {
    const tiene = this.kitsComprados.includes(kitId);

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

  async solicitarKit(kit: Kit): Promise<void> {


    // ✅ CONFIRMACIÓN PARA KITS MÚLTIPLES
    if (this.yaTieneKit(kit.id)) {
      const result = await Swal.fire({
        title: '¿Comprar otro kit?',
        html: `
          <div style="text-align: left; color: #374151; line-height: 1.6;">
            <p>Ya tienes el <strong>${kit.nombre}</strong> en tu colección.</p>
            <p style="font-size: 14px; color: #6b7280;">
              Solo recomendado si necesitas reemplazar por pérdida, daño o para regalar.
            </p>
          </div>
        `,
        icon: 'question',
        iconColor: '#f59e0b',
        showCancelButton: true,
        confirmButtonText: 'Sí, comprar otro',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#f59e0b',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        customClass: {
          confirmButton: 'swal-confirm-warning',
          cancelButton: 'swal-cancel'
        }
      });

      if (!result.isConfirmed) {
        return;
      }
    }

    // ✅ VERIFICACIÓN DE LOGIN
    if (!this.authService.estaLogueado()) {
      const result = await Swal.fire({
        title: 'Iniciar sesión',
        html: `
          <div style="text-align: center; color: #374151;">
            <div style="margin-bottom: 16px;">
              <svg style="width: 48px; height: 48px; color: #4f46e5;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <p>Para comprar un kit necesitas estar logueado.</p>
          </div>
        `,
        icon: 'info',
        iconColor: '#4f46e5',
        showCancelButton: true,
        confirmButtonText: 'Ir al login',
        cancelButtonText: 'Continuar explorando',
        confirmButtonColor: '#4f46e5',
        cancelButtonColor: '#6b7280',
        reverseButtons: true
      });

      if (result.isConfirmed) {
        this.router.navigate(['/login'], { 
          queryParams: { returnUrl: `/pagos/${kit.id}` } 
        });
      }
      return;
    }

    // ✅ CONFIRMACIÓN FINAL DE COMPRA
    const result = await Swal.fire({
      title: 'Confirmar compra',
      html: `
        <div style="text-align: left; color: #374151; line-height: 1.6;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; padding: 12px; background: #f0f9ff; border-radius: 8px;">
            <div style="width: 40px; height: 40px; background: #4f46e5; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
              <svg style="width: 20px; height: 20px; color: white;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
            <div>
              <strong style="display: block; color: #1e40af;">${kit.nombre}</strong>
              <span style="font-size: 14px; color: #4f46e5;">$${this.formatPrice(kit.precio)} COP</span>
            </div>
          </div>
          <p style="font-size: 14px; color: #6b7280; margin: 0;">
            Serás redirigido al proceso de pago seguro.
          </p>
        </div>
      `,
      icon: 'question',
      iconColor: '#4f46e5',
      showCancelButton: true,
      confirmButtonText: 'Continuar al pago',
      cancelButtonText: 'Seguir viendo',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#6b7280',
      reverseButtons: true,
      customClass: {
        confirmButton: 'swal-confirm-primary',
        cancelButton: 'swal-cancel'
      }
    });

    if (result.isConfirmed) {
      // ✅ LOADING RÁPIDO Y ELEGANTE
      Swal.fire({
        title: 'Un momento...',
        html: `
          <div style="text-align: center;">
            <div class="swal2-spinner" style="border-color: #4f46e5 transparent #4f46e5 transparent;"></div>
            <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
              Preparando tu orden
            </p>
          </div>
        `,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 800,
        willOpen: () => {
          Swal.showLoading();
        }
      }).then(() => {
        // Redirigir después del timer
        this.router.navigate(['/pagos', kit.id]);
      });
    }
  }

  // ✅ ALERTA DE ÉXITO (para usar en otros métodos si es necesario)
  private mostrarExito(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      html: `
        <div style="text-align: center; color: #374151;">
          <div style="margin-bottom: 16px;">
            <svg style="width: 48px; height: 48px; color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p>${mensaje}</p>
        </div>
      `,
      icon: 'success',
      iconColor: '#10b981',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#10b981',
      timer: 3000,
      timerProgressBar: true
    });
  }

  // ✅ ALERTA DE ERROR (para usar en otros métodos si es necesario)
  private mostrarError(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      html: `
        <div style="text-align: center; color: #374151;">
          <div style="margin-bottom: 16px;">
            <svg style="width: 48px; height: 48px; color: #ef4444;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p>${mensaje}</p>
        </div>
      `,
      icon: 'error',
      iconColor: '#ef4444',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#ef4444'
    });
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
      case 'integral': return 'Kit Integral';
      default: return category;
    }
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
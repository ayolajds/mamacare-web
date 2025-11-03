import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitsService } from '../../shared/services/kits';
import { AcompanamientoService, PlanNombre } from '../../shared/services/acompanamiento';
import { AuthService } from '../../shared/services/auth';

declare const lucide: any;

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagos.html',
  styleUrls: ['./pagos.scss']
})
export class Pagos implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private kitsService = inject(KitsService);
  private acompanamientoService = inject(AcompanamientoService);
  private authService = inject(AuthService);

  // DATOS DEL PRODUCTO (puede ser kit o plan)
  producto: any = null;
  tipoProducto: 'kit' | 'plan' | null = null;
  isLoading: boolean = true;
  isProcessing: boolean = false;

  // DATOS DEL FORMULARIO COMPLETO
  bancoSeleccionado: string = '';
  tipoDocumento: string = 'cc';
  numeroDocumento: string = '';
  tipoPersona: string = 'natural';
  nombreTitular: string = '';
  email: string = '';
  telefono: string = '';
  aceptaTerminos: boolean = false;

  // Bancos disponibles
  bancos = [
    { id: 'bancolombia', nombre: 'Bancolombia' },
    { id: 'davivienda', nombre: 'Davivienda' },
    { id: 'bbva', nombre: 'BBVA' },
    { id: 'bogota', nombre: 'Banco de Bogotá' },
    { id: 'nequi', nombre: 'Nequi' }
  ];

  // MAPEO DE KITS (igual que antes)
  private kitsInfo: { [key: number]: any } = {
    1: { 
      nombre: 'Kit Esencial de Recuerdos',
      categoria: 'basico',
      precio: 89900,
      precioOriginal: 119900,
      descuento: 25,
      descripcion: 'Perfecto para comenzar a preservar tus momentos más especiales de forma organizada y emotiva.'
    },
    2: { 
      nombre: 'Kit Memoria Avanzada',
      categoria: 'intermedio', 
      precio: 169900,
      descripcion: 'Para quienes buscan profundizar en la preservación de sus historias con elementos especializados.'
    },
    3: { 
      nombre: 'Kit Legado Eterno',
      categoria: 'premium',
      precio: 299900,
      descripcion: 'La experiencia definitiva para crear un legado familiar que trascienda el tiempo.'
    }
  };

  // MAPEO DE PLANES
  private planesInfo: { [key: string]: any } = {
    'Esencial': { 
      nombre: 'Plan Esencial',
      precio: 280000,
      descripcion: 'Ideal para comenzar con acompañamiento cercano y herramientas esenciales.',
      caracteristicas: [
        '4 sesiones psicológicas presenciales',
        'Evaluación y plan terapéutico',
        'Seguimiento básico entre sesiones',
        'Materiales de apoyo digital',
        'Kit Básico incluido'
      ]
    },
    'Integral': { 
      nombre: 'Plan Integral',
      precio: 650000,
      descripcion: 'Programa completo que combina modalidades para una experiencia profunda.',
      caracteristicas: [
        '8 sesiones (presenciales + virtuales)',
        'Plan terapéutico integral',
        'Seguimiento continuo y recursos QR',
        'Acceso a comunidad de apoyo',
        '2 sesiones familiares incluidas',
        'Kit Intermedio incluido'
      ]
    },
    'Premium': { 
      nombre: 'Plan Premium', 
      precio: 1200000,
      descripcion: 'Máxima personalización, acompañamiento intensivo y recursos exclusivos.',
      caracteristicas: [
        '12 sesiones (presenciales + virtuales + a domicilio)',
        'Seguimiento intensivo y recursos premium',
        'Acompañamiento familiar completo',
        'Sesiones de emergencia incluidas',
        'Coaching emocional personalizado',
        'Kit Premium incluido'
      ]
    }
  };

  ngOnInit(): void {
    this.verificarAutenticacion();
    this.cargarProducto();
  }

  ngAfterViewInit(): void {
    // Inicializar iconos Lucide
    if (typeof lucide !== 'undefined') {
      setTimeout(() => {
        lucide.createIcons();
      }, 100);
    }
  }

  private verificarAutenticacion(): void {
    if (!this.authService.estaLogueado()) {
      alert('Debes iniciar sesión para realizar la compra');
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }
  }

  private cargarProducto(): void {
    const kitId = this.route.snapshot.paramMap.get('kitId');
    const planNombre = this.route.snapshot.paramMap.get('planNombre');
    
    if (kitId) {
      // Es un kit
      this.tipoProducto = 'kit';
      this.cargarKit(Number(kitId));
    } else if (planNombre && this.acompanamientoService.isValidPlanNombre(planNombre)) {
      // Es un plan
      this.tipoProducto = 'plan';
      this.cargarPlan(planNombre as PlanNombre);
    } else {
      this.router.navigate(['/']);
      return;
    }
  }

  private cargarKit(kitId: number): void {
    this.producto = this.kitsInfo[kitId];
    
    if (!this.producto) {
      this.router.navigate(['/kits']);
      return;
    }

    this.producto.id = kitId;
    this.isLoading = false;
  }

  private cargarPlan(planNombre: PlanNombre): void {
    this.producto = this.planesInfo[planNombre];
    
    if (!this.producto) {
      this.router.navigate(['/acompanamiento']);
      return;
    }

    this.producto.nombrePlan = planNombre;
    this.isLoading = false;
  }

  procesarPago(): void {
    if (!this.validarFormularioCompleto()) return;

    this.isProcessing = true;

    if (this.tipoProducto === 'kit') {
      this.procesarPagoKit();
    } else if (this.tipoProducto === 'plan') {
      this.procesarPagoPlan();
    }
  }

  private procesarPagoKit(): void {
    this.kitsService.crearOrden(this.producto.id, this.bancoSeleccionado).subscribe({
      next: (response) => {
        this.isProcessing = false;
        if (response.success) {
          this.mostrarConfirmacionExito();
          this.router.navigate(['/panel-paciente'], {
            queryParams: { compraExitosa: true }
          });
        } else {
          alert('Error: ' + response.message);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        alert('Error al procesar el pago: ' + error.message);
        console.error('Error en pago kit:', error);
      }
    });
  }

  private procesarPagoPlan(): void {
    this.acompanamientoService.crearOrdenPlan(this.producto.nombrePlan, this.bancoSeleccionado).subscribe({
      next: (response) => {
        this.isProcessing = false;
        if (response.success) {
          this.mostrarConfirmacionExito();
          this.router.navigate(['/panel-paciente'], {
            queryParams: { 
              compraExitosa: true,
              plan: this.producto.nombrePlan 
            }
          });
        } else {
          alert('Error: ' + response.message);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        alert('Error al procesar el pago: ' + error.message);
        console.error('Error en pago plan:', error);
      }
    });
  }

  validarFormularioCompleto(): boolean {
    if (!this.validarCamposRequeridos()) {
      return false;
    }

    if (!this.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return false;
    }

    return true;
  }

  private validarCamposRequeridos(): boolean {
    const camposRequeridos = [
      { valor: this.tipoPersona, mensaje: 'Selecciona el tipo de persona' },
      { valor: this.tipoDocumento, mensaje: 'Selecciona el tipo de documento' },
      { valor: this.numeroDocumento, mensaje: 'Ingresa el número de documento' },
      { valor: this.nombreTitular?.trim(), mensaje: 'Ingresa el nombre del titular' },
      { valor: this.email?.trim(), mensaje: 'Ingresa un email válido' },
      { valor: this.telefono?.trim(), mensaje: 'Ingresa un número de teléfono' },
      { valor: this.bancoSeleccionado, mensaje: 'Selecciona un banco' }
    ];

    for (const campo of camposRequeridos) {
      if (!campo.valor) {
        alert(campo.mensaje);
        return false;
      }
    }

    if (!this.validarEmail(this.email)) {
      alert('Ingresa un email válido');
      return false;
    }

    return true;
  }

  private validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private mostrarConfirmacionExito(): void {
    const mensaje = this.tipoProducto === 'kit' 
      ? `¡Pago exitoso! Has solicitado el "${this.producto.nombre}". Recibirás un email de confirmación.`
      : `¡Pago exitoso! Has adquirido el "${this.producto.nombre}". Recibirás un email de confirmación.`;
    
    alert(mensaje);
  }

  cancelar(): void {
    if (this.tipoProducto === 'kit') {
      this.router.navigate(['/kits']);
    } else {
      this.router.navigate(['/acompanamiento']);
    }
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Método para saber si es kit o plan (para el template)
  getProductType(): string {
    return this.tipoProducto === 'kit' ? 'Kit' : 'Plan de Acompañamiento';
  }

  getBankIcon(bancoId: string): string {
    const icons: { [key: string]: string } = {
      'bancolombia': 'building',
      'davivienda': 'landmark',
      'bbva': 'banknote',
      'bogota': 'building-2',
      'nequi': 'smartphone'
    };
    return icons[bancoId] || 'credit-card';
  }

  getBankName(bancoId: string): string {
    const banco = this.bancos.find(b => b.id === bancoId);
    return banco ? banco.nombre : 'Banco';
  }
}
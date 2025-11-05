import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitsService } from '../../shared/services/kits';
import { AuthService } from '../../shared/services/auth';

declare var lucide: any;

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
  private authService = inject(AuthService);

  kitId: number = 0;
  kit: any = null;
  isLoading: boolean = true;
  isProcessing: boolean = false;
  errorMessage: string = '';

  // Datos del formulario de pago
  bancoSeleccionado: string = '';
  tipoDocumento: string = 'cedula';
  numeroDocumento: string = '';
  tipoPersona: string = 'natural';
  nombreTitular: string = '';
  email: string = '';
  telefono: string = '';
  aceptaTerminos: boolean = false;

  // Nuevas propiedades para tarjeta
  numeroTarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';

  // Bancos disponibles (igual que acompañamiento)
  bancos = [
    { value: 'bancolombia', label: 'Bancolombia', icon: '🏦' },
    { value: 'nequi', label: 'Nequi', icon: '📱' },
    { value: 'davivienda', label: 'Davivienda', icon: '🏦' },
    { value: 'bbva', label: 'BBVA', icon: '🏦' },
    { value: 'bogota', label: 'Banco de Bogotá', icon: '🏦' },
    { value: 'pse', label: 'PSE - Pagos Seguros en Línea', icon: '💻' }
  ];

  // Tipos de documento (igual que acompañamiento)
  tiposDocumento = [
    { value: 'cedula', label: 'Cédula de Ciudadanía' },
    { value: 'cedula_extranjeria', label: 'Cédula de Extranjería' },
    { value: 'pasaporte', label: 'Pasaporte' },
    { value: 'nit', label: 'NIT' }
  ];

  // Tipos de persona (específico para kits)
  tiposPersona = [
    { value: 'natural', label: 'Persona Natural' },
    { value: 'juridica', label: 'Persona Jurídica' }
  ];

  // ✅ DATOS ESTÁTICOS DE KITS (mejorados)
private kitsInfo = [
  {
    id: 1,
    nombre: 'Kit Básico',
    categoria: 'basico',
    precio: 63800,
    imagen: 'assets/images/kit-basico.jpg',
    descripcion: 'Perfecto para comenzar a preservar tus momentos más especiales de forma organizada y emotiva.',
    elementos: ["Diario", "Mazo", "Accesorio"]
  },
  {
    id: 2,
    nombre: 'Kit Intermedio', 
    categoria: 'intermedio',
    precio: 79200,
    imagen: 'assets/images/kit-intermedio.jpg',
    descripcion: 'Para quienes buscan profundizar en la preservación de sus historias con elementos especializados.',
    elementos: ["Acceso digital (QR)", "Espejo", "Accesorio"]
  },
  {
    id: 3,
    nombre: 'Kit Integral',
    categoria: 'integral',
    precio: 112200,
    imagen: 'assets/images/kit-integral.jpg',
    descripcion: 'La experiencia definitiva para crear un legado familiar que trascienda el tiempo.',
    elementos: ["Vela", "Pañoleta", "Caja"]
  }
];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.kitId = +params['kitId'];
      this.cargarKit();
    });

    // Cargar datos del usuario si está logueado (igual que acompañamiento)
    if (this.authService.estaLogueado()) {
      const usuario = this.authService.obtenerUsuarioActual();
      if (usuario) {
        this.email = usuario.email || '';
        // ✅ SOLUCIÓN: Usar 'as any' para evitar errores TypeScript
        this.nombreTitular = (usuario as any).nombreCompleto || 
                            ((usuario as any).name && (usuario as any).lastName ? 
                              `${(usuario as any).name} ${(usuario as any).lastName}` : '') || 
                            (usuario as any).displayName || 
                            usuario.email || '';
        
        // Cargar teléfono si está disponible
        if ((usuario as any).telefono) {
          this.telefono = (usuario as any).telefono;
        }
      }
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: `/pago/${this.kitId}` }
      });
    }
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  private cargarKit(): void {
    this.kit = this.kitsInfo.find(k => k.id === this.kitId);
    if (!this.kit) {
      this.router.navigate(['/kits']);
      return;
    }
    this.isLoading = false;
  }

  procesarPago(): void {
    if (!this.validarFormulario()) {
      return;
    }

    this.isProcessing = true;
    this.errorMessage = '';

    // ✅ CORREGIDO: Usar el servicio REAL en lugar de simulación
    this.kitsService.crearOrden(this.kitId, this.bancoSeleccionado).subscribe({
      next: async (response: any) => {
        this.isProcessing = false;
        console.log('✅ Respuesta del servicio:', response);
        
        if (response.success) {
          // ✅ ACTUALIZAR KITS COMPRADOS DESPUÉS DE COMPRA EXITOSA
          await this.actualizarKitsComprados();
          
          this.mostrarConfirmacionExito();
          this.router.navigate(['/panel-paciente'], {
            queryParams: { 
              compraExitosa: true,
              kit: this.kit.nombre,
              kitId: this.kit.id
            }
          });
        } else {
          this.errorMessage = response.message || 'Error al procesar el pago';
          alert(this.errorMessage);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        console.error('❌ Error en el pago:', error);
        this.errorMessage = this.obtenerMensajeError(error);
        alert(this.errorMessage);
      }
    });
  }

  // ✅ NUEVO MÉTODO: Actualizar kits comprados después de la compra
  private async actualizarKitsComprados(): Promise<void> {
    try {
      console.log('🔄 Actualizando kits comprados después de compra...');
      
      // Actualizar desde el backend
      await this.authService.actualizarKitsComprados();
      
      // Verificar que se actualizó correctamente
      const usuarioActualizado = this.authService.obtenerUsuarioActual();
      const kitsComprados = usuarioActualizado?.kitsComprados || [];
      
      console.log('📦 Kits comprados después de actualización:', kitsComprados);
      console.log('✅ Kit comprado actualmente:', this.kitId, '¿Está en la lista?', 
                  kitsComprados.some((kit: any) => kit.kitId === this.kitId));
      
    } catch (error) {
      console.error('❌ Error actualizando kits comprados:', error);
      // Continuar aunque falle la actualización
    }
  }

  private obtenerMensajeError(error: any): string {
    if (error.status === 0) {
      return 'Error de conexión. Verifica tu internet.';
    } else if (error.status === 400) {
      return 'Datos inválidos. Verifica la información.';
    } else if (error.status === 401) {
      return 'Sesión expirada. Inicia sesión nuevamente.';
    } else if (error.status === 409) {
      return 'Ya tienes este kit comprado.';
    } else if (error.status >= 500) {
      return 'Error del servidor. Intenta más tarde.';
    }
    return error.message || 'Error inesperado al procesar el pago';
  }

  // Métodos para formatear tarjeta (igual que acompañamiento)
  formatearNumeroTarjeta(event: any): void {
    let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = value.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      this.numeroTarjeta = parts.join(' ');
    } else {
      this.numeroTarjeta = value;
    }
  }

  formatearFechaExpiracion(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.fechaExpiracion = value;
  }

  // Validación completa del formulario
  private validarFormulario(): boolean {
    if (!this.bancoSeleccionado) {
      alert('Por favor selecciona un método de pago');
      return false;
    }

    if (!this.tipoDocumento || !this.numeroDocumento) {
      alert('Por favor completa tu información de documento');
      return false;
    }

    if (!this.nombreTitular) {
      alert('Por favor ingresa el nombre del titular');
      return false;
    }

    if (!this.email) {
      alert('Por favor ingresa tu email');
      return false;
    }

    if (!this.telefono) {
      alert('Por favor ingresa tu número de teléfono');
      return false;
    }

    // Validar tarjeta si no es PSE
    if (this.bancoSeleccionado !== 'pse') {
      if (!this.numeroTarjeta) {
        alert('Por favor ingresa el número de tu tarjeta');
        return false;
      }

      if (!this.fechaExpiracion) {
        alert('Por favor ingresa la fecha de expiración de tu tarjeta');
        return false;
      }

      if (!this.cvv) {
        alert('Por favor ingresa el CVV de tu tarjeta');
        return false;
      }

      // Validar formato de fecha
      if (!this.fechaExpiracion.match(/^\d{2}\/\d{2}$/)) {
        alert('Por favor ingresa una fecha de expiración válida (MM/AA)');
        return false;
      }

      // Validar CVV
      if (!this.cvv.match(/^\d{3,4}$/)) {
        alert('Por favor ingresa un CVV válido (3 o 4 dígitos)');
        return false;
      }
    }

    if (!this.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return false;
    }

    return true;
  }

  // Validación para el botón de pago (UI)
  validarFormularioCompleto(): boolean {
    if (!this.bancoSeleccionado || !this.aceptaTerminos) {
      return false;
    }

    // Validar campos básicos
    const camposBasicos = [
      this.tipoDocumento,
      this.numeroDocumento,
      this.nombreTitular,
      this.email,
      this.telefono
    ];

    if (camposBasicos.some(campo => !campo)) {
      return false;
    }

    // Validar campos de tarjeta si no es PSE
    if (this.bancoSeleccionado !== 'pse') {
      const camposTarjeta = [
        this.numeroTarjeta,
        this.fechaExpiracion,
        this.cvv
      ];

      if (camposTarjeta.some(campo => !campo)) {
        return false;
      }

      // Validar formato de fecha (MM/AA)
      if (!this.fechaExpiracion.match(/^\d{2}\/\d{2}$/)) {
        return false;
      }

      // Validar que el CVV tenga 3 o 4 dígitos
      if (!this.cvv.match(/^\d{3,4}$/)) {
        return false;
      }
    }

    return true;
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  cancelar(): void {
    this.router.navigate(['/kits']);
  }

  // Métodos helpers para compatibilidad
  getBankIcon(bancoId: string): string {
    const icons: { [key: string]: string } = {
      'bancolombia': 'building',
      'davivienda': 'landmark', 
      'bbva': 'banknote',
      'bogota': 'building-2',
      'nequi': 'smartphone',
      'pse': 'credit-card'
    };
    return icons[bancoId] || 'credit-card';
  }

  getBankName(bancoId: string): string {
    const banco = this.bancos.find(b => b.value === bancoId);
    return banco ? banco.label : 'Banco';
  }

  private mostrarConfirmacionExito(): void {
    console.log(`✅ Pago exitoso para: ${this.kit.nombre}`);
  }

  // Calcular ahorro si hay descuento
  calcularAhorro(): number {
    if (this.kit?.precioOriginal && this.kit.precio) {
      return this.kit.precioOriginal - this.kit.precio;
    }
    return 0;
  }

  // Verificar si tiene descuento
  get tieneDescuento(): boolean {
    return !!this.kit?.descuento;
  }

  // Obtener el tipo de persona formateado
  getTipoPersonaLabel(): string {
    const tipo = this.tiposPersona.find(t => t.value === this.tipoPersona);
    return tipo ? tipo.label : 'Persona Natural';
  }
}
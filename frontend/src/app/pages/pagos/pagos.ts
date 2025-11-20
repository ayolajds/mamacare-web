import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitsService } from '../../shared/services/kits';
import { AuthService } from '../../shared/services/auth';

// Importar SweetAlert2
import Swal from 'sweetalert2';

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
      categoria: 'basico', // ✅ MINÚSCULA
      precio: 63800,
      imagen: 'assets/images/kit-basico.jpg',
      descripcion: 'Selección básica para iniciar tu ritual y documentar tus momentos.',
      elementos: ["Diario", "Mazo", "Accesorio"]
    },
    {
      id: 2,
      nombre: 'Kit Intermedio', 
      categoria: 'intermedio', // ✅ MINÚSCULA
      precio: 79200,
      imagen: 'assets/images/kit-intermedio.jpg',
      descripcion: 'Incluye acceso digital y elementos extra para profundizar en tu cuidado.',
      elementos: ["Acceso digital (QR)", "Espejo", "Accesorio"]
    },
    {
      id: 3,
      nombre: 'Kit Integral',
      categoria: 'integral', // ✅ CAMBIAR a 'integral'
      precio: 112200,
      imagen: 'assets/images/kit-integral.jpg',
      descripcion: 'Experiencia completa con elementos para un ritual más profundo.',
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
      this.mostrarError('Kit no encontrado', 'El kit que buscas no está disponible.');
      this.router.navigate(['/kits']);
      return;
    }
    this.isLoading = false;
  }

  // ✅ CORREGIDO: Métodos para validar y formatear campos

  // Solo números para número de documento
  onNumeroDocumentoInput(event: any): void {
    let value = event.target.value;
    // Permitir solo números
    value = value.replace(/[^0-9]/g, '');
    this.numeroDocumento = value;
  }

  // Solo letras y espacios para nombre del titular
  onNombreTitularInput(event: any): void {
    let value = event.target.value;
    // Permitir solo letras, espacios y acentos
    value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    this.nombreTitular = value;
  }

  // Solo números para teléfono
  onTelefonoInput(event: any): void {
    let value = event.target.value;
    // Permitir solo números
    value = value.replace(/[^0-9]/g, '');
    this.telefono = value;
  }

  // Solo números para número de tarjeta (con formato)
  onNumeroTarjetaInput(event: any): void {
    let value = event.target.value;
    // Permitir solo números
    value = value.replace(/[^0-9]/g, '');
    
    // Formatear con espacios cada 4 dígitos
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

  // Solo números para fecha de expiración (con formato MM/AA)
  onFechaExpiracionInput(event: any): void {
    let value = event.target.value;
    // Permitir solo números
    value = value.replace(/[^0-9]/g, '');
    
    // Formatear como MM/AA
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.fechaExpiracion = value;
  }

  // Solo números para CVV
  onCvvInput(event: any): void {
    let value = event.target.value;
    // Permitir solo números (máximo 4 dígitos)
    value = value.replace(/[^0-9]/g, '').substring(0, 4);
    this.cvv = value;
  }

  // Solo letras y números para email (validación específica)
  onEmailInput(event: any): void {
    let value = event.target.value;
    // Permitir letras, números, @, ., -, _ para email
    value = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    this.email = value;
  }

  procesarPago(): void {
    if (!this.validarFormulario()) {
      return;
    }

    this.mostrarConfirmacionPago();
  }

  private procesarPagoConfirmado(): void {
    this.isProcessing = true;
    this.errorMessage = '';

    // Mostrar loading con SweetAlert
    Swal.fire({
      title: 'Procesando pago...',
      text: 'Estamos procesando tu compra, por favor espera.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // ✅ CORREGIDO: Usar el servicio REAL en lugar de simulación
    this.kitsService.crearOrden(this.kitId, this.bancoSeleccionado).subscribe({
      next: async (response: any) => {
        this.isProcessing = false;

        
        if (response.success) {
          // ✅ ACTUALIZAR KITS COMPRADOS DESPUÉS DE COMPRA EXITOSA
          await this.actualizarKitsComprados();
          
          this.mostrarExitoPago();
        } else {
          this.errorMessage = response.message || 'Error al procesar el pago';
          this.mostrarError('Error en el pago', this.errorMessage);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        console.error('❌ Error en el pago:', error);
        this.errorMessage = this.obtenerMensajeError(error);
        this.mostrarError('Error en el pago', this.errorMessage);
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar confirmación de pago con SweetAlert
  private mostrarConfirmacionPago(): void {
    Swal.fire({
      title: '¿Confirmar compra?',
      html: `
        <div class="text-left">
          <p><strong>Kit:</strong> ${this.kit.nombre}</p>
          <p><strong>Precio:</strong> $${this.formatPrice(this.kit.precio)}</p>
          <p><strong>Método de pago:</strong> ${this.getBankName(this.bancoSeleccionado)}</p>
          <p><strong>Titular:</strong> ${this.nombreTitular}</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#FF6B9D',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, proceder con el pago',
      cancelButtonText: 'Revisar información',
      reverseButtons: true,
      customClass: {
        popup: 'sweetalert-custom',
        confirmButton: 'sweetalert-confirm-btn',
        cancelButton: 'sweetalert-cancel-btn'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.procesarPagoConfirmado();
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar éxito de pago con SweetAlert
  private mostrarExitoPago(): void {
    Swal.fire({
      title: '¡Pago Exitoso! 🎉',
      html: `
        <div class="text-center">
          <div style="font-size: 4rem; margin-bottom: 1rem;">✨</div>
          <h3 style="color: #34D399; margin-bottom: 1rem;">¡Gracias por tu compra!</h3>
          <p><strong>Kit adquirido:</strong> ${this.kit.nombre}</p>
          <p><strong>Valor:</strong> $${this.formatPrice(this.kit.precio)}</p>
          <p style="margin-top: 1rem; color: #718096;">
            Tu kit ha sido agregado a tu cuenta. Puedes acceder a él desde tu panel de paciente.
          </p>
        </div>
      `,
      icon: 'success',
      confirmButtonColor: '#34D399',
      confirmButtonText: 'Ir a mi panel',
      showCancelButton: true,
      cancelButtonText: 'Seguir comprando',
      customClass: {
        popup: 'sweetalert-custom sweetalert-success',
        confirmButton: 'sweetalert-success-btn'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/panel-paciente'], {
          queryParams: { 
            compraExitosa: true,
            kit: this.kit.nombre,
            kitId: this.kit.id
          }
        });
      } else {
        this.router.navigate(['/kits']);
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar errores con SweetAlert
  private mostrarError(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error',
      confirmButtonColor: '#FF6B9D',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'sweetalert-custom sweetalert-error'
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar advertencia con SweetAlert
  private mostrarAdvertencia(mensaje: string): void {
    Swal.fire({
      title: 'Atención',
      text: mensaje,
      icon: 'warning',
      confirmButtonColor: '#A78BFA',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'sweetalert-custom sweetalert-warning'
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar información con SweetAlert
  private mostrarInfo(titulo: string, mensaje: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'info',
      confirmButtonColor: '#34D399',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'sweetalert-custom sweetalert-info'
      }
    });
  }

  // ✅ NUEVO MÉTODO: Mostrar términos y condiciones
  mostrarTerminos(): void {
    Swal.fire({
      title: 'Términos y Condiciones',
      html: `
        <div class="text-left" style="max-height: 400px; overflow-y: auto; padding-right: 10px;">
          <h4 style="color: #FF6B9D; margin-bottom: 1rem;">Condiciones de Compra</h4>
          
          <p><strong>1. Información del Producto</strong></p>
          <p>Los kits incluyen elementos físicos y digitales según la selección realizada.</p>
          
          <p><strong>2. Proceso de Pago</strong></p>
          <p>El pago se procesa de forma segura a través de nuestros socios comerciales.</p>
          
          <p><strong>3. Entrega</strong></p>
          <p>Los elementos físicos se enviarán a la dirección registrada en un plazo de 3-5 días hábiles.</p>
          
          <p><strong>4. Política de Devoluciones</strong></p>
          <p>Aceptamos devoluciones dentro de los primeros 7 días posteriores a la recepción.</p>
          
          <p><strong>5. Soporte</strong></p>
          <p>Para cualquier inconveniente contacta a nuestro equipo de soporte.</p>
          
          <p style="margin-top: 1rem; color: #718096; font-size: 0.9rem;">
            Al proceder con la compra, aceptas estos términos y condiciones.
          </p>
        </div>
      `,
      width: 600,
      padding: '2rem',
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar términos',
      confirmButtonColor: '#FF6B9D',
      customClass: {
        popup: 'sweetalert-custom sweetalert-terms',
        htmlContainer: 'sweetalert-html-container'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.aceptaTerminos = true;
      }
    });
  }

  // ✅ NUEVO MÉTODO: Cancelar proceso con confirmación
  cancelar(): void {
    Swal.fire({
      title: '¿Cancelar compra?',
      text: 'Si cancelas, perderás toda la información ingresada en el formulario.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF6B9D',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'Continuar con la compra',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/kits']);
      }
    });
  }

  // ✅ NUEVO MÉTODO: Validar campos específicos con SweetAlert
  validarCampo(campo: string, valor: any): boolean {
    switch (campo) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
          this.mostrarAdvertencia('Por favor ingresa un email válido.');
          return false;
        }
        break;

      case 'telefono':
        const telefonoRegex = /^[0-9]{10,15}$/;
        if (!telefonoRegex.test(valor.replace(/\D/g, ''))) {
          this.mostrarAdvertencia('Por favor ingresa un número de teléfono válido (10-15 dígitos).');
          return false;
        }
        break;

      case 'numeroDocumento':
        if (!valor.trim()) {
          this.mostrarAdvertencia('Por favor ingresa tu número de documento.');
          return false;
        }
        break;

      case 'nombreTitular':
        if (!valor.trim()) {
          this.mostrarAdvertencia('Por favor ingresa el nombre del titular.');
          return false;
        }
        if (valor.length < 2) {
          this.mostrarAdvertencia('El nombre del titular debe tener al menos 2 caracteres.');
          return false;
        }
        break;
    }
    return true;
  }

  // ✅ NUEVO MÉTODO: Mostrar información del banco seleccionado
  onBancoSeleccionado(): void {
    if (this.bancoSeleccionado === 'pse') {
      this.mostrarInfo('Pago con PSE', 'Serás redirigido a la plataforma de pagos seguros de tu banco para completar la transacción.');
    } else if (this.bancoSeleccionado === 'nequi') {
      this.mostrarInfo('Pago con Nequi', 'Asegúrate de tener fondos suficientes en tu cuenta Nequi para completar la transacción.');
    }
  }

  // ✅ NUEVO MÉTODO: Validar tarjeta con SweetAlert
  validarTarjeta(): boolean {
    if (this.bancoSeleccionado === 'pse') return true;

    const numeroLimpio = this.numeroTarjeta.replace(/\s/g, '');
    
    if (numeroLimpio.length < 16) {
      this.mostrarAdvertencia('El número de tarjeta debe tener al menos 16 dígitos.');
      return false;
    }

    // Validar fecha de expiración
    if (!this.fechaExpiracion.match(/^\d{2}\/\d{2}$/)) {
      this.mostrarAdvertencia('Por favor ingresa una fecha de expiración válida (MM/AA).');
      return false;
    }

    // Validar que la fecha no esté expirada
    const [mes, año] = this.fechaExpiracion.split('/');
    const fechaExpiracion = new Date(2000 + parseInt(año), parseInt(mes) - 1);
    const hoy = new Date();
    
    if (fechaExpiracion < hoy) {
      this.mostrarAdvertencia('La tarjeta está expirada. Por favor verifica la fecha.');
      return false;
    }

    // Validar CVV
    if (!this.cvv.match(/^\d{3,4}$/)) {
      this.mostrarAdvertencia('Por favor ingresa un CVV válido (3 o 4 dígitos).');
      return false;
    }

    return true;
  }

  // ✅ NUEVO MÉTODO: Validación completa del formulario con SweetAlert
  private validarFormulario(): boolean {
    // Validaciones básicas
    const validaciones = [
      { condicion: !this.bancoSeleccionado, mensaje: 'Por favor selecciona un método de pago' },
      { condicion: !this.tipoDocumento || !this.numeroDocumento, mensaje: 'Por favor completa tu información de documento' },
      { condicion: !this.nombreTitular, mensaje: 'Por favor ingresa el nombre del titular' },
      { condicion: !this.email, mensaje: 'Por favor ingresa tu email' },
      { condicion: !this.telefono, mensaje: 'Por favor ingresa tu número de teléfono' },
      { condicion: !this.aceptaTerminos, mensaje: 'Debes aceptar los términos y condiciones' }
    ];

    for (const validacion of validaciones) {
      if (validacion.condicion) {
        this.mostrarAdvertencia(validacion.mensaje);
        return false;
      }
    }

    // Validaciones específicas de campos
    if (!this.validarCampo('email', this.email) || 
        !this.validarCampo('telefono', this.telefono) ||
        !this.validarCampo('numeroDocumento', this.numeroDocumento) ||
        !this.validarCampo('nombreTitular', this.nombreTitular)) {
      return false;
    }

    // Validaciones de tarjeta si no es PSE
    if (this.bancoSeleccionado !== 'pse' && !this.validarTarjeta()) {
      return false;
    }

    return true;
  }

  // ✅ NUEVO MÉTODO: Mostrar loading personalizado
  private mostrarLoading(mensaje: string = 'Procesando...'): void {
    Swal.fire({
      title: mensaje,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // ✅ NUEVO MÉTODO: Cerrar todos los SweetAlerts
  private cerrarAlertas(): void {
    Swal.close();
  }

  // Resto de métodos existentes (sin cambios)
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

  // ✅ NUEVO MÉTODO: Actualizar kits comprados después de la compra
  private async actualizarKitsComprados(): Promise<void> {
    try {

      
      // Actualizar desde el backend
      await this.authService.actualizarKitsComprados();
      
      // Verificar que se actualizó correctamente
      const usuarioActualizado = this.authService.obtenerUsuarioActual();
      const kitsComprados = usuarioActualizado?.kitsComprados || [];
    
      
    } catch (error) {
      console.error('❌ Error actualizando kits comprados:', error);
      // Continuar aunque falle la actualización
    }
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
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth';
import { AcompanamientoService } from '../../shared/services/acompanamiento';
import Swal from 'sweetalert2';

declare var lucide: any;

@Component({
  selector: 'app-pago-acompanamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pago-acompanamiento.html',
  styleUrls: ['./pago-acompanamiento.scss']
})
export class PagoAcompanamientoComponent implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  private acompanamientoService = inject(AcompanamientoService);

  paqueteId: number = 0;
  paquete: any = null;
  isLoading: boolean = true;
  isProcessing: boolean = false;

  // Datos del formulario de pago
  bancoSeleccionado: string = '';
  tipoDocumento: string = 'cedula';
  numeroDocumento: string = '';
  nombreTitular: string = '';
  numeroTarjeta: string = '';
  fechaExpiracion: string = '';
  cvv: string = '';
  email: string = '';
  telefono: string = '';
  aceptaTerminos: boolean = false;

  bancos = [
    { value: 'bancolombia', label: 'Bancolombia', icon: '🏦' },
    { value: 'nequi', label: 'Nequi', icon: '📱' },
    { value: 'davivienda', label: 'Davivienda', icon: '🏦' },
    { value: 'bbva', label: 'BBVA', icon: '🏦' },
    { value: 'bogota', label: 'Banco de Bogotá', icon: '🏦' },
    { value: 'pse', label: 'PSE - Pagos Seguros en Línea', icon: '💻' }
  ];

  tiposDocumento = [
    { value: 'cedula', label: 'Cédula de Ciudadanía' },
    { value: 'cedula_extranjeria', label: 'Cédula de Extranjería' },
    { value: 'pasaporte', label: 'Pasaporte' },
    { value: 'nit', label: 'NIT' }
  ];

  // ✅ DATOS ESTÁTICOS ACTUALIZADOS
  private paquetes = [
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
      duracionSesion: 50,
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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.paqueteId = +params['id'];
      this.loadPaquete();
    });

    // Cargar datos del usuario si está logueado
    if (this.authService.estaLogueado()) {
      const usuario = this.authService.obtenerUsuarioActual();
      if (usuario) {
        this.email = usuario.email || '';
        this.nombreTitular = (usuario as any).nombreCompleto || 
                            ((usuario as any).name && (usuario as any).lastName ? 
                              `${(usuario as any).name} ${(usuario as any).lastName}` : '') || 
                            (usuario as any).displayName || 
                            usuario.email || '';
      }
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: `/pago-acompanamiento/${this.paqueteId}` }
      });
    }
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  private loadPaquete(): void {
    this.paquete = this.paquetes.find(p => p.id === this.paqueteId);
    if (!this.paquete) {
      this.router.navigate(['/acompanamiento']);
    }
    this.isLoading = false;
  }

  async procesarPago(): Promise<void> {
    if (!await this.validarFormulario()) {
      return;
    }

    this.isProcessing = true;

    try {
      // Mostrar SweetAlert de confirmación
      const result = await Swal.fire({
        title: '¿Confirmar pago?',
        html: `Estás a punto de realizar el pago por <strong>$${this.formatPrice(this.paquete.precio)}</strong> para el <strong>${this.paquete.nombre}</strong>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, proceder con el pago',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return this.acompanamientoService.crearOrden(this.paqueteId, this.bancoSeleccionado).toPromise();
        }
      });

      if (result.isConfirmed) {
        if (result.value && result.value.success) {
          // ✅ ACTUALIZAR AMBOS: paquetes Y kits
          await this.authService.actualizarPaquetesAcompanamientoComprados();
          await this.authService.actualizarKitsComprados();
          
          await Swal.fire({
            title: '¡Pago Exitoso! 🎉',
            html: `¡<strong>${this.paquete.nombre}</strong> comprado exitosamente!<br><br>Se te ha obsequiado el <strong>${this.getKitNombre()}</strong> como parte de tu paquete.`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ir a Mis Paquetes'
          });
          
          this.router.navigate(['/mis-paquetes']);
        } else {
          await Swal.fire({
            title: 'Error en el pago',
            text: result.value?.message || 'Error al procesar el pago',
            icon: 'error',
            confirmButtonColor: '#d33'
          });
        }
      }
    } catch (error) {
      console.error('Error en el pago:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Error al procesar el pago. Por favor intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#d33'
      });
    } finally {
      this.isProcessing = false;
    }
  }

  private async validarFormulario(): Promise<boolean> {
    // Validaciones básicas
    if (!this.bancoSeleccionado) {
      await this.mostrarAlerta('Campo requerido', 'Por favor selecciona un banco');
      return false;
    }

    if (!this.tipoDocumento || !this.numeroDocumento) {
      await this.mostrarAlerta('Campo requerido', 'Por favor completa tu información de documento');
      return false;
    }

    if (!this.nombreTitular.trim()) {
      await this.mostrarAlerta('Campo requerido', 'Por favor ingresa el nombre del titular');
      return false;
    }

    // Validaciones específicas para campos numéricos
    if (!this.validarNumeroDocumento()) {
      await this.mostrarAlerta('Documento inválido', 'El número de documento debe contener solo números');
      return false;
    }

    if (!this.validarTelefono()) {
      await this.mostrarAlerta('Teléfono inválido', 'El número de teléfono debe contener solo números y tener entre 7 y 15 dígitos');
      return false;
    }

    if (this.bancoSeleccionado !== 'pse') {
      if (!this.numeroTarjeta || !this.fechaExpiracion || !this.cvv) {
        await this.mostrarAlerta('Campo requerido', 'Por favor completa la información de tu tarjeta');
        return false;
      }

      if (!this.validarNumeroTarjeta()) {
        await this.mostrarAlerta('Tarjeta inválida', 'El número de tarjeta debe contener 16 dígitos');
        return false;
      }

      if (!this.validarFechaExpiracion()) {
        await this.mostrarAlerta('Fecha inválida', 'La fecha de expiración debe tener el formato MM/YY y ser una fecha futura');
        return false;
      }

      if (!this.validarCVV()) {
        await this.mostrarAlerta('CVV inválido', 'El CVV debe contener 3 o 4 dígitos');
        return false;
      }
    }

    if (!this.validarEmail()) {
      await this.mostrarAlerta('Email inválido', 'Por favor ingresa un email válido');
      return false;
    }

    if (!this.aceptaTerminos) {
      await this.mostrarAlerta('Términos y condiciones', 'Debes aceptar los términos y condiciones');
      return false;
    }

    return true;
  }

  // 🔒 MÉTODOS DE VALIDACIÓN Y LIMITACIÓN

  private validarNumeroDocumento(): boolean {
    return /^\d+$/.test(this.numeroDocumento.replace(/\s/g, ''));
  }

  private validarTelefono(): boolean {
    const telefonoLimpio = this.telefono.replace(/\s/g, '');
    return /^\d{7,15}$/.test(telefonoLimpio);
  }

  private validarNumeroTarjeta(): boolean {
    const tarjetaLimpia = this.numeroTarjeta.replace(/\s/g, '');
    return /^\d{16}$/.test(tarjetaLimpia);
  }

  private validarFechaExpiracion(): boolean {
    if (!/^\d{2}\/\d{2}$/.test(this.fechaExpiracion)) {
      return false;
    }

    const [mes, año] = this.fechaExpiracion.split('/').map(Number);
    const ahora = new Date();
    const añoActual = ahora.getFullYear() % 100;
    const mesActual = ahora.getMonth() + 1;

    if (mes < 1 || mes > 12) return false;
    if (año < añoActual) return false;
    if (año === añoActual && mes < mesActual) return false;

    return true;
  }

  private validarCVV(): boolean {
    return /^\d{3,4}$/.test(this.cvv);
  }

  private validarEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  // 🔒 MÉTODOS PARA LIMITAR INPUTS

  soloNumeros(event: any): void {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^\d+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  soloNumerosYGuiones(event: any): void {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[\d-]+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  soloLetrasYEspacios(event: any): void {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  limitarLongitud(event: any, maxLength: number): void {
    if (event.target.value.length >= maxLength && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  }

  // Para número de documento
  onDocumentoInput(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    // Limitar longitud según tipo de documento
    const maxLength = this.tipoDocumento === 'cedula' ? 10 : 
                     this.tipoDocumento === 'cedula_extranjeria' ? 20 : 
                     this.tipoDocumento === 'pasaporte' ? 20 : 15;
    
    if (value.length > maxLength) {
      value = value.substring(0, maxLength);
    }
    
    this.numeroDocumento = value;
  }

  // Para teléfono
  onTelefonoInput(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 15) {
      value = value.substring(0, 15);
    }
    this.telefono = value;
  }

  // Para CVV
  onCVVInput(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    this.cvv = value;
  }

  // Para nombre del titular (solo letras y espacios)
  onNombreTitularInput(event: any): void {
    let value = event.target.value;
    // Permitir solo letras, espacios y caracteres especiales del español
    value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    
    if (value.length > 50) {
      value = value.substring(0, 50);
    }
    
    this.nombreTitular = value;
  }

  // Formatear número de tarjeta (solo números)
  formatearNumeroTarjeta(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    
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

  // Formatear fecha de expiración (solo números)
  formatearFechaExpiracion(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.fechaExpiracion = value;
  }

  // Método auxiliar para mostrar alertas
  private async mostrarAlerta(titulo: string, mensaje: string): Promise<void> {
    await Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      confirmButtonColor: '#3085d6'
    });
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  volverAcompanamiento(): void {
    this.router.navigate(['/acompanamiento']);
  }

  // ✅ MÉTODO PARA OBTENER NOMBRE DEL KIT
  getKitNombre(): string {
    if (!this.paquete) return '';
    
    switch(this.paquete.categoria) {
      case 'basico': return 'Kit Básico';
      case 'intermedio': return 'Kit Intermedio';
      case 'integral': return 'Kit Integral';
      default: return '';
    }
  }
}
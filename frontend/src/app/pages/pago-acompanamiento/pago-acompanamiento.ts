import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth';
import { AcompanamientoService } from '../../shared/services/acompanamiento';

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
      nombre: "Paquete Básico de Acompañamiento", // ✅ NOMBRE COMPLETO Y CONSISTENTE
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
      // ❌ ELIMINADOS: stock, popular, nuevo, kit
    },
    {
      id: 2,
      nombre: "Paquete Intermedio de Acompañamiento", // ✅ NOMBRE COMPLETO Y CONSISTENTE
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
      // ❌ ELIMINADOS: stock, popular, nuevo, badge, kit
    },
    {
      id: 3,
      nombre: "Paquete Integral de Acompañamiento", // ✅ NOMBRE COMPLETO Y CONSISTENTE
      categoria: "integral",
      precio: 684420,
      imagen: "assets/images/paquete-integral.jpg", // ✅ IMAGEN CORRECTA
      descripcion: "Máxima personalización, acompañamiento intensivo y recursos exclusivos.",
      elementos: [
        "12 sesiones (presenciales + virtuales + a domicilio)",
        "Seguimiento intensivo y recursos premium",
        "Acompañamiento familiar completo",
        "Sesiones de emergencia incluidas",
        "Coaching emocional personalizado",
        "Kit Integral incluido" // ✅ CAMBIADO: "Premium" por "Integral"
      ],
      beneficios: [
        {
          titulo: "Atención integral", // ✅ CAMBIADO: "premium" por "integral"
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
      // ❌ ELIMINADOS: stock, popular, nuevo, kit
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
        // ✅ SOLUCIÓN: Usar 'as any' para evitar errores TypeScript
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

procesarPago(): void {
  if (!this.validarFormulario()) {
    return;
  }

  this.isProcessing = true;

  this.acompanamientoService.crearOrden(this.paqueteId, this.bancoSeleccionado).subscribe({
    next: async (response: any) => {
      this.isProcessing = false;
      if (response.success) {
        // ✅ ACTUALIZAR AMBOS: paquetes Y kits
        await this.authService.actualizarPaquetesAcompanamientoComprados();
        await this.authService.actualizarKitsComprados(); // 👈 NUEVA LÍNEA
        
        alert(`¡${this.paquete.nombre} comprado exitosamente! 🎉\n\nSe te ha obsequiado el ${this.getKitNombre()} como parte de tu paquete.`);
        this.router.navigate(['/acompanimiento']);
      } else {
        alert(response.message || 'Error al procesar el pago');
      }
    },
    error: (error) => {
      this.isProcessing = false;
      console.error('Error en el pago:', error);
      alert('Error al procesar el pago. Por favor intenta nuevamente.');
    }
  });
}

  private validarFormulario(): boolean {
    if (!this.bancoSeleccionado) {
      alert('Por favor selecciona un banco');
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

    if (this.bancoSeleccionado !== 'pse' && (!this.numeroTarjeta || !this.fechaExpiracion || !this.cvv)) {
      alert('Por favor completa la información de tu tarjeta');
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

    if (!this.aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return false;
    }

    return true;
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  volverAcompanamiento(): void {
    this.router.navigate(['/acompanamiento']);
  }

  // Formatear número de tarjeta
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

  // Formatear fecha de expiración
  formatearFechaExpiracion(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.fechaExpiracion = value;
  }

  // ✅ MÉTODO PARA OBTENER NOMBRE DEL KIT (para usar en el HTML)
  getKitNombre(): string {
    if (!this.paquete) return '';
    
    switch(this.paquete.categoria) {
      case 'basico': return 'Básico';
      case 'intermedio': return 'Intermedio';
      case 'integral': return 'Integral';
      default: return '';
    }
  }
}
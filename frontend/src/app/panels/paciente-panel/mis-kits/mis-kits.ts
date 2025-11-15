import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { AuthService } from '../../../shared/services/auth';
import { KitsService, KitComprado, Ubicacion } from '../../../shared/services/kits';

@Component({
  selector: 'app-mis-kits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-kits.html',
  styleUrls: ['./mis-kits.scss']
})
export class MisKits implements OnInit {
  private authService = inject(AuthService);
  private kitsService = inject(KitsService);
  private router = inject(Router);
  private location = inject(Location);
  
  // PROPIEDADES PRINCIPALES
  kits: KitComprado[] = [];
  isLoading: boolean = true;
  error: string = '';

  // PROPIEDADES PARA RECOGIDA
  ubicaciones: Ubicacion[] = [];
  showModalRecogida: boolean = false;
  kitSeleccionado: KitComprado | null = null;
  isLoadingUbicaciones: boolean = false;
  errorUbicaciones: string = '';

  ngOnInit(): void {
    this.cargarMisKits();
  }

  // VOLVER AL DASHBOARD
  volverAlDashboard(): void {
    this.router.navigate(['/Panel-paciente']);
  }

  // CARGA DE KITS
  private cargarMisKits(): void {
    this.isLoading = true;
    this.error = '';

    this.kitsService.getMisKits().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.kits = response.data;
        } else {
          this.error = response.message || 'No se pudieron cargar los kits';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.error = 'Error de conexión al cargar los kits';
        this.isLoading = false;
      }
    });
  }

  // MÉTODOS PARA RECOGIDA
  abrirModalRecogida(kit: KitComprado): void {
    this.kitSeleccionado = kit;
    this.showModalRecogida = true;
    this.cargarUbicaciones();
  }

  cerrarModalRecogida(): void {
    this.showModalRecogida = false;
    this.kitSeleccionado = null;
    this.ubicaciones = [];
    this.errorUbicaciones = '';
  }

  cargarUbicaciones(): void {
    this.isLoadingUbicaciones = true;
    this.errorUbicaciones = '';

    this.kitsService.getUbicaciones().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.ubicaciones = response.data;
        } else {
          this.errorUbicaciones = response.message || 'No se pudieron cargar las ubicaciones';
        }
        this.isLoadingUbicaciones = false;
      },
      error: (error) => {
        console.error('Error cargando ubicaciones:', error);
        this.errorUbicaciones = 'Error de conexión al cargar las ubicaciones';
        this.isLoadingUbicaciones = false;
      }
    });
  }

  agendarRecogida(ubicacion: Ubicacion): void {
    if (!this.kitSeleccionado || !this.kitSeleccionado._id) {
      this.mostrarError('Error', 'No se pudo identificar el kit');
      return;
    }

    this.kitsService.agendarRecogida(this.kitSeleccionado._id, ubicacion.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.mostrarExito(
            'Recogida Agendada',
            `Tu código de recogida es: <strong>${response.data.codigoRecogida}</strong><br><br>
            Preséntalo en: <strong>${response.data.ubicacion}</strong>`
          );
          this.cerrarModalRecogida();
          this.cargarMisKits();
        } else {
          this.mostrarError('Error', response.message || 'No se pudo agendar la recogida');
        }
      },
      error: (error) => {
        this.mostrarError('Error', error.message || 'Error de conexión');
      }
    });
  }

  verCodigoRecogida(kit: KitComprado): void {
    if (kit.codigoRecogida && kit.ubicacionRecogida) {
      this.mostrarInfo(
        'Código de Recogida',
        `Código: <strong>${kit.codigoRecogida}</strong><br>
        Lugar: <strong>${kit.ubicacionRecogida}</strong><br><br>
        Preséntalo en la ubicación seleccionada.`
      );
    }
  }

  // INFORMACIÓN DE KITS
  getNombreKit(kitId: number): string {
    const nombres: { [key: number]: string } = {
      1: 'Kit Básico',
      2: 'Kit Intermedio', 
      3: 'Kit Integral'
    };
    return nombres[kitId] || `Kit ${kitId}`;
  }

  getContenidoKit(kitId: number): string[] {
    if (kitId === 1) {
      return ['Diario personal', 'Mazo de cartas especial', 'Accesorio único'];
    } else if (kitId === 2) {
      return ['Acceso digital (QR)', 'Espejo de bolsillo', 'Accesorio premium'];
    } else if (kitId === 3) {
      return ['Vela aromática', 'Pañoleta de seda', 'Caja especial de regalo'];
    }
    return ['Productos del kit'];
  }

  getPrecioKit(kitId: number): number {
    const precios: { [key: number]: number } = {
      1: 63800,
      2: 79200,
      3: 112200
    };
    return precios[kitId] || 0;
  }

  getDescripcionKit(kitId: number): string {
    const descripciones: { [key: number]: string } = {
      1: 'Selección básica para iniciar tu ritual y documentar tus momentos.',
      2: 'Incluye acceso digital y elementos extra para profundizar en tu cuidado.',
      3: 'Experiencia completa con elementos para un ritual más profundo.'
    };
    return descripciones[kitId] || 'Kit de cuidado personalizado';
  }

  // ESTADOS
  getEstadoClass(estado: string): string {
    const classMap: { [key: string]: string } = {
      'activo': 'estado-activo',
      'inactivo': 'estado-inactivo', 
      'expirado': 'estado-expirado'
    };
    return classMap[estado] || 'estado-default';
  }

  getEstadoText(estado: string): string {
    const textMap: { [key: string]: string } = {
      'activo': 'Activo',
      'inactivo': 'Inactivo',
      'expirado': 'Expirado'
    };
    return textMap[estado] || estado;
  }

  // ESTADÍSTICAS
  get kitsDisponibles(): number {
    return this.kits.filter(kit => 
      !kit.estadoEntrega || kit.estadoEntrega === 'disponible'
    ).length;
  }

  get kitsAgendados(): number {
    return this.kits.filter(kit => kit.estadoEntrega === 'agendado').length;
  }

  get kitsEntregados(): number {
    return this.kits.filter(kit => kit.estadoEntrega === 'entregado').length;
  }

  // SWEETALERT NOTIFICACIONES
  private mostrarError(titulo: string, mensaje: string): void {
    Swal.fire({
      icon: 'error',
      title: titulo,
      html: mensaje,
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc2626',
      customClass: {
        popup: 'sweet-alert-popup'
      }
    });
  }

  private mostrarExito(titulo: string, mensaje: string): void {
    Swal.fire({
      icon: 'success',
      title: titulo,
      html: mensaje,
      confirmButtonText: '¡Entendido!',
      confirmButtonColor: '#059669',
      customClass: {
        popup: 'sweet-alert-popup'
      }
    });
  }

  private mostrarInfo(titulo: string, mensaje: string): void {
    Swal.fire({
      icon: 'info',
      title: titulo,
      html: mensaje,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#2563eb',
      customClass: {
        popup: 'sweet-alert-popup'
      }
    });
  }

  // REFRESCAR
  refrescar(): void {
    this.cargarMisKits();
  }
}
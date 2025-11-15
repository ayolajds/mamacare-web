import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { KitsService } from '../../shared/services/kits';

interface KitVerificado {
  kit: {
    id: string;
    nombre: string;
    kitId: number;
    codigo: string;
    fechaCompra: string;
    estadoEntrega: string;
  };
  usuario: {
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    identificacion?: string;
  };
  ubicacion: string;
}

interface EstadisticasEntrega {
  disponibles: number;
  agendados: number;
  entregados: number;
}

@Component({
  selector: 'app-voluntario-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './voluntario-panel.html',
  styleUrls: ['./voluntario-panel.scss']
})
export class VoluntarioPanel implements OnInit {
  private kitsService = inject(KitsService);
  
  // PROPIEDADES PRINCIPALES
  codigoInput: string = '';
  kitVerificado: KitVerificado | null = null;
  isLoading: boolean = false;
  error: string = '';
  successMessage: string = '';
  
  // ESTADÍSTICAS
  estadisticas: EstadisticasEntrega | null = null;
  isLoadingEstadisticas: boolean = false;

  // HISTORIAL RECIENTE
  historialEntregas: any[] = [];
  mostrarHistorial: boolean = false;
  isLoadingHistorial: boolean = false; // 🔥 NUEVA PROPIEDAD

  ngOnInit(): void {
    this.cargarEstadisticas();
  }

  // VERIFICAR CÓDIGO
  verificarCodigo(): void {
    if (!this.codigoInput.trim()) {
      this.mostrarError('Código requerido', 'Por favor ingresa un código de recogida');
      return;
    }

    const codigoRegex = /^KIT\d{6}$/;
    if (!codigoRegex.test(this.codigoInput.toUpperCase())) {
      this.mostrarError('Formato inválido', 'El formato debe ser: KIT123456');
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.kitVerificado = null;
    this.successMessage = '';

    const codigo = this.codigoInput.toUpperCase().trim();

    this.kitsService.verificarCodigo(codigo).subscribe({
      next: (response: any) => {
        if (response.success && response.data) {
          this.kitVerificado = response.data;
          this.mostrarExito('Código Verificado', 'El código ha sido verificado correctamente');
        } else {
          this.mostrarError('Error de verificación', response.message || 'Error al verificar el código');
        }
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error verificando código:', error);
        this.mostrarError('Error de conexión', error.message || 'Error de conexión al verificar el código');
        this.isLoading = false;
      }
    });
  }

  // MARCAR COMO ENTREGADO
  marcarEntregado(): void {
    if (!this.kitVerificado) {
      this.mostrarError('Error', 'No hay un kit verificado para marcar como entregado');
      return;
    }

    this.isLoading = true;
    this.error = '';

    this.kitsService.marcarKitEntregado(this.kitVerificado.kit.codigo).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.mostrarExito(
            'Entrega Confirmada',
            `El kit <strong>${this.kitVerificado!.kit.nombre}</strong> ha sido marcado como entregado para <strong>${this.kitVerificado!.usuario.nombre}</strong>`
          );
          
          // Recargar estadísticas e historial
          this.cargarEstadisticas();
          if (this.mostrarHistorial) {
            this.cargarHistorialReciente();
          }

          this.limpiarFormulario();
        } else {
          this.mostrarError('Error', response.message || 'Error al marcar como entregado');
        }
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error marcando como entregado:', error);
        this.mostrarError('Error de conexión', error.message || 'Error de conexión al marcar como entregado');
        this.isLoading = false;
      }
    });
  }

  // CARGAR ESTADÍSTICAS
  cargarEstadisticas(): void {
    this.isLoadingEstadisticas = true;
    
    this.kitsService.getEstadisticasEntrega().subscribe({
      next: (response: any) => {
        if (response.success && response.data) {
          this.estadisticas = response.data;
        } else {
          console.error('Error cargando estadísticas:', response.message);
        }
        this.isLoadingEstadisticas = false;
      },
      error: (error: any) => {
        console.error('Error cargando estadísticas:', error);
        this.isLoadingEstadisticas = false;
      }
    });
  }

  // CARGAR HISTORIAL RECIENTE - 🔥 ACTUALIZADO
  cargarHistorialReciente(): void {
    this.isLoadingHistorial = true;
    
    this.kitsService.getHistorialEntregas().subscribe({
      next: (response: any) => {
        if (response.success && response.data) {
          this.historialEntregas = response.data;
          console.log('📋 Historial cargado:', this.historialEntregas);
        } else {
          console.error('Error cargando historial:', response.message);
          this.historialEntregas = [];
        }
        this.isLoadingHistorial = false;
      },
      error: (error: any) => {
        console.error('💥 Error cargando historial:', error);
        this.historialEntregas = [];
        this.isLoadingHistorial = false;
      }
    });
  }

  // TOGGLE HISTORIAL - 🔥 ACTUALIZADO
  toggleHistorial(): void {
    this.mostrarHistorial = !this.mostrarHistorial;
    
    // Si se muestra el historial y está vacío, cargarlo
    if (this.mostrarHistorial && this.historialEntregas.length === 0) {
      this.cargarHistorialReciente();
    }
  }

  // LIMPIAR FORMULARIO
  limpiarFormulario(): void {
    this.codigoInput = '';
    this.kitVerificado = null;
    this.error = '';
  }

  // LIMPIAR MENSAJES
  limpiarMensajes(): void {
    this.error = '';
    this.successMessage = '';
  }

  // OBTENER NOMBRE DEL KIT
  getNombreKit(kitId: number): string {
    const nombres: { [key: number]: string } = {
      1: 'Kit Básico',
      2: 'Kit Intermedio', 
      3: 'Kit Integral'
    };
    return nombres[kitId] || `Kit ${kitId}`;
  }

  // OBTENER CONTENIDO DEL KIT
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

  // FORMATEAR FECHA
  formatearFecha(fechaString: string): string {
    try {
      const fecha = new Date(fechaString);
      return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return fechaString;
    }
  }

  // COPIAR CÓDIGO AL PORTAPAPELES
  copiarCodigo(): void {
    if (!this.kitVerificado) return;
    
    navigator.clipboard.writeText(this.kitVerificado.kit.codigo).then(() => {
      this.mostrarExito('Código Copiado', 'El código ha sido copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar:', err);
      this.mostrarError('Error', 'No se pudo copiar el código');
    });
  }

  // GENERAR REPORTE
  generarReporte(): void {
    this.mostrarInfo('Generar Reporte', 'La función de generación de reportes estará disponible próximamente');
  }

  // VALIDAR SI EL CÓDIGO ES VÁLIDO
  get codigoEsValido(): boolean {
    const codigoRegex = /^KIT\d{6}$/;
    return codigoRegex.test(this.codigoInput.toUpperCase());
  }

  // OBTENER TOTAL DE KITS
  get totalKits(): number {
    if (!this.estadisticas) return 0;
    return this.estadisticas.disponibles + this.estadisticas.agendados + this.estadisticas.entregados;
  }

  // OBTENER PORCENTAJE DE ENTREGAS
  get porcentajeEntregados(): number {
    if (!this.estadisticas || this.totalKits === 0) return 0;
    return (this.estadisticas.entregados / this.totalKits) * 100;
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
}
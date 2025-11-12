import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

// Servicios
import { AuthService } from '../../../shared/services/auth';
import { PaqueteService, PaqueteComprado } from '../../../shared/services/paquete';

@Component({
  selector: 'app-mis-paquetes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-paquetes.html',
  styleUrls: ['./mis-paquetes.scss']
})
export class MisPaquetes implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private paqueteService = inject(PaqueteService);
  private router = inject(Router);
  
  paquetes: PaqueteComprado[] = [];
  isLoading: boolean = true;
  error: string = '';
  pacienteNombre: string = '';

  private destroy$ = new Subject<void>();

  // Propiedades computadas para las estadísticas
  get paquetesActivos(): number {
    return this.paquetes.filter(paquete => 
      paquete.estado === 'activo' && this.tieneSesionesDisponibles(paquete)
    ).length;
  }

  get paquetesExpirados(): number {
    return this.paquetes.filter(paquete => 
      paquete.estado === 'expirado' || !this.tieneSesionesDisponibles(paquete)
    ).length;
  }

  get totalGastado(): number {
    return this.paquetes.reduce((total, paquete) => {
      let precio = 0;
      switch(paquete.paqueteId) {
        case 1: precio = 378180; break; // Básico
        case 2: precio = 505120; break; // Intermedio  
        case 3: precio = 684420; break; // Integral
        default: precio = 0;
      }
      return total + precio;
    }, 0);
  }

  ngOnInit(): void {
    this.cargarMisPaquetes();
    this.cargarDatosPaciente();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private cargarDatosPaciente(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.pacienteNombre = `${user.name} ${user.lastName}`.trim();
    }
  }

  private cargarMisPaquetes(): void {
    this.isLoading = true;
    this.error = '';

    this.paqueteService.getMisPaquetes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            // Procesar los paquetes para actualizar estados
            this.paquetes = this.procesarEstadosPaquetes(response.data);
            console.log('✅ Paquetes del usuario:', this.paquetes);
          } else {
            this.error = 'No se pudieron cargar los paquetes';
            this.mostrarError('No se pudieron cargar tus paquetes. Por favor, intenta nuevamente.');
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Error cargando paquetes del usuario:', error);
          this.error = this.getErrorMessage(error);
          this.mostrarError(this.error);
          this.isLoading = false;
        }
      });
  }

  private procesarEstadosPaquetes(paquetes: PaqueteComprado[]): PaqueteComprado[] {
    return paquetes.map(paquete => {
      // Si todas las sesiones están utilizadas, marcar como expirado
      if (paquete.sesionesUsadas >= paquete.sesionesTotales && paquete.estado === 'activo') {
        return {
          ...paquete,
          estado: 'expirado'
        };
      }
      
      // Si la fecha de expiración ya pasó, marcar como expirado
      if (paquete.fechaExpiracion && new Date(paquete.fechaExpiracion) < new Date() && paquete.estado === 'activo') {
        return {
          ...paquete,
          estado: 'expirado'
        };
      }
      
      return paquete;
    });
  }

  // Redirigir a la página de pago para renovar/comprar paquete
  comprarPaquete(paqueteId: number): void {
    this.router.navigate([`/pago-acompanamiento/${paqueteId}`]);
  }

  getEstadoClass(estado: string): string {
    const classMap: { [key: string]: string } = {
      'activo': 'estado-activo',
      'expirado': 'estado-expirado',
      'proximamente': 'estado-proximo'
    };
    return classMap[estado] || 'estado-default';
  }

  getEstadoText(paquete: PaqueteComprado): string {
    // Si está activo pero sin sesiones, mostrar como "Completado"
    if (paquete.estado === 'activo' && !this.tieneSesionesDisponibles(paquete)) {
      return 'Completado';
    }
    
    const textMap: { [key: string]: string } = {
      'activo': 'Activo',
      'expirado': 'Expirado', 
      'proximamente': 'Próximamente'
    };
    return textMap[paquete.estado] || paquete.estado;
  }

  getEstadoDisplayClass(paquete: PaqueteComprado): string {
    // Si está activo pero sin sesiones, usar clase de completado
    if (paquete.estado === 'activo' && !this.tieneSesionesDisponibles(paquete)) {
      return 'estado-completado';
    }
    return this.getEstadoClass(paquete.estado);
  }

  calcularProgresoSesiones(paquete: PaqueteComprado): number {
    const total = paquete.sesionesTotales;
    const utilizadas = paquete.sesionesUsadas;
    return total > 0 ? (utilizadas / total) * 100 : 0;
  }

  tieneSesionesDisponibles(paquete: PaqueteComprado): boolean {
    return paquete.estado === 'activo' && paquete.sesionesUsadas < paquete.sesionesTotales;
  }

  estaCompletado(paquete: PaqueteComprado): boolean {
    return paquete.estado === 'activo' && paquete.sesionesUsadas >= paquete.sesionesTotales;
  }

  puedeComprarNuevo(paquete: PaqueteComprado): boolean {
    // Solo puede comprar nuevo si el paquete está expirado o completado
    return paquete.estado === 'expirado' || this.estaCompletado(paquete);
  }

  getTextoBotonComprar(paquete: PaqueteComprado): string {
    if (this.estaCompletado(paquete)) {
      return 'Comprar de Nuevo';
    } else if (paquete.estado === 'expirado') {
      return 'Renovar Paquete';
    } else {
      return 'Comprar Paquete';
    }
  }

  // Verificar si el paquete permite sesiones virtuales
  permiteSesionesVirtuales(paquete: PaqueteComprado): boolean {
    // Solo paquetes 2 y 3 permiten sesiones virtuales
    return paquete.paqueteId === 2 || paquete.paqueteId === 3;
  }

  // Obtener tipo de sesión para mostrar
  getTipoSesion(paquete: PaqueteComprado): string {
    return this.permiteSesionesVirtuales(paquete) ? 'Virtual/Presencial' : 'Solo Presencial';
  }

  private getErrorMessage(error: any): string {
    if (error?.status === 401) {
      return 'No autorizado. Por favor, inicia sesión nuevamente.';
    } else if (error?.status === 404) {
      return 'No se encontraron paquetes.';
    } else if (error?.status >= 500) {
      return 'Error del servidor. Por favor, intenta más tarde.';
    } else {
      return 'Error al cargar los paquetes. Por favor, intenta nuevamente.';
    }
  }

  refrescar(): void {
    this.cargarMisPaquetes();
    
    Swal.fire({
      title: 'Actualizando...',
      text: 'Cargando información actualizada de tus paquetes',
      icon: 'info',
      showConfirmButton: false,
      timer: 1000
    });
  }

  // Método mejorado para mostrar errores con títulos
  private mostrarError(titulo: string, mensaje?: string): void {
    Swal.fire({
      title: titulo,
      text: mensaje || titulo,
      icon: 'error',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#ef4444'
    });
  }

  private mostrarExito(mensaje: string): void {
    Swal.fire({
      title: '¡Éxito!',
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#10b981'
    });
  }

  getNombrePaquete(paqueteId: number): string {
    const nombres: { [key: number]: string } = {
      1: 'Paquete Básico',
      2: 'Paquete Intermedio',
      3: 'Paquete Integral'
    };
    return nombres[paqueteId] || `Paquete ${paqueteId}`;
  }

  getPrecioPaquete(paqueteId: number): number {
    const precios: { [key: number]: number } = {
      1: 378180,
      2: 505120,
      3: 684420
    };
    return precios[paqueteId] || 0;
  }

  // ✅ NUEVO MÉTODO: Redirigir a solicitar cita
  solicitarCita(): void {
    this.router.navigate(['/solicitar-cita']);
  }
}
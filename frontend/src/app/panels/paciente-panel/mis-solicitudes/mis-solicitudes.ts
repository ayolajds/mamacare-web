import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../../../shared/services/cita';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-solicitudes',
  imports: [CommonModule],
  templateUrl: './mis-solicitudes.html',
  styleUrls: ['./mis-solicitudes.scss']
})
export class MisSolicitudes implements OnInit {
  tabActiva: string = 'pendientes';
  isLoading: boolean = true;
  
  solicitudesPendientes: any[] = [];
  citasConfirmadas: any[] = [];
  citasHistorial: any[] = [];
  citasRechazadas: any[] = [];

  solicitudSeleccionada: any = null;
  citaSeleccionada: any = null; // 🔥 NUEVA VARIABLE PARA MODAL DE CITAS

  constructor(
    private router: Router,
    private citasService: CitasService
  ) { }

  ngOnInit(): void {
    this.cargarSolicitudesYCitas();
  }

  cargarSolicitudesYCitas(): void {
    this.isLoading = true;

    console.log('Cargando solicitudes del paciente...');

    this.citasService.getMisSolicitudes().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa del backend - Solicitudes:', response);
        
        const solicitudes = response?.data || [];
        
        console.log('Solicitudes extraídas:', solicitudes);
        console.log('Cantidad de solicitudes:', solicitudes.length);
        
        if (solicitudes.length > 0) {
          console.log('Primera solicitud:', solicitudes[0]);
          console.log('Status primera solicitud:', solicitudes[0].status);
        }
        
        this.solicitudesPendientes = solicitudes;
        console.log('Solicitudes asignadas al componente:', this.solicitudesPendientes.length);
        
        this.cargarCitasConfirmadas();
      },
      error: (error: any) => {
        console.error('Error al cargar solicitudes:', error);
        console.error('Detalles del error:', error.status, error.message);
        this.solicitudesPendientes = [];
        
        // Mostrar alerta de error
        this.mostrarError('No se pudieron cargar las solicitudes. Por favor, intente nuevamente.');
        
        this.cargarCitasConfirmadas();
      }
    });
  }

  private cargarCitasConfirmadas(): void {
    this.citasService.getMisCitas().subscribe({
      next: (response: any) => {
        console.log('Respuesta completa del backend - mis-citas:', response);
        
        const todasLasCitas = response?.data?.docs || [];
        
        console.log('Citas extraídas:', todasLasCitas);
        console.log('Cantidad de citas extraídas:', todasLasCitas.length);
        
        this.citasConfirmadas = todasLasCitas.filter((cita: any) => 
          cita.estado === 'confirmada' || 
          cita.estado === 'scheduled' || 
          cita.estado === 'programada' ||
          cita.status === 'confirmed' ||
          cita.status === 'scheduled'
        );
        
        this.citasHistorial = todasLasCitas.filter((cita: any) => 
          cita.estado === 'completada' || 
          cita.estado === 'completed' ||
          cita.estado === 'atendida' ||
          cita.status === 'completed' ||
          cita.status === 'attended'
        );
        
        this.citasRechazadas = todasLasCitas.filter((cita: any) => 
          cita.estado === 'cancelada' || 
          cita.estado === 'cancelled' ||
          cita.estado === 'rechazada' ||
          cita.status === 'cancelled' ||
          cita.status === 'rejected'
        );
        
        console.log('Citas confirmadas:', this.citasConfirmadas.length);
        console.log('Citas historial:', this.citasHistorial.length);
        console.log('Citas rechazadas:', this.citasRechazadas.length);
        
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error al cargar citas:', error);
        this.citasConfirmadas = [];
        this.citasHistorial = [];
        this.citasRechazadas = [];
        this.isLoading = false;
        
        this.mostrarError('No se pudieron cargar las citas confirmadas. Por favor, intente nuevamente.');
      }
    });
  }

  cambiarTab(tab: string): void {
    this.tabActiva = tab;
  }

  // 🔥 MÉTODO CORREGIDO PARA VER DETALLES DE CITA
  verDetalles(cita: any): void {
    console.log('Abriendo detalles de cita confirmada:', cita);
    this.citaSeleccionada = cita;
  }

  // 🔥 NUEVO MÉTODO PARA CERRAR MODAL DE CITA
  cerrarModalCita(): void {
    this.citaSeleccionada = null;
  }

  verDetallesSolicitud(solicitud: any): void {
    console.log('Abriendo detalles de solicitud:', solicitud);
    this.solicitudSeleccionada = solicitud;
  }

  cerrarModalDetalles(): void {
    this.solicitudSeleccionada = null;
  }

  cancelarCita(cita: any): void {
    const citaId = cita._id || cita.id;
    
    Swal.fire({
      title: 'Cancelar Cita',
      html: `
        <div style="text-align: left; color: #374151; line-height: 1.6;">
          <p>¿Está seguro de que desea cancelar esta cita?</p>
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 6px; margin-top: 12px;">
            <p style="margin: 0; font-size: 14px; color: #dc2626;">
              <strong>Nota:</strong> Esta acción no se puede deshacer. Si cancela con poca antelación, podría aplicar una política de cancelación.
            </p>
          </div>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cancelar Cita',
      cancelButtonText: 'Mantener Cita',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      customClass: {
        popup: 'sweet-alert-custom',
        confirmButton: 'sweet-confirm-button',
        cancelButton: 'sweet-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.procesarCancelacionCita(citaId);
      }
    });
  }

  private procesarCancelacionCita(citaId: string): void {
    this.citasService.cancelarCita(citaId).subscribe({
      next: (response: any) => {
        this.cargarSolicitudesYCitas();
        
        Swal.fire({
          title: 'Cita Cancelada',
          text: 'La cita ha sido cancelada exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#4f46e5',
          customClass: {
            popup: 'sweet-alert-custom',
            confirmButton: 'sweet-confirm-button'
          }
        });
      },
      error: (error: any) => {
        console.error('Error al cancelar cita:', error);
        
        this.mostrarError('No se pudo cancelar la cita. Por favor, intente nuevamente o contacte al administrador.');
      }
    });
  }

  cancelarSolicitud(solicitud: any): void {
    const solicitudId = solicitud._id || solicitud.id;
    
    Swal.fire({
      title: 'Cancelar Solicitud',
      html: `
        <div style="text-align: left; color: #374151; line-height: 1.6;">
          <p>¿Está seguro de que desea cancelar esta solicitud de cita?</p>
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 6px; margin-top: 12px;">
            <p style="margin: 0; font-size: 14px; color: #dc2626;">
              <strong>Nota:</strong> Esta acción no se puede deshacer. La solicitud será eliminada del sistema.
            </p>
          </div>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cancelar Solicitud',
      cancelButtonText: 'Mantener Solicitud',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      customClass: {
        popup: 'sweet-alert-custom',
        confirmButton: 'sweet-confirm-button',
        cancelButton: 'sweet-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.procesarCancelacionSolicitud(solicitudId, solicitud);
      }
    });
  }

  private procesarCancelacionSolicitud(solicitudId: string, solicitud: any): void {
    this.citasService.cancelarCita(solicitudId).subscribe({
      next: (response: any) => {
        this.cargarSolicitudesYCitas();
        this.cerrarModalDetalles();
        
        Swal.fire({
          title: 'Solicitud Cancelada',
          text: 'La solicitud de cita ha sido cancelada exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#4f46e5',
          customClass: {
            popup: 'sweet-alert-custom',
            confirmButton: 'sweet-confirm-button'
          }
        });
      },
      error: (error: any) => {
        console.error('Error al cancelar solicitud:', error);
        
        this.mostrarError('No se pudo cancelar la solicitud. Por favor, intente nuevamente o contacte al administrador.');
      }
    });
  }

  solicitarNuevaCita(): void {
    this.router.navigate(['/solicitar-cita']);
  }

  formatearFecha(fechaString: string): string {
    try {
      const fecha = new Date(fechaString);
      return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return fechaString;
    }
  }

  formatearFechaHora(fechaString: string): string {
    try {
      const fecha = new Date(fechaString);
      return fecha.toLocaleString('es-ES', {
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

  getNombreMedico(cita: any): string {
    if (cita.medico) {
      if (typeof cita.medico === 'object') {
        return cita.medico.nombre || cita.medico.nombreCompleto || 'Profesional no asignado';
      }
      return cita.medico;
    }
    
    if (cita.professionalId) {
      if (typeof cita.professionalId === 'object') {
        return cita.professionalId.name || cita.professionalId.nombre || 'Profesional no asignado';
      }
      return cita.professionalId;
    }
    
    return 'Profesional no asignado';
  }

  getEspecialidad(cita: any): string {
    // Solo mostrar especialidad para citas confirmadas, no para solicitudes
    if (cita.especialidad) {
      if (typeof cita.especialidad === 'object') {
        return cita.especialidad.nombre || cita.especialidad.descripcion || 'Especialidad no especificada';
      }
      return cita.especialidad;
    }
    
    if (cita.specialty) {
      if (typeof cita.specialty === 'object') {
        return cita.specialty.name || cita.specialty.nombre || 'Especialidad no especificada';
      }
      return cita.specialty;
    }
    
    return 'Especialidad no especificada';
  }

  getEstadoSolicitud(solicitud: any): string {
    const estado = solicitud.estado || solicitud.status;
    const estadoMap: { [key: string]: string } = {
      'pending': 'En Revisión',
      'pendiente': 'En Revisión',
      'under_review': 'En Revisión',
      'scheduled': 'Agendada',
      'confirmed': 'Confirmada',
      'rejected': 'Rechazada',
      'rechazada': 'Rechazada',
      'cancelled': 'Cancelada',
      'cancelada': 'Cancelada',
      'completed': 'Completada',
      'completada': 'Completada'
    };
    return estadoMap[estado] || estado;
  }

  getMotivoSolicitud(solicitud: any): string {
    return solicitud.solicitud?.motivo || solicitud.motivo || solicitud.reason || 'No especificado';
  }

  getSintomasSolicitud(solicitud: any): string {
    const sintomas = solicitud.solicitud?.sintomas || solicitud.sintomas || solicitud.symptoms || [];
    if (Array.isArray(sintomas)) {
      return sintomas.length > 0 ? sintomas.join(', ') : 'No especificados';
    }
    return sintomas || 'No especificados';
  }

  getTipoPreferido(solicitud: any): string {
    const tipo = solicitud.solicitud?.tipoPreferido || solicitud.tipoPreferido || solicitud.meetingPlatform;
    if (tipo === 'virtual') return 'Virtual';
    if (tipo === 'presencial') return 'Presencial';
    if (tipo === 'in_person') return 'Presencial';
    if (tipo === 'google_meet' || tipo === 'zoom' || tipo === 'teams') return 'Virtual';
    return tipo || 'No especificado';
  }

  // 🔥 NUEVO MÉTODO CORREGIDO - Mostrar sesiones disponibles
  getInfoPaquete(solicitud: any): string {
    console.log('📦 Datos completos de la solicitud:', solicitud);
    console.log('📊 Paquete info:', solicitud.paqueteInfo);
    
    if (solicitud.paqueteId) {
      // Usar los datos del paquete que vienen del backend
      if (solicitud.paqueteInfo) {
        const { paqueteNombre, sesionesDisponibles, sesionesTotales } = solicitud.paqueteInfo;
        console.log(`🎯 Mostrando: ${paqueteNombre} (${sesionesDisponibles}/${sesionesTotales} sesiones disponibles)`);
        return `${paqueteNombre} (${sesionesDisponibles}/${sesionesTotales} sesiones disponibles)`;
      }
      
      // Fallback por si no hay paqueteInfo
      const paquetes: { [key: string]: string } = {
        '1': 'Básico (4 sesiones)',
        '2': 'Intermedio (8 sesiones)', 
        '3': 'Integral (12 sesiones)'
      };
      return paquetes[solicitud.paqueteId.toString()] || `Paquete ${solicitud.paqueteId}`;
    }
    return 'No aplica';
  }

  // 🔥 NUEVO MÉTODO para mostrar solo el nombre del paquete (sin sesiones)
  getNombrePaquete(solicitud: any): string {
    if (solicitud.paqueteId) {
      const paqueteId = solicitud.paqueteId.toString();
      const paquetes: { [key: string]: string } = {
        '1': 'Básico',
        '2': 'Intermedio',
        '3': 'Integral'
      };
      return paquetes[paqueteId] || `Paquete ${paqueteId}`;
    }
    return 'No aplica';
  }

  tieneSolicitudesPendientes(): boolean {
    return this.solicitudesPendientes.length > 0;
  }

  tieneCitasConfirmadas(): boolean {
    return this.citasConfirmadas.length > 0;
  }

  tieneHistorial(): boolean {
    return this.citasHistorial.length > 0;
  }

  tieneCitasRechazadas(): boolean {
    return this.citasRechazadas.length > 0;
  }

  getTodasLasPropiedades(solicitud: any): string[] {
    return Object.keys(solicitud);
  }

  tieneDatosSolicitud(solicitud: any): boolean {
    return !!solicitud.solicitud || 
           !!solicitud.motivo || 
           !!solicitud.sintomas || 
           !!solicitud.tipoPreferido;
  }

  // Método para mostrar errores con SweetAlert2
  private mostrarError(mensaje: string): void {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#dc2626',
      customClass: {
        popup: 'sweet-alert-custom',
        confirmButton: 'sweet-confirm-button'
      }
    });
  }

  // Método para mostrar información de carga
  mostrarCarga(mensaje: string): void {
    Swal.fire({
      title: 'Procesando',
      text: mensaje,
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // Método para cerrar alertas de carga
  cerrarCarga(): void {
    Swal.close();
  }
}
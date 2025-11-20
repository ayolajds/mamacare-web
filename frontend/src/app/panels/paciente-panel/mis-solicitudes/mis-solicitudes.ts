import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../../../shared/services/cita';
import { ProfessionalService } from '../../../shared/services/profesional'; 
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

// ✅ INTERFACE ACTUALIZADA CON CAMPOS NUEVOS
interface CitaConDatosExtendidos {
  _id: string;
  title: string;
  date?: string;
  fecha?: string;
  hora?: string;
  duracion?: number;
  status: string;
  estado?: string;
  tipo?: string;
  notas?: string;
  professionalId?: any;
  medico?: any;
  patientId?: any;
  
  // ✅ CAMPOS NUEVOS AGREGADOS
  tipoCita?: string;
  motivo?: string;
  sintomas?: string[];
  paqueteId?: number;
  pacienteName?: string;
  pacienteEmail?: string;
  ubicacion?: string;
  solicitud?: {
    motivo?: string;
    sintomas?: string[];
    horarioPreferido?: string;
    tipoPreferido?: string;
  };
  
  // Campos de especialidad
  specialty?: string;
  especialidad?: string;
  
  // Campos de diagnóstico (para historial)
  diagnostico?: string;
  tratamiento?: string;
  motivoCancelacion?: string;
  
  createdAt: string;
  updatedAt: string;
}

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
  citasConfirmadas: CitaConDatosExtendidos[] = [];
  citasHistorial: CitaConDatosExtendidos[] = [];
  citasRechazadas: CitaConDatosExtendidos[] = [];

  solicitudSeleccionada: any = null;
  citaSeleccionada: CitaConDatosExtendidos | null = null;

  constructor(
    private router: Router,
    private citasService: CitasService,
    private professionalService: ProfessionalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.cargarSolicitudesYCitas();
  }

  volverAtras(): void {
    this.location.back();
  }

  cargarSolicitudesYCitas(): void {
    this.isLoading = true;

    this.citasService.getMisSolicitudes().subscribe({
      next: (response: any) => {
        const solicitudes = response?.data || [];
        this.solicitudesPendientes = solicitudes;
        this.cargarCitasConfirmadas();
      },
      error: (error: any) => {
        console.error('Error al cargar solicitudes:', error);
        this.solicitudesPendientes = [];
        this.mostrarError('No se pudieron cargar las solicitudes. Por favor, intente nuevamente.');
        this.cargarCitasConfirmadas();
      }
    });
  }

  private cargarCitasConfirmadas(): void {
    this.citasService.getMisCitasConEspecialidades().subscribe({
      next: (response: any) => {
        // ✅ CORRECCIÓN: Cambiar de response?.data?.docs a response?.data?.appointments
        const todasLasCitas = response?.data?.appointments || response?.data?.docs || [];
        

        
        // ✅ DEBUG: Mostrar datos críticos de cada cita
        todasLasCitas.forEach((cita: CitaConDatosExtendidos, index: number) => {
        });
        
        this.citasConfirmadas = todasLasCitas.filter((cita: CitaConDatosExtendidos) => 
          cita.estado === 'confirmada' || 
          cita.estado === 'scheduled' || 
          cita.estado === 'programada' ||
          cita.status === 'confirmed' ||
          cita.status === 'scheduled'
        );
        
        this.citasHistorial = todasLasCitas.filter((cita: CitaConDatosExtendidos) => 
          cita.estado === 'completada' || 
          cita.estado === 'completed' ||
          cita.estado === 'atendida' ||
          cita.status === 'completed' ||
          cita.status === 'attended'
        );
        
        this.citasRechazadas = todasLasCitas.filter((cita: CitaConDatosExtendidos) => 
          cita.estado === 'cancelada' || 
          cita.estado === 'cancelled' ||
          cita.estado === 'rechazada' ||
          cita.status === 'cancelled' ||
          cita.status === 'rejected'
        );
        
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

  verDetalles(cita: CitaConDatosExtendidos): void {
    this.citaSeleccionada = cita;
  }

  cerrarModalCita(): void {
    this.citaSeleccionada = null;
  }

  verDetallesSolicitud(solicitud: any): void {
    this.solicitudSeleccionada = solicitud;
  }

  cerrarModalDetalles(): void {
    this.solicitudSeleccionada = null;
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
              <strong>Nota:</strong> Esta acción no se puede deshacer.
            </p>
          </div>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cancelar',
      cancelButtonText: 'Mantener',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280'
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
          confirmButtonColor: '#4f46e5'
        });
      },
      error: (error: any) => {
        console.error('Error al cancelar solicitud:', error);
        this.mostrarError('No se pudo cancelar la solicitud. Por favor, intente nuevamente.');
      }
    });
  }

  solicitarNuevaCita(): void {
    this.router.navigate(['/solicitar-cita']);
  }

  // ✅ MÉTODO CORREGIDO: Manejo seguro de fechas
  formatearFecha(fechaString: string): string {
    try {
      // ✅ Verificar si la fecha es válida
      if (!fechaString || fechaString.trim() === '') {
        return 'Fecha no disponible';
      }
      
      const fecha = new Date(fechaString);
      
      // ✅ Verificar si la fecha es válida
      if (isNaN(fecha.getTime())) {
        return 'Fecha inválida';
      }
      
      return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formateando fecha:', error);
      return 'Fecha inválida';
    }
  }

  // ✅ MÉTODO CORREGIDO: Manejo seguro de fechas con hora
  formatearFechaHora(fechaString: string): string {
    try {
      // ✅ Verificar si la fecha es válida
      if (!fechaString || fechaString.trim() === '') {
        return 'Fecha no disponible';
      }
      
      const fecha = new Date(fechaString);
      
      // ✅ Verificar si la fecha es válida
      if (isNaN(fecha.getTime())) {
        return 'Fecha inválida';
      }
      
      return fecha.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formateando fecha/hora:', error);
      return 'Fecha inválida';
    }
  }

  // ✅ MÉTODO AUXILIAR SEGURO para obtener fecha de cita
  getFechaCita(cita: CitaConDatosExtendidos): string {
    return (cita.fecha || cita.date) || '';
  }

  // ✅ MÉTODO AUXILIAR SEGURO para obtener fecha de cita seleccionada
  getFechaCitaSeleccionada(): string {
    if (!this.citaSeleccionada) return '';
    return (this.citaSeleccionada.fecha || this.citaSeleccionada.date) || '';
  }

  // ✅ MÉTODO MEJORADO para obtener nombre del profesional
  getNombreMedico(cita: CitaConDatosExtendidos): string {
    // Buscar en professionalId (objeto populado)
    if (cita.professionalId && typeof cita.professionalId === 'object') {
      const nombre = `${cita.professionalId.name || ''} ${cita.professionalId.lastName || ''}`.trim();
      if (nombre) {
        return nombre;
      }
    }
    
    // Buscar en medico (objeto)
    if (cita.medico && typeof cita.medico === 'object') {
      const nombre = cita.medico.nombre || cita.medico.nombreCompleto || 
                    `${cita.medico.name || ''} ${cita.medico.lastName || ''}`.trim();
      if (nombre) {
        return nombre;
      }
    }
    
    // Buscar campos directos
    if (cita.medico && typeof cita.medico === 'string') {
      return cita.medico;
    }
    
    if (cita.professionalId && typeof cita.professionalId === 'string') {
      return cita.professionalId;
    }
    
    return 'Profesional no asignado';
  }

  // ✅ MÉTODO DEFINITIVO para obtener especialidad 
  getEspecialidad(cita: CitaConDatosExtendidos): string {
    // 1. PRIMERO: Buscar en professionalId (del nuevo endpoint)
    if (cita.professionalId && typeof cita.professionalId === 'object') {
      // El endpoint /patient/appointments usa 'specialty' (no 'especialidad')
      if (cita.professionalId.specialty && cita.professionalId.specialty.trim() !== '') {
        return cita.professionalId.specialty;
      }
      
      // Por si acaso, buscar también en 'especialidad'
      if (cita.professionalId.especialidad && cita.professionalId.especialidad.trim() !== '') {
        return cita.professionalId.especialidad;
      }
    }
    
    // 2. SEGUNDO: Buscar en campos directos
    if (cita.specialty && cita.specialty.trim() !== '') {
      return cita.specialty;
    }
    
    if (cita.especialidad && cita.especialidad.trim() !== '') {
      return cita.especialidad;
    }
    
    return 'Especialidad no especificada';
  }

  // ✅ NUEVOS MÉTODOS PARA MOSTRAR DATOS CRÍTICOS

  /**
   * Obtiene la modalidad de la cita (Virtual, Presencial, Domicilio)
   */
  getModalidadDisplay(cita: CitaConDatosExtendidos): string {
    const tipo = cita.tipoCita || cita.solicitud?.tipoPreferido || 'presencial';
    switch(tipo) {
      case 'virtual': return 'Virtual';
      case 'presencial': return 'Presencial';
      case 'domicilio': return 'Domicilio';
      default: return 'Presencial';
    }
  }

  /**
   * Obtiene la ubicación específica
   */
  getUbicacionDisplay(cita: CitaConDatosExtendidos): string {
    const tipo = cita.tipoCita || 'presencial';
    if (tipo === 'virtual') return 'Plataforma Virtual';
    if (tipo === 'domicilio') return 'Domicilio del Paciente';
    return cita.ubicacion || 'Consultorio Principal';
  }

  /**
   * Obtiene el nombre del paquete
   */
  getNombrePaquete(cita: CitaConDatosExtendidos): string {
    if (!cita.paqueteId) return 'No aplica';
    
    const paquetes: { [key: number]: string } = {
      1: 'Básico (4 sesiones)',
      2: 'Intermedio (8 sesiones)',
      3: 'Integral (12 sesiones)'
    };
    return paquetes[cita.paqueteId] || `Paquete ${cita.paqueteId}`;
  }

  /**
   * Obtiene los síntomas (prioridad a campos directos)
   */
  getSintomasDisplay(cita: CitaConDatosExtendidos): string {
    const sintomas = cita.sintomas || cita.solicitud?.sintomas || [];
    if (Array.isArray(sintomas)) {
      return sintomas.length > 0 ? sintomas.join(', ') : 'No especificados';
    }
    return sintomas || 'No especificados';
  }

  /**
   * Obtiene el motivo (prioridad a campos directos)
   */
  getMotivoDisplay(cita: CitaConDatosExtendidos): string {
    return cita.motivo || cita.solicitud?.motivo || 'No especificado';
  }

  /**
   * Verifica si la cita tiene modalidad virtual
   */
  esCitaVirtual(cita: CitaConDatosExtendidos): boolean {
    const tipo = cita.tipoCita || cita.solicitud?.tipoPreferido || 'presencial';
    return tipo === 'virtual';
  }

  /**
   * Verifica si la cita es a domicilio
   */
  esCitaDomicilio(cita: CitaConDatosExtendidos): boolean {
    const tipo = cita.tipoCita || cita.solicitud?.tipoPreferido || 'presencial';
    return tipo === 'domicilio';
  }

  /**
   * Obtiene clase CSS para badge de modalidad
   */
  getModalidadBadgeClass(cita: CitaConDatosExtendidos): string {
    const modalidad = this.getModalidadDisplay(cita);
    const badgeClasses: { [key: string]: string } = {
      'Virtual': 'badge-virtual',
      'Presencial': 'badge-presencial',
      'Domicilio': 'badge-domicilio'
    };
    return badgeClasses[modalidad] || 'badge-presencial';
  }

  // ✅ MÉTODOS MEJORADOS PARA SOLICITUDES

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

  getInfoPaquete(solicitud: any): string {
    if (solicitud.paqueteId) {
      if (solicitud.paqueteInfo) {
        const { paqueteNombre, sesionesDisponibles, sesionesTotales } = solicitud.paqueteInfo;
        return `${paqueteNombre} (${sesionesDisponibles}/${sesionesTotales} sesiones disponibles)`;
      }
      
      const paquetes: { [key: string]: string } = {
        '1': 'Básico (4 sesiones)',
        '2': 'Intermedio (8 sesiones)', 
        '3': 'Integral (12 sesiones)'
      };
      return paquetes[solicitud.paqueteId.toString()] || `Paquete ${solicitud.paqueteId}`;
    }
    return 'No aplica';
  }

  // ✅ MÉTODOS PARA MANEJAR LA UBICACIÓN (actualizados)
  getDetallesUbicacion(cita: CitaConDatosExtendidos): { texto: string, esVirtual: boolean, tieneEnlace: boolean } {
    const tipo = cita.tipoCita || this.detectarTipoPorUbicacion(cita.ubicacion || '');
    const esVirtual = tipo === 'virtual';
    const esDomicilio = tipo === 'domicilio';
    
    if (esVirtual) {
      return {
        texto: 'Videollamada - El profesional te contactará para coordinar la plataforma',
        esVirtual: true,
        tieneEnlace: false
      };
    } else if (esDomicilio) {
      return {
        texto: 'Domicilio - El profesional visitará tu ubicación',
        esVirtual: false,
        tieneEnlace: false
      };
    } else {
      return {
        texto: this.getUbicacionDisplay(cita),
        esVirtual: false,
        tieneEnlace: false
      };
    }
  }

  // Método para detectar tipo basado en la ubicación (para citas existentes)
  private detectarTipoPorUbicacion(ubicacion: string): string {
    if (!ubicacion) return 'presencial';
    
    const virtualKeywords = ['videollamada', 'virtual', 'meet', 'zoom', 'teams', 'online'];
    const domicilioKeywords = ['domicilio', 'casa', 'hogar', 'residencia'];
    
    const ubicacionLower = ubicacion.toLowerCase();
    
    if (virtualKeywords.some(keyword => ubicacionLower.includes(keyword))) {
      return 'virtual';
    }
    
    if (domicilioKeywords.some(keyword => ubicacionLower.includes(keyword))) {
      return 'domicilio';
    }
    
    return 'presencial';
  }

  abrirUbicacion(cita: CitaConDatosExtendidos): void {
    const detalles = this.getDetallesUbicacion(cita);
    
    let icono = '📍';
    let titulo = 'Coordinación de Cita';
    
    if (detalles.esVirtual) {
      icono = '📹';
      titulo = 'Cita Virtual';
    } else if (this.esCitaDomicilio(cita)) {
      icono = '🏠';
      titulo = 'Cita a Domicilio';
    }
    
    Swal.fire({
      title: titulo,
      html: `
        <div style="text-align: left;">
          <p><strong>${icono} ${titulo}</strong></p>
          <p>${detalles.texto}</p>
          <div style="background: #f0f9ff; padding: 12px; border-radius: 6px; margin-top: 12px;">
            <p style="margin: 0; color: #0369a1;">
              <strong>💡 Importante:</strong> El profesional se pondrá en contacto contigo 
              para coordinar los detalles específicos.
            </p>
          </div>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Entendido'
    });
  }

  // Helper methods
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

  // Método para mostrar errores
  private mostrarError(mensaje: string): void {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#dc2626'
    });
  }
}
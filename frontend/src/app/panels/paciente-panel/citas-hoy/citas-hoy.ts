import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CitasService } from '../../../shared/services/cita';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas-hoy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citas-hoy.html',
  styleUrls: ['./citas-hoy.scss']
})
export class CitasHoyComponent implements OnInit {
  citasHoy: any[] = [];
  isLoading: boolean = true;
  error: string = '';
  today: Date = new Date(); // ✅ AGREGAR ESTA PROPIEDAD

  constructor(
    private citasService: CitasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCitasHoy();
  }

  cargarCitasHoy(): void {
    this.isLoading = true;
    this.error = '';

    this.citasService.getMisCitas().subscribe({
      next: (response: any) => {
        console.log('📅 Respuesta de citas:', response);
        
        const todasLasCitas = response?.data?.docs || response?.data || response || [];
        const hoy = new Date().toDateString();
        
        // Filtrar citas de hoy que estén confirmadas o programadas
        this.citasHoy = todasLasCitas.filter((cita: any) => {
          const fechaCita = new Date(cita.fechaConfirmada || cita.date || cita.fecha).toDateString();
          const estado = cita.status || cita.estado;
          const esHoy = fechaCita === hoy;
          const esActiva = estado === 'confirmed' || estado === 'scheduled' || estado === 'programada';
          
          return esHoy && esActiva;
        });

        console.log('✅ Citas de hoy encontradas:', this.citasHoy);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Error cargando citas de hoy:', error);
        this.error = 'No se pudieron cargar las citas de hoy';
        this.isLoading = false;
        
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar las citas de hoy',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

  getNombreProfesional(cita: any): string {
    if (!cita.professionalId) return 'Profesional no asignado';
    
    if (typeof cita.professionalId === 'object') {
      const nombre = cita.professionalId.name || '';
      const apellido = cita.professionalId.lastName || '';
      return `Dr. ${nombre} ${apellido}`.trim();
    }
    
    return 'Profesional no asignado';
  }

  getTipoSesion(cita: any): string {
    const tipo = cita.type || cita.tipoSesion;
    const tipos: { [key: string]: string } = {
      'acompanamiento': 'Acompañamiento Psicológico',
      'seguimiento': 'Seguimiento',
      'evaluacion': 'Evaluación'
    };
    return tipos[tipo] || tipo || 'Consulta';
  }

  getModalidad(cita: any): string {
    const modalidad = cita.tipoPreferido || cita.modalidad || cita.meetingPlatform;
    const modalidades: { [key: string]: string } = {
      'presencial': 'Presencial',
      'virtual': 'Virtual',
      'mixto': 'Mixto',
      'in_person': 'Presencial'
    };
    return modalidades[modalidad] || modalidad || 'No especificada';
  }

  getUbicacion(cita: any): string {
    if (this.getModalidad(cita) === 'Virtual') {
      return cita.meetingLink || cita.virtualLink || 'Enlace por confirmar';
    }
    return cita.ubicacion || cita.location || 'Ubicación por confirmar';
  }

  formatearHora(fechaString: string): string {
    try {
      return new Date(fechaString).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return '--:--';
    }
  }

  unirseReunion(cita: any): void {
    const link = cita.meetingLink || cita.virtualLink;
    if (link) {
      window.open(link, '_blank');
    } else {
      Swal.fire({
        title: 'Enlace no disponible',
        text: 'El enlace de la reunión no está disponible aún',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  verMapa(cita: any): void {
    const ubicacion = this.getUbicacion(cita);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
    window.open(mapsUrl, '_blank');
  }

  cancelarCita(cita: any): void {
    Swal.fire({
      title: 'Cancelar Cita',
      html: `
        <div style="text-align: left;">
          <p>¿Está seguro de que desea cancelar esta cita de hoy?</p>
          <div style="background: #fef2f2; padding: 12px; border-radius: 6px; margin-top: 12px;">
            <p style="margin: 0; font-size: 14px; color: #dc2626;">
              <strong>Importante:</strong> Las cancelaciones de último momento pueden tener restricciones.
            </p>
          </div>
        </div>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Cancelar',
      cancelButtonText: 'Mantener Cita',
      confirmButtonColor: '#dc2626'
    }).then((result) => {
      if (result.isConfirmed) {
        this.procesarCancelacion(cita);
      }
    });
  }

  private procesarCancelacion(cita: any): void {
    const citaId = cita._id || cita.id;
    
    this.citasService.cancelarCita(citaId).subscribe({
      next: (response: any) => {
        Swal.fire({
          title: 'Cita Cancelada',
          text: 'La cita ha sido cancelada exitosamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.cargarCitasHoy(); // Recargar la lista
      },
      error: (error) => {
        console.error('Error cancelando cita:', error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cancelar la cita. Intente nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

  tieneCitas(): boolean {
    return this.citasHoy.length > 0;
  }

  volverAlDashboard(): void {
    this.router.navigate(['/Panel-paciente']);
  }

  solicitarCita(): void {
    this.router.navigate(['/solicitar-cita']);
  }
}
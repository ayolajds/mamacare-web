// solicitudes-pendientes.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes-pendientes',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './solicitudes-pendientes.html',
  styleUrl: './solicitudes-pendientes.scss'
})
export class SolicitudesPendientes implements OnInit {
  solicitudes: any[] = [];
  solicitudesFiltradas: any[] = [];
  profesionales: any[] = [];
  
  searchTerm: string = '';
  
  showAprobarModal = false;
  showRechazarModal = false;
  solicitudSeleccionada: any = null;
  motivoRechazo: string = '';
  
  asignacionForm: FormGroup;
  fechaMinima: string;

  // Estados de carga
  cargandoSolicitudes: boolean = true;
  cargandoProfesionales: boolean = true;

  // 🔥 CORREGIDO: Solo 50 y 60 minutos
  duracionesSesion: number[] = [50, 60];

  constructor(private http: HttpClient, private fb: FormBuilder, private location: Location) {
    this.fechaMinima = new Date().toISOString().split('T')[0];
    this.asignacionForm = this.fb.group({
      professionalId: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      duracion: ['60', Validators.required],
      notas: ['']
    });
  }

  ngOnInit() {
    this.cargarSolicitudes();
    this.cargarProfesionales();
  }

  // Método para volver atrás
  volverAtras() {
    this.location.back();
  }

  cargarSolicitudes() {
    this.cargandoSolicitudes = true;
    this.http.get(`${environment.apiUrl}/appointments/solicitudes/pendientes`)
      .subscribe({
        next: (response: any) => {
          console.log('📋 Solicitudes cargadas:', response);
          this.solicitudes = response.data || [];
          this.solicitudesFiltradas = this.solicitudes;
          this.cargandoSolicitudes = false;
        },
        error: (error) => {
          console.error('❌ Error cargando solicitudes:', error);
          this.cargandoSolicitudes = false;
          this.mostrarError('No se pudieron cargar las solicitudes pendientes');
        }
      });
  }

  cargarProfesionales() {
    this.cargandoProfesionales = true;
    this.http.get(`${environment.apiUrl}/users/professionals`)
      .subscribe({
        next: (response: any) => {
          console.log('👨‍⚕️ Profesionales cargados:', response);
          // Verificar la estructura de la respuesta
          if (Array.isArray(response)) {
            this.profesionales = response;
          } else if (response.data && Array.isArray(response.data)) {
            this.profesionales = response.data;
          } else {
            console.warn('⚠️ Estructura inesperada de profesionales:', response);
            this.profesionales = [];
          }
          this.cargandoProfesionales = false;
        },
        error: (error) => {
          console.error('❌ Error cargando profesionales:', error);
          this.cargandoProfesionales = false;
          this.mostrarError('No se pudieron cargar los profesionales');
        }
      });
  }

  abrirModalAprobar(solicitud: any) {
    this.solicitudSeleccionada = solicitud;
    this.showAprobarModal = true;
    
    // Resetear y preparar el formulario
    this.asignacionForm.reset({
      duracion: '60',
      notas: ''
    });

    // Cargar profesionales si no están cargados
    if (this.profesionales.length === 0) {
      this.cargarProfesionales();
    }
  }

  abrirModalRechazar(solicitud: any) {
    this.solicitudSeleccionada = solicitud;
    this.showRechazarModal = true;
    this.motivoRechazo = '';
  }

aprobarSolicitud() {
  if (this.asignacionForm.invalid) {
    this.marcarCamposComoSucios();
    this.mostrarAdvertencia('Por favor, complete todos los campos requeridos');
    return;
  }

  const datos = {
    professionalId: this.asignacionForm.value.professionalId,
    fechaConfirmada: `${this.asignacionForm.value.fecha}T${this.asignacionForm.value.hora}:00.000Z`,
    duracion: parseInt(this.asignacionForm.value.duracion),
    notas: this.asignacionForm.value.notas?.trim() || '',
    // ✅ AGREGAR ESTADO CONFIRMADO
    status: 'confirmed'
  };

  console.log('📤 Aprobando solicitud con datos:', datos);

  this.http.put(`${environment.apiUrl}/appointments/solicitudes/aprobar/${this.solicitudSeleccionada._id}`, datos)
    .subscribe({
      next: (response: any) => {
        console.log('✅ Solicitud aprobada:', response);
        this.cerrarModal();
        this.cargarSolicitudes();
        this.mostrarExito('Solicitud aprobada y cita asignada exitosamente');
      },
      error: (error) => {
        console.error('❌ Error aprobando solicitud:', error);
        this.mostrarError('No se pudo aprobar la solicitud. Verifique los datos e intente nuevamente.');
      }
    });
}

  rechazarSolicitud() {
    if (!this.motivoRechazo.trim()) {
      this.mostrarAdvertencia('Por favor, ingrese el motivo del rechazo');
      return;
    }

    if (this.motivoRechazo.trim().length < 10) {
      this.mostrarAdvertencia('El motivo del rechazo debe tener al menos 10 caracteres');
      return;
    }

    this.http.put(`${environment.apiUrl}/appointments/solicitudes/rechazar/${this.solicitudSeleccionada._id}`, {
      motivoRechazo: this.motivoRechazo.trim()
    }).subscribe({
      next: (response: any) => {
        console.log('✅ Solicitud rechazada:', response);
        this.cerrarModal();
        this.cargarSolicitudes();
        this.mostrarExito('Solicitud rechazada exitosamente');
      },
      error: (error) => {
        console.error('❌ Error rechazando solicitud:', error);
        this.mostrarError('No se pudo rechazar la solicitud. Intente nuevamente.');
      }
    });
  }

  cerrarModal() {
    this.showAprobarModal = false;
    this.showRechazarModal = false;
    this.solicitudSeleccionada = null;
    this.motivoRechazo = '';
    this.asignacionForm.reset({
      duracion: '60',
      notas: ''
    });
  }

  // Helper para marcar todos los campos como touched para mostrar errores
  private marcarCamposComoSucios() {
    Object.keys(this.asignacionForm.controls).forEach(key => {
      const control = this.asignacionForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Helpers
  getPacienteNombre(solicitud: any): string {
    if (!solicitud.patientId) return 'Paciente no disponible';
    
    if (typeof solicitud.patientId === 'object') {
      return `${solicitud.patientId.name || ''} ${solicitud.patientId.lastName || ''}`.trim() || 'Nombre no disponible';
    }
    
    return 'Paciente no disponible';
  }

  // 🔥 NUEVO MÉTODO: Obtener nombre del paquete
  getNombrePaquete(paqueteId: number): string {
    const paquetes: { [key: string]: string } = {
      '1': 'Básico',
      '2': 'Intermedio', 
      '3': 'Integral'
    };
    return paquetes[paqueteId?.toString()] || `Paquete ${paqueteId}`;
  }

  formatFecha(fecha: string): string {
    if (!fecha) return 'Fecha no disponible';
    try {
      return new Date(fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Fecha inválida';
    }
  }

  getModalidadDisplay(modalidad: string): string {
    const modalidades: any = {
      'presencial': 'Presencial',
      'virtual': 'Virtual',
      'mixto': 'Mixto',
      'domicilio': 'A domicilio'
    };
    return modalidades[modalidad] || modalidad || 'No especificada';
  }

  onSearch() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let filtered = this.solicitudes;
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(s => 
        this.getPacienteNombre(s).toLowerCase().includes(term)
      );
    }
    
    this.solicitudesFiltradas = filtered;
  }

  // Método para limpiar todos los filtros
  limpiarFiltros() {
    this.searchTerm = '';
    this.aplicarFiltros();
  }

  // Método para obtener el texto del error de un campo del formulario
  getErrorMensaje(campo: string): string {
    const control = this.asignacionForm.get(campo);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return 'Este campo es requerido';
      }
    }
    return '';
  }

  // Método para verificar si hay datos cargando
  estaCargando(): boolean {
    return this.cargandoSolicitudes || this.cargandoProfesionales;
  }

  // Método para obtener el total de solicitudes
  getTotalSolicitudes(): number {
    return this.solicitudes.length;
  }

  // Método para obtener solicitudes filtradas
  getSolicitudesFiltradasCount(): number {
    return this.solicitudesFiltradas.length;
  }

  // Método para obtener nombre completo del profesional
  getNombreProfesional(profesional: any): string {
    if (!profesional) return '';
    return `${profesional.name || ''} ${profesional.lastName || ''}`.trim();
  }

  // Método para obtener especialidad del profesional
  getEspecialidadProfesional(profesional: any): string {
    return profesional.especialidad || profesional.specialty || 'Sin especialidad';
  }

  // SweetAlert helpers
  private mostrarExito(mensaje: string): void {
    Swal.fire({
      title: 'Éxito',
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4f46e5'
    });
  }

  private mostrarError(mensaje: string): void {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#dc2626'
    });
  }

  private mostrarAdvertencia(mensaje: string): void {
    Swal.fire({
      title: 'Advertencia',
      text: mensaje,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#f59e0b'
    });
  }
}
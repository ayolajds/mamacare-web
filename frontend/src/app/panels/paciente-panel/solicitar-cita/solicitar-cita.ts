import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

interface Paquete {
  _id: string;
  nombre: string;
  sesionesDisponibles: number;
  sesionesTotales: number;
  tipo: string;
  paqueteId?: number;
}

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  paquetesAcompanamientoComprados?: any[];
}

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.html',
  styleUrls: ['./solicitar-cita.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SolicitarCita implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  citaForm: FormGroup;
  paquetesUsuario: any[] = [];
  paqueteSeleccionado: Paquete | null = null;
  
  isLoading = false;
  cargandoPaquetes = true;

  horariosPreferidos = [
    { value: 'mañana', label: 'Mañana' },
    { value: 'tarde', label: 'Tarde' },
    { value: 'indiferente', label: 'Indiferente' }
  ];

  modalidadesDisponibles: { value: string; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.citaForm = this.fb.group({
      horarioPreferido: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
      sintomas: ['', Validators.required],
      tipoPreferido: [''], 
      paqueteId: ['']
    });
  }

  ngOnInit(): void {
    this.cargarPaquetesDelUsuario();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

cargarPaquetesDelUsuario(): void {
  this.cargandoPaquetes = true;
  console.log('🔄 Cargando paquetes del usuario...');
  
  this.http.get<{success: boolean; user: User}>(`${environment.apiUrl}/users/me`)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        console.log('✅ Usuario cargado:', response);
        
        const todosPaquetes = response.user?.paquetesAcompanamientoComprados || [];
        console.log('📦 TODOS los paquetes:', todosPaquetes);
        
        // Filtro con conversión a número por seguridad
        this.paquetesUsuario = todosPaquetes.filter(p => {
          const sesionesUsadas = Number(p.sesionesUsadas);
          const sesionesTotales = Number(p.sesionesTotales);
          return p.estado === 'activo' && sesionesUsadas < sesionesTotales;
        });
        
        console.log('📦 Paquetes activos después del filtro:', this.paquetesUsuario);
        
        if (this.paquetesUsuario.length > 0) {
          this.seleccionarPaquete(this.paquetesUsuario[0].paqueteId);
        } else {
          this.mostrarFormularioSinPaquetes();
        }
        
        this.cargandoPaquetes = false;
      },
      error: (error) => {
        console.error('❌ Error cargando usuario:', error);
        this.mostrarFormularioSinPaquetes();
        this.cargandoPaquetes = false;
      }
    });
}

  seleccionarPaquete(paqueteId: number): void {
    console.log('🎯 Seleccionando paquete:', paqueteId);
    
    const paqueteUsuario = this.paquetesUsuario.find(p => p.paqueteId === paqueteId);
    
    if (paqueteUsuario) {
      this.paqueteSeleccionado = {
        _id: paqueteUsuario._id || paqueteId.toString(),
        nombre: paqueteUsuario.paqueteNombre || `Paquete ${paqueteId}`,
        sesionesDisponibles: paqueteUsuario.sesionesTotales - paqueteUsuario.sesionesUsadas,
        sesionesTotales: paqueteUsuario.sesionesTotales,
        tipo: 'presencial',
        paqueteId: paqueteId
      };
      
      this.citaForm.patchValue({ 
        paqueteId: paqueteId
      });
      
      this.actualizarModalidadesPorPaqueteId(paqueteId);
    }
  }

  actualizarModalidadesPorPaqueteId(paqueteId: number): void {
    console.log('🔍 Determinando modalidades para paquete:', paqueteId);
    
    if (paqueteId === 1) {
      this.modalidadesDisponibles = [
        { value: 'presencial', label: 'Presencial' }
      ];
      this.citaForm.patchValue({ tipoPreferido: 'presencial' });
      console.log('✅ Modalidades: Solo Presencial');
    } else if (paqueteId === 2) {
      this.modalidadesDisponibles = [
        { value: 'virtual', label: 'Virtual' },
        { value: 'presencial', label: 'Presencial' }
      ];
      console.log('✅ Modalidades: Virtual o Presencial');
    } else if (paqueteId === 3) {
      this.modalidadesDisponibles = [
        { value: 'virtual', label: 'Virtual' },
        { value: 'presencial', label: 'Presencial' },
        { value: 'domicilio', label: 'A Domicilio' }
      ];
      console.log('✅ Modalidades: Virtual, Presencial o Domicilio');
    } else {
      this.modalidadesDisponibles = [
        { value: 'presencial', label: 'Presencial' }
      ];
      this.citaForm.patchValue({ tipoPreferido: 'presencial' });
      console.log('⚠️ Modalidades: Por defecto (Presencial)');
    }
    
    console.log('📋 Modalidades disponibles:', this.modalidadesDisponibles);
  }

  mostrarFormularioSinPaquetes(): void {
    console.log('📝 Mostrando formulario sin paquetes - Cita normal');
    this.modalidadesDisponibles = [
      { value: 'presencial', label: 'Presencial' }
    ];
    this.citaForm.patchValue({ tipoPreferido: 'presencial' });
  }

  get puedeElegirModalidad(): boolean {
    return this.modalidadesDisponibles.length > 1;
  }

  get tieneMultiplesPaquetes(): boolean {
    return this.paquetesUsuario.length > 1;
  }

  getHorarioPreferidoTexto(): string {
    const horario = this.citaForm.get('horarioPreferido')?.value;
    const encontrado = this.horariosPreferidos.find(h => h.value === horario);
    return encontrado ? encontrado.label : 'No especificado';
  }

  getModalidadTexto(): string {
    const modalidad = this.citaForm.get('tipoPreferido')?.value;
    const encontrado = this.modalidadesDisponibles.find(m => m.value === modalidad);
    return encontrado ? encontrado.label : 'No especificada';
  }

  solicitarCita(): void {
    if (this.citaForm.invalid) {
      this.marcarCamposComoSucios();
      return;
    }

    if (this.puedeElegirModalidad && !this.citaForm.value.tipoPreferido) {
      Swal.fire({
        title: 'Modalidad Requerida',
        text: 'Por favor selecciona una modalidad para tu cita.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#4f46e5'
      });
      return;
    }

    this.isLoading = true;

    const citaData: any = {
      horarioPreferido: this.citaForm.value.horarioPreferido,
      motivo: this.citaForm.value.motivo,
      sintomas: this.citaForm.value.sintomas,
      paqueteId: this.citaForm.value.paqueteId || null
    };

    if (this.puedeElegirModalidad) {
      citaData.tipoPreferido = this.citaForm.value.tipoPreferido;
    } else {
      citaData.tipoPreferido = 'presencial';
    }

    console.log('📤 Enviando solicitud de cita:', citaData);

    this.http.post(`${environment.apiUrl}/appointments/solicitar`, citaData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          console.log('✅ Solicitud enviada exitosamente:', response);
          
          Swal.fire({
            title: 'Solicitud Enviada Exitosamente',
            html: this.getSuccessMessage(),
            icon: 'success',
            confirmButtonText: 'Ver Mis Solicitudes',
            confirmButtonColor: '#4f46e5',
            customClass: {
              popup: 'sweet-alert-custom',
              confirmButton: 'sweet-confirm-button',
              title: 'sweet-title'
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCloseButton: false
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/mis-solicitudes']);
            }
          });
        },
        error: (error) => {
          console.error('❌ Error solicitando cita:', error);
          this.isLoading = false;
          
          Swal.fire({
            title: 'Error al Procesar Solicitud',
            text: error.error?.message || 'No se pudo enviar la solicitud de cita. Por favor, intente nuevamente.',
            icon: 'error',
            confirmButtonText: 'Reintentar',
            confirmButtonColor: '#dc2626'
          });
        }
      });
  }

  private getSuccessMessage(): string {
    const horarioTexto = this.getHorarioPreferidoTexto();
    const modalidadTexto = this.getModalidadTexto();
    
    return `
      <div style="text-align: left; color: #374151; line-height: 1.6;">
        <p style="margin-bottom: 12px;">Su solicitud de cita ha sido recibida y está siendo procesada por nuestro equipo.</p>
        
        <div style="background: #f8fafc; border-left: 4px solid #4f46e5; padding: 12px 16px; margin: 16px 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: #1f2937;">Proceso de Asignación</p>
          <p style="margin: 8px 0 0 0; font-size: 14px;">Le asignaremos el profesional y horario más adecuado según sus necesidades.</p>
        </div>

        <div style="background: #f0f9ff; border: 1px solid #bae6fd; padding: 12px; border-radius: 6px; margin: 12px 0;">
          <p style="margin: 0; font-size: 14px;"><strong>Horario Preferido:</strong> ${horarioTexto}</p>
          <p style="margin: 4px 0 0 0; font-size: 14px;"><strong>Modalidad:</strong> ${modalidadTexto}</p>
        </div>
        
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
          <p style="font-weight: 600; margin-bottom: 8px; color: #1f2937;">Próximos pasos:</p>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            <li style="margin-bottom: 6px;">Revisión de su solicitud por nuestro equipo</li>
            <li style="margin-bottom: 6px;">Asignación de profesional especializado</li>
            <li style="margin-bottom: 6px;">Coordinación de fecha y horario</li>
            <li>Notificación de confirmación vía correo electrónico</li>
          </ul>
        </div>

        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 6px; margin-top: 16px;">
          <p style="margin: 0; font-size: 14px; color: #166534;">
            <strong>Nota:</strong> Recibirá una notificación cuando su cita sea confirmada. 
            Por favor revise su bandeja de entrada y spam.
          </p>
        </div>
      </div>
    `;
  }

  marcarCamposComoSucios(): void {
    Object.keys(this.citaForm.controls).forEach(key => {
      const control = this.citaForm.get(key);
      control?.markAsTouched();
    });
  }

  irAMisCitas(): void {
    this.router.navigate(['/paciente/mis-citas']);
  }

  solicitarOtraCita(): void {
    this.citaForm.reset({
      horarioPreferido: '',
      motivo: '',
      sintomas: '',
      tipoPreferido: this.modalidadesDisponibles[0]?.value || ''
    });
  }

  cancelar(): void {
    this.router.navigate(['/paciente/dashboard']);
  }
}
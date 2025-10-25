import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { ProfessionalService, Appointment } from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

export interface Horario {
  dia: string;
  activo: boolean;
  horarioInicio: string;
  horarioFin: string;
  descansos: Descanso[];
}

export interface Descanso {
  inicio: string;
  fin: string;
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './agenda.html',
  styleUrls: ['./agenda.scss']
})
export class Agenda implements OnInit, OnDestroy {
  private professionalService = inject(ProfessionalService);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Configuración de horarios
  horarios: Horario[] = [
    { dia: 'Lunes', activo: true, horarioInicio: '08:00', horarioFin: '17:00', descansos: [] },
    { dia: 'Martes', activo: true, horarioInicio: '08:00', horarioFin: '17:00', descansos: [] },
    { dia: 'Miércoles', activo: true, horarioInicio: '08:00', horarioFin: '17:00', descansos: [] },
    { dia: 'Jueves', activo: true, horarioInicio: '08:00', horarioFin: '17:00', descansos: [] },
    { dia: 'Viernes', activo: true, horarioInicio: '08:00', horarioFin: '17:00', descansos: [] },
    { dia: 'Sábado', activo: false, horarioInicio: '09:00', horarioFin: '13:00', descansos: [] },
    { dia: 'Domingo', activo: false, horarioInicio: '09:00', horarioFin: '13:00', descansos: [] }
  ];

  // Configuración general
  configuracion = {
    duracionCita: 60,
    tiempoEntreCitas: 15,
    recordatorioEmail: true,
    recordatorioSMS: false,
    maxCitasPorDia: 10
  };

  // Días libres
  diasLibres: string[] = [];
  nuevoDiaLibre: string = '';

  // Estados
  isLoading = false;
  error = '';
  success = '';

  // Vista actual
  vistaActual: 'horarios' | 'configuracion' | 'dias-libres' = 'horarios';

  private destroy$ = new Subject<void>();

  async ngOnInit(): Promise<void> {
    // En una implementación real, aquí cargarías la configuración guardada
    await this.cargarConfiguracion();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async cargarConfiguracion(): Promise<void> {
    this.isLoading = true;
    try {
      // Simular carga de configuración
      // En una implementación real, harías una llamada al backend
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error loading agenda configuration:', error);
    } finally {
      this.isLoading = false;
    }
  }

  // Navegación
  goToDashboard(): void {
    this.router.navigate(['/Panel-profesional']);
  }

  // Gestión de horarios
  agregarDescanso(diaIndex: number): void {
    this.horarios[diaIndex].descansos.push({ inicio: '12:00', fin: '13:00' });
  }

  eliminarDescanso(diaIndex: number, descansoIndex: number): void {
    this.horarios[diaIndex].descansos.splice(descansoIndex, 1);
  }

  // Gestión de días libres
  agregarDiaLibre(): void {
    if (this.nuevoDiaLibre && !this.diasLibres.includes(this.nuevoDiaLibre)) {
      this.diasLibres.push(this.nuevoDiaLibre);
      this.nuevoDiaLibre = '';
    }
  }

  eliminarDiaLibre(dia: string): void {
    this.diasLibres = this.diasLibres.filter(d => d !== dia);
  }

  // Guardar configuración
  async guardarConfiguracion(): Promise<void> {
    this.isLoading = true;
    this.error = '';
    this.success = '';

    try {
      // Simular guardado
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.success = 'Configuración guardada correctamente';
      
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => {
        this.success = '';
      }, 3000);
    } catch (error) {
      console.error('Error saving agenda configuration:', error);
      this.error = 'Error al guardar la configuración';
    } finally {
      this.isLoading = false;
    }
  }

  // Helper functions
  formatTime(time: string): string {
    return time; // Podrías formatear la hora si es necesario
  }

  getDiaNombre(dia: string): string {
    const diasMap: { [key: string]: string } = {
      'Lunes': 'Lunes',
      'Martes': 'Martes', 
      'Miércoles': 'Miércoles',
      'Jueves': 'Jueves',
      'Viernes': 'Viernes',
      'Sábado': 'Sábado',
      'Domingo': 'Domingo'
    };
    return diasMap[dia] || dia;
  }

  // Validaciones
  validarHorario(horario: Horario): boolean {
    if (!horario.activo) return true;
    
    const inicio = this.timeToMinutes(horario.horarioInicio);
    const fin = this.timeToMinutes(horario.horarioFin);
    
    return inicio < fin;
  }

  private timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Cambiar vista
  cambiarVista(vista: 'horarios' | 'configuracion' | 'dias-libres'): void {
    this.vistaActual = vista;
  }
}
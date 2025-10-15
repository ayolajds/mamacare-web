import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';

interface Session {
  id: string;
  pacienteId: string;
  pacienteNombre: string;
  tipo: string;
  fecha: Date;
  duracion: number;
  especialista: string;
  estado: string;
  notas?: string;
  createdAt: Date;
}

interface Paciente {
  id: string;
  nombre: string;
  semanaGestacion: number;
  telefono: string;
}

interface Stats {
  scheduled: number;
  completed: number;
  inProgress: number;
  next24h: number;
}

@Component({
  selector: 'app-sesiones',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sesiones.html',
  styleUrls: ['./sesiones.scss']
})
export class Sesiones implements OnInit {
  sessions: Session[] = [];
  filteredSessions: Session[] = [];
  pacientes: Paciente[] = [];
  stats: Stats = { scheduled: 0, completed: 0, inProgress: 0, next24h: 0 };
  
  searchTerm: string = '';
  statusFilter: string = '';
  typeFilter: string = '';
  
  showModal: boolean = false;
  editingSession: Session | null = null;
  
  sessionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sessionForm = this.fb.group({
      pacienteId: ['', Validators.required],
      tipo: ['prenatal', Validators.required],
      fecha: ['', Validators.required],
      duracion: [60, [Validators.required, Validators.min(15), Validators.max(120)]],
      especialista: ['dr-garcia', Validators.required],
      notas: ['']
    });
  }

  ngOnInit(): void {
    this.loadSampleData();
    this.calculateStats();
    this.filterSessions();
  }

  loadSampleData(): void {
    // Datos de ejemplo para pacientes
    this.pacientes = [
      { id: '1', nombre: 'Ana López', semanaGestacion: 28, telefono: '+1234567890' },
      { id: '2', nombre: 'María González', semanaGestacion: 32, telefono: '+1234567891' },
      { id: '3', nombre: 'Carmen Ruiz', semanaGestacion: 16, telefono: '+1234567892' },
      { id: '4', nombre: 'Laura Martínez', semanaGestacion: 8, telefono: '+1234567893' }
    ];

    // Datos de ejemplo para sesiones
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    this.sessions = [
      {
        id: '1',
        pacienteId: '1',
        pacienteNombre: 'Ana López',
        tipo: 'prenatal',
        fecha: new Date(tomorrow.setHours(10, 0)),
        duracion: 60,
        especialista: 'dr-garcia',
        estado: 'programada',
        notas: 'Control rutina 3er trimestre',
        createdAt: new Date()
      },
      {
        id: '2',
        pacienteId: '2',
        pacienteNombre: 'María González',
        tipo: 'lactancia',
        fecha: new Date(today.setHours(14, 30)),
        duracion: 45,
        especialista: 'en-fernández',
        estado: 'en-progreso',
        notas: 'Problemas con lactancia materna',
        createdAt: new Date()
      },
      {
        id: '3',
        pacienteId: '3',
        pacienteNombre: 'Carmen Ruiz',
        tipo: 'prenatal',
        fecha: new Date(today.setHours(16, 0)),
        duracion: 30,
        especialista: 'dr-rodriguez',
        estado: 'completada',
        createdAt: new Date()
      }
    ];
  }

  calculateStats(): void {
    const now = new Date();
    const next24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    this.stats = {
      scheduled: this.sessions.filter(s => s.estado === 'programada').length,
      completed: this.sessions.filter(s => s.estado === 'completada').length,
      inProgress: this.sessions.filter(s => s.estado === 'en-progreso').length,
      next24h: this.sessions.filter(s => 
        s.estado === 'programada' && 
        new Date(s.fecha) <= next24h && 
        new Date(s.fecha) >= now
      ).length
    };
  }

  filterSessions(): void {
    this.filteredSessions = this.sessions.filter(session => {
      const matchesSearch = !this.searchTerm || 
        session.pacienteNombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        session.especialista.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.statusFilter || session.estado === this.statusFilter;
      const matchesType = !this.typeFilter || session.tipo === this.typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }

  openNewSessionModal(): void {
    this.editingSession = null;
    this.sessionForm.reset({
      tipo: 'prenatal',
      duracion: 60,
      especialista: 'dr-garcia'
    });
    this.showModal = true;
  }

  editSession(session: Session): void {
    this.editingSession = session;
    this.sessionForm.patchValue({
      pacienteId: session.pacienteId,
      tipo: session.tipo,
      fecha: this.formatDateForInput(session.fecha),
      duracion: session.duracion,
      especialista: session.especialista,
      notas: session.notas
    });
    this.showModal = true;
  }

  saveSession(): void {
    if (this.sessionForm.valid) {
      const formValue = this.sessionForm.value;
      const paciente = this.pacientes.find(p => p.id === formValue.pacienteId);
      
      if (this.editingSession) {
        // Actualizar sesión existente
        const index = this.sessions.findIndex(s => s.id === this.editingSession!.id);
        if (index !== -1) {
          this.sessions[index] = {
            ...this.sessions[index],
            ...formValue,
            pacienteNombre: paciente?.nombre || '',
            fecha: new Date(formValue.fecha)
          };
        }
      } else {
        // Crear nueva sesión
        const newSession: Session = {
          id: Date.now().toString(),
          pacienteId: formValue.pacienteId,
          pacienteNombre: paciente?.nombre || '',
          tipo: formValue.tipo,
          fecha: new Date(formValue.fecha),
          duracion: formValue.duracion,
          especialista: formValue.especialista,
          estado: 'programada',
          notas: formValue.notas,
          createdAt: new Date()
        };
        this.sessions.push(newSession);
      }
      
      this.closeModal();
      this.calculateStats();
      this.filterSessions();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.editingSession = null;
    this.sessionForm.reset();
  }

  startSession(session: Session): void {
    session.estado = 'en-progreso';
    this.calculateStats();
    this.filterSessions();
  }

  completeSession(session: Session): void {
    session.estado = 'completada';
    this.calculateStats();
    this.filterSessions();
  }

  cancelSession(session: Session): void {
    if (confirm('¿Estás seguro de que deseas cancelar esta sesión?')) {
      session.estado = 'cancelada';
      this.calculateStats();
      this.filterSessions();
    }
  }

  viewSessionDetails(session: Session): void {
    // Aquí podrías navegar a una página de detalles o abrir un modal
    alert(`Detalles de sesión:\nPaciente: ${session.pacienteNombre}\nTipo: ${this.getTypeLabel(session.tipo)}\nEstado: ${this.getStatusLabel(session.estado)}`);
  }

  isUrgent(date: Date): boolean {
    const sessionDate = new Date(date);
    const now = new Date();
    const diffHours = (sessionDate.getTime() - now.getTime()) / (1000 * 60 * 60);
    return diffHours <= 24 && diffHours > 0;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatDateForInput(date: Date): string {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  }

  getTypeLabel(type: string): string {
    const types: { [key: string]: string } = {
      'prenatal': 'Prenatal',
      'postnatal': 'Postnatal',
      'lactancia': 'Lactancia',
      'cuidado-bebe': 'Cuidado del Bebé'
    };
    return types[type] || type;
  }

  getStatusLabel(status: string): string {
    const statuses: { [key: string]: string } = {
      'programada': 'Programada',
      'en-progreso': 'En Progreso',
      'completada': 'Completada',
      'cancelada': 'Cancelada'
    };
    return statuses[status] || status;
  }
}
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/services/auth';

interface Kit {
  id: string;
  nombre: string;
  tipo: 'bienvenida' | 'mensual' | 'especial';
  descripcion: string;
  contenido: string[];
  fechaEntrega: string;
  estado: 'entregado' | 'en_camino' | 'pendiente';
  tracking?: string;
}

@Component({
  selector: 'app-mis-kits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-kits.html',
  styleUrls: ['./mis-kits.scss']
})
export class MisKits implements OnInit {
  private authService = inject(AuthService);
  
  kits: Kit[] = [];
  isLoading: boolean = true;
  pacienteNombre: string = '';

  // Propiedades computadas para las estadísticas
  get kitsEntregados(): number {
    return this.kits.filter(kit => kit.estado === 'entregado').length;
  }

  get kitsEnCamino(): number {
    return this.kits.filter(kit => kit.estado === 'en_camino').length;
  }

  get kitsPendientes(): number {
    return this.kits.filter(kit => kit.estado === 'pendiente').length;
  }

  ngOnInit(): void {
    this.cargarKits();
    this.cargarDatosPaciente();
  }

  private cargarDatosPaciente(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.pacienteNombre = `${user.name} ${user.lastName}`.trim();
    }
  }

  private cargarKits(): void {
    this.isLoading = true;
    // Simular carga de datos - reemplazar con servicio real
    setTimeout(() => {
      this.kits = [
        {
          id: '1',
          nombre: 'Kit de Bienvenida',
          tipo: 'bienvenida',
          descripcion: 'Todo lo que necesitas para empezar tu journey',
          contenido: [
            'Guía de cuidados postoperatorios',
            'Crema especial para la piel',
            'Almohada de recuperación',
            'Cuaderno de seguimiento'
          ],
          fechaEntrega: '2024-01-20',
          estado: 'entregado',
          tracking: 'TRK123456789'
        },
        {
          id: '2',
          nombre: 'Kit Mensual de Cuidados',
          tipo: 'mensual',
          descripcion: 'Productos esenciales para tu mes',
          contenido: [
            'Vitaminas y suplementos',
            'Productos de higiene especial',
            'Snacks saludables',
            'Material educativo'
          ],
          fechaEntrega: '2024-02-15',
          estado: 'en_camino',
          tracking: 'TRK987654321'
        }
      ];
      this.isLoading = false;
    }, 1000);
  }

  getTipoClass(tipo: string): string {
    const classMap: { [key: string]: string } = {
      'bienvenida': 'tipo-bienvenida',
      'mensual': 'tipo-mensual',
      'especial': 'tipo-especial'
    };
    return classMap[tipo] || 'tipo-default';
  }

  getTipoText(tipo: string): string {
    const textMap: { [key: string]: string } = {
      'bienvenida': 'Bienvenida',
      'mensual': 'Mensual',
      'especial': 'Especial'
    };
    return textMap[tipo] || tipo;
  }

  getEstadoClass(estado: string): string {
    const classMap: { [key: string]: string } = {
      'entregado': 'estado-entregado',
      'en_camino': 'estado-camino',
      'pendiente': 'estado-pendiente'
    };
    return classMap[estado] || 'estado-default';
  }

  getEstadoText(estado: string): string {
    const textMap: { [key: string]: string } = {
      'entregado': 'Entregado',
      'en_camino': 'En Camino',
      'pendiente': 'Pendiente'
    };
    return textMap[estado] || estado;
  }

  verSeguimiento(tracking: string): void {
    // Lógica para ver seguimiento
    console.log('Ver seguimiento:', tracking);
    // Aquí podrías abrir un modal o redirigir a la página de seguimiento
    window.open(`https://tracking.example.com/${tracking}`, '_blank');
  }
}
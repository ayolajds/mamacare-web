import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Servicios
import { 
  ProfessionalService, 
  Appointment,
  AppointmentsResponse 
} from '../../shared/services/profesional';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class Appointments implements OnInit, OnDestroy {
  private professionalService = inject(ProfessionalService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Lista de citas
  citas: Appointment[] = [];
  filteredCitas: Appointment[] = [];
  
  // Filtros
  filtros = {
    status: '',
    search: '',
    dateFrom: '',
    dateTo: ''
  };

  // Estados
  isLoading = true;
  error = '';
  
  // Paginación - ACTUALIZADO para usar la estructura correcta
  pagination = {
    currentPage: 1,
    totalPages: 1,
    totalCitas: 0,
    hasNext: false,
    hasPrev: false
  };

  private destroy$ = new Subject<void>();

  async ngOnInit(): Promise<void> {
    // Escuchar cambios en los query params
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.filtros.status = params['status'] || '';
        this.filtros.search = params['search'] || '';
        this.pagination.currentPage = parseInt(params['page']) || 1;
        this.loadCitas();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ✅ CAMBIADO A PÚBLICO - para que el template pueda llamarlo
  async loadCitas(): Promise<void> {
    this.isLoading = true;
    this.error = '';

    try {
      const response = await this.professionalService.getAppointments({
        page: this.pagination.currentPage,
        limit: 10,
        status: this.filtros.status,
        dateFrom: this.filtros.dateFrom,
        dateTo: this.filtros.dateTo
      }).toPromise();

      if (response?.success && response.data) {
        this.citas = response.data.docs || [];
        this.filteredCitas = [...this.citas];
        
        // ✅ ACTUALIZADO: Usar la estructura correcta de PaginatedResponse
        this.pagination = {
          currentPage: response.data.page || 1,
          totalPages: response.data.totalPages || 1,
          totalCitas: response.data.totalDocs || 0,
          hasNext: response.data.hasNextPage || false,
          hasPrev: response.data.hasPrevPage || false
        };

        // Aplicar filtro de búsqueda local
        this.aplicarFiltroBusqueda();
      } else {
        this.error = 'Error al cargar las citas';
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
      this.error = 'Error al cargar las citas. Por favor, intenta nuevamente.';
      this.citas = [];
      this.filteredCitas = [];
    } finally {
      this.isLoading = false;
    }
  }

  private aplicarFiltroBusqueda(): void {
    if (!this.filtros.search) {
      this.filteredCitas = [...this.citas];
      return;
    }

    const searchTerm = this.filtros.search.toLowerCase();
    this.filteredCitas = this.citas.filter(cita => 
      cita.title.toLowerCase().includes(searchTerm) ||
      cita.patientId.name.toLowerCase().includes(searchTerm) ||
      cita.patientId.lastName.toLowerCase().includes(searchTerm) ||
      cita.type.toLowerCase().includes(searchTerm)
    );
  }

  // Navegación
  goToDashboard(): void {
    this.router.navigate(['/Panel-profesional']);
  }

  viewCitaDetails(cita: Appointment): void {
    this.router.navigate(['/profesional/citas', cita._id]);
  }

  // Filtros
  onFiltroChange(): void {
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }

  onSearchChange(): void {
    this.aplicarFiltroBusqueda();
  }

  limpiarFiltros(): void {
    this.filtros = {
      status: '',
      search: '',
      dateFrom: '',
      dateTo: ''
    };
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }

  private actualizarQueryParams(): void {
    const queryParams: any = {};
    
    if (this.filtros.status) queryParams.status = this.filtros.status;
    if (this.filtros.search) queryParams.search = this.filtros.search;
    if (this.pagination.currentPage > 1) queryParams.page = this.pagination.currentPage;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

  // Paginación
  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.actualizarQueryParams();
    }
  }

  // Helper functions
  formatTime(dateString: string): string {
    try {
      return new Date(dateString).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '--:--';
    }
  }

  formatDate(dateString: string): string {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

  formatDateTime(dateString: string): string {
    try {
      return new Date(dateString).toLocaleString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Fecha inválida';
    }
  }

getStatusDisplay(status: string): string {
  const statusMap: { [key: string]: string } = {
    'confirmed': 'Confirmada',
    'in_progress': 'En Progreso',
    'completed': 'Completada', 
    'cancelled': 'Cancelada',
    'no_show': 'No Se Presentó'
  };
  return statusMap[status] || status;
}

getStatusClass(status: string): string {
  const classMap: { [key: string]: string } = {
    'confirmed': 'status-confirmed',
    'in_progress': 'status-in-progress',
    'completed': 'status-completed',
    'cancelled': 'status-cancelled',
    'no_show': 'status-no-show'
  };
  return classMap[status] || '';
}

getStatusBadgeClass(status: string): string {
  const classMap: { [key: string]: string } = {
    'confirmed': 'status-confirmed',
    'in_progress': 'status-in-progress',
    'completed': 'status-completed',
    'cancelled': 'status-cancelled',
    'no_show': 'status-no-show'
  };
  return classMap[status] || 'status-default';
}
}
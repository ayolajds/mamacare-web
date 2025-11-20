import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.scss']
})
export class AdminPanel implements OnInit {
  private http = inject(HttpClient);

  solicitudesCount: number = 0;
  testimoniosCount: number = 0;

  ngOnInit(): void {
    this.cargarSolicitudesPendientes();
    this.cargarTestimoniosPendientes();
  }

  cargarSolicitudesPendientes(): void {
    this.http.get(`${environment.apiUrl}/appointments/solicitudes/pendientes`)
      .subscribe({
        next: (response: any) => {
          if (response.success && response.data) {
            this.solicitudesCount = response.data.length;
          }
        },
        error: (error) => {
          console.error('Error cargando solicitudes pendientes:', error);
          this.solicitudesCount = 0;
        }
      });
  }

  cargarTestimoniosPendientes(): void {
    this.http.get(`${environment.apiUrl}/testimonios/admin/todos?estado=pendiente`)
      .subscribe({
        next: (response: any) => {
          if (response.success && response.testimonios) {
            this.testimoniosCount = response.testimonios.length;

          }
        },
        error: (error) => {
          console.error('Error cargando testimonios pendientes:', error);
          this.testimoniosCount = 0;
        }
      });
  }
}
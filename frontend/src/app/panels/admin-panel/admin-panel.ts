import { Component, OnInit } from '@angular/core';
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
  solicitudesCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarSolicitudesPendientes();
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
}
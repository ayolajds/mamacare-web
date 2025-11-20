import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TestimonioService } from '../../shared/services/testimonio';
import { environment } from '../../environments/environment'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonios-pendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios-pendientes.html',
  styleUrls: ['./testimonios-pendientes.scss']
})
export class TestimoniosPendientes implements OnInit {
  private router = inject(Router);
  private testimonioService = inject(TestimonioService);

  testimonios: any[] = [];
  cargando = true;
  procesando = false;
  private apiUrl = environment.apiUrl;

  ngOnInit(): void {
    this.cargarTestimoniosPendientes();
  }

  cargarTestimoniosPendientes(): void {
    this.cargando = true;
    this.testimonioService.obtenerTodosTestimonios('pendiente').subscribe({
      next: (testimonios) => {
        this.testimonios = testimonios;
        this.cargando = false;;
        
        // DEBUG: Mostrar URLs de imágenes para diagnóstico
        testimonios.forEach((testimonio, index) => {
          if (testimonio.imagenPath) {;
          }
        });
      },
      error: (error) => {
        console.error('Error cargando testimonios pendientes:', error);
        this.cargando = false;
        this.mostrarError('Error al cargar testimonios', 'No se pudieron cargar los testimonios pendientes. Intenta nuevamente.');
      }
    });
  }

  // Método CORREGIDO para construir la URL completa de la imagen
  getImagenUrl(imagenPath: string): string {
    
    if (!imagenPath) {

      return this.getDefaultAvatar('U');
    }
    
    // ELIMINA cualquier prefijo de API incorrecto
    let rutaLimpia = imagenPath;
    
    // Si tiene /api/v1/uploads/, quítalo (esto es el problema)
    if (imagenPath.includes('/api/v1/uploads/')) {
      rutaLimpia = imagenPath.replace('/api/v1/uploads/', '/uploads/');
    }
    // Si ya tiene /uploads/, déjalo así
    else if (imagenPath.startsWith('/uploads/')) {
      rutaLimpia = imagenPath;
    }
    // Si es solo el nombre del archivo, agrega /uploads/
    else if (!imagenPath.includes('/') && imagenPath.trim() !== '') {
      rutaLimpia = `/uploads/${imagenPath}`;
    }
    
    // Construir URL completa SIN /api/v1
    const urlFinal = `${this.apiUrl.replace('/api/v1', '')}${rutaLimpia}`;
    
    return urlFinal;
  }

  // Avatar por defecto basado en inicial
  getDefaultAvatar(inicial: string): string {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#4A90E2"/>
        <text x="50" y="60" text-anchor="middle" fill="white" font-size="40" font-family="Arial, sans-serif">${inicial}</text>
      </svg>
    `)}`;
  }

  // Manejar error de carga de imagen - MEJORADO
  handleImageError(event: Event, testimonio: any): void {
    const img = event.target as HTMLImageElement;
    console.warn('❌ Error cargando imagen:', testimonio.imagenPath);
    console.warn('🖼️ Elemento img src actual:', img.src);
    
    // Usar avatar con inicial del nombre
    const inicial = testimonio.nombre ? testimonio.nombre.charAt(0).toUpperCase() : 'U';
    img.src = this.getDefaultAvatar(inicial);
    
    // Evitar futuros intentos fallidos
    testimonio._imagenError = true;
  }

  /* ---------- SweetAlert Methods ---------- */
  mostrarCargando(titulo: string = 'Procesando...', texto: string = 'Por favor espera') {
    Swal.fire({
      title: titulo,
      text: texto,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  mostrarExito(titulo: string, texto?: string) {
    return Swal.fire({
      icon: 'success',
      title: titulo,
      text: texto,
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Aceptar'
    });
  }

  mostrarError(titulo: string, texto?: string) {
    return Swal.fire({
      icon: 'error',
      title: titulo,
      text: texto,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Entendido'
    });
  }

  mostrarConfirmacion(titulo: string, texto: string, confirmText: string = 'Sí, confirmar') {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmText,
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });
  }

  mostrarInputMotivo(nombre: string) {
    return Swal.fire({
      title: `Rechazar testimonio de ${nombre}`,
      text: 'Ingresa el motivo del rechazo:',
      input: 'textarea',
      inputPlaceholder: 'Motivo del rechazo...',
      inputAttributes: {
        'aria-label': 'Ingresa el motivo del rechazo'
      },
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Rechazar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      inputValidator: (value) => {
        if (!value || value.trim().length < 5) {
          return 'Debes ingresar un motivo de al menos 5 caracteres';
        }
        return null;
      }
    });
  }

  /* ---------- Acciones de Testimonios ---------- */
  async aprobarTestimonio(id: string, nombre: string): Promise<void> {
    const confirmacion = await this.mostrarConfirmacion(
      '¿Aprobar testimonio?',
      `¿Estás seguro de que quieres aprobar el testimonio de ${nombre}?`,
      'Sí, aprobar'
    );

    if (!confirmacion.isConfirmed) return;

    this.procesando = true;
    this.mostrarCargando('Aprobando testimonio...');

    this.testimonioService.aprobarTestimonio(id).subscribe({
      next: (response) => {
        this.procesando = false;
        Swal.close();
        this.mostrarExito('Testimonio aprobado', 'El testimonio ha sido aprobado exitosamente.')
          .then(() => {
            this.cargarTestimoniosPendientes(); // Recargar lista
          });
      },
      error: (error) => {
        console.error('Error aprobando testimonio:', error);
        this.procesando = false;
        Swal.close();
        this.mostrarError('Error al aprobar', 'No se pudo aprobar el testimonio. Intenta nuevamente.');
      }
    });
  }

  async rechazarTestimonio(id: string, nombre: string): Promise<void> {
    const resultado = await this.mostrarInputMotivo(nombre);
    
    if (!resultado.isConfirmed || !resultado.value) return;

    const motivo = resultado.value.trim();

    this.procesando = true;
    this.mostrarCargando('Rechazando testimonio...');

    this.testimonioService.rechazarTestimonio(id, motivo).subscribe({
      next: (response) => {
        this.procesando = false;
        Swal.close();
        this.mostrarExito('Testimonio rechazado', 'El testimonio ha sido rechazado exitosamente.')
          .then(() => {
            this.cargarTestimoniosPendientes(); // Recargar lista
          });
      },
      error: (error) => {
        console.error('Error rechazando testimonio:', error);
        this.procesando = false;
        Swal.close();
        this.mostrarError('Error al rechazar', 'No se pudo rechazar el testimonio. Intenta nuevamente.');
      }
    });
  }

  async eliminarTestimonio(id: string, nombre: string): Promise<void> {
    const confirmacion = await this.mostrarConfirmacion(
      '¿Eliminar testimonio?',
      `¿Estás seguro de que quieres ELIMINAR permanentemente el testimonio de ${nombre}? Esta acción no se puede deshacer.`,
      'Sí, eliminar'
    );

    if (!confirmacion.isConfirmed) return;

    this.procesando = true;
    this.mostrarCargando('Eliminando testimonio...');

    this.testimonioService.eliminarTestimonio(id).subscribe({
      next: (response) => {
        this.procesando = false;
        Swal.close();
        this.mostrarExito('Testimonio eliminado', 'El testimonio ha sido eliminado permanentemente.')
          .then(() => {
            this.cargarTestimoniosPendientes(); // Recargar lista
          });
      },
      error: (error) => {
        console.error('Error eliminando testimonio:', error);
        this.procesando = false;
        Swal.close();
        this.mostrarError('Error al eliminar', 'No se pudo eliminar el testimonio. Intenta nuevamente.');
      }
    });
  }

  async volverAlPanel(): Promise<void> {
    const confirmacion = await Swal.fire({
      title: '¿Salir del panel?',
      text: '¿Estás seguro de que quieres volver al panel de administración?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });

    if (confirmacion.isConfirmed) {
      this.router.navigate(['/admin']);
    }
  }

  // Método para formatear fecha
  formatearFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Método TEMPORAL para probar URLs directas
  probarUrlDirecta(imagenPath: string): void {
    if (!imagenPath) return;
    
    const urlDirecta = this.getImagenUrl(imagenPath);

    Swal.fire({
      title: 'Abrir imagen',
      text: '¿Quieres abrir la imagen en una nueva pestaña?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Abrir imagen',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(urlDirecta, '_blank');
      }
    });
  }

  // Método para mostrar detalles del testimonio
  verDetallesTestimonio(testimonio: any): void {
    const tags = testimonio.tags && testimonio.tags.length > 0 
      ? testimonio.tags.join(', ')
      : 'Sin etiquetas';

    Swal.fire({
      title: `Testimonio de ${testimonio.nombre || 'Usuario'}`,
      html: `
        <div style="text-align: left;">
          <p><strong>Texto corto:</strong> ${testimonio.textoCorto || 'No disponible'}</p>
          ${testimonio.historiaCompleta ? `<p><strong>Historia completa:</strong> ${testimonio.historiaCompleta}</p>` : ''}
          ${testimonio.impacto ? `<p><strong>Impacto:</strong> ${testimonio.impacto}</p>` : ''}
          ${testimonio.ciudad ? `<p><strong>Ciudad:</strong> ${testimonio.ciudad}</p>` : ''}
          <p><strong>Etiquetas:</strong> ${tags}</p>
          <p><strong>Fecha de envío:</strong> ${this.formatearFecha(testimonio.createdAt)}</p>
        </div>
      `,
      width: 600,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar'
    });
  }
}
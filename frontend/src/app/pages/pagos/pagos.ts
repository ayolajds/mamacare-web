import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitsService } from '../../shared/services/kits';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagos.html',
  styleUrls: ['./pagos.scss']
})
export class Pagos implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private kitsService = inject(KitsService);
  private authService = inject(AuthService);

  kit: any = null;
  isLoading: boolean = true;
  isProcessing: boolean = false;

  // DATOS DEL FORMULARIO COMPLETO
  bancoSeleccionado: string = '';
  tipoDocumento: string = 'cc';
  numeroDocumento: string = '';
  tipoPersona: string = 'natural';
  nombreTitular: string = '';
  email: string = '';
  telefono: string = '';
  aceptaTerminos: boolean = false;

  // Bancos disponibles
  bancos = [
    { id: 'bancolombia', nombre: 'Bancolombia' },
    { id: 'davivienda', nombre: 'Davivienda' },
    { id: 'bbva', nombre: 'BBVA' },
    { id: 'bogota', nombre: 'Banco de Bogotá' },
    { id: 'nequi', nombre: 'Nequi' }
  ];

  // MAPEO DE KITS
  private kitsInfo: { [key: number]: any } = {
    1: { 
      nombre: 'Kit Esencial de Recuerdos',
      categoria: 'basico',
      precio: 89900,
      precioOriginal: 119900,
      descuento: 25,
      descripcion: 'Perfecto para comenzar a preservar tus momentos más especiales de forma organizada y emotiva.'
    },
    2: { 
      nombre: 'Kit Memoria Avanzada',
      categoria: 'intermedio', 
      precio: 169900,
      descripcion: 'Para quienes buscan profundizar en la preservación de sus historias con elementos especializados.'
    },
    3: { 
      nombre: 'Kit Legado Eterno',
      categoria: 'premium',
      precio: 299900,
      descripcion: 'La experiencia definitiva para crear un legado familiar que trascienda el tiempo.'
    }
  };

  ngOnInit(): void {
    this.verificarAutenticacion();
    this.cargarKit();
  }

  private verificarAutenticacion(): void {
    if (!this.authService.estaLogueado()) {
      alert('Debes iniciar sesión para solicitar un kit');
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }
  }

  private cargarKit(): void {
    const kitId = this.route.snapshot.paramMap.get('kitId');
    
    if (!kitId) {
      this.router.navigate(['/kits']);
      return;
    }

    const kitIdNumber = Number(kitId);
    this.kit = this.kitsInfo[kitIdNumber];
    
    if (!this.kit) {
      this.router.navigate(['/kits']);
      return;
    }

    this.kit.id = kitIdNumber;
    this.isLoading = false;
  }

  procesarPago(): void {
    if (!this.validarFormularioCompleto()) return;

    this.isProcessing = true;

    this.kitsService.crearOrden(this.kit.id, this.bancoSeleccionado).subscribe({
      next: (response) => {
        this.isProcessing = false;
        if (response.success) {
          this.mostrarConfirmacionExito();
          this.router.navigate(['/panel-paciente'], {
            queryParams: { compraExitosa: true }
          });
        } else {
          alert('Error: ' + response.message);
        }
      },
      error: (error) => {
        this.isProcessing = false;
        alert('Error al procesar el pago: ' + error.message);
        console.error('Error en pago:', error);
      }
    });
  }

  validarFormularioCompleto(): boolean {
    return !!(
      this.tipoPersona &&
      this.tipoDocumento &&
      this.numeroDocumento &&
      this.nombreTitular &&
      this.email &&
      this.telefono &&
      this.bancoSeleccionado &&
      this.aceptaTerminos
    );
  }

  getBankIcon(bancoId: string): string {
    const icons: { [key: string]: string } = {
      'bancolombia': 'building',
      'davivienda': 'landmark',
      'bbva': 'banknote',
      'bogota': 'building-2',
      'nequi': 'smartphone'
    };
    return icons[bancoId] || 'credit-card';
  }

  getBankName(bancoId: string): string {
    const banco = this.bancos.find(b => b.id === bancoId);
    return banco ? banco.nombre : 'Banco';
  }

  private mostrarConfirmacionExito(): void {
    alert(`¡Pago exitoso! Has solicitado el "${this.kit.nombre}". Recibirás un email de confirmación.`);
  }

  cancelar(): void {
    this.router.navigate(['/kits']);
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
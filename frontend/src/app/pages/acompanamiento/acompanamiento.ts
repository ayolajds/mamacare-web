import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AcompanamientoService, Plan } from '../../shared/services/acompanamiento';
import Swal from 'sweetalert2';

declare const lucide: any;

type ModalidadSlug = 'individual' | 'grupal' | 'talleres';

interface Modalidad {
  slug: ModalidadSlug;
  titulo: string;
  bullets: string[];
  icon: string;
  cta?: { label: string; link: string };
}

interface Paquete {
  nombre: 'Esencial' | 'Integral' | 'Premium';
  incluye: string[];
  resumen: string;
  precioDesde: string;
  cta: { label: string; link: string };
  badge?: string;
  modalidades: ModalidadSlug[];
  kit: 'Básico' | 'Intermedio' | 'Premium';
  precioReal?: number;
}

@Component({
  selector: 'app-acompanamiento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acompanamiento.html',
  styleUrls: ['./acompanamiento.scss']
})
export class Acompanamiento implements OnInit, AfterViewInit {

  private router = inject(Router);
  private acompanamientoService = inject(AcompanamientoService);

  isLoading: boolean = false;
  planesDisponibles: Plan[] = [];

  modalidades: Modalidad[] = [
    {
      slug: 'individual',
      titulo: 'Sesiones Individuales',
      bullets: [
        '50 minutos por sesión personalizada',
        'Psicólogas especializadas en oncología',
        'Modalidad presencial o virtual',
        'Confidencialidad y espacio seguro garantizado',
        'Enfoque clínico-humanista'
      ],
      icon: 'user',
      cta: { label: 'Solicitar información', link: '/contacto' }
    },
    {
      slug: 'grupal',
      titulo: 'Terapia Grupal',
      bullets: [
        'Grupos reducidos de 6-8 participantes',
        'Sesiones semanales de 90 minutos',
        'Temáticas: ansiedad, autoimagen, afrontamiento',
        'Guía profesional especializada',
        'Apoyo entre pares y comunidad'
      ],
      icon: 'users',
      cta: { label: 'Ver grupos disponibles', link: '/contacto' }
    },
    {
      slug: 'talleres',
      titulo: 'Talleres Educativos',
      bullets: [
        'Programas de 4-6 sesiones',
        'Materiales y recursos incluidos',
        'Ejercicios para casa',
        'Bienestar emocional y familiar',
        'Certificado de participación'
      ],
      icon: 'book-open',
      cta: { label: 'Explorar talleres', link: '/contacto' }
    }
  ];

  paquetes: Paquete[] = [
    {
      nombre: 'Esencial',
      incluye: [
        '4 sesiones psicológicas presenciales',
        'Evaluación y plan terapéutico',
        'Seguimiento básico entre sesiones',
        'Materiales de apoyo digital',
        'Kit Básico incluido'
      ],
      resumen: 'Ideal para comenzar con acompañamiento cercano y herramientas esenciales.',
      precioDesde: '$280.000 COP',
      cta: { label: 'Comprar plan', link: '#' },
      badge: undefined,
      modalidades: ['individual'],
      kit: 'Básico',
      precioReal: 280000
    },
    {
      nombre: 'Integral',
      incluye: [
        '8 sesiones (presenciales + virtuales)',
        'Plan terapéutico integral',
        'Seguimiento continuo y recursos QR',
        'Acceso a comunidad de apoyo',
        '2 sesiones familiares incluidas',
        'Kit Intermedio incluido'
      ],
      resumen: 'Programa completo que combina modalidades para una experiencia profunda.',
      precioDesde: '$650.000 COP',
      cta: { label: 'Comprar plan', link: '#' },
      badge: 'RECOMENDADO',
      modalidades: ['individual', 'grupal'],
      kit: 'Intermedio',
      precioReal: 650000
    },
    {
      nombre: 'Premium',
      incluye: [
        '12 sesiones (presenciales + virtuales + a domicilio)',
        'Seguimiento intensivo y recursos premium',
        'Acompañamiento familiar completo',
        'Sesiones de emergencia incluidas',
        'Coaching emocional personalizado',
        'Kit Premium incluido'
      ],
      resumen: 'Máxima personalización, acompañamiento intensivo y recursos exclusivos.',
      precioDesde: '$1.200.000 COP',
      cta: { label: 'Comprar plan', link: '#' },
      badge: undefined,
      modalidades: ['individual', 'grupal', 'talleres'],
      kit: 'Premium',
      precioReal: 1200000
    }
  ];

  ngOnInit(): void {
    this.cargarPlanesDisponibles();
  }

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // ✅ VERIFICAR SI ESTÁ LOGUEADO
  userIsLoggedIn(): boolean {
    const token = 
      localStorage.getItem('token') ||
      localStorage.getItem('authToken') ||
      localStorage.getItem('userToken') ||
      localStorage.getItem('mamacare_access') ||
      localStorage.getItem('MaCare_access') ||
      sessionStorage.getItem('token') ||
      sessionStorage.getItem('authToken');

    return !!token;
  }

  private cargarPlanesDisponibles(): void {
    this.isLoading = true;
    this.acompanamientoService.getPlanes().subscribe({
      next: (response) => {
        this.planesDisponibles = response.data;
        console.log('📋 Planes cargados:', this.planesDisponibles);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error cargando planes:', error);
        this.isLoading = false;
      }
    });
  }

  // ✅ MÉTODO SIMPLIFICADO - Sin alertas intermedias
  solicitarPaquete(paquete: Paquete): void {
    console.log('🔄 Iniciando solicitarPaquete para:', paquete.nombre);
    
    // 1. Verificar si está logueado
    if (!this.userIsLoggedIn()) {
      console.warn('❌ Usuario NO logueado, redirigiendo a login...');
      
      Swal.fire({
        icon: 'warning',
        title: 'Inicio de sesión requerido',
        text: 'Debes iniciar sesión para comprar un plan',
        confirmButtonText: 'Iniciar Sesión',
        confirmButtonColor: '#FF6B9D',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: `/pagos/plan/${paquete.nombre}` }
          });
        }
      });
      return;
    }

    console.log('✅ Usuario logueado, redirigiendo directamente a pagos...');
    
    // ✅ REDIRECCIÓN DIRECTA sin alertas intermedias
    this.router.navigate(['/pagos/plan', paquete.nombre]);
  }

  // Helpers
  iconFor(slug: ModalidadSlug): string {
    const m = this.modalidades.find(x => x.slug === slug);
    return m?.icon ?? 'help-circle';
  }

  agendarCita(): void {
    this.router.navigateByUrl('/contacto');
  }

  scrollToPaquetes(): void {
    const el = document.getElementById('paquetes');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  solicitarModalidad(modalidad: Modalidad): void {
    this.router.navigateByUrl('/contacto');
  }

  contactar(): void {
    this.router.navigateByUrl('/contacto');
  }

  getTextoBoton(paquete: Paquete): string {
    return paquete.cta.label;
  }
}
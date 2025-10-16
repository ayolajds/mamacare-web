import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
        'Materiales de apoyo digital'
      ],
      resumen: 'Ideal para comenzar con acompañamiento cercano y herramientas esenciales.',
      precioDesde: '$280.000 COP',
      cta: { label: 'Solicitar paquete', link: '/contacto' },
      badge: undefined,
      modalidades: ['individual'],
      kit: 'Básico'
    },
    {
      nombre: 'Integral',
      incluye: [
        '8 sesiones (presenciales + virtuales)',
        'Plan terapéutico integral',
        'Seguimiento continuo y recursos QR',
        'Acceso a comunidad de apoyo',
        '2 sesiones familiares incluidas'
      ],
      resumen: 'Programa completo que combina modalidades para una experiencia profunda.',
      precioDesde: '$650.000 COP',
      cta: { label: 'Solicitar paquete', link: '/contacto' },
      badge: 'RECOMENDADO',
      modalidades: ['individual', 'grupal'],
      kit: 'Intermedio'
    },
    {
      nombre: 'Premium',
      incluye: [
        '12 sesiones (presenciales + virtuales + a domicilio)',
        'Seguimiento intensivo y recursos premium',
        'Acompañamiento familiar completo',
        'Sesiones de emergencia incluidas',
        'Coaching emocional personalizado'
      ],
      resumen: 'Máxima personalización, acompañamiento intensivo y recursos exclusivos.',
      precioDesde: '$1.200.000 COP',
      cta: { label: 'Solicitar paquete', link: '/contacto' },
      badge: undefined,
      modalidades: ['individual', 'grupal', 'talleres'],
      kit: 'Premium'
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
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

  solicitarPaquete(_: Paquete): void {
    this.router.navigateByUrl('/contacto');
  }

  contactar(): void {
    this.router.navigateByUrl('/contacto');
  }
}
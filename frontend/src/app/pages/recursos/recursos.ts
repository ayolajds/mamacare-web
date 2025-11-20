import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../shared/services/auth';

@Component({
  selector: 'app-recursos',
  imports: [CommonModule],
  templateUrl: './recursos.html',
  styleUrls: ['./recursos.scss']
})
export class Recursos implements OnInit {

  particles: any[] = [];
  showPodcastModal = false;
  showGuiasModal = false;
  showHerramientasModal = false;
  
  podcastLinks = [
    {
      title: 'Episodio: Aceptar los cambios del cuerpo con amor',
      url: 'https://open.spotify.com/show/71nWD9oqP8riTYspEhnwJ1?si=jqoUYNwBTj6PFs2sVyLS7g',
      platform: 'Spotify'
    },
    {
      title: 'Meditación guiada: Calma para un nuevo día',
      url: 'https://open.spotify.com/episode/6qbAvOfKRj4t8LbwdDf8w3?si=GMoyxXHbR_epucvqXrHyOQ',
      platform: 'Spotify'
    },
    {
      title: 'Audio de relajación para dormir mejor',
      url: 'https://open.spotify.com/episode/4oFg0gJSrV7rpXf1H4T64I?si=BSwIk3ezQ62jIjiTbTbDog',
      platform: 'Spotify'
    },
    {
      title: 'Sonidos curativos para momentos de estrés',
      url: 'https://open.spotify.com/episode/2OOgLn55K6zaBZ3OJ9OgWs?si=_DJ1v6jYQki3BQfflYhkJg',
      platform: 'Spotify'
    },
    {
      title: 'Meditación para la ansiedad',
      url: 'https://open.spotify.com/episode/6cSn2kdxe6jjNNMhNR9LcP?si=BdTLrDsKQAGffNshwhasJg',
      platform: 'Spotify'
    },
    {
      title: 'Yoga para la relajación',
      url: 'https://www.youtube.com/watch?v=P2khfRVKlQE',
      platform: 'YouTube'
    },
    {
      title: 'Mindfulness guiado',
      url: 'https://www.youtube.com/watch?v=W5e5G4U6moM',
      platform: 'YouTube'
    },
    {
      title: 'Sonidos de naturaleza relajantes',
      url: 'https://www.youtube.com/watch?v=20W-fPS0O2o',
      platform: 'YouTube'
    }
  ];

  guiasLinks = [
    {
      title: 'Guías de Práctica Clínica para Detección Temprana y Tratamiento',
      url: 'https://www.cancer.gov.co/conozca-sobre-cancer-1/publicaciones/gpc-para-deteccion-temprana-tratamiento',
      platform: 'Instituto Nacional de Cancerología',
      description: 'Guía oficial completa para detección temprana y tratamiento del cáncer'
    },
    {
      title: 'Guía Práctica para Mujeres - Detección Temprana',
      url: 'https://www.cancer.gov.co/conozca-sobre-cancer-1/publicaciones/guia-practica-para-mujeres-deteccion',
      platform: 'Instituto Nacional de Cancerología', 
      description: 'Información accesible para mujeres sobre prevención y detección temprana'
    },
    {
      title: 'Guía práctica para manejar la ansiedad durante el tratamiento',
      url: 'https://www.psicologia.unam.mx/documentos/pdf/repositorio/Supervivencia-al-cancer-Una-guia-de-apoyo-emocional-Manual-p-superv-INCan-Fac-Psicologia-UNAM.pdf',
      platform: 'MaCare',
      description: 'Técnicas y ejercicios para el bienestar emocional durante el tratamiento'
    }
  ];

  herramientasLinks = [
    {
      title: 'Calendario Emocional - Daylio',
      url: 'https://daylio.net/',
      platform: 'App Externa',
      description: 'Registro diario de emociones con estadísticas'
    },
    {
      title: 'Test de Bienestar - OMS',
      url: 'https://www.who.int/tools/who-well-being-index',
      platform: 'Organización Mundial de la Salud',
      description: 'Evaluación científica de tu bienestar psicológico'
    },
    {
      title: 'Frases Positivas - Pinterest',
      url: 'https://www.pinterest.com/search/pins/?q=frases%20positivas%20cancer%20mama',
      platform: 'Pinterest',
      description: 'Inspiración visual y mensajes motivadores'
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.generateParticles();
    this.initializeAnimations();
  }

  generateParticles() {
    this.particles = Array.from({ length: 15 }, (_, i) => ({
      'left.%': Math.random() * 100,
      'top.%': Math.random() * 100,
      'width.px': 4 + Math.random() * 8,
      'height.px': 4 + Math.random() * 8,
      'animation-delay.ms': Math.random() * 3000,
      'opacity': 0.3 + Math.random() * 0.4
    }));
  }

  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.resource-card');
    cards.forEach(card => observer.observe(card));
  }

  escucharAhora() {
    this.showPodcastModal = true;
  }

  descargarGuias() {
    this.showGuiasModal = true;
  }

  explorarHerramientas() {

    this.showHerramientasModal = true;
  }

  closeModal() {
    this.showPodcastModal = false;
    this.showGuiasModal = false;
    this.showHerramientasModal = false;
  }

  openLink(url: string) {
    window.open(url, '_blank');
    this.closeModal();
  }

  verVideos() {

    window.open('https://drive.google.com/drive/folders/1t_dRZnsK35DLOrHe2QsxCfO7vfqAmCfx?usp=sharing', '_blank');
  }

  agendarSesion() {

    
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/solicitar-cita']);
    } else {
      Swal.fire({
        title: 'Iniciar sesión',
        text: 'Necesitas estar registrado para agendar una cita',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#667eea'
      }).then(() => {
        this.router.navigate(['/login']);
      });
    }
  }

  unirseGrupo() {

    window.open('https://t.me/cancerdemamahormonalmetastasico', '_blank');
  }
}
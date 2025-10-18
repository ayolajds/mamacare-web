import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos',
  imports: [CommonModule],
  templateUrl: './recursos.html',
  styleUrls: ['./recursos.scss']
})
export class Recursos implements OnInit {

  particles: any[] = [];

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
    // Intersection Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    // Observar tarjetas de recursos
    const cards = document.querySelectorAll('.resource-card');
    cards.forEach(card => observer.observe(card));
  }

  descargarGuias() {
    console.log('Descargar guías clicked');
    // Lógica para descargar guías
  }

  escucharAhora() {
    console.log('Escuchar ahora clicked');
    // Lógica para reproducir audio
  }

  verVideos() {
    console.log('Ver videos clicked');
    // Lógica para ver videos
  }

  explorarHerramientas() {
    console.log('Explorar herramientas clicked');
    // Lógica para herramientas interactivas
  }

  agendarSesion() {
    console.log('Agendar sesión clicked');
    // Navegar a agendar sesión
  }

  unirseGrupo() {
    console.log('Unirse a grupo clicked');
    // Navegar a grupos de apoyo
  }
}
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const lucide: any;

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.html',
  styleUrls: ['./quienes-somos.scss']
})
export class QuienesSomos implements OnInit, AfterViewInit {
  
  ngOnInit() {
    this.animateStats();
  }

  ngAfterViewInit(): void {
    if (typeof lucide?.createIcons === 'function') {
      lucide.createIcons();
    }
  }

  animateStats() {
    setTimeout(() => {
      const stats = document.querySelectorAll('.stat-number');
      
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count') || '0');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.textContent = Math.floor(current) + (stat.getAttribute('data-count') === '85' ? '%' : '+');
        }, 16);
      });
    }, 500);
  }

  solicitarAyuda() {

  }

  serVoluntario() {

  }

  donar() {

  }
}
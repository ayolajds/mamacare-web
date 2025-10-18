import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']
})
export class Contacto {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  };

  isSubmitting = false;
  submitted = false;

  floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 15
  }));

  onSubmit() {
    if (!this.contactForm.privacy) {
      alert('Por favor acepta la política de privacidad');
      return;
    }

    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.subject || !this.contactForm.message) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    this.isSubmitting = true;
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      console.log('Formulario enviado:', this.contactForm);
      this.isSubmitting = false;
      this.submitted = true;
      
      // Reset form
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      };
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
      
    }, 2000);
  }

  openWhatsApp() {
    const message = `Hola, me gustaría obtener más información sobre Ma'Care.`;
    window.open(`https://wa.me/34600000000?text=${encodeURIComponent(message)}`, '_blank');
  }

  sendEmail() {
    const subject = 'Consulta MaCare';
    const body = 'Hola, me gustaría obtener más información sobre sus servicios...';
    window.location.href = `mailto:hola@macare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  makeCall() {
    window.location.href = 'tel:+34910000000';
  }

  openMaps() {
    window.open('https://maps.google.com/?q=Calle+Esperanza+123,+Madrid,+España', '_blank');
  }
}
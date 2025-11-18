import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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

  // Función para permitir solo letras en el campo nombre
  onNameInput(event: any) {
    const input = event.target;
    const value = input.value;
    
    // Remover cualquier caracter que no sea letra o espacio
    const filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    
    // Actualizar el valor del input
    input.value = filteredValue;
    this.contactForm.name = filteredValue;
  }

  // Función para permitir solo números en el campo teléfono
  onPhoneInput(event: any) {
    const input = event.target;
    const value = input.value;
    
    // Remover cualquier caracter que no sea número
    const filteredValue = value.replace(/[^0-9]/g, '');
    
    // Actualizar el valor del input
    input.value = filteredValue;
    this.contactForm.phone = filteredValue;
  }

  // Función para prevenir que se peguen caracteres no permitidos
  onPaste(event: any, type: 'name' | 'phone') {
    event.preventDefault();
    const pastedText = (event.clipboardData || (window as any).clipboardData).getData('text');
    
    if (type === 'name') {
      const filteredText = pastedText.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      this.contactForm.name += filteredText;
    } else if (type === 'phone') {
      const filteredText = pastedText.replace(/[^0-9]/g, '');
      this.contactForm.phone += filteredText;
    }
  }

  onSubmit() {
    if (!this.contactForm.privacy) {
      Swal.fire({
        icon: 'warning',
        title: 'Política de privacidad',
        text: 'Por favor acepta la política de privacidad',
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.subject || !this.contactForm.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos obligatorios',
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    this.isSubmitting = true;

    // Enviar email utilizando EmailJS
    emailjs.send(
      'service_sj4ykpu',
      'template_mvn7tra',
      {
        name: this.contactForm.name,
        email: this.contactForm.email,
        phone: this.contactForm.phone,
        subject: this.contactForm.subject,
        message: this.contactForm.message
      },
      'N1xUBXVmG_z6s1AhA'
    )
    .then((response) => {
      console.log('Mensaje enviado con éxito', response);
      this.isSubmitting = false;
      this.submitted = true;
      
      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Tu mensaje ha sido enviado con éxito. Te contactaremos pronto.',
        confirmButtonColor: '#10b981',
        confirmButtonText: '¡Genial!',
        timer: 5000,
        timerProgressBar: true
      });
      
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
    }, (error) => {
      console.error('Error al enviar el mensaje', error);
      this.isSubmitting = false;
      
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'Intentar de nuevo'
      });
    });
  }

  // Solo mantener WhatsApp que es lo más usado
  openWhatsApp() {
    const message = `Hola, me gustaría obtener más información sobre Ma'Care.`;
    window.open(`https://wa.me/+573243199016?text=${encodeURIComponent(message)}`, '_blank');
  }

  // Opcional: Mantener Maps si tienes ubicación física
  openMaps() {
    window.open('https://maps.google.com/?q=Edificio+Cedesarrollo+Comfenalco', '_blank');
  }
}
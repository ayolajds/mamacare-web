import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestimonioService } from '../../shared/services/testimonio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-testimonio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mi-testimonio.html',
  styleUrls: ['./mi-testimonio.scss']
})
export class MiTestimonio implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private testimonioService = inject(TestimonioService);

  // límites imagen
  readonly ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  readonly MAX_FILE_MB = 3;
  readonly MAX_BYTES = this.MAX_FILE_MB * 1024 * 1024;

  // form
  testimonioForm: FormGroup = this.fb.group({
    textoCorto: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    historiaCompleta: ['', [Validators.maxLength(2000)]],
    impacto: ['', [Validators.maxLength(500)]],
    tags: [[] as string[]],
    ciudad: [''],
    imagen: [null]
  });

  // estado
  enviando = false;
  puedeDarTestimonio = false;
  verificandoPermisos = true;

  // imagen
  file?: File | null = null;
  previewUrl: string | null = null;
  imagenError = '';
  dragging = false;

  // tags
  tagsDisponibles = [
    'Ansiedad','Sueño','Aceptación','Organización','Grupo de apoyo',
    'Mindfulness','Mentoría','Resiliencia','Propósito','Vulnerabilidad',
    'Autenticidad','Expresión emocional','Fortaleza','Esperanza','Comunidad'
  ];

  ngOnInit() { 
    this.verificarPermisos(); 
  }

  get textoCorto() { return this.testimonioForm.get('textoCorto'); }
  get historiaCompleta() { return this.testimonioForm.get('historiaCompleta'); }
  get impacto() { return this.testimonioForm.get('impacto'); }

  get textoCortoLength(){ return (this.textoCorto?.value || '').length; }
  get historiaLength(){ return (this.historiaCompleta?.value || '').length; }
  get impactoLength(){ return (this.impacto?.value || '').length; }

  verificarPermisos() {
    this.testimonioService.verificarPermisos().subscribe({
      next: (response) => { 
        this.puedeDarTestimonio = response?.puedeDarTestimonio ?? false; 
        this.verificandoPermisos = false; 
        console.log('🔐 Permisos verificados:', this.puedeDarTestimonio);
      },
      error: (error) => { 
        console.error('Error verificando permisos:', error);
        this.puedeDarTestimonio = false;
        this.verificandoPermisos = false; 
      }
    });
  }

  toggleTag(tag: string) {
    const ctrl = this.testimonioForm.get('tags')!;
    const arr = new Set<string>(ctrl.value || []);
    arr.has(tag) ? arr.delete(tag) : arr.add(tag);
    ctrl.patchValue([...arr]);
  }

  /* ---------- Imagen ---------- */
  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    this.handleFile(file || null);
  }

  onDragOver(e: DragEvent){ 
    e.preventDefault(); 
    this.dragging = true; 
  }

  onDragLeave(e: DragEvent){ 
    e.preventDefault(); 
    this.dragging = false; 
  }

  onDrop(e: DragEvent){
    e.preventDefault(); 
    this.dragging = false;
    const file = e.dataTransfer?.files?.[0] || null;
    this.handleFile(file);
  }

  handleFile(file: File | null){
    this.clearImage(false);
    if (!file) return;

    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.imagenError = 'Formato no permitido. Usa JPG, PNG o WEBP.';
      this.mostrarErrorImagen('Formato no permitido', 'Por favor usa imágenes JPG, PNG o WEBP.');
      return;
    }
    if (file.size > this.MAX_BYTES) {
      this.imagenError = `La imagen supera ${this.MAX_FILE_MB} MB.`;
      this.mostrarErrorImagen('Archivo muy pesado', `La imagen no puede superar ${this.MAX_FILE_MB} MB.`);
      return;
    }

    this.file = file;
    this.testimonioForm.patchValue({ imagen: 'attached' });
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result as string;
    reader.readAsDataURL(file);
    this.imagenError = '';
    
    // Mostrar confirmación de imagen cargada
    this.mostrarExitoImagen();
  }

  clearImage(patch: boolean = true){
    this.file = null; 
    this.previewUrl = null; 
    this.imagenError = '';
    if (patch) this.testimonioForm.patchValue({ imagen: null });
  }

  /* ---------- SweetAlert Methods ---------- */
  mostrarErrorImagen(titulo: string, mensaje: string) {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: mensaje,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Entendido'
    });
  }

  mostrarExitoImagen() {
    Swal.fire({
      icon: 'success',
      title: '¡Imagen cargada!',
      text: 'La imagen se ha cargado correctamente.',
      timer: 2000,
      showConfirmButton: false
    });
  }

  mostrarConfirmacionEnvio() {
    return Swal.fire({
      title: '¿Enviar testimonio?',
      text: '¿Estás seguro de que quieres enviar tu testimonio para publicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });
  }

  mostrarCargando() {
    Swal.fire({
      title: 'Enviando testimonio...',
      text: 'Por favor espera mientras procesamos tu información.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  mostrarExito(response: any) {
    console.log('✅ Testimonio creado exitosamente:', response);
    
    const mensaje = response?.message || '¡Gracias por compartir tu historia! Tu testimonio fue enviado para publicación.';
    
    Swal.fire({
      icon: 'success',
      title: '¡Testimonio enviado!',
      text: mensaje,
      confirmButtonColor: '#28a745',
      confirmButtonText: 'Ver historias'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/historias']);
      }
    });
  }

  mostrarError(error: any) {
    console.error('❌ Error creando testimonio:', error);
    
    const mensaje = error?.message || 'Error al enviar tu testimonio. Intenta nuevamente.';
    
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: mensaje,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Entendido'
    });
  }

  /* ---------- Envío ---------- */
  async enviarTestimonio() {
    if (this.testimonioForm.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      Object.values(this.testimonioForm.controls).forEach(control => {
        control.markAsTouched();
      });
      
      // Mostrar error de formulario inválido
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor completa todos los campos requeridos correctamente.',
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'Entendido'
      });
      return;
    }

    // Mostrar confirmación antes de enviar
    const confirmacion = await this.mostrarConfirmacionEnvio();
    if (!confirmacion.isConfirmed) return;

    this.enviando = true;
    this.mostrarCargando();

    const formData = new FormData();
    formData.append('textoCorto', this.testimonioForm.get('textoCorto')?.value || '');
    formData.append('historiaCompleta', this.testimonioForm.get('historiaCompleta')?.value || '');
    formData.append('impacto', this.testimonioForm.get('impacto')?.value || '');
    formData.append('ciudad', this.testimonioForm.get('ciudad')?.value || '');
    formData.append('tags', JSON.stringify(this.testimonioForm.get('tags')?.value || []));

    if (this.file) {
      formData.append('imagen', this.file, this.file.name);
    }

    console.log('📤 Enviando testimonio...');

    this.testimonioService.crearTestimonio(formData).subscribe({
      next: (response) => {
        this.enviando = false;
        Swal.close(); // Cerrar loading
        this.mostrarExito(response);
      },
      error: (error) => {
        this.enviando = false;
        Swal.close(); // Cerrar loading
        this.mostrarError(error);
      }
    });
  }

  volverAHistorias() { 
    Swal.fire({
      title: '¿Salir sin guardar?',
      text: 'Los cambios no guardados se perderán.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/historias']);
      }
    });
  }

  verPaquetes() {
    this.router.navigate(['/acompanamiento']);
  }
}
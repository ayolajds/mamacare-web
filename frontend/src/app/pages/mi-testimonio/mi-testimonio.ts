import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestimonioService } from '../../shared/services/testimonio';

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

  // form (sin calificacion)
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

  ngOnInit() { this.verificarPermisos(); }

  get textoCorto() { return this.testimonioForm.get('textoCorto'); }
  get historiaCompleta() { return this.testimonioForm.get('historiaCompleta'); }
  get impacto() { return this.testimonioForm.get('impacto'); }

  get textoCortoLength(){ return (this.textoCorto?.value || '').length; }
  get historiaLength(){ return (this.historiaCompleta?.value || '').length; }
  get impactoLength(){ return (this.impacto?.value || '').length; }

  verificarPermisos() {
    this.testimonioService.verificarPermisos().subscribe({
      next: (r) => { this.puedeDarTestimonio = !!r?.puedeDarTestimonio; this.verificandoPermisos = false; },
      error: () => { this.verificandoPermisos = false; }
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

  onDragOver(e: DragEvent){ e.preventDefault(); this.dragging = true; }
  onDragLeave(e: DragEvent){ e.preventDefault(); this.dragging = false; }
  onDrop(e: DragEvent){
    e.preventDefault(); this.dragging = false;
    const file = e.dataTransfer?.files?.[0] || null;
    this.handleFile(file);
  }

  handleFile(file: File | null){
    this.clearImage(false);
    if (!file) return;

    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.imagenError = 'Formato no permitido. Usa JPG, PNG o WEBP.';
      return;
    }
    if (file.size > this.MAX_BYTES) {
      this.imagenError = `La imagen supera ${this.MAX_FILE_MB} MB.`;
      return;
    }

    this.file = file;
    this.testimonioForm.patchValue({ imagen: 'attached' });
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result as string;
    reader.readAsDataURL(file);
  }

  clearImage(patch: boolean = true){
    this.file = null; this.previewUrl = null; this.imagenError = '';
    if (patch) this.testimonioForm.patchValue({ imagen: null });
  }

  /* ---------- Envío ---------- */
  enviarTestimonio() {
    if (this.testimonioForm.invalid) {
      Object.values(this.testimonioForm.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.enviando = true;

    const formData = new FormData();
    formData.append('textoCorto', this.testimonioForm.get('textoCorto')?.value || '');
    formData.append('historiaCompleta', this.testimonioForm.get('historiaCompleta')?.value || '');
    formData.append('impacto', this.testimonioForm.get('impacto')?.value || '');
    formData.append('ciudad', this.testimonioForm.get('ciudad')?.value || '');
    formData.append('tags', JSON.stringify(this.testimonioForm.get('tags')?.value || []));

    if (this.file) {
      formData.append('imagen', this.file, this.file.name);
    }

    console.log('📤 Enviando FormData con campos individuales...');

    this.testimonioService.crearTestimonio(formData).subscribe({
      next: (response) => {
        this.enviando = false;
        this.mostrarExito(response);
      },
      error: (err) => {
        this.enviando = false;
        this.mostrarError(err);
      }
    });
  }

  mostrarExito(response: any) {
    console.log('✅ Testimonio creado:', response);
    alert('¡Gracias por compartir tu historia! Tu testimonio fue enviado para publicación.');
    this.router.navigate(['/historias']);
  }

  mostrarError(error: any) {
    console.error('❌ Error creando testimonio:', error);
    const mensaje = error?.error?.error || error?.message || 'Error al publicar tu testimonio. Intenta nuevamente.';
    alert(mensaje);
  }

  volverAHistorias(){ this.router.navigate(['/historias']); }
}

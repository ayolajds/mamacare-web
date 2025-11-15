import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-edit.html',
  styleUrls: ['./user-edit.scss']
})
export class UserEdit implements OnInit {
  userForm: FormGroup;
  userId: string = '';
  isLoading = true;
  isSaving = false;
  user: any = null;

  // Especialidades disponibles
  specialties = [
    'Psicología Clínica',
    'Psicoterapia',
    'Terapia Familiar',
    'Neuropsicología',
    'Psicología Educativa',
    'Terapia de Pareja',
    'Psicología Infantil',
    'Psicología Organizacional',
    'Otra'
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private location: Location
  ) {
    this.userForm = this.createForm();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    if (this.userId) {
      this.loadUser();
    } else {
      this.mostrarError('ID de usuario no válido');
      this.volverAtras();
    }
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      specialty: [''], // ✅ CORREGIDO: en inglés
      isActive: [true]
    });
  }

  loadUser() {
    this.isLoading = true;
    this.http.get(`${environment.apiUrl}/admin/users/${this.userId}`)
      .subscribe({
        next: (response: any) => {
          if (response.success) {
            this.user = response.data;
            this.populateForm(this.user);
          } else {
            this.mostrarError('Usuario no encontrado');
            this.volverAtras();
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error cargando usuario:', error);
          this.mostrarError('Error al cargar el usuario');
          this.isLoading = false;
          this.volverAtras();
        }
      });
  }

  populateForm(user: any) {
    this.userForm.patchValue({
      name: user.name || '',
      lastName: user.lastName || '',
      email: user.email || '',
      role: user.role || '',
      specialty: user.specialty || '', // ✅ CORREGIDO: en inglés
      isActive: user.isActive !== false
    });

    // Mostrar/ocultar especialidad según el rol
    this.toggleSpecialtyField(user.role);
  }

  onRoleChange() {
    const role = this.userForm.get('role')?.value;
    this.toggleSpecialtyField(role);
  }

  toggleSpecialtyField(role: string) {
    const specialtyControl = this.userForm.get('specialty'); // ✅ CORREGIDO: en inglés
    if (role === 'profesional') {
      specialtyControl?.setValidators([Validators.required]);
    } else {
      specialtyControl?.clearValidators();
      specialtyControl?.setValue('');
    }
    specialtyControl?.updateValueAndValidity();
  }

  guardarCambios() {
    if (this.userForm.invalid) {
      this.marcarCamposComoSucios();
      this.mostrarAdvertencia('Por favor, complete todos los campos requeridos');
      return;
    }

    this.isSaving = true;
    const formData = this.userForm.value;

    this.http.put(`${environment.apiUrl}/admin/users/${this.userId}`, formData)
      .subscribe({
        next: (response: any) => {
          this.isSaving = false;
          if (response.success) {
            this.mostrarExito('Usuario actualizado correctamente');
            this.volverALista();
          } else {
            this.mostrarError(response.message || 'Error al actualizar usuario');
          }
        },
        error: (error) => {
          console.error('Error actualizando usuario:', error);
          this.isSaving = false;
          this.mostrarError('Error al actualizar el usuario');
        }
      });
  }

  volverAtras() {
    this.location.back();
  }

  volverALista() {
    this.router.navigate(['/admin/users/user-list']);
  }

  private marcarCamposComoSucios() {
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
    });
  }

  // Helpers para mensajes
  private mostrarExito(mensaje: string): void {
    Swal.fire({
      title: 'Éxito',
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4f46e5'
    });
  }

  private mostrarError(mensaje: string): void {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#dc2626'
    });
  }

  private mostrarAdvertencia(mensaje: string): void {
    Swal.fire({
      title: 'Advertencia',
      text: mensaje,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#f59e0b'
    });
  }

  // Getters para validación en template - CORREGIDOS
  get nombreInvalido(): boolean {
    const control = this.userForm.get('name');
    return control ? control.invalid && control.touched : false;
  }

  get apellidoInvalido(): boolean {
    const control = this.userForm.get('lastName');
    return control ? control.invalid && control.touched : false;
  }

  get emailInvalido(): boolean {
    const control = this.userForm.get('email');
    return control ? control.invalid && control.touched : false;
  }

  get rolInvalido(): boolean {
    const control = this.userForm.get('role');
    return control ? control.invalid && control.touched : false;
  }

  // ✅ CORREGIDO: Cambiado a specialty
  get specialtyInvalida(): boolean {
    const control = this.userForm.get('specialty');
    return control ? control.invalid && control.touched : false;
  }
}
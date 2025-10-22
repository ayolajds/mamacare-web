import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss']
})
export class ForgotPassword {
  forgotPasswordForm: FormGroup;
  loading = false;
  showSuccess = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  get emailErrors() {
    if (this.email?.errors?.['required']) {
      return 'El correo electrónico es obligatorio';
    }
    if (this.email?.errors?.['email']) {
      return 'Por favor ingresa un correo electrónico válido';
    }
    return '';
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.forgotPassword(this.forgotPasswordForm.value.email)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (response) => {
          this.showSuccess = true;
          this.forgotPasswordForm.reset();
          console.log('✅ Forgot password success:', response);
        },
        error: (error) => {
          this.errorMessage = error.message || 'Error al enviar el correo. Intenta nuevamente.';
          console.error('❌ Forgot password error:', error);
        }
      });
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.forgotPasswordForm.controls).forEach(key => {
      this.forgotPasswordForm.get(key)?.markAsTouched();
    });
  }

  onBackToLogin() {
    this.router.navigate(['/login']);
  }

  closeSuccessModal() {
    this.showSuccess = false;
    this.onBackToLogin();
  }
}
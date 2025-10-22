import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.scss']
})
export class ResetPassword implements OnInit {
  resetPasswordForm: FormGroup;
  loading = false;
  showSuccess = false;
  token: string = '';
  tokenValid: boolean = true;
  tokenChecked: boolean = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    this.verifyToken();
  }

  verifyToken() {
    if (!this.token) {
      this.tokenValid = false;
      this.tokenChecked = true;
      return;
    }

    this.authService.verifyResetToken(this.token)
      .subscribe({
        next: (response) => {
          this.tokenValid = true;
          this.tokenChecked = true;
          console.log('✅ Token válido:', response);
        },
        error: (error) => {
          this.tokenValid = false;
          this.tokenChecked = true;
          this.errorMessage = error.message || 'El enlace de restablecimiento es inválido o ha expirado.';
          console.error('❌ Token inválido:', error);
        }
      });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    return null;
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  get passwordErrors() {
    if (this.password?.errors?.['required']) {
      return 'La contraseña es obligatoria';
    }
    if (this.password?.errors?.['minlength']) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    return '';
  }

get confirmPasswordErrors() {
  if (this.confirmPassword?.errors?.['required']) {
    return 'Confirma tu contraseña';
  }
  if (this.confirmPassword?.errors?.['passwordMismatch']) {
    return 'Las contraseñas no coinciden';
  }
  return '';
}

  onSubmit() {
    if (this.resetPasswordForm.invalid || !this.tokenValid) {
      this.markAllFieldsAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.resetPassword(this.token, this.resetPasswordForm.value.password)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (response) => {
          this.showSuccess = true;
          console.log('✅ Password reset success:', response);
        },
        error: (error) => {
          this.errorMessage = error.message || 'Error al restablecer la contraseña. Intenta nuevamente.';
          console.error('❌ Password reset error:', error);
        }
      });
  }

  private markAllFieldsAsTouched() {
    Object.keys(this.resetPasswordForm.controls).forEach(key => {
      this.resetPasswordForm.get(key)?.markAsTouched();
    });
  }

  onBackToLogin() {
    this.router.navigate(['/login']);
  }
}
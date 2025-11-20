import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../shared/services/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  // 1. Verificar si está logueado
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  // 2. Obtener el usuario actual
  const currentUser = authService.currentUser();


  // 3. Verificar si es admin
  if (currentUser?.role === 'admin') {

    return true;
  }

  // 4. Si no es admin, redirigir al home

  router.navigate(['/']);
  return false;
};
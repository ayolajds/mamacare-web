import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../shared/services/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('🛡️ Admin Guard ejecutándose...');

  // 1. Verificar si está logueado
  if (!authService.isLoggedIn()) {
    console.log('❌ No está logueado - redirigiendo a login');
    router.navigate(['/login']);
    return false;
  }

  // 2. Obtener el usuario actual
  const currentUser = authService.currentUser();
  console.log('👤 Usuario actual:', currentUser);

  // 3. Verificar si es admin
  if (currentUser?.role === 'admin') {
    console.log('✅ Acceso permitido - Es admin');
    return true;
  }

  // 4. Si no es admin, redirigir al home
  console.log('❌ Acceso denegado - No es admin');
  router.navigate(['/']);
  return false;
};
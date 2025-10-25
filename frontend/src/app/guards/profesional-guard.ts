// profesional-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth';

export const profesionalGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
  }

  const role = (auth.currentUser()?.role || '').toLowerCase();
  // Incluye 'admin' si quieres permitir acceso administrativo
  return (role === 'profesional' || role === 'professional' || role === 'admin')
    ? true
    : router.createUrlTree(['/inicio']);
};

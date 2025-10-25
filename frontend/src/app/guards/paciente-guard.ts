// paciente-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth';

export const pacienteGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
  }

  const role = (auth.currentUser()?.role || '').toLowerCase();
  // Incluye 'admin' si quieres que el admin pueda ver este panel
  return (role === 'paciente' || role === 'patient' || role === 'admin')
    ? true
    : router.createUrlTree(['/inicio']);
};

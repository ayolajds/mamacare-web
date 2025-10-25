// src/app/guards/voluntario-guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth';

export const voluntarioGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Si no está logueado → a login con redirect
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
  }

  const role = (auth.currentUser()?.role || '').toLowerCase();

  // Permite 'voluntario', 'volunteer' y opcionalmente 'admin'
  return (role === 'voluntario' || role === 'volunteer' || role === 'admin')
    ? true
    : router.createUrlTree(['/inicio']);
};

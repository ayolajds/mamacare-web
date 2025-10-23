import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  // Home
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: 'MamaCare | Inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio),
  },

  // Secciones principales
  {
    path: 'quienes-somos',
    title: 'MamaCare | ¿Quiénes somos?',
    loadComponent: () =>
      import('./pages/quienes-somos/quienes-somos').then(
        m => m.QuienesSomos
      ),
  },
  {
    path: 'kits',
    title: 'MamaCare | Kits',
    loadComponent: () =>
      import('./pages/kits/kits').then(m => m.Kits),
  },
  {
    path: 'acompanamiento',
    title: 'MamaCare | Acompañamiento',
    loadComponent: () =>
      import('./pages/acompanamiento/acompanamiento').then(
        m => m.Acompanamiento
      ),
  },
  {
    path: 'recursos',
    title: 'MamaCare | Recursos',
    loadComponent: () =>
      import('./pages/recursos/recursos').then(m => m.Recursos),
  },
  {
    path: 'historias',
    title: 'MamaCare | Historias',
    loadComponent: () =>
      import('./pages/historias/historias').then(m => m.Historias),
  },
  {
    path: 'contacto',
    title: 'MamaCare | Contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.Contacto),
  },

  // 🔐 Autenticación
  {
    path: 'login',
    title: 'MamaCare | Iniciar sesión',
    loadComponent: () =>
      import('./pages/auth/login/login').then(
        m => m.Login
      ),
  },
  {
    path: 'register',
    title: 'MamaCare | Crear cuenta',
    loadComponent: () =>
      import('./pages/auth/register/register').then(
        m => m.Register
      ),
  },
  {
    path: 'forgot-password',
    title: 'MamaCare | Recuperar contraseña',
    loadComponent: () =>
      import('./pages/auth/forgot-password/forgot-password').then(
        m => m.ForgotPassword
      ),
  },
  {
    path: 'reset-password/:token',
    title: 'MamaCare | Restablecer contraseña',
    loadComponent: () =>
      import('./pages/auth/reset-password/reset-password').then(
        m => m.ResetPassword
      ),
  },
  {
    path: 'profile',
    title: 'MamaCare | Profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/auth/profile/profile').then(m => m.Profile),
  },

  // 👑 Panel de Administración (SOLO las rutas que realmente tienes)
   {
    path: 'admin',
    title: 'MamaCare | Panel de Administración',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./panels/admin-panel/admin-panel').then(m => m.AdminPanel),
  },
  {
    path: 'admin/dashboard',
    title: 'MamaCare | Dashboard Admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'admin/users/user-list',
    title: 'MamaCare | Lista de Usuarios',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/users/user-list/user-list').then(m => m.UserList),
  },
  {
    path: 'admin/users/user-edit/:id',
    title: 'MamaCare | Editar Usuario',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/users/user-edit/user-edit').then(m => m.UserEdit),
  },

  // Not found → Inicio
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
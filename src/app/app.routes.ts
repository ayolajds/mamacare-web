import { Routes } from '@angular/router';

// Nota: todas las rutas usan loadComponent (standalone + lazy-load).
// Asegúrate de que cada componente exista en la ruta indicada.

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
    path: 'recursos',
    title: 'MamaCare | Recursos',
    loadComponent: () =>
      import('./pages/recursos/recursos').then(
        m => m.Recursos
      ),
  },
  {
    path: 'historias',
    title: 'MamaCare | Historias',
    loadComponent: () =>
      import('./pages/historias/historias').then(
        m => m.Historias
      ),
  },
  {
    path: 'contacto',
    title: 'MamaCare | Contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(
        m => m.Contacto
      ),
  },

  // Servicios (rutas hijas)
  {
    path: 'servicios',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sesiones', // landing por defecto de servicios
      },
      {
        path: 'sesiones',
        title: 'MamaCare | Sesiones individuales',
        loadComponent: () =>
          import('./pages/servicios/sesiones/sesiones').then(
            m => m.Sesiones
          ),
      },
      {
        path: 'grupal',
        title: 'MamaCare | Terapia grupal',
        loadComponent: () =>
          import('./pages/servicios/grupal/grupal').then(
            m => m.Grupal
          ),
      },
      {
        path: 'talleres',
        title: 'MamaCare | Talleres educativos',
        loadComponent: () =>
          import('./pages/servicios/talleres/talleres').then(
            m => m.Talleres
          ),
      },
    ],
  },

  // Not found → Inicio
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

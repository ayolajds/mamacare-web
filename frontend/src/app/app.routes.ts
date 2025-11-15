import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin-guard';
import { pacienteGuard } from './guards/paciente-guard';
import { profesionalGuard } from './guards/profesional-guard';

export const routes: Routes = [
  // Home
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: 'Ma´Care | Inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio),
  },

  // Secciones principales
  {
    path: 'quienes-somos',
    title: 'Ma´Care | ¿Quiénes somos?',
    loadComponent: () =>
      import('./pages/quienes-somos/quienes-somos').then(
        m => m.QuienesSomos
      ),
  },
  {
    path: 'kits',
    title: 'Ma´Care | Kits',
    loadComponent: () =>
      import('./pages/kits/kits').then(m => m.Kits),
  },
  {
    path: 'acompanamiento',
    title: 'Ma´Care | Acompañamiento',
    loadComponent: () =>
      import('./pages/acompanamiento/acompanamiento').then(
        m => m.Acompanamiento
      ),
  },
  // ✅ RUTA DE PAGOS PARA KITS
  {
    path: 'pagos/:kitId',
    title: 'Ma´Care | Procesar Pago',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/pagos/pagos').then(m => m.Pagos),
  },
  // ✅ NUEVA RUTA DE PAGOS PARA ACOMPAÑAMIENTO
  {
    path: 'pago-acompanamiento/:id',
    title: 'Ma´Care | Pago Acompañamiento',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/pago-acompanamiento/pago-acompanamiento').then(
        m => m.PagoAcompanamientoComponent
      ),
  },
  {
    path: 'recursos',
    title: 'Ma´Care | Recursos',
    loadComponent: () =>
      import('./pages/recursos/recursos').then(m => m.Recursos),
  },
  {
    path: 'historias',
    title: 'Ma´Care | Historias',
    loadComponent: () =>
      import('./pages/historias/historias').then(m => m.Historias),
  },
  {
    path: 'mi-testimonio',
    title: 'Ma´Care | Compartir Mi Historia',
    loadComponent: () =>
      import('./pages/mi-testimonio/mi-testimonio').then(m => m.MiTestimonio),
  },
  {
    path: 'contacto',
    title: 'Ma´Care | Contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto').then(m => m.Contacto),
  },

  // 🔐 Autenticación
  {
    path: 'login',
    title: 'Ma´Care | Iniciar sesión',
    loadComponent: () =>
      import('./pages/auth/login/login').then(
        m => m.Login
      ),
  },
  {
    path: 'register',
    title: 'Ma´Care | Crear cuenta',
    loadComponent: () =>
      import('./pages/auth/register/register').then(
        m => m.Register
      ),
  },
  {
    path: 'forgot-password',
    title: 'Ma´Care | Recuperar contraseña',
    loadComponent: () =>
      import('./pages/auth/forgot-password/forgot-password').then(
        m => m.ForgotPassword
      ),
  },
  {
    path: 'reset-password/:token',
    title: 'Ma´Care | Restablecer contraseña',
    loadComponent: () =>
      import('./pages/auth/reset-password/reset-password').then(
        m => m.ResetPassword
      ),
  },
  {
    path: 'profile',
    title: 'Ma´Care | Profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/auth/profile/profile').then(m => m.Profile),
  },

  // 👑 Panel de Administración
  {
    path: 'Panel-admin',
    title: 'Ma´Care | Panel de Administración',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./panels/admin-panel/admin-panel').then(m => m.AdminPanel),
  },
  {
    path: 'admin/dashboard',
    title: 'Ma´Care | Dashboard Admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'admin/users/user-list',
    title: 'Ma´Care | Lista de Usuarios',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/users/user-list/user-list').then(m => m.UserList),
  },
  {
    path: 'admin/users/user-edit/:id',
    title: 'Ma´Care | Editar Usuario',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/users/user-edit/user-edit').then(m => m.UserEdit),
  },
  {
    path: 'admin/appointments',
    title: 'Ma´Care | Gestión de Sesiones',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/appointments/appointments').then(m => m.Appointments),
  },
  // ✅ NUEVA RUTA PARA SOLICITUDES PENDIENTES
  {
    path: 'admin/solicitudes-pendientes',
    title: 'Ma´Care | Solicitudes Pendientes',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./admin/solicitudes-pendientes/solicitudes-pendientes').then(
        m => m.SolicitudesPendientes
      ),
  },

  // 👨‍⚕️ PANEL PROFESIONAL - RUTAS AGREGADAS
  {
    path: 'Panel-profesional',
    title: 'Ma´Care | Panel Profesional',
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () =>
      import('./panels/profesional-panel/profesional-panel').then(m => m.ProfesionalPanel),
  },
  {
    path: 'profesional/citas',
    title: 'Ma´Care | Gestión de Citas',
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () =>
      import('./professional/appointments/appointments').then(m => m.Appointments),
  },
  {
    path: 'profesional/pacientes',
    title: 'Ma´Care | Mis Pacientes',
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () =>
      import('./professional/pacientes/pacientes').then(m => m.Pacientes),
  },
  // 🎗️ NUEVA RUTA PARA TRATAMIENTOS - AGREGAR ESTA
  {
    path: 'profesional/pacientes/:patientId/tratamiento',
    title: 'Ma´Care | Crear Tratamiento',
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () =>
      import('./professional/tratamiento/tratamiento').then(m => m.Tratamiento),
  },
  {
    path: 'profesional/citas/:id',
    title: 'Ma´Care | Detalles de Cita',
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () =>
      import('./professional/cita-detalles/cita-detalles').then(m => m.CitaDetalles),
  },

  // 👤 Paneles por rol
  {
    path: 'Panel-paciente',
    title: 'Ma´Care | Panel Paciente',
    canActivate: [authGuard, pacienteGuard],
    loadComponent: () =>
      import('./panels/paciente-panel/paciente-panel').then(m => m.PacientePanel),
  },
  {
    path: 'mis-paquetes',
    title: 'Ma´Care | Mis Paquetes',
    canActivate: [authGuard, pacienteGuard],
    loadComponent: () =>
      import('./panels/paciente-panel/mis-paquetes/mis-paquetes').then(m => m.MisPaquetes),
  },
  {
    path: 'mis-kits',
    title: 'Ma´Care | Mis Kits',
    canActivate: [authGuard, pacienteGuard],
    loadComponent: () =>
      import('./panels/paciente-panel/mis-kits/mis-kits').then(m => m.MisKits),
  },
  {
    path: 'solicitar-cita',
    title: 'Ma´Care | Solicitar Cita',
    canActivate: [authGuard, pacienteGuard],
    loadComponent: () =>
      import('./panels/paciente-panel/solicitar-cita/solicitar-cita').then(m => m.SolicitarCita),
  },
  {
  path: 'mis-solicitudes',
  title: 'Ma´Care | Mis Solicitudes',
  canActivate: [authGuard, pacienteGuard],
  loadComponent: () =>
    import('./panels/paciente-panel/mis-solicitudes/mis-solicitudes').then(m => m.MisSolicitudes),
},
{
  path: 'citas-hoy',
  title: 'Ma´Care | Citas de Hoy',
  canActivate: [authGuard, pacienteGuard],
  loadComponent: () =>
    import('./panels/paciente-panel/citas-hoy/citas-hoy').then(m => m.CitasHoyComponent),
},
  {
    path: 'Panel-voluntario',
    title: 'Ma´Care | Panel Voluntario',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./panels/voluntario-panel/voluntario-panel').then(m => m.VoluntarioPanel),
  },

  // Not found → Inicio
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
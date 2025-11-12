// En routes/appointments.js - ORDEN CORRECTO
import { Router } from 'express';
import {
  // Funciones existentes
  createAppointment,
  listAppointments,  // ✅ ESTA YA EXISTE
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
  getAppointmentStats,
  rescheduleAppointment,
  checkSesionesDisponibles,
  
  // ✅ NUEVAS FUNCIONES
  solicitarCita,
  getSolicitudesPendientes,
  aprobarSolicitud,
  rechazarSolicitud,
  completarCita,
  getMisSolicitudesPendientes  // ✅ ESTA YA LA CREASTE
} from '../controllers/appointmentController.js';
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js';

const router = Router();

// Todas las rutas requieren autenticación
router.use(auth);

// ✅ TODAS LAS RUTAS ESPECÍFICAS PRIMERO

// Paciente: Solicitar cita
router.post('/solicitar', requireRoles('paciente'), solicitarCita);

// ✅ Paciente: Ver sus solicitudes pendientes
router.get('/mis-solicitudes', requireRoles('paciente'), getMisSolicitudesPendientes);

// ✅ Paciente: Ver sus citas confirmadas (usa listAppointments)
router.get('/mis-citas', requireRoles('paciente'), listAppointments);

// Admin: Ver solicitudes pendientes
router.get('/solicitudes/pendientes', requireRoles('admin'), getSolicitudesPendientes);

// Admin: Aprobar solicitud
router.put('/solicitudes/aprobar/:id', requireRoles('admin'), aprobarSolicitud);

// Admin: Rechazar solicitud  
router.put('/solicitudes/rechazar/:id', requireRoles('admin'), rechazarSolicitud);

// Admin/Profesional: Completar cita
router.put('/completar/:id', requireRoles(['admin', 'profesional']), completarCita);

// Verificar sesiones disponibles
router.get('/check-sesiones', checkSesionesDisponibles);

// Ruta de creación SOLO para admin
router.post('/admin', requireRoles('admin'), createAppointment);

// Rutas existentes para admin
router.get('/admin/stats', requireRoles('admin'), getAppointmentStats);
router.get('/admin', requireRoles('admin'), listAppointments);

// Rutas existentes para profesionales
router.get('/professional', requireRoles('profesional'), listAppointments);

// Rutas existentes para pacientes
router.get('/patient', requireRoles('paciente'), listAppointments);

// 🚨 RUTAS CON PARÁMETROS AL FINAL
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.patch('/:id/cancel', cancelAppointment);
router.put('/:id/reschedule', rescheduleAppointment);

export default router;
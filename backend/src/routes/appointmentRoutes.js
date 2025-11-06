import { Router } from 'express';
import {
  createAppointment,
  listAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
  getAppointmentStats,
  rescheduleAppointment,
  checkSesionesDisponibles // ✅ NUEVO IMPORT
} from '../controllers/appointmentController.js';
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js';

const router = Router();

// Todas las rutas requieren autenticación
router.use(auth);

// ✅ NUEVA RUTA: Verificar sesiones disponibles (para pacientes y admin)
router.get('/check-sesiones', checkSesionesDisponibles);

// Ruta de creación SOLO para admin
router.post('/admin', requireRoles('admin'), createAppointment); // ✅ SOLO ADMIN

// Rutas para admin
router.get('/admin/stats', requireRoles('admin'), getAppointmentStats);
router.get('/admin', requireRoles('admin'), listAppointments);

// Rutas para profesionales
router.get('/professional', requireRoles('profesional'), listAppointments);

// Rutas para pacientes
router.get('/patient', requireRoles('paciente'), listAppointments);

// Rutas compartidas
router.get('/:id', getAppointmentById);
router.put('/:id', updateAppointment);
router.patch('/:id/cancel', cancelAppointment);
router.put('/:id/reschedule', auth, rescheduleAppointment);

export default router;
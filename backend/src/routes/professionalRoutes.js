import express from 'express';
import { 
  getProfessionalAppointments,
  getProfessionalStats,
  getProfessionalPatients,
  updateAppointmentNotes,
  updateAppointmentStatus
} from '../controllers/professionalController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

// Todas las rutas requieren autenticación
router.get('/appointments', auth, getProfessionalAppointments);
router.get('/stats', auth, getProfessionalStats);
router.get('/patients', auth, getProfessionalPatients);
router.patch('/appointments/:id/status', auth, updateAppointmentStatus);
router.patch('/appointments/:id/notes', auth, updateAppointmentNotes);

export default router;
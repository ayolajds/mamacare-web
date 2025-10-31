import express from 'express';
import {
  getPatientDashboard,
  getPatientTreatment,
  getMedicalHistory,
  addSymptom,
  getPatientAppointments,
  createPatientTreatment
} from '../controllers/patientController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

// ✅ AUTENTICACIÓN
router.use(auth);

// ✅ MIDDLEWARE DE AUTORIZACIÓN CORREGIDO
const authorizePatient = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ 
      success: false,
      message: 'No autenticado' 
    });
  }
  
  // ✅ ACEPTAR AMBOS 'patient' Y 'paciente'
  const allowedRoles = ['patient', 'paciente'];
  
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ 
      success: false,
      message: `Acceso denegado. Rol '${req.user.role}' no tiene permisos de paciente.` 
    });
  }
  
  // DEBUG: Verificar que funciona
  console.log('✅ Acceso permitido para rol:', req.user.role);
  
  next();
};

router.use(authorizePatient);

// ✅ RUTAS PROTEGIDAS
router.get('/dashboard', getPatientDashboard);
router.get('/treatment', getPatientTreatment);
router.get('/medical-history', getMedicalHistory);
router.get('/appointments', getPatientAppointments);
router.post('/symptoms', addSymptom);
router.post('/treatment', createPatientTreatment);

export default router;
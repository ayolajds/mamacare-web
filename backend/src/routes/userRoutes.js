import { Router } from 'express';
import { 
  updateProfile, 
  changePassword,
  getUsersByRole,  // 👈 NECESITAS CREAR ESTA FUNCIÓN
  getPatients,     // 👈 NECESITAS CREAR ESTA FUNCIÓN  
  getProfessionals // 👈 NECESITAS CREAR ESTA FUNCIÓN
} from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

// 🔐 Todas estas rutas requieren autenticación
router.use(auth);

// RUTAS EXISTENTES
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);

// 🆕 RUTAS NUEVAS QUE NECESITAS AGREGAR:
router.get('/role/:role', getUsersByRole);       // GET /api/v1/users/role/patient
router.get('/patients', getPatients);           // GET /api/v1/users/patients
router.get('/professionals', getProfessionals); // GET /api/v1/users/professionals

export default router;
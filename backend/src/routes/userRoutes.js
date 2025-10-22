import { Router } from 'express';
import { 
  updateProfile, 
  changePassword 
} from '../controllers/userController.js'; // 👈 Solo las funciones de usuario
import { auth } from '../middlewares/auth.js';

const router = Router();

// 🔐 Todas estas rutas requieren autenticación
router.use(auth);

router.put('/profile', updateProfile);
router.put('/change-password', changePassword);

export default router;
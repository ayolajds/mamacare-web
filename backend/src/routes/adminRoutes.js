import { Router } from 'express';
import { 
  listUsers, 
  setRole, 
  toggleActive 
} from '../controllers/userController.js'; // 👈 Solo las funciones de admin
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js';

const router = Router();

// 👑 Todas estas rutas requieren ser admin
router.use(auth, requireRoles('admin'));

router.get('/users', listUsers);
router.patch('/users/:id/role', setRole);
router.patch('/users/:id/toggle', toggleActive);

export default router;
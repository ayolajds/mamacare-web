// routes/adminRoutes.js
import { Router } from 'express';
import { 
  getDashboardStats,
  listUsers, 
  setRole, 
  toggleActive,
  getUserById,
  updateUser
} from '../controllers/adminController.js'; // ✅ Todo de adminController
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js';

const router = Router();

router.use(auth, requireRoles('admin'));

router.get('/dashboard/stats', getDashboardStats);
router.get('/users', listUsers);
router.patch('/users/:id/role', setRole);
router.patch('/users/:id/toggle', toggleActive);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);

export default router;
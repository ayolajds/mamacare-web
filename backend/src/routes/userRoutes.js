import { Router } from 'express';
import { listUsers, setRole, toggleActive } from '../controllers/userController.js';
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js';

const router = Router();

// Todo este módulo es solo para admin
router.use(auth, requireRoles('admin'));

router.get('/', listUsers);
router.patch('/:id/role', setRole);
router.patch('/:id/toggle', toggleActive);

export default router;

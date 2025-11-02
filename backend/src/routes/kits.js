import express from 'express';
import { getKits, createOrden, getMisKits } from '../controllers/kitController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getKits);
router.post('/orden', auth, createOrden);
router.get('/mis-kits', auth, getMisKits); // ✅ NUEVA RUTA

export default router;
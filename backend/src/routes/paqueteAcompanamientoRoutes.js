import express from 'express';
import { 
  getPaquetesAcompanamiento, 
  createOrdenPaquete, 
  getMisPaquetes 
} from '../controllers/paqueteAcompanamientoController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getPaquetesAcompanamiento);
router.post('/orden', auth, createOrdenPaquete);
router.get('/mis-paquetes', auth, getMisPaquetes);

export default router;
// En: routes/planRoutes.js
import express from 'express';
import { auth } from '../middlewares/auth.js';
import { 
  getPlanes, 
  comprarPlan, 
  getMisPlanes, 
  consumirSesion,
  createOrdenPlan // ⬅️ IMPORTAR NUEVA FUNCIÓN
} from '../controllers/planController.js';

const router = express.Router();

// ✅ RUTA PÚBLICA: Obtener planes disponibles
router.get('/', getPlanes);

// ✅ RUTAS PROTEGIDAS
router.use(auth);

// ✅ COMPRAR/ACTIVAR PLAN (DIRECTO - sin PSE) - EXISTENTE
router.post('/comprar', comprarPlan);

// ✅ NUEVA RUTA: CREAR ORDEN DE PLAN CON PSE
router.post('/orden', createOrdenPlan); // ⬅️ NUEVA RUTA

// ✅ OBTENER PLANES DEL USUARIO
router.get('/mis-planes', getMisPlanes);

// ✅ CONSUMIR SESIÓN (para uso interno del sistema)
router.post('/consumir-sesion', consumirSesion);

export default router;
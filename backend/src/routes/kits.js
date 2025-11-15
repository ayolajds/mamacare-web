// En routes/kits.js
import express from 'express';
import { 
  getKits, 
  createOrden, 
  getMisKits, 
  getUbicaciones, 
  agendarRecogida,
  verificarCodigo,
  marcarEntregado,
  getEstadisticasEntrega,
  getHistorialEntregas // 🔥 Agregar esta importación
} from '../controllers/kitController.js';
import { auth } from '../middlewares/auth.js';
import { requireRoles } from '../middlewares/authorize.js'; // 🔥 Usar requireRoles

const router = express.Router();

// Rutas públicas
router.get('/', getKits);

// Rutas para pacientes
router.post('/orden', auth, createOrden);
router.get('/mis-kits', auth, getMisKits);
router.get('/ubicaciones', auth, getUbicaciones);
router.post('/agendar-recogida', auth, agendarRecogida);

// 🔥 RUTAS PARA VOLUNTARIOS - USANDO requireRoles
router.post('/verificar-codigo', auth, requireRoles('voluntario', 'admin'), verificarCodigo);
router.post('/marcar-entregado', auth, requireRoles('voluntario', 'admin'), marcarEntregado);
router.get('/estadisticas-entrega', auth, requireRoles('voluntario', 'admin'), getEstadisticasEntrega);
router.get('/historial-entregas', auth, requireRoles('voluntario', 'admin'), getHistorialEntregas); // 🔥 CORREGIDO

export default router;
import express from 'express';
import { auth } from '../middlewares/auth.js';
import { adminAuth } from '../middlewares/adminAuth.js';
import {
  // Públicos
  obtenerTestimonios,
  
  // Usuarios autenticados
  crearTestimonio,
  verificarPermisos,
  upload,
  
  // Admin
  obtenerTodosTestimonios,
  obtenerTestimonio,
  aprobarTestimonio,
  rechazarTestimonio,
  eliminarTestimonio
} from '../controllers/testimonioController.js';

const router = express.Router();

// ====== RUTAS PÚBLICAS ======
router.get('/', obtenerTestimonios); // Solo testimonios aprobados

// ====== RUTAS PARA USUARIOS AUTENTICADOS ======
router.post('/', auth, upload.single('imagen'), crearTestimonio);
router.get('/verificar-permisos', auth, verificarPermisos);

// ====== RUTAS PARA ADMIN ======
router.get('/admin/todos', auth, adminAuth, obtenerTodosTestimonios);
router.get('/admin/:id', auth, adminAuth, obtenerTestimonio);
router.patch('/admin/:id/aprobar', auth, adminAuth, aprobarTestimonio);
router.patch('/admin/:id/rechazar', auth, adminAuth, rechazarTestimonio);
router.delete('/admin/:id', auth, adminAuth, eliminarTestimonio);

export default router;
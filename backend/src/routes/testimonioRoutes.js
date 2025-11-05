import express from 'express';
import { auth } from '../middlewares/auth.js';
import {
  obtenerTestimonios,
  crearTestimonio,
  verificarPermisos,
  upload
} from '../controllers/testimonioController.js';

const router = express.Router();

// Obtener testimonios aprobados
router.get('/', obtenerTestimonios);

// Crear testimonio (auth -> subir imagen -> controlador)
router.post('/', auth, upload.single('imagen'), crearTestimonio);

// Verificar si el usuario puede dar testimonio
router.get('/verificar-permisos', auth, verificarPermisos);

export default router;

import express from 'express';
import { 
  register, 
  login, 
  me,
  forgotPassword,
  resetPassword,
  verifyResetToken 
} from '../controllers/authController.js';

const router = express.Router();

// Rutas existentes
router.post('/register', register);
router.post('/login', login);
router.get('/me', me);

// Nuevas rutas para forgot password
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.get('/verify-reset-token/:token', verifyResetToken);

export default router;
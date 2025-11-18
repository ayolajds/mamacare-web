import { User } from '../models/User.js';
import Logger from '../utils/logger.js';

export async function adminAuth(req, res, next) {
  try {
    // Tu middleware auth ya puso req.user
    if (!req.user?.id) {
      Logger.auth('AdminAuth: No hay usuario en request');
      return res.status(401).json({ message: 'No autenticado' });
    }

    // Verificar si es admin
    if (req.user.role !== 'admin') {
      Logger.auth('AdminAuth: Acceso denegado - No es admin', { 
        userId: req.user.id, 
        role: req.user.role 
      });
      return res.status(403).json({ 
        message: 'Acceso denegado. Se requiere rol de administrador' 
      });
    }

    Logger.auth('AdminAuth: Acceso permitido', { 
      userId: req.user.id, 
      email: req.user.email 
    });
    
    next();
  } catch (error) {
    Logger.error('Error en middleware adminAuth', error);
    return res.status(500).json({ message: 'Error de autenticación' });
  }
}
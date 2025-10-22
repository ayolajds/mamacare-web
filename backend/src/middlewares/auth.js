import { verifyToken } from '../utils/jwt.js';
import { User } from '../models/User.js';
import Logger from '../utils/logger.js';

export async function auth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    
    if (!token) {
      Logger.auth('Token no proporcionado');
      return res.status(401).json({ message: 'Token requerido' });
    }

    const decoded = verifyToken(token);
    
    if (!decoded?.sub) {
      Logger.auth('Token inválido - sin sub');
      return res.status(401).json({ message: 'Token inválido' });
    }

    const user = await User.findById(decoded.sub).lean();
    
    if (!user) {
      Logger.auth('Usuario no encontrado en BD', { sub: decoded.sub });
      return res.status(401).json({ message: 'Usuario no válido' });
    }

    if (!user.isActive) {
      Logger.auth('Usuario inactivo', { email: user.email });
      return res.status(401).json({ message: 'Usuario no válido' });
    }

    req.user = {
      sub: String(user._id),
      id: String(user._id),
      role: user.role || 'paciente',
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      birthDate: user.birthDate,
      createdAt: user.createdAt 
    };

    Logger.auth('Autenticación exitosa', req.user);
    next();
  } catch (error) {
    Logger.error('Error en middleware auth', error);
    return res.status(401).json({ message: 'Token inválido' });
  }
}
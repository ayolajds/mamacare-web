import { verifyToken } from '../utils/jwt.js';
import { User } from '../models/User.js'; // OJO mayúscula

export async function auth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ message: 'No token' });

    const decoded = verifyToken(token); // { sub, role }
    if (!decoded?.sub) return res.status(401).json({ message: 'Token inválido' });

    const user = await User.findById(decoded.sub).lean();
    if (!user || !user.isActive) return res.status(401).json({ message: 'Usuario no válido' });

    // Expone sub (y id por comodidad)
    req.user = {
      sub: String(user._id),
      id:  String(user._id),
      role: user.role,
      email: user.email,
      name: user.name,
      lastName: user.lastName,      // ← Agregar esto
      phone: user.phone,            // ← Agregar esto
      birthDate: user.birthDate,    // ← Agregar esto
      createdAt: user.createdAt 
    };

    next();
  } catch {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

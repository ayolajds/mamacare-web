import { verifyToken } from '../utils/jwt.js';
import { User } from '../models/user.js';

export async function auth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ message: 'No token' });

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.sub).lean();
    if (!user || !user.isActive) return res.status(401).json({ message: 'Usuario no válido' });

    req.user = { id: user._id.toString(), role: user.role, email: user.email, name: user.name };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

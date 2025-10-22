import { User } from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';

// Mapeo consistente para la respuesta de usuario
function mapUser(u) {
  return {
    id: String(u._id),
    name: u.name,
    lastName: u.lastName,
    email: u.email,
    role: u.role ?? 'paciente',
    phone: u.phone ?? '',
    birthDate: u.birthDate ? new Date(u.birthDate).toISOString().slice(0, 10) : ''
  };
}

export async function register(req, res) {
  try {
    const {
      name,            // ← inglés (nuevo desde frontend)
      lastName,        // ← inglés (nuevo desde frontend)  
      email,
      password,
      phone,           // ← inglés (nuevo desde frontend)
      birthDate        // ← inglés (nuevo desde frontend)
    } = req.body;

    // Mantener compatibilidad con español por si acaso
    const displayName = (name || req.body.nombre || '').trim();
    const emailNorm = (email || '').trim().toLowerCase();
    const phoneNorm = (phone || req.body.telefono || '').trim();
    const lastNameNorm = (lastName || req.body.apellido || '').trim();
    const birthDateNorm = birthDate || req.body.fechaNacimiento;

    if (!displayName || !lastNameNorm || !emailNorm || !password || !phoneNorm || !birthDateNorm) {
      return res.status(400).json({
        message: 'Todos los campos son obligatorios: nombre, apellido, email, password, telefono y fechaNacimiento.'
      });
    }

    const exists = await User.findOne({ email: emailNorm }).lean();
    if (exists) return res.status(409).json({ message: 'Email ya registrado' });

    const passwordHash = await hashPassword(password);

    const user = await User.create({
      name: displayName,
      lastName: lastNameNorm,
      email: emailNorm,
      passwordHash,
      role: 'paciente',
      phone: phoneNorm,
      birthDate: new Date(birthDateNorm),
      isActive: true
    });

    const token = signToken({ sub: String(user._id), role: user.role });

    return res.status(201).json({
      token,
      user: mapUser(user) // ← Esto devuelve TODOS los campos
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error al registrar', detail: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, isActive: true });
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

    const ok = await comparePassword(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Credenciales inválidas' });

    const token = signToken({ sub: user._id.toString(), role: user.role });
    
    return res.json({
      token,
      user: mapUser(user) // ← Usar mapUser para consistencia
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
}

export async function me(req, res) {
  try {
    // Soporta middlewares que pongan sub o id
    const userId = req.user?.sub || req.user?.id;
    if (!userId) return res.status(401).json({ message: 'No autorizado' });

    const user = await User.findById(userId).lean();
    if (!user) return res.status(404).json({ message: 'No encontrado' });

    res.set('Cache-Control', 'no-store');
    return res.json({ user: mapUser(user) });
  } catch (e) {
    return res.status(500).json({ message: 'Error en /me', detail: e.message });
  }
}
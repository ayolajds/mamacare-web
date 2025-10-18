import { User } from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';

export async function register(req, res) {
  try {
    const {
      name,                 // por si algún cliente manda name
      nombre,               // tu frontend
      apellido,             // tu frontend
      email,
      password,
      fechaNacimiento,      // tu frontend (string ISO: "YYYY-MM-DD")
      telefono              // tu frontend
    } = req.body;

    const displayName = name || nombre;

    // 🔒 Validación obligatoria de campos
    if (
      !displayName ||
      !apellido ||
      !email ||
      !password ||
      !telefono ||
      !fechaNacimiento
    ) {
      return res.status(400).json({
        message:
          'Todos los campos son obligatorios: nombre, apellido, email, password, telefono y fechaNacimiento.'
      });
    }

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(409).json({ message: 'Email ya registrado' });

    const passwordHash = await hashPassword(password);

    const user = await User.create({
      name: displayName.trim(),
      lastName: apellido.trim(),
      email,
      passwordHash,
      role: 'paciente', // 🔸 Rol por defecto
      phone: telefono.trim(),
      birthDate: new Date(fechaNacimiento)
    });

    const token = signToken({ sub: user._id.toString(), role: user.role });
    return res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        birthDate: user.birthDate
      }
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error al registrar', detail: err.message });
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
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error al iniciar sesión' });
  }
}

export async function me(req, res) {
  // req.user viene del middleware auth
  return res.json({ user: req.user });
}

import { User, USER_ROLES } from '../models/User.js';

export async function listUsers(req, res) {
  const { q = '' } = req.query;
  const filter = q
    ? { $or: [{ name: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }] }
    : {};
  const users = await User.find(filter).select('name email role isActive createdAt').sort({ createdAt: -1 });
  res.json(users);
}

export async function setRole(req, res) {
  const { id } = req.params;
  const { role } = req.body;
  if (!USER_ROLES.includes(role)) return res.status(400).json({ message: 'Rol inválido' });

  const user = await User.findByIdAndUpdate(id, { role }, { new: true }).select('name email role isActive');
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
}

export async function toggleActive(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  user.isActive = !user.isActive;
  await user.save();
  res.json({ id: user._id, isActive: user.isActive });
}

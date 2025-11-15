import { User, USER_ROLES } from '../models/User.js';
import bcrypt from 'bcryptjs';
import Logger from '../utils/logger.js';

// 👇 Asegúrate de que todas estas funciones estén exportadas
export async function listUsers(req, res) {
  try {
    const { q = '' } = req.query;
    const filter = q
      ? { $or: [{ name: new RegExp(q, 'i') }, { email: new RegExp(q, 'i') }] }
      : {};
    
    Logger.info('Listando usuarios', { query: q });
    
    const users = await User.find(filter)
      .select('name email role isActive createdAt')
      .sort({ createdAt: -1 });
    
    Logger.success('Usuarios listados exitosamente', { count: users.length });
    res.json(users);
  } catch (err) {
    Logger.error('Error al listar usuarios', err);
    res.status(500).json({ message: 'Error al listar usuarios' });
  }
}

export async function setRole(req, res) {
  try {
    const { id } = req.params;
    const { role } = req.body;
    
    Logger.info('Cambiando rol de usuario', { userId: id, newRole: role });
    
    if (!USER_ROLES.includes(role)) {
      Logger.warn('Rol inválido', { role, validRoles: USER_ROLES });
      return res.status(400).json({ message: 'Rol inválido' });
    }

    const user = await User.findByIdAndUpdate(
      id, 
      { role }, 
      { new: true }
    ).select('name email role isActive');
    
    if (!user) {
      Logger.warn('Usuario no encontrado para cambiar rol', { userId: id });
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    Logger.success('Rol actualizado exitosamente', {
      userId: id,
      newRole: role,
      email: user.email
    });
    
    res.json(user);
  } catch (err) {
    Logger.error('Error al cambiar rol', err);
    res.status(500).json({ message: 'Error al cambiar rol' });
  }
}

export async function toggleActive(req, res) {
  try {
    const { id } = req.params;
    
    Logger.info('Cambiando estado de usuario', { userId: id });
    
    const user = await User.findById(id);
    if (!user) {
      Logger.warn('Usuario no encontrado para cambiar estado', { userId: id });
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    user.isActive = !user.isActive;
    await user.save();
    
    Logger.success('Estado de usuario actualizado', {
      userId: id,
      newStatus: user.isActive,
      email: user.email
    });
    
    res.json({ id: user._id, isActive: user.isActive });
  } catch (err) {
    Logger.error('Error al cambiar estado de usuario', err);
    res.status(500).json({ message: 'Error al cambiar estado' });
  }
}

// Actualizar datos del usuario
export async function updateProfile(req, res) {
  try {
    const { name, lastName, phone } = req.body;
    const userId = req.user.id;

    Logger.info('Actualizando perfil de usuario', { 
      userId, 
      updates: { name, lastName, phone } 
    });

    const updated = await User.findByIdAndUpdate(
      userId,
      { name, lastName, phone, updatedAt: new Date() },
      { new: true }
    ).select('-passwordHash');

    if (!updated) {
      Logger.error('Usuario no encontrado para actualizar', { userId });
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    Logger.success('Perfil actualizado exitosamente', {
      userId: updated._id,
      name: updated.name,
      email: updated.email
    });

    res.json({ success: true, user: updated });
  } catch (err) {
    Logger.error('Error al actualizar el perfil', err);
    res.status(500).json({ success: false, message: 'Error al actualizar el perfil' });
  }
}

// Cambiar contraseña
export async function changePassword(req, res) {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    Logger.info('Solicitud de cambio de contraseña', { userId });

    const user = await User.findById(userId);
    if (!user) {
      Logger.error('Usuario no encontrado para cambio de contraseña', { userId });
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      Logger.warn('Contraseña actual incorrecta', { userId, email: user.email });
      return res.status(400).json({ message: 'Contraseña actual incorrecta' });
    }

    const newHash = await bcrypt.hash(newPassword, 12);
    user.passwordHash = newHash;
    user.updatedAt = new Date();
    await user.save();

    Logger.success('Contraseña actualizada correctamente', { userId, email: user.email });

    res.json({ success: true, message: 'Contraseña actualizada correctamente' });
  } catch (err) {
    Logger.error('Error al cambiar la contraseña', err);
    res.status(500).json({ success: false, message: 'Error al cambiar la contraseña' });
  }
}

// 🆕 NUEVAS FUNCIONES PARA OBTENER USUARIOS POR ROL

// Obtener usuarios por rol
export async function getUsersByRole(req, res) {
  try {
    const { role } = req.params;
    
    Logger.info('Obteniendo usuarios por rol', { role });

    // Validar y mapear roles
    const roleMap = {
      'patient': ['patient', 'paciente'],
      'professional': ['professional', 'profesional', 'doctor'],
      'admin': ['admin']
    };

    const validRoles = roleMap[role];
    if (!validRoles) {
      Logger.warn('Rol no válido solicitado', { role });
      return res.status(400).json({ 
        success: false, 
        message: 'Rol no válido. Use: patient, professional o admin' 
      });
    }

    const users = await User.find({ 
      role: { $in: validRoles } 
    }).select('name lastName email role phone isActive createdAt')
      .sort({ name: 1 });

    Logger.success('Usuarios obtenidos por rol', { 
      role, 
      count: users.length 
    });

    res.json({
      success: true,
      data: users,
      count: users.length
    });

  } catch (err) {
    Logger.error('Error al obtener usuarios por rol', err);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener usuarios' 
    });
  }
}

// Obtener solo pacientes
export async function getPatients(req, res) {
  try {
    Logger.info('Obteniendo lista de pacientes');

    const patients = await User.find({ 
      role: { $in: ['patient', 'paciente'] } 
    }).select('name lastName email role phone isActive createdAt')
      .sort({ name: 1 });

    Logger.success('Pacientes obtenidos exitosamente', { 
      count: patients.length 
    });

    res.json({
      success: true,
      data: patients,
      count: patients.length
    });

  } catch (err) {
    Logger.error('Error al obtener pacientes', err);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener pacientes' 
    });
  }
}

// Obtener solo profesionales
export const getProfessionals = async (req, res) => {
  try {
    const professionals = await User.find({ role: 'profesional' })
      .select('name lastName email specialty isActive'); // ✅ INCLUIR SPECIALTY
    
    console.log('👨‍⚕️ Profesionales encontrados:', professionals); // Para debug
    
    res.json({
      success: true,
      data: professionals, // ✅ AHORA INCLUYE SPECIALTY
      count: professionals.length
    });
  } catch (error) {
    console.error('Error obteniendo profesionales:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener profesionales'
    });
  }
};

// 🔐 Obtener información del usuario autenticado
export async function getCurrentUser(req, res) {
  try {
    const userId = req.user.id;

    Logger.info('Obteniendo información del usuario actual', { userId });

    const user = await User.findById(userId)
      .select('-passwordHash')
      .populate('paquetesAcompanamientoComprados.paqueteId'); // Si tienes esta relación

    if (!user) {
      Logger.warn('Usuario no encontrado', { userId });
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    Logger.success('Información del usuario obtenida exitosamente', {
      userId: user._id,
      email: user.email,
      role: user.role
    });

    res.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        isActive: user.isActive,
        paquetesAcompanamientoComprados: user.paquetesAcompanamientoComprados || [],
        createdAt: user.createdAt
      }
    });

  } catch (err) {
    Logger.error('Error al obtener información del usuario', err);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener información del usuario' 
    });
  }
}
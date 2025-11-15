import { User, USER_ROLES } from '../models/User.js';
import Logger from '../utils/logger.js';

// 📊 Dashboard Stats
export const getDashboardStats = async (req, res) => {
  try {
    Logger.info('Admin solicitando estadísticas del dashboard', { admin: req.user.email });

    const [
      totalUsers,
      activeUsers,
      professionalsCount,
      patientsCount,
      volunteersCount,
      newUsersThisMonth
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ isActive: true }),
      User.countDocuments({ role: 'profesional', isActive: true }),
      User.countDocuments({ role: 'paciente', isActive: true }),
      User.countDocuments({ role: 'voluntario', isActive: true }),
      User.countDocuments({
        createdAt: { 
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) 
        }
      })
    ]);

    const stats = {
      totalUsers,
      activeUsers,
      inactiveUsers: totalUsers - activeUsers,
      professionalsCount,
      patientsCount,
      volunteersCount,
      newUsersThisMonth,
      userDistribution: {
        pacientes: patientsCount,
        profesionales: professionalsCount,
        voluntarios: volunteersCount
      }
    };

    Logger.success('Estadísticas del dashboard entregadas', { 
      admin: req.user.email, 
      stats 
    });
    
    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    Logger.error('Error obteniendo estadísticas del dashboard', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener estadísticas'
    });
  }
};

// 👥 Listar usuarios (CON PAGINACIÓN - mejorada)
export const listUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', role = '', status = '' } = req.query;
    const skip = (page - 1) * limit;

    Logger.info('Admin listando usuarios', { 
      admin: req.user.email, 
      page, 
      limit, 
      search,
      role,
      status
    });

    // Construir filtro
    const filter = {};
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (role) {
      filter.role = role;
    }

    // ✅ FILTRO POR ESTADO AGREGADO
    if (status === 'active') {
      filter.isActive = true;
    } else if (status === 'inactive') {
      filter.isActive = false;
    }

    const [users, total] = await Promise.all([
      User.find(filter)
        .select('-passwordHash')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      
      User.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(total / limit);

    Logger.success('Lista de usuarios entregada', {
      admin: req.user.email,
      totalUsers: total,
      page,
      totalPages
    });

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalUsers: total,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      }
    });

  } catch (error) {
    Logger.error('Error listando usuarios', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios'
    });
  }
};

// 🔄 Activar/Desactivar usuario (MEJORADA)
export const toggleActive = async (req, res) => {
  try {
    const { id } = req.params;
    
    Logger.info('Admin cambiando estado de usuario', { 
      admin: req.user.email, 
      targetUserId: id 
    });

    const user = await User.findById(id);
    
    if (!user) {
      Logger.warn('Usuario no encontrado para cambiar estado', { userId: id });
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    // No permitir desactivarse a sí mismo
    if (String(user._id) === req.user.id) {
      Logger.warn('Intento de desactivar propia cuenta', { 
        admin: req.user.email 
      });
      return res.status(400).json({
        success: false,
        message: 'No puedes desactivar tu propia cuenta'
      });
    }

    user.isActive = !user.isActive;
    await user.save();

    Logger.success(`Usuario ${user.isActive ? 'activado' : 'desactivado'}`, {
      admin: req.user.email,
      targetUser: user.email,
      newStatus: user.isActive
    });

    res.json({
      success: true,
      message: `Usuario ${user.isActive ? 'activado' : 'desactivado'} correctamente`,
      data: {
        id: user._id,
        isActive: user.isActive,
        email: user.email
      }
    });

  } catch (error) {
    Logger.error('Error activando/desactivando usuario', error);
    res.status(500).json({
      success: false,
      message: 'Error al cambiar estado del usuario'
    });
  }
};

// 🎭 Cambiar rol de usuario (MEJORADA)
export const setRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    Logger.info('Admin cambiando rol de usuario', { 
      admin: req.user.email, 
      targetUserId: id,
      newRole: role
    });

    if (!USER_ROLES.includes(role)) {
      Logger.warn('Rol inválido', { role, validRoles: USER_ROLES });
      return res.status(400).json({
        success: false,
        message: 'Rol no válido'
      });
    }

    const user = await User.findById(id);
    
    if (!user) {
      Logger.warn('Usuario no encontrado para cambiar rol', { userId: id });
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    // No permitir cambiar tu propio rol
    if (String(user._id) === req.user.id) {
      Logger.warn('Intento de cambiar propio rol', { 
        admin: req.user.email 
      });
      return res.status(400).json({
        success: false,
        message: 'No puedes cambiar tu propio rol'
      });
    }

    const oldRole = user.role;
    user.role = role;
    await user.save();

    Logger.success('Rol de usuario actualizado', {
      admin: req.user.email,
      targetUser: user.email,
      oldRole,
      newRole: role
    });

    res.json({
      success: true,
      message: `Rol actualizado a ${role} correctamente`,
      data: {
        id: user._id,
        role: user.role,
        email: user.email
      }
    });

  } catch (error) {
    Logger.error('Error cambiando rol de usuario', error);
    res.status(500).json({
      success: false,
      message: 'Error al cambiar rol del usuario'
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findById(id).select('-passwordHash');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      success: true,
      data: user
    });

  } catch (error) {
    Logger.error('Error obteniendo usuario', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuario'
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, role, specialty, isActive } = req.body; // ✅ specialty en inglés

    const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    // Actualizar campos
    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (role) user.role = role;
    if (specialty !== undefined) user.specialty = specialty; // ✅ EN INGLÉS
    if (isActive !== undefined) user.isActive = isActive;

    await user.save();

    Logger.success('Usuario actualizado', {
      admin: req.user.email,
      targetUser: user.email,
      updatedFields: Object.keys(req.body)
    });

    res.json({
      success: true,
      message: 'Usuario actualizado correctamente',
      data: user
    });

  } catch (error) {
    Logger.error('Error actualizando usuario', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar usuario'
    });
  }
};
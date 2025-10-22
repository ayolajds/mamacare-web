import { User } from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { resetPasswordTemplate, passwordUpdatedTemplate } from '../utils/emailTemplates.js';

// Configuración de email (usa Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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

// ✅ NUEVAS FUNCIONES PARA FORGOT PASSWORD
export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'El email es requerido'
      });
    }

    const user = await User.findOne({ 
      email: email.toLowerCase(), 
      isActive: true 
    });
    
    // ✅ VERSIÓN TEMPORAL - SIN EMAIL
    if (!user) {
      console.log('❌ Usuario no encontrado:', email);
      return res.json({
        message: 'Si el email existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña'
      });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000;
    await user.save();

    // ✅ SOLO LOG EN CONSOLA - NO ENVÍA EMAIL
    console.log('🎯 ===== FORGOT PASSWORD - MODO PRUEBAS =====');
    console.log(`📧 Usuario: ${user.email}`);
    console.log(`🔑 Token: ${resetToken}`);
    console.log(`🔗 Enlace para resetear: http://localhost:4200/reset-password/${resetToken}`);
    console.log('⏰ Expira:', new Date(user.resetPasswordExpires).toLocaleString());
    console.log('🎯 ===========================================');

    res.json({
      success: true,
      message: 'Si el email existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña',
      // ✅ Datos para pruebas (quitar en producción)
      resetToken: resetToken,
      resetURL: `http://localhost:4200/reset-password/${resetToken}`,
      userEmail: user.email
    });

  } catch (error) {
    console.error('Error en forgotPassword:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error del servidor' 
    });
  }
}

export async function verifyResetToken(req, res) {
  try {
    const { token } = req.params;

    const resetTokenHash = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken: resetTokenHash,
      resetPasswordExpires: { $gt: Date.now() },
      isActive: true
    });

    if (!user) {
      return res.status(400).json({
        message: 'El enlace de restablecimiento es inválido o ha expirado'
      });
    }

    res.json({
      message: 'Token válido',
      user: {
        email: user.email,
        name: user.name
      }
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Error del servidor' 
    });
  }
}

export async function resetPassword(req, res) {
  try {
    const { token } = req.params;
    const { password } = req.body;

    console.log('🔑 Token recibido:', token);
    console.log('🔐 Nueva contraseña recibida:', password ? '***' : 'NO PROVISTA');

    // Validaciones
    if (!password || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'La contraseña debe tener al menos 6 caracteres'
      });
    }

    // Hash del token para buscar en BD
    const resetTokenHash = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    console.log('🔍 Buscando usuario con token hash:', resetTokenHash);

    const user = await User.findOne({
      resetPasswordToken: resetTokenHash,
      resetPasswordExpires: { $gt: Date.now() },
      isActive: true
    });

    if (!user) {
      console.log('❌ Token inválido o expirado');
      return res.status(400).json({
        success: false,
        message: 'El enlace de restablecimiento es inválido o ha expirado'
      });
    }

    console.log('✅ Usuario válido encontrado:', user.email);

    // Actualizar contraseña
    user.passwordHash = await hashPassword(password);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    console.log('🎉 Contraseña actualizada exitosamente para:', user.email);

    // ✅ COMENTA TEMPORALMENTE EL EMAIL DE CONFIRMACIÓN
    console.log('📧 (Email de confirmación desactivado en modo pruebas)');
    // await sendMail({
    //   to: user.email,
    //   subject: 'Contraseña actualizada - MamaCare',
    //   html: `...`
    // });

    return res.json({
      success: true,
      message: 'Contraseña restablecida exitosamente'
    });

  } catch (error) {
    console.error('❌ Error en resetPassword:', error.message);
    return res.status(500).json({ 
      success: false,
      message: 'Error del servidor'
    });
  }
}
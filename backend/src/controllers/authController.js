import { User } from '../models/User.js';
import { hashPassword, comparePassword } from '../utils/password.js';
import { signToken } from '../utils/jwt.js';
import crypto from 'crypto';
import { sendMail } from '../utils/mailer.js'; // ✅ CORREGIDO: usa tu mailer.js

// Agrega esto después de los imports para debug
console.log('🔍 Debug: sendMail disponible?', typeof sendMail);
console.log('🔍 Debug: sendEmail disponible?', typeof sendEmail);

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
    
    // Por seguridad, siempre devolver éxito
    if (!user) {
      return res.json({
        message: 'Si el email existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña'
      });
    }

    // Generar token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    // Guardar en BD
    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000;
    await user.save();

    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // ✅ CORREGIDO: sendMail no sendEmail
    await sendMail({
      to: user.email,
      subject: 'Restablece tu contraseña - MamaCare',
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f7f9fc 0%, #ffffff 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #e15886 0%, #f7d3e1 100%); padding: 2rem; text-align: center;">
    <div style="background: white; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <span style="font-size: 24px; color: #e15886;">🔑</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 1.5rem; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">Restablecer Contraseña</h1>
  </div>
  
  <!-- Content -->
  <div style="padding: 2.5rem;">
    <div style="text-align: center; margin-bottom: 2rem;">
      <h2 style="color: #2a2a2a; margin: 0 0 1rem 0; font-size: 1.25rem;">Hola <strong>${user.name}</strong>,</h2>
      <p style="color: #666; line-height: 1.6; margin: 0;">
        Has solicitado restablecer tu contraseña. Haz clic en el botón para continuar.
      </p>
    </div>

    <!-- CTA Button -->
    <div style="text-align: center; margin: 2rem 0;">
      <a href="${resetURL}" style="background: linear-gradient(135deg, #e15886 0%, #d14a7a 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 12px; display: inline-block; font-weight: 700; font-size: 1rem; box-shadow: 0 4px 15px rgba(225, 88, 134, 0.3); transition: all 0.3s ease;">
        Restablecer Contraseña
      </a>
    </div>

    <!-- Security Info -->
    <div style="background: #f8f9fa; border-radius: 8px; padding: 1rem; text-align: center;">
      <p style="color: #6c757d; margin: 0; font-size: 0.85rem;">
        ⏰ Este enlace expirará en <strong>1 hora</strong><br>
        🔒 Por seguridad, no compartas este enlace con nadie
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background: #f8f9fa; padding: 1.5rem; text-align: center; border-top: 1px solid #e9ecef;">
    <p style="color: #6c757d; margin: 0 0 0.5rem 0; font-size: 0.8rem;">
      ¿No solicitaste este cambio? <a href="mailto:soporte@mamacare.com" style="color: #e15886; text-decoration: none;">Ignora este email</a>
    </p>
    <p style="color: #adb5bd; margin: 0; font-size: 0.75rem;">
      © 2024 MamaCare. Todos los derechos reservados.
    </p>
  </div>
</div>
      `
    });

    console.log('✅ Email de recuperación enviado a:', user.email);

    res.json({
      message: 'Si el email existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña'
    });

  } catch (error) {
    console.error('Error en forgotPassword:', error);
    res.status(500).json({ 
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

    // ✅ CORREGIDO: sendMail no sendEmail
    await sendMail({
      to: user.email,
      subject: 'Contraseña actualizada - MamaCare',
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f7f9fc 0%, #ffffff 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #2d7d32 0%, #4caf50 100%); padding: 2rem; text-align: center;">
    <div style="background: white; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      <span style="font-size: 24px; color: #2d7d32;">✓</span>
    </div>
    <h1 style="color: white; margin: 0; font-size: 1.5rem; font-weight: 700;">¡Contraseña Actualizada!</h1>
  </div>
  
  <!-- Content -->
  <div style="padding: 2.5rem;">
    <div style="text-align: center; margin-bottom: 2rem;">
      <h2 style="color: #2d7d32; margin: 0 0 1rem 0; font-size: 1.25rem;">Hola <strong style="color: #2a2a2a;">${user.name}</strong>,</h2>
      <p style="color: #666; line-height: 1.6; margin: 0;">
        Tu contraseña ha sido restablecida exitosamente.
      </p>
    </div>

    <!-- Info Box -->
    <div style="background: #f8fff9; border: 2px solid #e8f5e9; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="background: #2d7d32; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <span style="color: white; font-size: 18px;">🔒</span>
        </div>
        <div>
          <h3 style="color: #2a2a2a; margin: 0 0 0.25rem 0; font-size: 1rem;">Seguridad de tu cuenta</h3>
          <p style="color: #666; margin: 0; font-size: 0.9rem; line-height: 1.4;">
            Tu cuenta ahora está protegida con una nueva contraseña segura.
          </p>
        </div>
      </div>
    </div>

    <!-- Security Notice -->
    <div style="background: #fff3e0; border: 2px solid #ffecb3; border-radius: 8px; padding: 1rem; text-align: center;">
      <p style="color: #e65100; margin: 0; font-size: 0.85rem; font-weight: 600;">
        ⚠️ Si no realizaste esta acción, por favor contacta con soporte inmediatamente.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background: #f8f9fa; padding: 1.5rem; text-align: center; border-top: 1px solid #e9ecef;">
    <p style="color: #6c757d; margin: 0 0 0.5rem 0; font-size: 0.8rem;">
      ¿Necesitas ayuda? <a href="mailto:soporte@mamacare.com" style="color: #2d7d32; text-decoration: none;">Contáctanos</a>
    </p>
    <p style="color: #adb5bd; margin: 0; font-size: 0.75rem;">
      © 2024 MamaCare. Todos los derechos reservados.
    </p>
  </div>
</div>
      `
    });

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
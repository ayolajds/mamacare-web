import mongoose from 'mongoose';

const ROLES = ['admin', 'paciente', 'profesional', 'voluntario'];

const userSchema = new mongoose.Schema(
  {
    name:       { type: String, required: true, trim: true },
    lastName:   { type: String, required: true, trim: true },
    email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash:{ type: String, required: true },
    role:       { type: String, enum: ROLES, default: 'paciente', index: true },
    phone:      { type: String, required: true, trim: true },
    birthDate:  { type: Date, required: true },
    isActive:   { type: Boolean, default: true },
    
    // ✅ CAMPOS NUEVOS PARA FORGOT PASSWORD
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isVerified: { type: Boolean, default: false },
    
    // ✅ NUEVO CAMPO: ÚLTIMO ACCESO
    lastLogin: { 
      type: Date, 
      default: null,
      required: false
    }
  },
  { timestamps: true }
);

// 🧩 Prevención del OverwriteModelError
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const USER_ROLES = ROLES;
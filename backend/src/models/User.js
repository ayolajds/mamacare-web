// En models/User.js - AGREGAR ESTE CAMPO al schema
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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
    },

    // ✅ NUEVO: KITS COMPRADOS POR EL USUARIO
    kitsComprados: [
      {
        kitId: { 
          type: Number,  // 1, 2, 3 (del frontend)
          required: true 
        },
        kitNombre: { 
          type: String, 
          required: true 
        },
        fechaCompra: { 
          type: Date, 
          default: Date.now 
        },
        sesionesUsadas: { 
          type: Number, 
          default: 0 
        },
        estado: { 
          type: String, 
          enum: ['activo', 'usado', 'expirado'],
          default: 'activo' 
        }
      }
    ],

    // ✅ NUEVO: PAQUETES DE ACOMPAÑAMIENTO COMPRADOS (AGREGAR ESTO)
    paquetesAcompanamientoComprados: [
      {
        paqueteId: { 
          type: Number,  // 1, 2, 3 (del frontend)
          required: true 
        },
        paqueteNombre: { 
          type: String, 
          required: true 
        },
        fechaCompra: { 
          type: Date, 
          default: Date.now 
        },
        sesionesUsadas: { 
          type: Number, 
          default: 0 
        },
        sesionesTotales: { 
          type: Number, 
          required: true 
        },
        estado: { 
          type: String, 
          enum: ['activo', 'usado', 'expirado'],
          default: 'activo' 
        },
        fechaExpiracion: { 
          type: Date, 
          required: true 
        }
      }
    ]
  },
  { timestamps: true }
);

// ✅ AGREGAR PLUGIN DE PAGINACIÓN
userSchema.plugin(mongoosePaginate);

// 🧩 Prevención del OverwriteModelError
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const USER_ROLES = ROLES;
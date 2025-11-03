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
        // ✅ PARA FUTURAS FUNCIONALIDADES
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

    // ✅ NUEVO: PLANES DE ACOMPAÑAMIENTO ACTIVOS
    planesActivos: [
      {
        nombre: { 
          type: String, 
          enum: ['Esencial', 'Integral', 'Premium'], 
          required: true 
        },
        sesionesTotales: { 
          type: Number, 
          required: true 
        },
        sesionesUsadas: { 
          type: Number, 
          default: 0 
        },
        estado: { 
          type: String, 
          enum: ['activo', 'vencido', 'pausado', 'completado'],
          default: 'activo' 
        },
        fechaCompra: { 
          type: Date, 
          default: Date.now 
        },
        vencimiento: { 
          type: Date 
        },
        modalidades: [{ 
          type: String, 
          enum: ['individual', 'grupal', 'talleres'] 
        }],
        // ✅ INFORMACIÓN ADICIONAL PARA SEGUIMIENTO
        terapeutaAsignado: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'User' 
        },
        progreso: {
          tipo: String,
          descripcion: String,
          ultimaSesion: Date,
          siguienteSesion: Date
        }
      }
    ],

    // ✅ NUEVO: HISTORIAL DE CITAS/TERAPIAS
    historialCitas: [
      {
        citaId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Appointment'
        },
        fecha: Date,
        tipo: {
          type: String,
          enum: ['individual', 'grupal', 'taller', 'evaluacion']
        },
        duracion: Number, // en minutos
        profesional: {
          id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          nombre: String
        },
        estado: {
          type: String,
          enum: ['completada', 'cancelada', 'reprogramada']
        },
        notas: String
      }
    ],

    // ✅ NUEVO: PREFERENCIAS DE TERAPIA
    preferenciasTerapia: {
      modalidadPreferida: {
        type: String,
        enum: ['presencial', 'virtual', 'mixta'],
        default: 'presencial'
      },
      disponibilidad: {
        dias: [{ type: String }], // ['lunes', 'martes', ...]
        horarios: [{ type: String }] // ['mañana', 'tarde', 'noche']
      },
      temasInteres: [{ type: String }], // ['ansiedad', 'autoimagen', 'familia', ...]
      restricciones: {
        movilidad: { type: Boolean, default: false },
        audicion: { type: Boolean, default: false },
        vision: { type: Boolean, default: false }
      }
    }
  },
  { timestamps: true }
);

// ✅ MÉTODOS DE INSTANCIA PARA PLANES
userSchema.methods.tienePlanActivo = function() {
  return this.planesActivos.some(plan => 
    plan.estado === 'activo' && 
    plan.sesionesUsadas < plan.sesionesTotales &&
    (!plan.vencimiento || plan.vencimiento > new Date())
  );
};

userSchema.methods.sesionesDisponibles = function() {
  const planActivo = this.planesActivos.find(plan => 
    plan.estado === 'activo' && 
    plan.sesionesUsadas < plan.sesionesTotales &&
    (!plan.vencimiento || plan.vencimiento > new Date())
  );
  
  return planActivo ? planActivo.sesionesTotales - planActivo.sesionesUsadas : 0;
};

userSchema.methods.consumirSesion = function() {
  const planActivo = this.planesActivos.find(plan => 
    plan.estado === 'activo' && 
    plan.sesionesUsadas < plan.sesionesTotales &&
    (!plan.vencimiento || plan.vencimiento > new Date())
  );
  
  if (planActivo) {
    planActivo.sesionesUsadas += 1;
    
    // Si se acabaron las sesiones, marcar como completado
    if (planActivo.sesionesUsadas >= planActivo.sesionesTotales) {
      planActivo.estado = 'completado';
    }
    
    return true;
  }
  return false;
};

// ✅ MIDDLEWARE PARA ACTUALIZAR ESTADOS AUTOMÁTICAMENTE
userSchema.pre('save', function(next) {
  // Actualizar estados de planes vencidos
  const ahora = new Date();
  this.planesActivos.forEach(plan => {
    if (plan.estado === 'activo' && plan.vencimiento && plan.vencimiento < ahora) {
      plan.estado = 'vencido';
    }
  });
  
  next();
});

// ✅ AGREGAR PLUGIN DE PAGINACIÓN
userSchema.plugin(mongoosePaginate);

// 🧩 Prevención del OverwriteModelError
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const USER_ROLES = ROLES;
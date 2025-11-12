import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// ✅ CONSTANTES SIMPLIFICADAS
export const APPOINTMENT_STATUS = [
  'pendiente',      // Solicitud del paciente
  'scheduled',      // Admin asignó profesional
  'confirmed',      // ✅ CORREGIDO: Admin aprobó y cita confirmada
  'completed',      // Cita completada
  'cancelled',      // Cita cancelada
  'rechazada'       // Admin rechazó solicitud
];

export const HORARIO_PREFERIDO = [
  'mañana',
  'tarde', 
  'indiferente'
];

// ✅ Configuración de duración por paquete
export const DURACION_POR_PAQUETE = {
  1: 50, // Básico: 4 sesiones de 50 min
  2: 60, // Intermedio: 8 sesiones de 60 min  
  3: 60  // Integral: 12 sesiones de 60 min
};

const appointmentSchema = new mongoose.Schema({
  // IDs de referencia
  professionalId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: false,
    index: true
  },
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
  },
  
  // Información del paquete
  paqueteId: {
    type: Number,
    required: false,
    min: 1,
    max: 3
  },
  
  // Información básica de la cita
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: { 
    type: Date, 
    required: false,
    index: true
  },
  duration: { 
    type: Number, 
    default: 60,
    min: 15,
    max: 240
  },
  status: { 
    type: String, 
    enum: APPOINTMENT_STATUS,
    default: 'pendiente',
    index: true
  },
  
  // ✅ INFORMACIÓN DE SOLICITUD ACTUALIZADA
  solicitud: {
    fechaSolicitud: {
      type: Date,
      default: Date.now
    },
    horarioPreferido: {
      type: String,
      enum: HORARIO_PREFERIDO,
      required: true
    },
    motivo: {
      type: String,
      required: true
    },
    sintomas: {
      type: [String],
      required: true
    },
    // ✅ MANTENER para compatibilidad y paquetes 2-3
    tipoPreferido: {
      type: String,
      enum: ['virtual', 'presencial', 'domicilio'],
      required: false // ← OPCIONAL porque Paquete 1 no elige
    }
  },
  
  ubicacion: {
    type: String,
    trim: true
  },
  
  // Campos de auditoría básicos
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  aprobadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  fechaAprobacion: Date,
  motivoRechazo: {
    type: String,
    trim: true
  },
  
  // Campos de finalización
  fechaCompletada: Date,
  sesionUtilizada: {
    type: Boolean,
    default: false
  },
  
  // Campos calculados
  endDate: {
    type: Date,
    required: false
  }
}, { 
  timestamps: true 
});

// Agregar paginación
appointmentSchema.plugin(mongoosePaginate);

// ✅ VIRTUALES ÚTILES
appointmentSchema.virtual('duracionAutomatica').get(function() {
  if (this.paqueteId && DURACION_POR_PAQUETE[this.paqueteId]) {
    return DURACION_POR_PAQUETE[this.paqueteId];
  }
  return this.duration || 60;
});

appointmentSchema.virtual('esSolicitudPendiente').get(function() {
  return this.status === 'pendiente';
});

appointmentSchema.virtual('estaConfirmada').get(function() {
  return this.status === 'scheduled' || this.status === 'confirmed';
});

appointmentSchema.virtual('nombrePaquete').get(function() {
  const nombres = {
    1: 'Básico (4 sesiones de 50 min)',
    2: 'Intermedio (8 sesiones de 60 min)', 
    3: 'Integral (12 sesiones de 60 min)'
  };
  return nombres[this.paqueteId] || 'Paquete no especificado';
});

// ✅ MIDDLEWARE SIMPLIFICADO
appointmentSchema.pre('save', function(next) {
  // Calcular endDate si hay fecha
  if (this.date && (this.duration || this.paqueteId)) {
    const duracion = this.paqueteId ? DURACION_POR_PAQUETE[this.paqueteId] : this.duration;
    this.endDate = new Date(this.date.getTime() + duracion * 60000);
  }
  
  // Auto-generar título si es paquete
  if (!this.title && this.paqueteId) {
    this.title = `Sesión de Acompañamiento - ${this.nombrePaquete}`;
  }
  
  next();
});

// ✅ MÉTODOS PRINCIPALES - CORREGIDO
appointmentSchema.methods.aprobarSolicitud = async function(profesionalId, fechaConfirmada, datosAdicionales = {}) {
  this.professionalId = profesionalId;
  this.date = fechaConfirmada;
  // ✅ CORREGIDO: Cambiado de 'scheduled' a 'confirmed'
  this.status = 'confirmed'; // ← ESTA ES LA LÍNEA CLAVE CORREGIDA
  this.aprobadoPor = datosAdicionales.aprobadoPor;
  this.fechaAprobacion = new Date();
  
  if (datosAdicionales.ubicacion) this.ubicacion = datosAdicionales.ubicacion;
  
  if (this.paqueteId && DURACION_POR_PAQUETE[this.paqueteId]) {
    this.duration = DURACION_POR_PAQUETE[this.paqueteId];
  }
  
  await this.save();
  return this;
};

appointmentSchema.methods.rechazarSolicitud = async function(motivo, usuarioId) {
  this.status = 'rechazada';
  this.motivoRechazo = motivo;
  this.aprobadoPor = usuarioId;
  this.fechaAprobacion = new Date();
  
  await this.save();
  return this;
};

// ✅ MÉTODOS ESTÁTICOS ÚTILES
appointmentSchema.statics.findSolicitudesPendientes = function(filters = {}) {
  return this.find({ 
    status: 'pendiente',
    ...filters 
  })
  .populate('patientId', 'name lastName email phone paquetesAcompanamientoComprados')
  .populate('professionalId', 'name lastName especialidad')
  .sort({ 'solicitud.fechaSolicitud': -1 });
};

appointmentSchema.statics.findByPaquete = function(paqueteId, filters = {}) {
  return this.find({
    paqueteId,
    ...filters
  })
  .populate('professionalId', 'name lastName especialidad')
  .populate('patientId', 'name lastName email phone')
  .sort({ date: -1 });
};

// ✅ ÍNDICES NECESARIOS
appointmentSchema.index({ professionalId: 1, date: 1 });
appointmentSchema.index({ patientId: 1, date: 1 });
appointmentSchema.index({ status: 1, date: 1 });
appointmentSchema.index({ date: 1, status: 1 });
appointmentSchema.index({ paqueteId: 1, status: 1 });
appointmentSchema.index({ 'solicitud.fechaSolicitud': -1 });

// Incluir virtuals en JSON
appointmentSchema.set('toJSON', { virtuals: true });
appointmentSchema.set('toObject', { virtuals: true });

export const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
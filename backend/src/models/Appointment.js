import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const APPOINTMENT_STATUS = [
  'pendiente',      // 🔥 AGREGADO: Nueva solicitud pendiente de aprobación
  'confirmed',      // Cita confirmada
  'in_progress',    // Consulta en progreso
  'completed',      // Cita completada
  'cancelled',      // Cita cancelada
  'no_show'         // Paciente no se presentó
];

export const HORARIO_PREFERIDO = [
  'mañana',
  'tarde', 
  'indiferente'
];

// ✅ Configuración de duración por paquete
export const DURACION_POR_PAQUETE = {
  1: 60, // Básico: 4 sesiones de 60 min
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
    tipoPreferido: {
      type: String,
      enum: ['virtual', 'presencial', 'domicilio'],
      required: false
    }
  },
  
  ubicacion: {
    type: String,
    trim: true
  },
  
  // ✅ CAMPOS CRÍTICOS AGREGADOS PARA ACCESO DIRECTO
  tipoCita: {
    type: String,
    enum: ['virtual', 'presencial', 'domicilio'],
    required: false,
    index: true
  },
  motivo: {
    type: String,
    required: false
  },
  sintomas: {
    type: [String],
    required: false
  },
  
  // ✅ DATOS DEL PACIENTE PARA FÁCIL ACCESO
  pacienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  pacienteName: {
    type: String,
    required: false,
    trim: true
  },
  pacienteEmail: {
    type: String,
    required: false,
    trim: true
  },
  
  // ✅ INFORMACIÓN DE ADMINISTRACIÓN
  notasAdmin: {
    type: String,
    required: false,
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
  return this.status === 'confirmed';
});

appointmentSchema.virtual('nombrePaquete').get(function() {
  const nombres = {
    1: 'Básico (4 sesiones de 50 min)',
    2: 'Intermedio (8 sesiones de 60 min)', 
    3: 'Integral (12 sesiones de 60 min)'
  };
  return nombres[this.paqueteId] || 'Paquete no especificado';
});

appointmentSchema.virtual('modalidadDisplay').get(function() {
  const tipo = this.tipoCita || this.solicitud?.tipoPreferido || 'presencial';
  switch(tipo) {
    case 'virtual': return 'Virtual';
    case 'presencial': return 'Presencial';
    case 'domicilio': return 'Domicilio';
    default: return 'Presencial';
  }
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
  
  // ✅ SINCRONIZAR DATOS: Si hay datos en solicitud, copiar a campos directos
  if (this.solicitud) {
    if (this.solicitud.tipoPreferido && !this.tipoCita) {
      this.tipoCita = this.solicitud.tipoPreferido;
    }
    if (this.solicitud.motivo && !this.motivo) {
      this.motivo = this.solicitud.motivo;
    }
    if (this.solicitud.sintomas && !this.sintomas) {
      this.sintomas = this.solicitud.sintomas;
    }
  }
  
  // ✅ SINCRONIZAR DATOS DEL PACIENTE
  if (this.patientId && !this.pacienteId) {
    this.pacienteId = this.patientId;
  }
  
  next();
});

// ✅ MÉTODOS PRINCIPALES - COMPLETAMENTE ACTUALIZADO
appointmentSchema.methods.aprobarSolicitud = async function(profesionalId, fechaConfirmada, datosAdicionales = {}) {
  this.professionalId = profesionalId;
  
  // ✅ CORRECCIÓN: Guardar como Date object para mantener la zona horaria
  this.date = fechaConfirmada;
  
  this.status = 'confirmed';
  this.aprobadoPor = datosAdicionales.aprobadoPor;
  this.fechaAprobacion = new Date();
  
  // ✅ AGREGAR TODOS LOS CAMPOS CRÍTICOS
  if (datosAdicionales.ubicacion) this.ubicacion = datosAdicionales.ubicacion;
  if (datosAdicionales.notasAdmin) this.notasAdmin = datosAdicionales.notasAdmin;
  
  // ✅ GUARDAR DATOS DE MODALIDAD Y PAQUETE (prioridad a datos adicionales)
  if (datosAdicionales.tipoCita) this.tipoCita = datosAdicionales.tipoCita;
  if (datosAdicionales.paqueteId) this.paqueteId = datosAdicionales.paqueteId;
  if (datosAdicionales.motivo) this.motivo = datosAdicionales.motivo;
  if (datosAdicionales.sintomas) this.sintomas = datosAdicionales.sintomas;
  
  // ✅ MANTENER DATOS DEL PACIENTE (para fácil acceso)
  if (datosAdicionales.pacienteId) this.pacienteId = datosAdicionales.pacienteId;
  if (datosAdicionales.pacienteName) this.pacienteName = datosAdicionales.pacienteName;
  if (datosAdicionales.pacienteEmail) this.pacienteEmail = datosAdicionales.pacienteEmail;
  
  // ✅ SINCRONIZAR: Si no hay datos adicionales, usar datos de solicitud
  if (!this.tipoCita && this.solicitud?.tipoPreferido) {
    this.tipoCita = this.solicitud.tipoPreferido;
  }
  if (!this.motivo && this.solicitud?.motivo) {
    this.motivo = this.solicitud.motivo;
  }
  if (!this.sintomas && this.solicitud?.sintomas) {
    this.sintomas = this.solicitud.sintomas;
  }
  
  // ✅ CALCULAR DURACIÓN SEGÚN PAQUETE
  if (this.paqueteId && DURACION_POR_PAQUETE[this.paqueteId]) {
    this.duration = DURACION_POR_PAQUETE[this.paqueteId];
  }
  
  // ✅ CALCULAR ENDDATE
  if (this.date && this.duration) {
    this.endDate = new Date(this.date.getTime() + this.duration * 60000);
  }
  
  // ✅ LOG PARA DEBUG
  console.log('💾 GUARDANDO CITA CON DATOS:', {
    tipoCita: this.tipoCita,
    paqueteId: this.paqueteId,
    motivo: this.motivo,
    pacienteName: this.pacienteName,
    duration: this.duration
  });
  
  await this.save();
  return this;
};

appointmentSchema.methods.rechazarSolicitud = async function(motivo, usuarioId) {
  this.status = 'cancelled';
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

// ✅ MÉTODO PARA OBTENER CITAS CON TODOS LOS DATOS
appointmentSchema.statics.findCitasCompletas = function(filters = {}) {
  return this.find(filters)
  .populate('professionalId', 'name lastName especialidad email phone')
  .populate('patientId', 'name lastName email phone')
  .populate('createdBy', 'name lastName')
  .populate('aprobadoPor', 'name lastName')
  .sort({ date: 1 });
};

// ✅ ÍNDICES NECESARIOS
appointmentSchema.index({ professionalId: 1, date: 1 });
appointmentSchema.index({ patientId: 1, date: 1 });
appointmentSchema.index({ status: 1, date: 1 });
appointmentSchema.index({ date: 1, status: 1 });
appointmentSchema.index({ paqueteId: 1, status: 1 });
appointmentSchema.index({ tipoCita: 1, status: 1 });
appointmentSchema.index({ 'solicitud.fechaSolicitud': -1 });
appointmentSchema.index({ pacienteId: 1 });
appointmentSchema.index({ pacienteEmail: 1 });

// Incluir virtuals en JSON
appointmentSchema.set('toJSON', { 
  virtuals: true,
  transform: function(doc, ret) {
    // ✅ ASEGURAR QUE LOS CAMPOS CRÍTICOS ESTÉN SIEMPRE DISPONIBLES
    if (!ret.tipoCita && ret.solicitud?.tipoPreferido) {
      ret.tipoCita = ret.solicitud.tipoPreferido;
    }
    if (!ret.motivo && ret.solicitud?.motivo) {
      ret.motivo = ret.solicitud.motivo;
    }
    if (!ret.sintomas && ret.solicitud?.sintomas) {
      ret.sintomas = ret.solicitud.sintomas;
    }
    if (!ret.pacienteId && ret.patientId) {
      ret.pacienteId = ret.patientId;
    }
    return ret;
  }
});

appointmentSchema.set('toObject', { 
  virtuals: true,
  transform: function(doc, ret) {
    // ✅ MISMA TRANSFORMACIÓN PARA toObject
    if (!ret.tipoCita && ret.solicitud?.tipoPreferido) {
      ret.tipoCita = ret.solicitud.tipoPreferido;
    }
    if (!ret.motivo && ret.solicitud?.motivo) {
      ret.motivo = ret.solicitud.motivo;
    }
    if (!ret.sintomas && ret.solicitud?.sintomas) {
      ret.sintomas = ret.solicitud.sintomas;
    }
    if (!ret.pacienteId && ret.patientId) {
      ret.pacienteId = ret.patientId;
    }
    return ret;
  }
});

export const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
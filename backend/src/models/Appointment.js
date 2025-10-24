import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Definir las constantes primero
export const APPOINTMENT_STATUS = ['scheduled', 'confirmed', 'in_progress', 'completed', 'cancelled', 'rescheduled', 'no_show'];
export const APPOINTMENT_TYPES = ['consultation', 'follow_up', 'emergency', 'routine_check', 'surgery', 'therapy', 'vaccination'];
export const MEETING_PLATFORMS = ['in_person', 'zoom', 'google_meet', 'teams', 'phone', 'other'];

const appointmentSchema = new mongoose.Schema({
  // IDs de referencia
  professionalId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
  },
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
  },
  
  // Información de la cita
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: { 
    type: Date, 
    required: true,
    index: true
  },
  duration: { 
    type: Number, 
    default: 60, // minutos
    min: 15,
    max: 240
  },
  status: { 
    type: String, 
    enum: APPOINTMENT_STATUS,
    default: 'scheduled',
    index: true
  },
  type: {
    type: String,
    enum: APPOINTMENT_TYPES,
    default: 'consultation'
  },
  
  // Información clínica
  reason: {
    type: String,
    trim: true
  },
  symptoms: {
    type: String,
    trim: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  
  // Información de la reunión
  meetingPlatform: {
    type: String,
    enum: MEETING_PLATFORMS,
    default: 'in_person'
  },
  meetingUrl: {
    type: String,
    trim: true
  },
  meetingId: {
    type: String,
    trim: true
  },
  meetingPassword: {
    type: String,
    trim: true
  },
  
  // Notas y documentación
  notes: {
    type: String,
    trim: true
  },
  professionalNotes: {
    type: String,
    trim: true
  },
  internalNotes: {
    type: String,
    trim: true
  },
  
  // Campos de auditoría
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cancelledBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  cancellationReason: {
    type: String,
    trim: true
  },
  
  // Recordatorios y notificaciones
  remindersSent: {
    type: [Date],
    default: []
  },
  lastReminderSent: Date,
  
  // Campos calculados
  endDate: {
    type: Date,
    required: true
  }
}, { 
  timestamps: true 
});

// Agregar paginación al schema ANTES de los métodos e índices
appointmentSchema.plugin(mongoosePaginate);

// Middleware para calcular endDate automáticamente
appointmentSchema.pre('save', function(next) {
  if (this.date && this.duration) {
    this.endDate = new Date(this.date.getTime() + this.duration * 60000);
  }
  next();
});

// Método de instancia para verificar conflictos
appointmentSchema.methods.hasTimeConflict = async function() {
  const conflict = await mongoose.model('Appointment').findOne({
    _id: { $ne: this._id },
    $or: [
      { professionalId: this.professionalId },
      { patientId: this.patientId }
    ],
    date: { $lt: this.endDate },
    endDate: { $gt: this.date },
    status: { $in: ['scheduled', 'rescheduled'] }
  });
  return conflict;
};

// Método estático para buscar por rango de fechas
appointmentSchema.statics.findByDateRange = function(startDate, endDate, filters = {}) {
  return this.find({
    ...filters,
    date: { $gte: startDate, $lte: endDate }
  }).populate('professionalId', 'name lastName email phone')
    .populate('patientId', 'name lastName email phone')
    .sort({ date: 1 });
};

// Índices compuestos para mejor rendimiento
appointmentSchema.index({ professionalId: 1, date: 1 });
appointmentSchema.index({ patientId: 1, date: 1 });
appointmentSchema.index({ status: 1, date: 1 });
appointmentSchema.index({ date: 1, status: 1 });

export const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
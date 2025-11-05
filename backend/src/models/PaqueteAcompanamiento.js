import mongoose from 'mongoose';

const paqueteAcompanamientoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    enum: ['basico', 'intermedio', 'premium'],
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  precioOriginal: Number,
  descuento: Number,
  imagen: String,
  descripcion: String,
  elementos: [String],
  beneficios: [{
    titulo: String,
    descripcion: String
  }],
  sesionesIncluidas: {
    type: Number,
    required: true
  },
  duracionSesion: {
    type: Number, // en minutos
    required: true
  },
  tipoSesiones: [{
    type: String,
    enum: ['individual', 'grupal', 'familiar', 'taller']
  }],
  stock: {
    type: Number,
    default: 0
  },
  popular: {
    type: Boolean,
    default: false
  },
  nuevo: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export const PaqueteAcompanamiento = mongoose.model('PaqueteAcompanamiento', paqueteAcompanamientoSchema);
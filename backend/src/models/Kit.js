import mongoose from 'mongoose';

const beneficioSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String
});

const kitSchema = new mongoose.Schema({
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
  beneficios: [beneficioSchema],
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

export const Kit = mongoose.model('Kit', kitSchema);
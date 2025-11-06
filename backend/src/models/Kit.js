import mongoose from 'mongoose';

const beneficioSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String
});

const kitSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    enum: ['basico', 'intermedio', 'integral'],
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: String,
  descripcion: String,
  elementos: [String],
  beneficios: [beneficioSchema],
  incluyeQR: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export const Kit = mongoose.model('Kit', kitSchema);
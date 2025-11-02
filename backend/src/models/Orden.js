import mongoose from 'mongoose';

const ordenSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  kitId: {
    type: Number,  // ✅ NUMBER - no ObjectId
    required: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'completada', 'cancelada'],
    default: 'completada'
  },
  metodoPago: {
    type: String,
    enum: ['pse'],
    default: 'pse'
  },
  bancoSeleccionado: {
    type: String,
    enum: ['bancolombia', 'nequi', 'davivienda', 'bbva', 'bogota'],
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

export const Orden = mongoose.model('Orden', ordenSchema);
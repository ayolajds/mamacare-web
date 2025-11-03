import mongoose from 'mongoose';

const ordenSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // ✅ CAMBIO: kitId ahora es opcional
  kitId: {
    type: Number,  
    required: false  // ⬅️ CAMBIAR de true a false
  },
  // ✅ NUEVO: campo para planes
  planNombre: {
    type: String,
    enum: ['Esencial', 'Integral', 'Premium'],
    required: false
  },
  // ✅ NUEVO: para saber si es kit o plan
  tipo: {
    type: String,
    enum: ['kit', 'plan'],
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
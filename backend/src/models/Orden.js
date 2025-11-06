// 📁 models/Orden.js - ACTUALIZADO
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
    enum: ['pendiente', 'preparando', 'enviado', 'entregado', 'cancelada'], // ✅ ESTADOS MEJORADOS
    default: 'pendiente' // ✅ CAMBIAR A PENDIENTE PARA GESTIÓN DE ENVÍOS
  },
  metodoPago: {
    type: String,
    enum: ['pse', 'incluido_en_paquete'], // ✅ NUEVA OPCIÓN
    default: 'pse'
  },
  bancoSeleccionado: {
    type: String,
    enum: ['bancolombia', 'nequi', 'davivienda', 'bbva', 'bogota', 'incluido_en_paquete'],
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  // ✅ NUEVO: PARA SABER SI EL KIT VIENE DE UN PAQUETE
  fromPackageId: {
    type: Number,
    default: null
  }
}, {
  timestamps: true
});

export const Orden = mongoose.model('Orden', ordenSchema);
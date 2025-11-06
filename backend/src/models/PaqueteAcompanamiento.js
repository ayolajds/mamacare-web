// 📁 src/models/PaqueteAcompanamiento.js - VERSIÓN CORREGIDA
import mongoose from 'mongoose';

const paqueteAcompanamientoSchema = new mongoose.Schema({
  id: { // ✅ AGREGAR ESTE CAMPO
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
  kitIncluidoId: { // ✅ NUEVO CAMPO - RELACIÓN DIRECTA CON KIT
    type: Number,
    required: true
  },
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
    type: Number,
    required: true
  },
  tipoSesiones: [{
    type: String,
    enum: ['individual', 'grupal', 'familiar', 'taller']
  }]
}, {
  timestamps: true
});

export const PaqueteAcompanamiento = mongoose.model('PaqueteAcompanamiento', paqueteAcompanamientoSchema);
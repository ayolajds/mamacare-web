import mongoose from 'mongoose';

const TestimonioSchema = new mongoose.Schema({
  textoCorto:        { type: String, required: true, trim: true },
  historiaCompleta:  { type: String, default: '', trim: true },
  impacto:           { type: String, default: '', trim: true },
  ciudad:            { type: String, default: '', trim: true },
  tags:              { type: [String], default: [] },
  imagenPath:        { type: String },
  usuarioId:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nombre:            { type: String, required: true },
  email:             { type: String, required: true },
  estado:            { 
    type: String, 
    enum: ['pendiente', 'aprobado', 'rechazado'],
    default: 'pendiente'
  },
  motivoRechazo:     { type: String, default: '' } // Para saber por qué se rechazó
}, { timestamps: true });

export default mongoose.model('Testimonio', TestimonioSchema);
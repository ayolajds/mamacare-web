import mongoose from 'mongoose';

const TestimonioSchema = new mongoose.Schema({
  textoCorto:        { type: String, required: true, trim: true },
  historiaCompleta:  { type: String, default: '', trim: true },
  impacto:           { type: String, default: '', trim: true },
  ciudad:            { type: String, default: '', trim: true },
  tags:              { type: [String], default: [] },
  imagen:            { type: String },
  imagenPath:        { type: String },
  usuarioId:         { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  nombre:            { type: String, required: true },
  email:             { type: String, required: true },
  estado:            { type: String, default: 'aprobado' }
}, { timestamps: true });

export default mongoose.model('Testimonio', TestimonioSchema);

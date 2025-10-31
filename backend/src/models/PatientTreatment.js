import mongoose from 'mongoose';

const patientTreatmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  professionalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  diagnosis: {
    type: String,
    required: true
  },
  cancerType: {
    type: String,
    enum: ['ductal_in_situ', 'lobular_in_situ', 'invasive_ductal', 'invasive_lobular', 'inflammatory', 'other'],
    required: true
  },
  cancerStage: {
    type: String,
    enum: ['0', 'I', 'II', 'III', 'IV'],
    required: true
  },
  treatmentPhase: {
    type: String,
    enum: ['diagnosis', 'pre_op', 'post_op', 'chemotherapy', 'radiotherapy', 'hormone_therapy', 'follow_up'],
    required: true
  },
  treatmentPlan: {
    type: String,
    required: true
  },
  medications: [{
    name: String,
    dosage: String,
    frequency: String,
    startDate: Date,
    endDate: Date
  }],
  symptoms: [{
    date: Date,
    symptom: String,
    intensity: {
      type: Number,
      min: 1,
      max: 10
    },
    notes: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// ✅ EXPORT NOMBRADO - IGUAL QUE TU APPOINTMENT.JS
export const PatientTreatment = mongoose.models.PatientTreatment || mongoose.model('PatientTreatment', patientTreatmentSchema);
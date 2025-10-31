import mongoose from 'mongoose';

const patientMedicalHistorySchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  familyHistory: {
    breastCancer: Boolean,
    ovarianCancer: Boolean,
    otherCancers: Boolean,
    details: String
  },
  personalHistory: {
    menarcheAge: Number,
    firstPregnancyAge: Number,
    menopause: Boolean,
    menopauseAge: Number,
    hormoneTherapy: Boolean,
    previousBiopsies: Boolean,
    details: String
  },
  habits: {
    smoker: Boolean,
    alcohol: Boolean,
    physicalActivity: String,
    diet: String
  },
  allergies: [String],
  currentMedications: [String]
}, {
  timestamps: true
});

// ✅ EXPORT NOMBRADO - IGUAL QUE TU APPOINTMENT.JS
export const PatientMedicalHistory = mongoose.models.PatientMedicalHistory || mongoose.model('PatientMedicalHistory', patientMedicalHistorySchema);
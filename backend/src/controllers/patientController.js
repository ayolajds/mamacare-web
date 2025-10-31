import { Appointment } from '../models/Appointment.js';
import { PatientTreatment } from '../models/PatientTreatment.js'; 
import { PatientMedicalHistory } from '../models/PatientMedicalHistory.js';

// @desc    Get patient dashboard data
// @route   GET /api/v1/patient/dashboard
// @access  Private (Patient)
export const getPatientDashboard = async (req, res) => {
  try {
    const patientId = req.user.id;

    // Get upcoming appointments
    const upcomingAppointments = await Appointment.find({
      patientId: patientId,
      date: { $gte: new Date() },
      status: { $in: ['scheduled', 'confirmed'] }
    })
    .populate('professionalId', 'name specialty')
    .sort({ date: 1 })
    .limit(5);

    // Get treatment info
    const treatment = await PatientTreatment.findOne({
      patientId: patientId,
      isActive: true
    });

    // Get today's appointments
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todaysAppointments = await Appointment.countDocuments({
      patientId: patientId,
      date: { $gte: today, $lt: tomorrow },
      status: { $in: ['scheduled', 'confirmed'] }
    });

    // Get recent symptoms
    const recentSymptoms = await PatientTreatment.findOne(
      { patientId: patientId },
      { symptoms: { $slice: -5 } }
    );

    res.json({
      success: true,
      data: {
        upcomingAppointments,
        treatment,
        todaysAppointments: todaysAppointments || 0,
        recentSymptoms: recentSymptoms?.symptoms || []
      }
    });
  } catch (error) {
    console.error('Error getting patient dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar el dashboard del paciente'
    });
  }
};

// @desc    Get patient treatment info
// @route   GET /api/v1/patient/treatment
// @access  Private (Patient)
export const getPatientTreatment = async (req, res) => {
  try {
    const patientId = req.user.id;

    const treatment = await PatientTreatment.findOne({
      patientId: patientId,
      isActive: true
    }).populate('professionalId', 'name specialty email');

    if (!treatment) {
      return res.status(404).json({
        success: false,
        message: 'No se encontró información de tratamiento'
      });
    }

    res.json({
      success: true,
      data: treatment
    });
  } catch (error) {
    console.error('Error getting patient treatment:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar la información de tratamiento'
    });
  }
};

// @desc    Get patient medical history
// @route   GET /api/v1/patient/medical-history
// @access  Private (Patient)
export const getMedicalHistory = async (req, res) => {
  try {
    const patientId = req.user.id;

    const medicalHistory = await PatientMedicalHistory.findOne({
      patientId: patientId
    });

    res.json({
      success: true,
      data: medicalHistory || {}
    });
  } catch (error) {
    console.error('Error getting medical history:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar el historial médico'
    });
  }
};

// @desc    Add symptom tracking
// @route   POST /api/v1/patient/symptoms
// @access  Private (Patient)
export const addSymptom = async (req, res) => {
  try {
    const patientId = req.user.id;
    const { symptom, intensity, notes } = req.body;

    const treatment = await PatientTreatment.findOne({
      patientId: patientId,
      isActive: true
    });

    if (!treatment) {
      return res.status(404).json({
        success: false,
        message: 'No se encontró tratamiento activo'
      });
    }

    treatment.symptoms.push({
      date: new Date(),
      symptom,
      intensity,
      notes
    });

    await treatment.save();

    res.json({
      success: true,
      message: 'Síntoma registrado correctamente',
      data: treatment.symptoms[treatment.symptoms.length - 1]
    });
  } catch (error) {
    console.error('Error adding symptom:', error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar el síntoma'
    });
  }
};

// @desc    Get patient appointments
// @route   GET /api/v1/patient/appointments
// @access  Private (Patient)
export const getPatientAppointments = async (req, res) => {
  try {
    const patientId = req.user.id;
    const { status, page = 1, limit = 10 } = req.query;

    let query = { patientId: patientId };
    
    if (status) {
      query.status = status;
    }

    const appointments = await Appointment.find(query)
      .populate('professionalId', 'name specialty avatar')
      .sort({ date: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Appointment.countDocuments(query);

    res.json({
      success: true,
      data: {
        appointments,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        total
      }
    });
  } catch (error) {
    console.error('Error getting patient appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar las citas'
    });
  }
};

// crear tratamientos
export const createPatientTreatment = async (req, res) => {
  try {
    const patientId = req.user.id;
    const {
      diagnosis,
      cancerType,
      cancerStage,
      treatmentPhase,
      treatmentPlan,
      medications
    } = req.body;

    // Verificar si ya existe un tratamiento activo
    const existingTreatment = await PatientTreatment.findOne({
      patientId: patientId,
      isActive: true
    });

    if (existingTreatment) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un tratamiento activo'
      });
    }

    const treatment = new PatientTreatment({
      patientId: patientId,
      diagnosis,
      cancerType,
      cancerStage,
      treatmentPhase,
      treatmentPlan,
      medications,
      isActive: true
    });

    await treatment.save();

    res.status(201).json({
      success: true,
      message: 'Tratamiento creado exitosamente',
      data: treatment
    });
  } catch (error) {
    console.error('Error creating treatment:', error);
    res.status(500).json({
      success: false,
      message: 'Error al crear el tratamiento'
    });
  }
};
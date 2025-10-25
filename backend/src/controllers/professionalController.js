import { Appointment } from '../models/Appointment.js';
import { User } from '../models/User.js';

// GET /api/v1/professional/appointments
export const getProfessionalAppointments = async (req, res) => {
  try {
    const { 
      startDate, 
      endDate, 
      status, 
      type, 
      page = 1, 
      limit = 10,
      search 
    } = req.query;
    
    // ✅ FILTRO CLAVE: Solo citas del profesional logueado
    const filter = {
      professionalId: req.user.id
    };
    
    // Filtros adicionales
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (status) filter.status = status;
    if (type) filter.type = type;

    // Búsqueda por texto (en título, motivo o nombre de paciente)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { reason: { $regex: search, $options: 'i' } }
      ];
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { date: 1 },
      populate: [
        { 
          path: 'patientId', 
          select: 'name lastName email phone birthDate emergencyContact' 
        },
        { 
          path: 'professionalId', 
          select: 'name lastName email specialty' 
        }
      ]
    };

    const appointments = await Appointment.paginate(filter, options);

    res.json({
      success: true,
      data: appointments
    });

  } catch (error) {
    console.error('Error getting professional appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener las citas del profesional',
      error: error.message
    });
  }
};

// GET /api/v1/professional/stats
// GET /api/v1/professional/stats
export const getProfessionalStats = async (req, res) => {
  try {
    const professionalId = req.user.id;
    
    // ✅ AGREGAR LOGS DE DEBUG
    console.log('🔍 [STATS DEBUG] Professional ID:', professionalId);
    console.log('👤 [STATS DEBUG] User:', req.user);
    
    const today = new Date();
    console.log('📅 [STATS DEBUG] Today:', today);
    
    // Fechas para filtros
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
    const endOfToday = new Date(today.setHours(23, 59, 59, 999));
    
    // Esta semana (lunes a domingo)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Lunes
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Domingo
    endOfWeek.setHours(23, 59, 59, 999);

    // Últimos 30 días para pacientes activos
    const last30Days = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    console.log('🕒 [STATS DEBUG] Date ranges:', {
      startOfToday,
      endOfToday,
      startOfWeek, 
      endOfWeek,
      last30Days
    });

    // Consultas en paralelo para mejor performance
    const [
      citasHoy,
      citasPendientes,
      citasEstaSemana,
      pacientesActivos,
      citasCompletadasMes
    ] = await Promise.all([
      // Citas de hoy
      Appointment.countDocuments({
        professionalId,
        date: { $gte: startOfToday, $lte: endOfToday },
        status: { $in: ['scheduled', 'confirmed'] }
      }),
      
      // Citas pendientes (programadas o confirmadas)
      Appointment.countDocuments({
        professionalId,
        status: { $in: ['scheduled', 'confirmed'] }
      }),
      
      // Citas esta semana
      Appointment.countDocuments({
        professionalId,
        date: { $gte: startOfWeek, $lte: endOfWeek },
        status: { $in: ['scheduled', 'confirmed', 'completed'] }
      }),
      
      // Pacientes activos (últimos 30 días)
      Appointment.distinct('patientId', {
        professionalId,
        date: { $gte: last30Days },
        status: { $in: ['scheduled', 'confirmed', 'completed'] }
      }).then(patients => {
        console.log('👥 [STATS DEBUG] Active patients:', patients);
        return patients.length;
      }),
      
      // Citas completadas este mes
      Appointment.countDocuments({
        professionalId,
        status: 'completed',
        date: { 
          $gte: new Date(today.getFullYear(), today.getMonth(), 1),
          $lte: new Date(today.getFullYear(), today.getMonth() + 1, 0)
        }
      })
    ]);

    // ✅ LOG DE RESULTADOS
    console.log('📊 [STATS DEBUG] Query results:', {
      citasHoy,
      citasPendientes,
      citasEstaSemana,
      pacientesActivos,
      citasCompletadasMes
    });

    const result = {
      citasHoy,
      citasPendientes,
      citasEstaSemana,
      pacientesActivos,
      citasCompletadasMes,
      tasaAsistencia: pacientesActivos > 0 ? 
        Math.round((citasCompletadasMes / (citasCompletadasMes + citasPendientes)) * 100) : 0
    };

    console.log('✅ [STATS DEBUG] Final stats result:', result);

    // ✅ PREVENIR CACHE
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('❌ [STATS DEBUG] Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener estadísticas del profesional',
      error: error.message
    });
  }
};

// GET /api/v1/professional/patients
export const getProfessionalPatients = async (req, res) => {
  try {
    const professionalId = req.user.id;
    const { page = 1, limit = 10, search } = req.query;

    console.log('🔍 Buscando pacientes para profesional:', professionalId);
    
    // Obtener IDs de pacientes únicos del profesional
    const patientIds = await Appointment.distinct('patientId', {
      professionalId,
      date: { $gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) } // últimos 90 días
    });

    console.log('📋 IDs de pacientes encontrados:', patientIds.length);

    // Si no hay pacientes, retornar resultado vacío
    if (patientIds.length === 0) {
      return res.json({
        success: true,
        data: {
          docs: [],
          totalDocs: 0,
          limit: parseInt(limit),
          totalPages: 0,
          page: parseInt(page),
          pagingCounter: 0,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: null,
          nextPage: null
        }
      });
    }

    // Construir filtro para buscar pacientes
    const filter = { 
      _id: { $in: patientIds },
      role: { $in: ['paciente', 'patient'] }
    };

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      select: 'name lastName email phone birthDate emergencyContact createdAt',
      sort: { lastName: 1 }
    };

    const patients = await User.paginate(filter, options);

    console.log('✅ Pacientes encontrados:', patients.docs.length);

    res.json({
      success: true,
      data: patients
    });

  } catch (error) {
    console.error('❌ Error getting professional patients:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener pacientes del profesional',
      error: error.message
    });
  }
};

// PATCH /api/v1/professional/appointments/:id/status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const professionalId = req.user.id;

    // Verificar que la cita pertenezca al profesional
    const appointment = await Appointment.findOne({
      _id: id,
      professionalId
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    // Actualizar estado
    appointment.status = status;
    appointment.updatedAt = new Date();
    await appointment.save();

    // Populate para devolver datos completos
    await appointment.populate('patientId', 'name lastName email phone');

    res.json({
      success: true,
      data: appointment
    });

  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el estado de la cita',
      error: error.message
    });
  }
};

// PATCH /api/v1/professional/appointments/:id/notes  
export const updateAppointmentNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;
    const professionalId = req.user.id;

    // Verificar que la cita pertenezca al profesional
    const appointment = await Appointment.findOne({
      _id: id,
      professionalId
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    // Actualizar notas
    appointment.notes = notes;
    appointment.updatedAt = new Date();
    await appointment.save();

    // Populate para devolver datos completos
    await appointment.populate('patientId', 'name lastName email phone');

    res.json({
      success: true,
      data: appointment
    });

  } catch (error) {
    console.error('Error updating appointment notes:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar las notas de la cita',
      error: error.message
    });
  }
};
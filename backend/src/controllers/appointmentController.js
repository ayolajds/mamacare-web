import { Appointment } from '../models/Appointment.js';
import { User } from '../models/User.js';

export const createAppointment = async (req, res) => {
  try {
    const {
      professionalId,
      patientId,
      title,
      date,
      duration = 60,
      type = 'consultation',
      reason,
      symptoms,
      priority = 'medium',
      meetingPlatform = 'in_person',
      meetingUrl,
      notes
    } = req.body;

    // Verificar que el profesional existe y es un profesional
    const professional = await User.findById(professionalId);
    if (!professional || professional.role !== 'profesional') {
      return res.status(400).json({
        success: false,
        message: 'El profesional especificado no existe o no tiene el rol correcto'
      });
    }

    // Verificar que el paciente existe
    const patient = await User.findById(patientId);
    if (!patient) {
      return res.status(400).json({
        success: false,
        message: 'El paciente especificado no existe'
      });
    }

    // ✅ CALCULAR endDate MANUALMENTE para evitar error de validación
    const appointmentDate = new Date(date);
    const endDate = new Date(appointmentDate.getTime() + duration * 60000);

    // Crear la cita CON endDate
    const appointment = new Appointment({
      professionalId,
      patientId,
      title,
      date: appointmentDate,
      duration,
      type,
      reason,
      symptoms,
      priority,
      meetingPlatform,
      meetingUrl,
      notes,
      createdBy: req.user.id,
      endDate: endDate // ✅ AGREGAR ESTO
    });

    // Verificar conflictos de horario
    const conflict = await appointment.hasTimeConflict();
    if (conflict) {
      return res.status(409).json({
        success: false,
        message: 'Existe un conflicto de horario con otra cita',
        conflictWith: conflict
      });
    }

    // ✅ GUARDAR con save() para que ejecute el middleware pre-save
    await appointment.save();

    // Popular los datos para la respuesta
    await appointment.populate('professionalId', 'name lastName email phone');
    await appointment.populate('patientId', 'name lastName email phone');

    res.status(201).json({
      success: true,
      message: 'Cita creada exitosamente',
      data: appointment
    });

  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Error al crear la cita',
      error: error.message
    });
  }
};

export const listAppointments = async (req, res) => {
  try {
    const { 
      startDate, 
      endDate, 
      status, 
      type, 
      page = 1, 
      limit = 10,
      professionalId,
      patientId 
    } = req.query;
    
    const filter = {};
    
    // Filtrar por rol del usuario
    if (req.user.role === 'profesional') {
      filter.professionalId = req.user.id;
    } else if (req.user.role === 'paciente') {
      filter.patientId = req.user.id;
    }
    // Admin ve todas las citas sin filtrar por ID

    // Filtros adicionales para admin
    if (req.user.role === 'admin') {
      if (professionalId) filter.professionalId = professionalId;
      if (patientId) filter.patientId = patientId;
    }

    // Aplicar filtros adicionales
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (status) filter.status = status;
    if (type) filter.type = type;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { date: 1 },
      populate: [
        { path: 'professionalId', select: 'name lastName email phone' },
        { path: 'patientId', select: 'name lastName email phone' }
      ]
    };

    const appointments = await Appointment.paginate(filter, options);

    res.json({
      success: true,
      data: appointments
    });

  } catch (error) {
    console.error('Error listing appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener las citas',
      error: error.message
    });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const appointment = await Appointment.findById(id)
      .populate('professionalId', 'name lastName email phone')
      .populate('patientId', 'name lastName email phone')
      .populate('createdBy', 'name lastName email');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    // Verificar permisos: solo el profesional, paciente o admin pueden ver la cita
    const canView = req.user.role === 'admin' || 
                   appointment.professionalId._id.toString() === req.user.id || 
                   appointment.patientId._id.toString() === req.user.id;

    if (!canView) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para ver esta cita'
      });
    }

    res.json({
      success: true,
      data: appointment
    });

  } catch (error) {
    console.error('Error getting appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener la cita',
      error: error.message
    });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    console.log('🔄 [APPOINTMENT UPDATE] Iniciando actualización de cita');
    console.log('📝 ID de cita:', req.params.id);
    console.log('📦 Body recibido:', JSON.stringify(req.body, null, 2));
    console.log('👤 ProfessionalId en body:', req.body.professionalId);
    console.log('👥 PatientId en body:', req.body.patientId);
    console.log('🔍 User making request:', req.user?.id, req.user?.role);

    const { id } = req.params;
    const updateData = req.body;

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    console.log('📋 Appointment actual:', {
      id: appointment._id,
      professionalId: appointment.professionalId,
      patientId: appointment.patientId,
      status: appointment.status,
      date: appointment.date
    });

    // ✅ AGREGAR ESTA VALIDACIÓN - No permitir editar citas canceladas
    if (appointment.status === 'cancelled') {
      console.log('❌ [APPOINTMENT UPDATE] Intento de editar cita cancelada');
      return res.status(400).json({
        success: false,
        message: 'No se puede editar una cita cancelada'
      });
    }

    // Verificar permisos: solo el profesional asignado o admin pueden modificar
    const canUpdate = req.user.role === 'admin' || 
                     appointment.professionalId.toString() === req.user.id;

    if (!canUpdate) {
      console.log('❌ [APPOINTMENT UPDATE] Sin permisos para actualizar');
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para actualizar esta cita'
      });
    }

    console.log('🔍 UpdateData antes de procesar:', updateData);

    // ✅ SOLUCIÓN CORREGIDA: PERMITIR CAMBIAR professionalId y patientId
    // Solo bloquear createdBy para evitar manipulación
    if (updateData.createdBy) {
      delete updateData.createdBy;
    }

    // ✅ VERIFICAR NUEVO PROFESIONAL (si se quiere cambiar)
    if (updateData.professionalId) {
      const newProfessional = await User.findById(updateData.professionalId);
      if (!newProfessional || newProfessional.role !== 'profesional') {
        return res.status(400).json({
          success: false,
          message: 'El nuevo profesional especificado no existe o no tiene el rol correcto'
        });
      }
    }

    // ✅ VERIFICAR NUEVO PACIENTE (si se quiere cambiar)
    if (updateData.patientId) {
      const newPatient = await User.findById(updateData.patientId);
      if (!newPatient) {
        return res.status(400).json({
          success: false,
          message: 'El nuevo paciente especificado no existe'
        });
      }
    }

    console.log('🔍 UpdateData después de procesar:', updateData);

    // Si se actualiza la fecha o duración, calcular nuevo endDate
    if (updateData.date || updateData.duration) {
      const newDate = updateData.date ? new Date(updateData.date) : appointment.date;
      const newDuration = updateData.duration || appointment.duration;
      updateData.endDate = new Date(newDate.getTime() + newDuration * 60000);
      console.log('📅 Nuevo endDate calculado:', updateData.endDate);
    }

    // Verificar conflictos después de los cambios
    if (updateData.date || updateData.duration || updateData.professionalId) {
      const tempAppointment = new Appointment({
        ...appointment.toObject(),
        ...updateData,
        _id: appointment._id // Mantener el mismo ID para la verificación
      });
      
      const conflict = await tempAppointment.hasTimeConflict();
      if (conflict) {
        console.log('❌ [APPOINTMENT UPDATE] Conflicto de horario detectado');
        return res.status(409).json({
          success: false,
          message: 'Existe un conflicto de horario con otra cita',
          conflictWith: conflict
        });
      }
    }

    console.log('💾 [APPOINTMENT UPDATE] Guardando cambios en BD...');

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('professionalId', 'name lastName email phone')
     .populate('patientId', 'name lastName email phone');

    // ✅ LOG DEL RESULTADO
    console.log('✅ [APPOINTMENT UPDATE] Cita actualizada exitosamente:', {
      id: updatedAppointment._id,
      professionalId: updatedAppointment.professionalId?._id,
      patientId: updatedAppointment.patientId?._id,
      status: updatedAppointment.status,
      date: updatedAppointment.date
    });

    res.json({
      success: true,
      message: 'Cita actualizada exitosamente',
      data: updatedAppointment
    });

  } catch (error) {
    console.error('❌ [APPOINTMENT UPDATE] Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la cita',
      error: error.message
    });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { cancellationReason } = req.body;

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    // Verificar permisos: profesional, paciente o admin pueden cancelar
    const canCancel = req.user.role === 'admin' || 
                     appointment.professionalId.toString() === req.user.id || 
                     appointment.patientId.toString() === req.user.id;

    if (!canCancel) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para cancelar esta cita'
      });
    }

    // No permitir cancelar citas ya completadas o canceladas
    if (appointment.status === 'completed') {
      return res.status(400).json({
        success: false,
        message: 'No se puede cancelar una cita ya completada'
      });
    }

    if (appointment.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'La cita ya está cancelada'
      });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      {
        status: 'cancelled',
        cancellationReason,
        cancelledBy: req.user.id
      },
      { new: true }
    ).populate('professionalId', 'name lastName email phone')
     .populate('patientId', 'name lastName email phone');

    res.json({
      success: true,
      message: 'Cita cancelada exitosamente',
      data: updatedAppointment
    });

  } catch (error) {
    console.error('Error canceling appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cancelar la cita',
      error: error.message
    });
  }
};

export const rescheduleAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { newDate, newDuration } = req.body;

    console.log('🔄 [RESCHEDULE] Reagendando cita:', id);
    console.log('📅 Nueva fecha:', newDate);
    console.log('⏱️ Nueva duración:', newDuration);

    // Buscar la cita original
    const originalAppointment = await Appointment.findById(id);
    if (!originalAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    // Verificar que la cita esté cancelada
    if (originalAppointment.status !== 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Solo se pueden reagendar citas canceladas'
      });
    }

    // Crear nueva cita basada en la original
    const newAppointment = new Appointment({
      professionalId: originalAppointment.professionalId,
      patientId: originalAppointment.patientId,
      title: originalAppointment.title,
      date: new Date(newDate),
      duration: newDuration || originalAppointment.duration,
      type: originalAppointment.type,
      reason: originalAppointment.reason,
      symptoms: originalAppointment.symptoms,
      priority: originalAppointment.priority,
      meetingPlatform: originalAppointment.meetingPlatform,
      meetingUrl: originalAppointment.meetingUrl,
      notes: `Reagendada desde cita cancelada #${originalAppointment._id}`,
      createdBy: req.user.id,
      status: 'scheduled'
    });

    // Calcular endDate
    const appointmentDate = new Date(newDate);
    newAppointment.endDate = new Date(appointmentDate.getTime() + newAppointment.duration * 60000);

    // Verificar conflictos
    const conflict = await newAppointment.hasTimeConflict();
    if (conflict) {
      return res.status(409).json({
        success: false,
        message: 'Existe un conflicto de horario con otra cita',
        conflictWith: conflict
      });
    }

    // Guardar nueva cita
    await newAppointment.save();

    // Popular datos para respuesta
    await newAppointment.populate('professionalId', 'name lastName email phone');
    await newAppointment.populate('patientId', 'name lastName email phone');

    console.log('✅ [RESCHEDULE] Cita reagendada exitosamente:', newAppointment._id);

    res.status(201).json({
      success: true,
      message: 'Cita reagendada exitosamente',
      data: {
        newAppointment,
        originalAppointmentId: originalAppointment._id
      }
    });

  } catch (error) {
    console.error('❌ [RESCHEDULE] Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error al reagendar la cita',
      error: error.message
    });
  }
};

export const getAppointmentStats = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const dateFilter = {};

    if (startDate && endDate) {
      dateFilter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    // Estadísticas por estado
    const statusStats = await Appointment.aggregate([
      { $match: dateFilter },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Estadísticas por tipo
    const typeStats = await Appointment.aggregate([
      { $match: dateFilter },
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    // Total de citas
    const totalAppointments = await Appointment.countDocuments(dateFilter);

    // Citas de esta semana
    const startOfWeek = new Date();
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const weeklyStats = await Appointment.aggregate([
      {
        $match: {
          date: {
            $gte: startOfWeek,
            $lte: endOfWeek
          }
        }
      },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const result = {
      totalAppointments,
      statusStats,
      typeStats,
      weeklyStats,
      dateRange: {
        startDate: startDate || 'all',
        endDate: endDate || 'all'
      }
    };

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener estadísticas',
      error: error.message
    });
  }
};
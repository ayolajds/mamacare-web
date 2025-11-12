import { Appointment } from '../models/Appointment.js';
import { User } from '../models/User.js';

export const solicitarCita = async (req, res) => {
  try {
    const { 
      paqueteId, 
      horarioPreferido,
      motivo,
      sintomas,
      tipoPreferido // ← AGREGADO para paquetes 2 y 3
    } = req.body;
    
    const pacienteId = req.user.id;

    console.log('📅 SOLICITUD de cita - Paciente:', pacienteId);
    console.log('📦 Datos recibidos:', { paqueteId, horarioPreferido, motivo, sintomas, tipoPreferido });

    const paciente = await User.findById(pacienteId);
    if (!paciente) {
      return res.status(404).json({
        success: false,
        message: 'Paciente no encontrado'
      });
    }

    if (!motivo || !sintomas || !horarioPreferido) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios: motivo, síntomas y horario preferido'
      });
    }

    // ✅ VALIDACIÓN MEJORADA DE PAQUETE
    let paqueteActivo = null;
    if (paqueteId) {
      paqueteActivo = paciente.paquetesAcompanamientoComprados?.find(
        p => p.paqueteId === parseInt(paqueteId) && 
             p.estado === 'activo' && 
             p.sesionesUsadas < p.sesionesTotales
      );

      if (!paqueteActivo) {
        return res.status(400).json({
          success: false,
          message: 'No tienes sesiones disponibles en este paquete'
        });
      }

      if (paqueteActivo.fechaExpiracion && new Date() > new Date(paqueteActivo.fechaExpiracion)) {
        return res.status(400).json({
          success: false,
          message: 'Este paquete ha expirado'
        });
      }

      // ✅ VALIDACIÓN DE TIPO PREFERIDO SEGÚN PAQUETE
      if (paqueteId === '1' || paqueteId === 1) {
        // Paquete 1 (Básico) - Solo presencial
        if (tipoPreferido && tipoPreferido !== 'presencial') {
          return res.status(400).json({
            success: false,
            message: 'El paquete básico solo permite citas presenciales'
          });
        }
        // Si no envió tipoPreferido, forzar presencial
        const tipoPreferidoFinal = tipoPreferido || 'presencial';
      } else if (paqueteId === '2' || paqueteId === 2) {
        // Paquete 2 (Intermedio) - Virtual o Presencial
        if (tipoPreferido && !['virtual', 'presencial'].includes(tipoPreferido)) {
          return res.status(400).json({
            success: false,
            message: 'El paquete intermedio solo permite citas virtuales o presenciales'
          });
        }
      } else if (paqueteId === '3' || paqueteId === 3) {
        // Paquete 3 (Integral) - Virtual, Presencial o Domicilio
        if (tipoPreferido && !['virtual', 'presencial', 'domicilio'].includes(tipoPreferido)) {
          return res.status(400).json({
            success: false,
            message: 'El paquete integral solo permite citas virtuales, presenciales o a domicilio'
          });
        }
      }
    }

    // ✅ PREPARAR DATOS DE SOLICITUD
    const datosSolicitud = {
      fechaSolicitud: new Date(),
      horarioPreferido: horarioPreferido,
      motivo: motivo,
      sintomas: Array.isArray(sintomas) ? sintomas : [sintomas].filter(Boolean)
    };

    // ✅ INCLUIR TIPO PREFERIDO SI SE ENVIÓ O ES PAQUETE 1
    if (tipoPreferido) {
      datosSolicitud.tipoPreferido = tipoPreferido;
    } else if (paqueteId === '1' || paqueteId === 1) {
      // Paquete 1 siempre es presencial
      datosSolicitud.tipoPreferido = 'presencial';
    }

    const solicitudCita = new Appointment({
      patientId: pacienteId,
      paqueteId: paqueteId ? parseInt(paqueteId) : undefined,
      title: `Solicitud de cita - ${paciente.name}`,
      status: 'pendiente',
      duration: 60,
      
      solicitud: datosSolicitud,
      
      createdBy: pacienteId
    });

    await solicitudCita.save();
    await solicitudCita.populate('patientId', 'name lastName email phone');

    console.log('✅ Solicitud de cita creada - ID:', solicitudCita._id);
    console.log('📋 Datos de solicitud:', datosSolicitud);

    res.status(201).json({
      success: true,
      message: 'Solicitud de cita enviada. Serás contactado pronto para confirmar los detalles.',
      data: solicitudCita
    });

  } catch (error) {
    console.error('💥 Error en solicitud de cita:', error);
    res.status(500).json({
      success: false,
      message: 'Error al solicitar la cita'
    });
  }
};

export const getSolicitudesPendientes = async (req, res) => {
  try {
    const solicitudes = await Appointment.findSolicitudesPendientes();

    res.json({
      success: true,
      data: solicitudes
    });
  } catch (error) {
    console.error('Error obteniendo solicitudes:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar solicitudes pendientes'
    });
  }
};

export const aprobarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      professionalId, 
      fechaConfirmada, 
      ubicacion,
      notasAdmin 
    } = req.body;

    console.log('✅ Aprobando solicitud - Cita ID:', id, 'Profesional:', professionalId);

    const solicitud = await Appointment.findById(id);
    if (!solicitud) {
      return res.status(404).json({
        success: false,
        message: 'Solicitud no encontrada'
      });
    }

    if (solicitud.status !== 'pendiente') {
      return res.status(400).json({
        success: false,
        message: 'Esta solicitud ya ha sido procesada'
      });
    }

    const profesional = await User.findById(professionalId);
    if (!profesional || profesional.role !== 'profesional') {
      return res.status(400).json({
        success: false,
        message: 'Profesional no válido'
      });
    }

    const fechaConfirmadaObj = new Date(fechaConfirmada);
    if (fechaConfirmadaObj <= new Date()) {
      return res.status(400).json({
        success: false,
        message: 'La fecha debe ser futura'
      });
    }

    const datosAdicionales = {
      aprobadoPor: req.user.id,
      ubicacion: ubicacion || 'Por definir',
      notasAdmin
    };

    // ✅ FORZAR EL ESTADO COMO CONFIRMADO EN LOS DATOS ADICIONALES
    datosAdicionales.status = 'confirmed';

    const citaAprobada = await solicitud.aprobarSolicitud(professionalId, fechaConfirmadaObj, datosAdicionales);

    // ✅ VERIFICAR QUE SE CREÓ COMO CONFIRMADA
    console.log('🎯 Cita aprobada con estado:', citaAprobada.status);

    await citaAprobada.populate('professionalId', 'name lastName especialidad email phone');
    await citaAprobada.populate('patientId', 'name lastName email phone');

    console.log('✅ Solicitud aprobada - ID:', citaAprobada._id, 'Estado:', citaAprobada.status);

    res.json({
      success: true,
      message: 'Solicitud aprobada correctamente',
      data: citaAprobada
    });

  } catch (error) {
    console.error('💥 Error aprobando solicitud:', error);
    res.status(500).json({
      success: false,
      message: 'Error al aprobar la solicitud'
    });
  }
};

export const rechazarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    const { motivoRechazo } = req.body;

    const solicitud = await Appointment.findById(id);
    if (!solicitud) {
      return res.status(404).json({
        success: false,
        message: 'Solicitud no encontrada'
      });
    }

    if (solicitud.status !== 'pendiente') {
      return res.status(400).json({
        success: false,
        message: 'Esta solicitud ya ha sido procesada'
      });
    }

    const solicitudRechazada = await solicitud.rechazarSolicitud(motivoRechazo, req.user.id);

    res.json({
      success: true,
      message: 'Solicitud rechazada correctamente',
      data: solicitudRechazada
    });

  } catch (error) {
    console.error('💥 Error rechazando solicitud:', error);
    res.status(500).json({
      success: false,
      message: 'Error al rechazar la solicitud'
    });
  }
};

export const completarCita = async (req, res) => {
  try {
    const { id } = req.params;

    const cita = await Appointment.findById(id).populate('patientId');
    
    if (!cita) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    if (cita.status !== 'scheduled' && cita.status !== 'confirmed') {
      return res.status(400).json({
        success: false,
        message: 'Solo se pueden completar citas programadas o confirmadas'
      });
    }

    const citaCompletada = await cita.completarCita();

    const paciente = cita.patientId;
    const paqueteIndex = paciente.paquetesAcompanamientoComprados?.findIndex(
      p => p.paqueteId === cita.paqueteId && p.estado === 'activo'
    );

    if (paqueteIndex === -1) {
      return res.status(400).json({
        success: false,
        message: 'No se encontró el paquete activo'
      });
    }

    paciente.paquetesAcompanamientoComprados[paqueteIndex].sesionesUsadas += 1;

    const paquete = paciente.paquetesAcompanamientoComprados[paqueteIndex];
    if (paquete.sesionesUsadas >= paquete.sesionesTotales) {
      paciente.paquetesAcompanamientoComprados[paqueteIndex].estado = 'completado';
    }

    await paciente.save();

    console.log('✅ Cita completada - Sesión descontada');

    res.json({
      success: true,
      message: 'Cita completada y sesión descontada correctamente',
      data: {
        cita: citaCompletada,
        sesionesDisponibles: paquete.sesionesTotales - paquete.sesionesUsadas
      }
    });

  } catch (error) {
    console.error('💥 Error completando cita:', error);
    res.status(500).json({
      success: false,
      message: 'Error al completar la cita'
    });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const {
      professionalId,
      patientId,
      title,
      date,
      duration = 60,
      paqueteId,
      ubicacion
    } = req.body;

    const professional = await User.findById(professionalId);
    if (!professional || professional.role !== 'profesional') {
      return res.status(400).json({
        success: false,
        message: 'El profesional especificado no existe'
      });
    }

    const patient = await User.findById(patientId);
    if (!patient) {
      return res.status(400).json({
        success: false,
        message: 'El paciente especificado no existe'
      });
    }

    if (paqueteId) {
      const paquetesActivos = patient.paquetesAcompanamientoComprados?.filter(paquete => 
        paquete.estado === 'activo' && 
        paquete.sesionesUsadas < paquete.sesionesTotales &&
        new Date(paquete.fechaExpiracion) > new Date()
      );

      if (!paquetesActivos || paquetesActivos.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No tienes sesiones disponibles.'
        });
      }
    }

    const appointment = new Appointment({
      professionalId,
      patientId,
      title: title || `Cita con ${professional.name}`,
      date: new Date(date),
      duration,
      paqueteId,
      ubicacion,
      status: 'scheduled',
      createdBy: req.user.id
    });

    const conflict = await appointment.hasTimeConflict();
    if (conflict) {
      return res.status(409).json({
        success: false,
        message: 'Existe un conflicto de horario con otra cita',
        conflictWith: conflict
      });
    }

    await appointment.save();

    if (paqueteId) {
      const paqueteParaUsar = patient.paquetesAcompanamientoComprados?.find(p => 
        p.estado === 'activo' && p.sesionesUsadas < p.sesionesTotales
      );

      if (paqueteParaUsar) {
        await User.updateOne(
          { 
            _id: patientId, 
            'paquetesAcompanamientoComprados.paqueteId': paqueteParaUsar.paqueteId 
          },
          { 
            $inc: { 'paquetesAcompanamientoComprados.$.sesionesUsadas': 1 } 
          }
        );
      }
    }

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

export const checkSesionesDisponibles = async (req, res) => {
  try {
    const pacienteId = req.user.role === 'paciente' ? req.user.id : req.query.pacienteId;
    
    if (!pacienteId) {
      return res.status(400).json({
        success: false,
        message: 'Se requiere ID del paciente'
      });
    }

    const paciente = await User.findById(pacienteId);
    if (!paciente) {
      return res.status(404).json({
        success: false,
        message: 'Paciente no encontrado'
      });
    }

    const paquetesActivos = paciente.paquetesAcompanamientoComprados?.filter(paquete => 
      paquete.estado === 'activo' && 
      paquete.sesionesUsadas < paquete.sesionesTotales &&
      new Date(paquete.fechaExpiracion) > new Date()
    );

    const sesionesDisponibles = paquetesActivos?.reduce((total, paquete) => {
      return total + (paquete.sesionesTotales - paquete.sesionesUsadas);
    }, 0) || 0;

    res.json({
      success: true,
      data: {
        sesionesDisponibles,
        paquetesActivos: paquetesActivos?.map(p => ({
          paqueteId: p.paqueteId,
          paqueteNombre: p.paqueteNombre,
          sesionesUsadas: p.sesionesUsadas,
          sesionesTotales: p.sesionesTotales,
          fechaExpiracion: p.fechaExpiracion,
          estado: p.estado
        })) || []
      }
    });

  } catch (error) {
    console.error('Error checking sesiones:', error);
    res.status(500).json({
      success: false,
      message: 'Error al verificar sesiones disponibles',
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
      page = 1, 
      limit = 10,
      professionalId,
      patientId,
      incluirSolicitudes = 'false'
    } = req.query;
    
    console.log('🔍 PARÁMETROS RECIBIDOS:', req.query);
    
    const filter = {};
    
    if (req.user.role === 'profesional') {
      filter.professionalId = req.user.id;
      filter.status = { $ne: 'pendiente' };
    } else if (req.user.role === 'paciente') {
      filter.patientId = req.user.id;
      
      if (req.path === '/mis-citas') {
        filter.status = { $ne: 'pendiente' };
      }
    }

    if (req.user.role === 'admin') {
      console.log('👑 Admin - incluirSolicitudes:', incluirSolicitudes);
      
      if (professionalId) filter.professionalId = professionalId;
      if (patientId) filter.patientId = patientId;
      
      if (incluirSolicitudes === 'false' && !status) {
        filter.status = { $ne: 'pendiente' };
        console.log('📋 Filtro aplicado: excluir pendientes');
      }
    }

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
      console.log('📅 Filtro de fecha aplicado');
    }

    // ✅ CORREGIDO: Manejar múltiples estados
    if (status) {
      if (status.includes(',')) {
        filter.status = { $in: status.split(',') };
      } else {
        filter.status = status;
      }
      console.log('🎯 Filtro de status aplicado:', filter.status);
    }

    console.log('🎛️ FILTRO FINAL:', JSON.stringify(filter, null, 2));

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { date: 1 },
      populate: [
        { path: 'professionalId', select: 'name lastName email phone especialidad' },
        { path: 'patientId', select: 'name lastName email phone' }
      ]
    };

    console.log('⚙️ OPCIONES:', options);

    const appointments = await Appointment.paginate(filter, options);

    console.log('📊 RESULTADO:', {
      total: appointments.totalDocs,
      page: appointments.page,
      pages: appointments.totalPages,
      docs: appointments.docs.length
    });

    // ✅ DEBUG: Mostrar las citas encontradas
    if (appointments.docs.length > 0) {
      console.log('📋 CITAS ENCONTRADAS:');
      appointments.docs.forEach(apt => {
        console.log(`   - ${apt._id}: ${apt.title} (${apt.status})`);
      });
    }

    res.json({
      success: true,
      data: appointments
    });

  } catch (error) {
    console.error('❌ Error listing appointments:', error);
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
      .populate('professionalId', 'name lastName email phone especialidad')
      .populate('patientId', 'name lastName email phone')
      .populate('createdBy', 'name lastName email');

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    const canView = req.user.role === 'admin' || 
                   (appointment.professionalId && appointment.professionalId._id.toString() === req.user.id) || 
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
    const { id } = req.params;
    const updateData = req.body;

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    if (appointment.status === 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'No se puede editar una cita cancelada'
      });
    }

    const canUpdate = req.user.role === 'admin' || 
                     appointment.professionalId?.toString() === req.user.id;

    if (!canUpdate) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para actualizar esta cita'
      });
    }

    if (updateData.createdBy) {
      delete updateData.createdBy;
    }

    if (updateData.professionalId) {
      const newProfessional = await User.findById(updateData.professionalId);
      if (!newProfessional || newProfessional.role !== 'profesional') {
        return res.status(400).json({
          success: false,
          message: 'El nuevo profesional especificado no existe'
        });
      }
    }

    if (updateData.patientId) {
      const newPatient = await User.findById(updateData.patientId);
      if (!newPatient) {
        return res.status(400).json({
          success: false,
          message: 'El nuevo paciente especificado no existe'
        });
      }
    }

    if (updateData.date || updateData.duration) {
      const newDate = updateData.date ? new Date(updateData.date) : appointment.date;
      const newDuration = updateData.duration || appointment.duration;
      updateData.endDate = new Date(newDate.getTime() + newDuration * 60000);
    }

    if (updateData.date || updateData.duration || updateData.professionalId) {
      const tempAppointment = new Appointment({
        ...appointment.toObject(),
        ...updateData,
        _id: appointment._id
      });
      
      const conflict = await tempAppointment.hasTimeConflict();
      if (conflict) {
        return res.status(409).json({
          success: false,
          message: 'Existe un conflicto de horario con otra cita',
          conflictWith: conflict
        });
      }
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('professionalId', 'name lastName email phone')
     .populate('patientId', 'name lastName email phone');

    res.json({
      success: true,
      message: 'Cita actualizada exitosamente',
      data: updatedAppointment
    });

  } catch (error) {
    console.error('❌ Error updating appointment:', error);
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

    const canCancel = req.user.role === 'admin' || 
                     appointment.professionalId?.toString() === req.user.id || 
                     appointment.patientId?.toString() === req.user.id;

    if (!canCancel) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para cancelar esta cita'
      });
    }

    const nonCancellableStatuses = ['completed', 'cancelled', 'no-show'];
    
    if (nonCancellableStatuses.includes(appointment.status)) {
      return res.status(400).json({
        success: false,
        message: `No se puede cancelar una cita con estado: "${appointment.status}"`
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

    const originalAppointment = await Appointment.findById(id);
    if (!originalAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Cita no encontrada'
      });
    }

    if (originalAppointment.status !== 'cancelled') {
      return res.status(400).json({
        success: false,
        message: 'Solo se pueden reagendar citas canceladas'
      });
    }

    const newAppointment = new Appointment({
      professionalId: originalAppointment.professionalId,
      patientId: originalAppointment.patientId,
      title: originalAppointment.title,
      date: new Date(newDate),
      duration: newDuration || originalAppointment.duration,
      paqueteId: originalAppointment.paqueteId,
      ubicacion: originalAppointment.ubicacion,
      notes: `Reagendada desde cita cancelada #${originalAppointment._id}`,
      createdBy: req.user.id,
      status: 'scheduled'
    });

    const appointmentDate = new Date(newDate);
    newAppointment.endDate = new Date(appointmentDate.getTime() + newAppointment.duration * 60000);

    const conflict = await newAppointment.hasTimeConflict();
    if (conflict) {
      return res.status(409).json({
        success: false,
        message: 'Existe un conflicto de horario con otra cita',
        conflictWith: conflict
      });
    }

    await newAppointment.save();

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

    const statusStats = await Appointment.aggregate([
      { $match: dateFilter },
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalAppointments = await Appointment.countDocuments(dateFilter);

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

export const getMisSolicitudesPendientes = async (req, res) => {
  try {
    const pacienteId = req.user.id;

    // Primero obtener el paciente con sus paquetes
    const paciente = await User.findById(pacienteId);
    if (!paciente) {
      return res.status(404).json({
        success: false,
        message: 'Paciente no encontrado'
      });
    }

    console.log('📦 Paquetes del paciente:', paciente.paquetesAcompanamientoComprados);

    // Obtener las solicitudes
    const solicitudes = await Appointment.find({
      patientId: pacienteId,
      status: 'pendiente'
    })
    .populate('professionalId', 'name lastName especialidad')
    .populate('patientId', 'name lastName email phone')
    .sort({ createdAt: -1 });

    // 🔥 CORRECCIÓN: Enriquecer las solicitudes con datos del paquete
    const solicitudesEnriquecidas = solicitudes.map(solicitud => {
      const solicitudObj = solicitud.toObject();
      
      if (solicitud.paqueteId) {
        // Buscar el paquete en los datos del paciente
        const paqueteUsuario = paciente.paquetesAcompanamientoComprados?.find(
          p => p.paqueteId === solicitud.paqueteId
        );
        
        console.log(`🔍 Para solicitud ${solicitud._id}, paquete ${solicitud.paqueteId}:`, paqueteUsuario);
        
        if (paqueteUsuario) {
          const sesionesDisponibles = paqueteUsuario.sesionesTotales - paqueteUsuario.sesionesUsadas;
          console.log(`📊 Sesiones: ${paqueteUsuario.sesionesUsadas} usadas, ${paqueteUsuario.sesionesTotales} totales, ${sesionesDisponibles} disponibles`);
          
          // Agregar datos del paquete a la solicitud
          solicitudObj.paqueteInfo = {
            paqueteNombre: paqueteUsuario.paqueteNombre,
            sesionesUsadas: paqueteUsuario.sesionesUsadas,
            sesionesTotales: paqueteUsuario.sesionesTotales,
            sesionesDisponibles: sesionesDisponibles,
            estado: paqueteUsuario.estado,
            fechaExpiracion: paqueteUsuario.fechaExpiracion
          };
        }
      }
      
      console.log('📋 Solicitud final:', solicitudObj.paqueteInfo);
      return solicitudObj;
    });

    res.json({
      success: true,
      data: solicitudesEnriquecidas
    });

  } catch (error) {
    console.error('💥 Error obteniendo mis solicitudes:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cargar mis solicitudes pendientes'
    });
  }
};
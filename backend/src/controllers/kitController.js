import { Kit } from '../models/Kit.js';
import { Orden } from '../models/Orden.js';
import { User } from '../models/User.js';

// 🔥 UBICACIONES FIJAS - CON TU UBICACIÓN REAL
const ubicacionesFijas = [
  {
    id: 1,
    nombre: "Tecnológico de Comfenalco (Barrio españa) - Cartagena",
    direccion: "Carrera 44 D 30 A-91, Barrio España, Cartagena",
    horario: "Lunes a Viernes: 10:00 AM - 4:00 PM",
    telefono: "3243199016"
  },
  {
    id: 2, 
    nombre: "CEDESARROLLO Comfenalco - Cartagena",
    direccion: "Diagonal 30, Armenia, Cartagena, Colombia", 
    horario: "Lunes a Viernes: 10:00 AM - 4:00 PM",
    telefono: "3243199016"
  },
];

// @desc    Get pickup locations
// @route   GET /api/kits/ubicaciones
// @access  Private
export const getUbicaciones = async (req, res) => {
  try {
    res.json({
      success: true,
      data: ubicacionesFijas
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al cargar ubicaciones'
    });
  }
};

// @desc    Schedule kit pickup  
// @route   POST /api/kits/agendar-recogida
// @access  Private
export const agendarRecogida = async (req, res) => {
  try {
    const { kitId, ubicacionId } = req.body;
    const usuarioId = req.user.id;

    console.log('📦 Agendando recogida:', { kitId, ubicacionId, usuarioId });

    // Buscar usuario
    const usuario = await User.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({
        success: false, 
        message: 'Usuario no encontrado'
      });
    }

    // Buscar kit del usuario
    const kit = usuario.kitsComprados.id(kitId);
    if (!kit) {
      return res.status(404).json({
        success: false,
        message: 'Kit no encontrado'
      });
    }

    // Buscar ubicación
    const ubicacion = ubicacionesFijas.find(u => u.id === ubicacionId);
    if (!ubicacion) {
      return res.status(404).json({
        success: false,
        message: 'Ubicación no encontrada'
      });
    }

    // Generar código simple
    const codigoRecogida = `KIT${Date.now().toString().slice(-6)}`;

    // 🔥 ACTUALIZAR KIT - SOLO 3 CAMPOS
    kit.estadoEntrega = 'agendado';
    kit.ubicacionRecogida = ubicacion.nombre;
    kit.codigoRecogida = codigoRecogida;

    await usuario.save();

    console.log('✅ Recogida agendada exitosamente');

    res.json({
      success: true,
      message: `Recogida agendada en ${ubicacion.nombre}`,
      data: {
        codigoRecogida,
        ubicacion: ubicacion.nombre,
        direccion: ubicacion.direccion,
        horario: ubicacion.horario,
        telefono: ubicacion.telefono
      }
    });

  } catch (error) {
    console.error('💥 Error agendando recogida:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

// @desc    Verify pickup code (para voluntarios)
// @route   POST /api/kits/verificar-codigo
// @access  Private (voluntario, admin)
export const verificarCodigo = async (req, res) => {
  try {
    const { codigoRecogida } = req.body;

    console.log('🔍 Verificando código:', codigoRecogida);

    // Buscar usuario que tenga ese código
    const usuario = await User.findOne({
      'kitsComprados.codigoRecogida': codigoRecogida
    });

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: '❌ Código no encontrado'
      });
    }

    // Encontrar el kit específico
    const kit = usuario.kitsComprados.find(k => k.codigoRecogida === codigoRecogida);
    
    if (!kit) {
      return res.status(404).json({
        success: false,
        message: '❌ Kit no encontrado'
      });
    }

    // Verificar que el kit esté agendado
    if (kit.estadoEntrega !== 'agendado') {
      return res.status(400).json({
        success: false,
        message: `⚠️ Este kit está en estado: ${kit.estadoEntrega}`
      });
    }

    console.log('✅ Código verificado para:', usuario.name);

    // Mostrar información del kit y usuario
    res.json({
      success: true,
      data: {
        kit: {
          id: kit._id,
          nombre: kit.kitNombre,
          kitId: kit.kitId,
          codigo: kit.codigoRecogida,
          fechaCompra: kit.fechaCompra,
          estadoEntrega: kit.estadoEntrega
        },
        usuario: {
          id: usuario._id,
          nombre: `${usuario.name} ${usuario.lastName}`,
          email: usuario.email,
          telefono: usuario.phone,
          identificacion: usuario.documentId // si tienes este campo
        },
        ubicacion: kit.ubicacionRecogida
      }
    });

  } catch (error) {
    console.error('💥 Error verificando código:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

// @desc    Mark kit as delivered (para voluntarios)
// @route   POST /api/kits/marcar-entregado
// @access  Private (voluntario, admin)
export const marcarEntregado = async (req, res) => {
  try {
    const { codigoRecogida } = req.body;
    const voluntarioId = req.user.id;

    console.log('📦 Marcando como entregado:', { codigoRecogida, voluntarioId });

    const usuario = await User.findOne({
      'kitsComprados.codigoRecogida': codigoRecogida
    });

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: '❌ Código no encontrado'
      });
    }

    const kit = usuario.kitsComprados.find(k => k.codigoRecogida === codigoRecogida);
    
    if (!kit) {
      return res.status(404).json({
        success: false,
        message: '❌ Kit no encontrado'
      });
    }

    // Verificar que el kit esté agendado
    if (kit.estadoEntrega !== 'agendado') {
      return res.status(400).json({
        success: false,
        message: `No se puede entregar - Estado actual: ${kit.estadoEntrega}`
      });
    }

    // Marcar como entregado
    kit.estadoEntrega = 'entregado';
    kit.fechaEntregaReal = new Date();
    // 🔥 Opcional: Guardar quién entregó el kit
    kit.entregadoPor = voluntarioId;

    await usuario.save();

    console.log('✅ Kit marcado como entregado por voluntario:', voluntarioId);

    res.json({
      success: true,
      message: '✅ Kit marcado como entregado exitosamente',
      data: {
        kitNombre: kit.kitNombre,
        usuario: `${usuario.name} ${usuario.lastName}`,
        fechaEntrega: kit.fechaEntregaReal
      }
    });

  } catch (error) {
    console.error('💥 Error marcando como entregado:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

// @desc    Get delivery statistics (para dashboard voluntario)
// @route   GET /api/kits/estadisticas-entrega
// @access  Private (voluntario, admin)
export const getEstadisticasEntrega = async (req, res) => {
  try {
    // Contar kits por estado de entrega
    const estadisticas = await User.aggregate([
      { $unwind: '$kitsComprados' },
      {
        $group: {
          _id: '$kitsComprados.estadoEntrega',
          total: { $sum: 1 }
        }
      }
    ]);

    // Formatear estadísticas
    const stats = {
      disponibles: 0,
      agendados: 0,
      entregados: 0
    };

    estadisticas.forEach(stat => {
      if (stat._id === 'disponible') stats.disponibles = stat.total;
      if (stat._id === 'agendado') stats.agendados = stat.total;
      if (stat._id === 'entregado') stats.entregados = stat.total;
    });

    res.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener estadísticas'
    });
  }
};

export const getHistorialEntregas = async (req, res) => {
  try {
    console.log('🔍 Buscando historial de entregas...');
    
    const usuarios = await User.find({
      'kitsComprados.estadoEntrega': 'entregado'
    }).select('name lastName email phone kitsComprados');

    console.log(`📊 Usuarios con kits entregados: ${usuarios.length}`);
    
    const historial = [];

    usuarios.forEach(usuario => {
      usuario.kitsComprados.forEach(kit => {
        if (kit.estadoEntrega === 'entregado') {
          console.log(`✅ Kit entregado encontrado: ${kit.kitNombre} para ${usuario.name}`);
          historial.push({
            id: kit._id,
            codigo: kit.codigoRecogida,
            kit: kit.kitNombre,
            usuario: `${usuario.name} ${usuario.lastName}`,
            email: usuario.email,
            telefono: usuario.phone,
            fecha: kit.fechaEntregaReal || kit.fechaCompra,
            ubicacion: kit.ubicacionRecogida
          });
        }
      });
    });

    console.log(`📋 Total entregas en historial: ${historial.length}`);
    
    historial.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    res.json({
      success: true,
      data: historial
    });

  } catch (error) {
    console.error('💥 Error obteniendo historial:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener el historial de entregas'
    });
  }
};
// @desc    Get all kits
// @route   GET /api/kits
// @access  Public
export const getKits = async (req, res) => {
  try {
    const kits = await Kit.find();
    res.json({ 
      success: true, 
      data: kits 
    });
  } catch (error) {
    console.error('Error getting kits:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al cargar los kits' 
    });
  }
};

// @desc    Create order for kit
// @route   POST /api/kits/orden
// @access  Private
export const createOrden = async (req, res) => {
  try {
    const { kitId, bancoSeleccionado } = req.body;
    const usuarioId = req.user.id;

    console.log('📦 Recibiendo compra - Kit ID:', kitId, 'Usuario:', usuarioId);

    // ✅ ELIMINAR VALIDACIÓN DE DUPLICADOS (permite múltiples kits)
    // const usuario = await User.findById(usuarioId);
    // const kitYaComprado = usuario.kitsComprados.some(
    //   kit => kit.kitId === parseInt(kitId) && kit.estado === 'activo'
    // );
    // if (kitYaComprado) {
    //   return res.status(400).json({ 
    //     success: false, 
    //     message: 'Ya tienes este kit comprado. No puedes comprarlo nuevamente.' 
    //   });
    // }

    // ✅ MAPEO DE KITS
    const kitsInfo = {
      1: { 
        nombre: "Kit Básico", 
        precio: 63800
      },
      2: { 
        nombre: "Kit Intermedio", 
        precio: 79200
      },
      3: { 
        nombre: "Kit Integral", 
        precio: 112200
      }
    };

    const kit = kitsInfo[kitId];
    if (!kit) {
      return res.status(404).json({ 
        success: false, 
        message: 'Kit no encontrado' 
      });
    }

    // ✅ CREAR ORDEN - USAR 'pendiente' (según modelo Orden)
    const orden = new Orden({
      usuarioId,
      kitId: parseInt(kitId),
      total: kit.precio,
      metodoPago: 'pse',
      bancoSeleccionado,
      estado: 'pendiente' // ✅ CAMBIADO: 'completada' → 'pendiente'
    });

    await orden.save();

    // ✅ AGREGAR KIT AL USUARIO - SIEMPRE PERMITIR
    await User.findByIdAndUpdate(usuarioId, {
      $push: {
        kitsComprados: {
          kitId: parseInt(kitId),
          kitNombre: kit.nombre,
          fechaCompra: new Date(),
          sesionesUsadas: 0,
          estado: 'activo'
        }
      }
    });

    console.log('✅ Orden de kit creada y usuario actualizado');

    res.status(201).json({ 
      success: true, 
      message: `¡${kit.nombre} comprado exitosamente!`, 
      data: orden 
    });

  } catch (error) {
    console.error('💥 Error creando orden de kit:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la compra' 
    });
  }
};

// @desc    Get user's purchased kits
// @route   GET /api/mis-kits
// @access  Private
export const getMisKits = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    
    const usuario = await User.findById(usuarioId).select('kitsComprados');
    if (!usuario) {
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    res.json({ 
      success: true, 
      data: usuario.kitsComprados || [] 
    });

  } catch (error) {
    console.error('Error obteniendo kits del usuario:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al cargar tus kits' 
    });
  }
};
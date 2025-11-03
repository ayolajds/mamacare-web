import { User } from '../models/User.js';
import { Orden } from '../models/Orden.js';

// ✅ CONFIGURACIÓN DE PLANES (podría ir en BD después)
const PLANES_CONFIG = {
  'Esencial': { 
    sesionesTotales: 4, 
    vencimientoMeses: 6, 
    modalidades: ['individual'],
    kitIncluido: 'Básico'
  },
  'Integral': { 
    sesionesTotales: 8, 
    vencimientoMeses: 6, 
    modalidades: ['individual', 'grupal'],
    kitIncluido: 'Intermedio'
  },
  'Premium': { 
    sesionesTotales: 12, 
    vencimientoMeses: 6, 
    modalidades: ['individual', 'grupal', 'talleres'],
    kitIncluido: 'Premium'
  }
};

// ✅ NUEVA FUNCIÓN: Crear orden para plan con PSE
export const createOrdenPlan = async (req, res) => {
  try {
    const { planNombre, bancoSeleccionado } = req.body;
    const usuarioId = req.user.id;

    console.log('📦 Recibiendo compra - Plan:', planNombre, 'Usuario:', usuarioId);

    // ✅ VALIDAR SI EL USUARIO YA TIENE ESTE PLAN ACTIVO
    const usuario = await User.findById(usuarioId);
    const planYaComprado = usuario.planesActivos.some(
      plan => plan.nombre === planNombre && plan.estado === 'activo'
    );

    if (planYaComprado) {
      return res.status(400).json({ 
        success: false, 
        message: `Ya tienes el plan ${planNombre} activo. No puedes comprarlo nuevamente.` 
      });
    }

    // ✅ OBTENER CONFIGURACIÓN DEL PLAN
    const config = PLANES_CONFIG[planNombre];
    if (!config) {
      return res.status(404).json({ 
        success: false, 
        message: 'Plan no encontrado' 
      });
    }

    const precio = getPrecioPlan(planNombre);

    // ✅ CREAR ORDEN PARA EL PLAN
    const orden = new Orden({
      usuarioId,
      planNombre: planNombre, // ⬅️ NUEVO campo
      tipo: 'plan',           // ⬅️ NUEVO campo  
      total: precio,
      metodoPago: 'pse',
      bancoSeleccionado,
      estado: 'completada'
    });

    await orden.save();

    // ✅ ACTIVAR EL PLAN EN EL USUARIO (misma lógica que comprarPlan)
    const vencimiento = new Date();
    vencimiento.setMonth(vencimiento.getMonth() + config.vencimientoMeses);

    const nuevoPlan = {
      nombre: planNombre,
      sesionesTotales: config.sesionesTotales,
      sesionesUsadas: 0,
      estado: 'activo',
      fechaCompra: new Date(),
      vencimiento,
      modalidades: config.modalidades
    };

    // Agregar kit incluido si corresponde
    let kitAgregado = null;
    if (config.kitIncluido) {
      const kitId = getKitIdPorNombre(config.kitIncluido);
      if (kitId) {
        const kitExistente = usuario.kitsComprados.find(
          kit => kit.kitId === kitId && kit.estado === 'activo'
        );

        if (!kitExistente) {
          usuario.kitsComprados.push({
            kitId: kitId,
            kitNombre: config.kitIncluido,
            fechaCompra: new Date(),
            sesionesUsadas: 0,
            estado: 'activo'
          });
          kitAgregado = config.kitIncluido;
        }
      }
    }

    // Agregar plan al usuario
    usuario.planesActivos.push(nuevoPlan);
    await usuario.save();

    console.log(`✅ Orden de plan creada y usuario actualizado - Plan: ${planNombre}`);

    res.status(201).json({ 
      success: true, 
      message: `Plan ${planNombre} comprado exitosamente!`, 
      data: {
        orden,
        plan: nuevoPlan,
        kitIncluido: kitAgregado,
        sesionesDisponibles: config.sesionesTotales
      }
    });

  } catch (error) {
    console.error('💥 Error creando orden de plan:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la compra del plan' 
    });
  }
};

// ✅ OBTENER INFORMACIÓN DE PLANES DISPONIBLES
export const getPlanes = async (req, res) => {
  try {
    const planes = Object.entries(PLANES_CONFIG).map(([nombre, config]) => ({
      nombre,
      sesionesTotales: config.sesionesTotales,
      modalidades: config.modalidades,
      kitIncluido: config.kitIncluido,
      vencimientoMeses: config.vencimientoMeses,
      // Precios (podrían venir de BD o variables)
      precio: getPrecioPlan(nombre)
    }));

    res.json({ 
      success: true, 
      data: planes 
    });
  } catch (error) {
    console.error('Error obteniendo planes:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener planes' 
    });
  }
};

// ✅ COMPRAR/ACTIVAR UN PLAN
export const comprarPlan = async (req, res) => {
  try {
    const { planNombre } = req.body;
    const userId = req.user.id;

    console.log(`🛒 Compra de plan: ${planNombre} para usuario: ${userId}`);

    // Validar que el plan existe
    const config = PLANES_CONFIG[planNombre];
    if (!config) {
      return res.status(400).json({ 
        success: false, 
        message: 'Plan no válido' 
      });
    }

    // Buscar usuario
    const usuario = await User.findById(userId);
    if (!usuario) {
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    // Validar si ya tiene un plan activo del mismo tipo
    const planExistente = usuario.planesActivos.find(
      plan => plan.nombre === planNombre && plan.estado === 'activo'
    );

    if (planExistente) {
      return res.status(400).json({ 
        success: false, 
        message: `Ya tienes un plan ${planNombre} activo` 
      });
    }

    // Calcular fecha de vencimiento
    const vencimiento = new Date();
    vencimiento.setMonth(vencimiento.getMonth() + config.vencimientoMeses);

    // Crear el nuevo plan
    const nuevoPlan = {
      nombre: planNombre,
      sesionesTotales: config.sesionesTotales,
      sesionesUsadas: 0,
      estado: 'activo',
      fechaCompra: new Date(),
      vencimiento,
      modalidades: config.modalidades
    };

    // Agregar kit incluido si corresponde
    let kitAgregado = null;
    if (config.kitIncluido) {
      const kitId = getKitIdPorNombre(config.kitIncluido);
      if (kitId) {
        const kitExistente = usuario.kitsComprados.find(
          kit => kit.kitId === kitId && kit.estado === 'activo'
        );

        if (!kitExistente) {
          usuario.kitsComprados.push({
            kitId: kitId,
            kitNombre: config.kitIncluido,
            fechaCompra: new Date(),
            sesionesUsadas: 0,
            estado: 'activo'
          });
          kitAgregado = config.kitIncluido;
        }
      }
    }

    // Agregar plan al usuario
    usuario.planesActivos.push(nuevoPlan);
    await usuario.save();

    console.log(`✅ Plan ${planNombre} activado para usuario ${usuario.email}`);

    res.status(201).json({ 
      success: true, 
      message: `Plan ${planNombre} activado exitosamente`,
      data: {
        plan: nuevoPlan,
        kitIncluido: kitAgregado,
        sesionesDisponibles: config.sesionesTotales
      }
    });

  } catch (error) {
    console.error('Error activando plan:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al activar el plan' 
    });
  }
};

// ✅ OBTENER PLANES DEL USUARIO
export const getMisPlanes = async (req, res) => {
  try {
    const userId = req.user.id;

    const usuario = await User.findById(userId).select('planesActivos kitsComprados');
    if (!usuario) {
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    // Enriquecer datos de planes
    const planesEnriquecidos = usuario.planesActivos.map(plan => {
      const config = PLANES_CONFIG[plan.nombre] || {};
      return {
        ...plan.toObject(),
        sesionesDisponibles: plan.sesionesTotales - plan.sesionesUsadas,
        kitIncluido: config.kitIncluido,
        progreso: Math.round((plan.sesionesUsadas / plan.sesionesTotales) * 100),
        diasRestantes: plan.vencimiento 
          ? Math.ceil((plan.vencimiento - new Date()) / (1000 * 60 * 60 * 24))
          : null
      };
    });

    res.json({ 
      success: true, 
      data: {
        planes: planesEnriquecidos,
        tienePlanActivo: usuario.tienePlanActivo(),
        sesionesDisponiblesTotales: usuario.sesionesDisponibles()
      }
    });

  } catch (error) {
    console.error('Error obteniendo planes del usuario:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener planes' 
    });
  }
};

// ✅ CONSUMIR UNA SESIÓN (para usar cuando se complete una cita)
export const consumirSesion = async (req, res) => {
  try {
    const userId = req.user.id;

    const usuario = await User.findById(userId);
    if (!usuario) {
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    const consumoExitoso = usuario.consumirSesion();
    
    if (!consumoExitoso) {
      return res.status(400).json({ 
        success: false, 
        message: 'No hay sesiones disponibles para consumir' 
      });
    }

    await usuario.save();

    res.json({ 
      success: true, 
      message: 'Sesión consumida exitosamente',
      sesionesDisponibles: usuario.sesionesDisponibles()
    });

  } catch (error) {
    console.error('Error consumiendo sesión:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al consumir sesión' 
    });
  }
};

// ✅ FUNCIONES AUXILIARES
function getPrecioPlan(nombrePlan) {
  const precios = {
    'Esencial': 280000,
    'Integral': 650000,
    'Premium': 1200000
  };
  return precios[nombrePlan] || 0;
}

function getKitIdPorNombre(nombreKit) {
  const kits = {
    'Básico': 1,
    'Intermedio': 2,
    'Premium': 3
  };
  return kits[nombreKit];
}
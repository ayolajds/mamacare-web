import { PaqueteAcompanamiento } from '../models/PaqueteAcompanamiento.js';
import { OrdenPaquete } from '../models/OrdenPaquete.js';
import { Orden } from '../models/Orden.js'; // ✅ AGREGAR
import { User } from '../models/User.js';

// @desc    Get all packages
// @route   GET /api/paquetes-acompanamiento
// @access  Public
export const getPaquetesAcompanamiento = async (req, res) => {
  try {
    const paquetes = await PaqueteAcompanamiento.find();
    res.json({ 
      success: true, 
      data: paquetes 
    });
  } catch (error) {
    console.error('Error getting packages:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al cargar los paquetes' 
    });
  }
};

// @desc    Create order for package
// @route   POST /api/paquetes-acompanamiento/orden
// @access  Private
export const createOrdenPaquete = async (req, res) => {
  try {
    const { paqueteId, bancoSeleccionado } = req.body;
    const usuarioId = req.user.id;

    console.log('📦 Recibiendo compra - Paquete ID:', paqueteId, 'Usuario:', usuarioId);

    const paquete = await PaqueteAcompanamiento.findOne({ id: paqueteId });
    
    if (!paquete) {
      return res.status(404).json({ 
        success: false, 
        message: 'Paquete no encontrado' 
      });
    }

    // ✅ VALIDACIÓN MEJORADA - SOLO bloquear si tiene sesiones disponibles
    const usuario = await User.findById(usuarioId);
    const paqueteConSesiones = usuario.paquetesAcompanamientoComprados.some(
      p => p.paqueteId === paqueteId && 
           p.estado === 'activo' && 
           p.sesionesUsadas < p.sesionesTotales  // ← NUEVA LÓGICA
    );

    if (paqueteConSesiones) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ya tienes este paquete con sesiones disponibles. No puedes comprarlo nuevamente.' 
      });
    }

    // ✅ CREAR ORDEN DEL PAQUETE
    const ordenPaquete = new OrdenPaquete({
      usuarioId,
      paqueteId: parseInt(paqueteId),
      total: paquete.precio,
      metodoPago: 'pse',
      bancoSeleccionado,
      estado: 'completada'
    });

    await ordenPaquete.save();

    // ✅ AGREGAR PAQUETE AL USUARIO
    await User.findByIdAndUpdate(usuarioId, {
      $push: {
        paquetesAcompanamientoComprados: {
          paqueteId: parseInt(paqueteId),
          paqueteNombre: paquete.nombre,
          fechaCompra: new Date(),
          sesionesUsadas: 0,
          sesionesTotales: paquete.sesionesIncluidas,
          estado: 'activo',
          fechaExpiracion: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        }
      }
    });

    console.log('✅ Orden de paquete creada y usuario actualizado');

    // 🎁 ✅ ENTREGAR KIT INCLUIDO AUTOMÁTICAMENTE
    const categoriaToKitId = {
      'basico': 1,
      'intermedio': 2, 
      'integral': 3
    };

    const kitIdIncluido = categoriaToKitId[paquete.categoria];
    
    if (kitIdIncluido) {
      // Info del kit
      const kitsInfo = {
        1: { nombre: "Kit Básico", precio: 63800 },
        2: { nombre: "Kit Intermedio", precio: 79200 },
        3: { nombre: "Kit Integral", precio: 112200 }
      };

      const kitIncluido = kitsInfo[kitIdIncluido];

      if (kitIncluido) {
        // ✅ CREAR ORDEN DEL KIT - SIEMPRE CREAR (sin verificar duplicados)
        const ordenKit = new Orden({
          usuarioId,
          kitId: kitIdIncluido,
          total: 0,
          metodoPago: 'incluido_en_paquete',
          bancoSeleccionado: 'incluido_en_paquete',
          estado: 'pendiente'
        });

        await ordenKit.save();

        // ✅ AGREGAR KIT AL USUARIO - SIEMPRE AGREGAR (sin verificar duplicados)
        await User.findByIdAndUpdate(usuarioId, {
          $push: {
            kitsComprados: {
              kitId: kitIdIncluido,
              kitNombre: kitIncluido.nombre,
              fechaCompra: new Date(),
              paqueteOrigen: parseInt(paqueteId),
              sesionesUsadas: 0,
              estado: 'activo'
            }
          }
        });

        console.log(`🎁 Kit ${kitIdIncluido} incluido automáticamente con el paquete ${paqueteId}`);
      }
    }

    res.status(201).json({ 
      success: true, 
      message: `¡${paquete.nombre} comprado exitosamente!`, 
      data: ordenPaquete 
    });

  } catch (error) {
    console.error('💥 Error creando orden de paquete:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar la compra' 
    });
  }
};

// @desc    Get user's purchased packages
// @route   GET /api/paquetes-acompanamiento/mis-paquetes
// @access  Private
export const getMisPaquetes = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    
    const usuario = await User.findById(usuarioId).select('paquetesAcompanamientoComprados');
    if (!usuario) {
      return res.status(404).json({ 
        success: false, 
        message: 'Usuario no encontrado' 
      });
    }

    res.json({ 
      success: true, 
      data: usuario.paquetesAcompanamientoComprados || [] 
    });

  } catch (error) {
    console.error('Error obteniendo paquetes del usuario:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al cargar tus paquetes' 
    });
  }
};
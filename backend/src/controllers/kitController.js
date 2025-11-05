import { Orden } from '../models/Orden.js';
import { User } from '../models/User.js';

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

    // ✅ VALIDAR SI EL USUARIO YA TIENE ESTE KIT
    const usuario = await User.findById(usuarioId);
    const kitYaComprado = usuario.kitsComprados.some(
      kit => kit.kitId === parseInt(kitId) && kit.estado === 'activo'
    );

    if (kitYaComprado) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ya tienes este kit comprado. No puedes comprarlo nuevamente.' 
      });
    }

    // ✅ MAPEO DE KITS (sin mongoId - solo number)
    const kitsInfo = {
      1: { 
        nombre: "Kit Basico", 
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

    // ✅ CREAR ORDEN con NUMBER (no ObjectId)
    const orden = new Orden({
      usuarioId,
      kitId: kitId,
      total: kit.precio,
      metodoPago: 'pse',
      bancoSeleccionado,
      estado: 'completada'
    });

    await orden.save();

    // ✅ AGREGAR KIT AL USUARIO
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

    console.log('✅ Orden creada y usuario actualizado');

    res.status(201).json({ 
      success: true, 
      message: `¡${kit.nombre} comprado exitosamente!`, 
      data: orden 
    });

  } catch (error) {
    console.error('💥 Error creando orden:', error);
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
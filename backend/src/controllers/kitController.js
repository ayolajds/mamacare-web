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

    // ✅ MAPEO DE KITS (sin mongoId - solo number)
    const kitsInfo = {
      1: { 
        nombre: "Kit Esencial de Recuerdos", 
        precio: 89900
      },
      2: { 
        nombre: "Kit Memoria Avanzada", 
        precio: 169900
      },
      3: { 
        nombre: "Kit Legado Eterno", 
        precio: 299900
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
      kitId: kitId, // ← NUMBER directamente
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
          kitId: kitId,
          kitNombre: kit.nombre,
          fechaCompra: new Date()
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
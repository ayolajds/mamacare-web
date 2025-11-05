import { PaqueteAcompanamiento } from '../models/PaqueteAcompanamiento.js';
import { OrdenPaquete } from '../models/OrdenPaquete.js';
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

    // ✅ VALIDAR SI EL USUARIO YA TIENE ESTE PAQUETE
    const usuario = await User.findById(usuarioId);
    const paqueteYaComprado = usuario.paquetesAcompanamientoComprados.some(
      paquete => paquete.paqueteId === parseInt(paqueteId) && paquete.estado === 'activo'
    );

    if (paqueteYaComprado) {
      return res.status(400).json({ 
        success: false, 
        message: 'Ya tienes este paquete comprado. No puedes comprarlo nuevamente.' 
      });
    }

    // ✅ MAPEO DE PAQUETES (igual que kits - con number IDs)
    const paquetesInfo = {
      1: { 
        nombre: "Paquete Básico de Acompañamiento", 
        precio: 350000,
        sesionesTotales: 4,
        duracionSesion: 60
      },
      2: { 
        nombre: "Paquete Intermedio de Acompañamiento", 
        precio: 650000,
        sesionesTotales: 8,
        duracionSesion: 60
      },
      3: { 
        nombre: "Paquete Premium de Acompañamiento", 
        precio: 950000,
        sesionesTotales: 12,
        duracionSesion: 60
      }
    };

    const paquete = paquetesInfo[paqueteId];
    if (!paquete) {
      return res.status(404).json({ 
        success: false, 
        message: 'Paquete no encontrado' 
      });
    }

    // ✅ CREAR ORDEN con NUMBER (igual que kits)
    const orden = new OrdenPaquete({
      usuarioId,
      paqueteId: paqueteId,
      total: paquete.precio,
      metodoPago: 'pse',
      bancoSeleccionado,
      estado: 'completada'
    });

    await orden.save();

    // ✅ AGREGAR PAQUETE AL USUARIO (igual que kits)
    await User.findByIdAndUpdate(usuarioId, {
      $push: {
        paquetesAcompanamientoComprados: {
          paqueteId: parseInt(paqueteId),
          paqueteNombre: paquete.nombre,
          fechaCompra: new Date(),
          sesionesUsadas: 0,
          sesionesTotales: paquete.sesionesTotales,
          estado: 'activo',
          fechaExpiracion: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) // 90 días
        }
      }
    });

    console.log('✅ Orden de paquete creada y usuario actualizado');

    res.status(201).json({ 
      success: true, 
      message: `¡${paquete.nombre} comprado exitosamente!`, 
      data: orden 
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
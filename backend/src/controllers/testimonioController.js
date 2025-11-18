import Testimonio from '../models/Testimonio.js';
import { User } from '../models/User.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Logger from '../utils/logger.js';

// Configuración multer - CORREGIDA
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    
    // Crear directorio si no existe
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('✅ Directorio uploads creado:', uploadsDir);
    }
    
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, 'testimonio-' + unique + extension);
  }
});

export const upload = multer({
  storage,
  limits: { fileSize: 3 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes'), false);
    }
  }
});

// ====== ENDPOINTS PÚBLICOS ======

export const obtenerTestimonios = async (_req, res) => {
  try {
    const testimonios = await Testimonio.find({ estado: 'aprobado' })
      .sort({ createdAt: -1 })
      .lean();
    
    Logger.info(`Testimonios: Enviando ${testimonios.length} testimonios aprobados`);
    
    return res.json({ 
      success: true, 
      testimonios 
    });
  } catch (error) {
    Logger.error('Error obteniendo testimonios', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error al obtener testimonios' 
    });
  }
};

// ====== ENDPOINTS PARA USUARIOS AUTENTICADOS ======

export const crearTestimonio = async (req, res) => {
  try {
    console.log('📨 Creando testimonio...');
    console.log('🧾 CT:', req.headers['content-type']);
    console.log('📦 Body keys:', Object.keys(req.body || {}));
    console.log('🖼️ File:', req.file ? `Subido: ${req.file.filename}` : 'sin archivo');

    if (!req.user?.id) {
      return res.status(401).json({ message: 'No autenticado' });
    }

    const usuario = await User.findById(req.user.id);
    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no válido' });
    }

    // Verificar permisos
    const puedeDarTestimonio = usuario.paquetesAcompanamientoComprados?.length > 0;
    if (!puedeDarTestimonio) {
      Logger.warn('Usuario sin permisos para testimonio', { userId: req.user.id });
      return res.status(403).json({ 
        message: 'Necesitas tener un paquete de acompañamiento para compartir testimonios' 
      });
    }

    const {
      textoCorto = '',
      historiaCompleta = '',
      impacto = '',
      ciudad = '',
      tags = '[]'
    } = req.body;

    // Validar campo requerido
    if (!textoCorto.trim()) {
      return res.status(400).json({
        message: 'El testimonio breve es requerido'
      });
    }

    // Parse tags
    let tagsArray = [];
    try {
      tagsArray = JSON.parse(tags);
    } catch {
      tagsArray = [];
    }

    const testimonioData = {
      textoCorto: textoCorto.trim(),
      historiaCompleta: (historiaCompleta || textoCorto).trim(),
      impacto: impacto.trim(),
      ciudad: ciudad.trim(),
      tags: tagsArray,
      usuarioId: req.user.id,
      nombre: `${usuario.name} ${usuario.lastName || ''}`.trim(),
      email: usuario.email,
      estado: 'pendiente',
    };

    // Imagen opcional - CORREGIDO
    if (req.file) {
      // Verificar que el archivo realmente existe
      const filePath = path.join(process.cwd(), 'uploads', req.file.filename);
      
      if (!fs.existsSync(filePath)) {
        console.error('❌ Archivo no encontrado:', filePath);
        return res.status(500).json({
          message: 'Error al guardar la imagen'
        });
      }
      
      testimonioData.imagenPath = `/uploads/${req.file.filename}`;
      console.log('✅ Imagen guardada en:', testimonioData.imagenPath);
    }

    const testimonio = await Testimonio.create(testimonioData);
    
    Logger.info('Testimonio creado exitosamente', { 
      testimonioId: testimonio._id,
      userId: req.user.id,
      tieneImagen: !!req.file
    });
    
    return res.status(201).json({
      success: true,
      message: 'Testimonio enviado para revisión. Será publicado una vez aprobado.',
      testimonio
    });

  } catch (error) {
    console.error('❌ Error creando testimonio:', error);
    
    // Si hay un archivo subido pero hubo error, eliminarlo
    if (req.file) {
      const filePath = path.join(process.cwd(), 'uploads', req.file.filename);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log('🗑️ Archivo temporal eliminado:', req.file.filename);
        }
      } catch (deleteError) {
        console.error('Error eliminando archivo temporal:', deleteError);
      }
    }
    
    return res.status(400).json({
      success: false,
      message: error.message || 'Error al crear testimonio'
    });
  }
};

export const verificarPermisos = async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.json({ puedeDarTestimonio: false });
    }

    const usuario = await User.findById(req.user.id);
    const puedeDarTestimonio = usuario?.paquetesAcompanamientoComprados?.length > 0;

    Logger.info('Verificación de permisos', { 
      userId: req.user.id, 
      puedeDarTestimonio 
    });

    return res.json({ 
      success: true, 
      puedeDarTestimonio 
    });
  } catch (error) {
    Logger.error('Error verificando permisos', error);
    return res.json({ puedeDarTestimonio: false });
  }
};

// ====== ENDPOINTS PARA ADMIN ======

export const obtenerTodosTestimonios = async (req, res) => {
  try {
    const { estado } = req.query;
    
    let filtro = {};
    if (estado && ['pendiente', 'aprobado', 'rechazado'].includes(estado)) {
      filtro.estado = estado;
    }

    const testimonios = await Testimonio.find(filtro)
      .sort({ createdAt: -1 })
      .lean();
    
    Logger.info('Admin: Obteniendo todos los testimonios', { 
      adminId: req.user.id,
      total: testimonios.length,
      filtro 
    });
    
    return res.json({ 
      success: true, 
      testimonios 
    });
  } catch (error) {
    Logger.error('Error obteniendo todos los testimonios', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error al obtener testimonios' 
    });
  }
};

export const obtenerTestimonio = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonio = await Testimonio.findById(id).lean();
    
    if (!testimonio) {
      Logger.warn('Testimonio no encontrado', { testimonioId: id });
      return res.status(404).json({
        success: false,
        message: 'Testimonio no encontrado'
      });
    }
    
    Logger.info('Admin: Obteniendo testimonio específico', { 
      adminId: req.user.id,
      testimonioId: id 
    });
    
    return res.json({
      success: true,
      testimonio
    });
  } catch (error) {
    Logger.error('Error obteniendo testimonio', error);
    return res.status(500).json({
      success: false,
      message: 'Error al obtener testimonio'
    });
  }
};

export const aprobarTestimonio = async (req, res) => {
  try {
    const { id } = req.params;
    
    const testimonio = await Testimonio.findByIdAndUpdate(
      id, 
      { 
        estado: 'aprobado',
        motivoRechazo: ''
      },
      { new: true }
    );
    
    if (!testimonio) {
      return res.status(404).json({
        success: false,
        message: 'Testimonio no encontrado'
      });
    }
    
    Logger.info('Admin: Testimonio aprobado', { 
      adminId: req.user.id,
      testimonioId: id 
    });
    
    return res.json({ 
      success: true, 
      message: 'Testimonio aprobado exitosamente',
      testimonio 
    });
  } catch (error) {
    Logger.error('Error aprobando testimonio', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error aprobando testimonio' 
    });
  }
};

export const rechazarTestimonio = async (req, res) => {
  try {
    const { id } = req.params;
    const { motivo } = req.body;
    
    const testimonio = await Testimonio.findByIdAndUpdate(
      id, 
      { 
        estado: 'rechazado',
        motivoRechazo: motivo || 'Sin motivo especificado'
      },
      { new: true }
    );
    
    if (!testimonio) {
      return res.status(404).json({
        success: false,
        message: 'Testimonio no encontrado'
      });
    }
    
    Logger.info('Admin: Testimonio rechazado', { 
      adminId: req.user.id,
      testimonioId: id,
      motivo 
    });
    
    return res.json({ 
      success: true, 
      message: 'Testimonio rechazado exitosamente',
      testimonio 
    });
  } catch (error) {
    Logger.error('Error rechazando testimonio', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error rechazando testimonio' 
    });
  }
};

export const eliminarTestimonio = async (req, res) => {
  try {
    const { id } = req.params;
    
    const testimonio = await Testimonio.findById(id);
    
    if (!testimonio) {
      return res.status(404).json({
        success: false,
        message: 'Testimonio no encontrado'
      });
    }

    // Eliminar archivo de imagen si existe
    if (testimonio.imagenPath) {
      const fileName = testimonio.imagenPath.replace('/uploads/', '');
      const filePath = path.join(process.cwd(), 'uploads', fileName);
      
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log('🗑️ Imagen eliminada:', fileName);
        }
      } catch (deleteError) {
        console.error('Error eliminando imagen:', deleteError);
      }
    }

    await Testimonio.findByIdAndDelete(id);
    
    Logger.info('Admin: Testimonio eliminado', { 
      adminId: req.user.id,
      testimonioId: id 
    });
    
    return res.json({ 
      success: true, 
      message: 'Testimonio eliminado exitosamente'
    });
  } catch (error) {
    Logger.error('Error eliminando testimonio', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error eliminando testimonio' 
    });
  }
};
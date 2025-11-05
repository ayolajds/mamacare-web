import Testimonio from '../models/Testimonio.js';
import { User } from '../models/User.js';
import multer from 'multer';
import path from 'path';

// ====== Configuración de multer (subida de imagen) ======
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/'),
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'testimonio-' + unique + path.extname(file.originalname));
  }
});

const fileFilter = (_req, file, cb) => {
  if (file?.mimetype?.startsWith('image/')) cb(null, true);
  else cb(new Error('Solo se permiten imágenes'), false);
};

export const upload = multer({
  storage,
  limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
  fileFilter
});

// ====== Controladores ======
export const crearTestimonio = async (req, res) => {
  try {
    console.log('📨 Recibiendo testimonio...');
    console.log('🧾 CT:', req.headers['content-type']);
    console.log('📦 Body keys:', Object.keys(req.body || {}));
    console.log('🖼️ File:', !!req.file ? req.file.originalname : 'sin archivo');

    if (!req.user?.id) return res.status(401).json({ error: 'No autenticado' });

    const usuario = await User.findById(req.user.id).lean();
    if (!usuario) return res.status(401).json({ error: 'Usuario no válido' });

    const tienePaquetes = Array.isArray(usuario.paquetesAcompanamientoComprados)
      && usuario.paquetesAcompanamientoComprados.length > 0;

    if (!tienePaquetes) {
      return res.status(403).json({
        error: 'Solo usuarios con paquetes comprados pueden dar testimonios'
      });
    }

    const {
      textoCorto = '',
      historiaCompleta = '',
      impacto = '',
      ciudad = '',
      tags
    } = req.body;

    // Parse de tags
    let tagsArray = [];
    if (typeof tags === 'string' && tags.trim() !== '') {
      try {
        const parsed = JSON.parse(tags);
        tagsArray = Array.isArray(parsed) ? parsed : [];
      } catch { tagsArray = []; }
    } else if (Array.isArray(tags)) {
      tagsArray = tags;
    }

    const testimonioData = {
      textoCorto,
      historiaCompleta,
      impacto,
      ciudad,
      tags: tagsArray,
      usuarioId: req.user.id,
      nombre: usuario.name,
      email: usuario.email,
    };

    if (req.file) {
      testimonioData.imagen = req.file.filename;
      testimonioData.imagenPath = `/uploads/${req.file.filename}`;
    }

    const testimonio = await Testimonio.create(testimonioData);
    return res.status(201).json({
      success: true,
      message: 'Testimonio enviado para revisión',
      testimonio
    });
  } catch (error) {
    console.error('❌ Error creando testimonio:', error);
    return res.status(400).json({
      success: false,
      error: error?.message || 'Error al crear testimonio'
    });
  }
};

export const obtenerTestimonios = async (_req, res) => {
  try {
    const testimonios = await Testimonio.find({ estado: 'aprobado' })
      .sort({ createdAt: -1 })
      .lean();
    return res.json({ success: true, testimonios });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Error al obtener testimonios' });
  }
};

export const verificarPermisos = async (req, res) => {
  try {
    const usuario = await User.findById(req.user.id).lean();
    const puedeDarTestimonio = !!usuario
      && Array.isArray(usuario.paquetesAcompanamientoComprados)
      && usuario.paquetesAcompanamientoComprados.length > 0;

    return res.json({ success: true, puedeDarTestimonio });
  } catch {
    return res.status(500).json({ success: false, error: 'Error al verificar permisos' });
  }
};

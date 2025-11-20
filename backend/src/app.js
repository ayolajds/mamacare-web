// 1) Vars de entorno primero
import './config/env.js';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { connectDB } from './config/database.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import professionalRoutes from './routes/professionalRoutes.js';
import patientRoutes from './routes/patientRoutes.js';
import kitRoutes from './routes/kits.js';
import paqueteAcompanamientoRoutes from './routes/paqueteAcompanamientoRoutes.js';
import testimonioRoutes from './routes/testimonioRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
const API_VERSION = process.env.API_VERSION || 'v1';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares base
app.use(cors());
app.use(morgan('dev'));

// LOG de Content-Type para depurar lo tuyo
app.use((req, _res, next) => {
  console.log(`➡️  ${req.method} ${req.originalUrl}  CT: ${req.headers['content-type'] || '—'}`);
  next();
});

// Acepta x-www-form-urlencoded (no rompe multipart)
app.use(express.urlencoded({ extended: true }));

// Solo JSON si NO es multipart/form-data
app.use((req, res, next) => {
  // req.is() reconoce "multipart/form-data; boundary=..."
  if (req.is('multipart/form-data')) return next();
  return express.json({ limit: '1mb' })(req, res, next);
});

// Estáticos - CORREGIDO: usa process.cwd() para raíz del proyecto
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Rutas
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/users`, userRoutes);
app.use(`/api/${API_VERSION}/admin`, adminRoutes);
app.use(`/api/${API_VERSION}/appointments`, appointmentRoutes);
app.use(`/api/${API_VERSION}/professional`, professionalRoutes);
app.use(`/api/${API_VERSION}/patient`, patientRoutes);
app.use(`/api/${API_VERSION}/kits`, kitRoutes);
app.use(`/api/${API_VERSION}/paquetes-acompanamiento`, paqueteAcompanamientoRoutes);
app.use(`/api/${API_VERSION}/testimonios`, testimonioRoutes);

// 404
app.use((req, res) => {
  console.log('⚠️  Ruta no encontrada:', req.method, req.originalUrl);
  res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// Errores de subida (multer)
app.use((err, _req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ success: false, message: err.message });
  }
  if (err?.message === 'Solo se permiten imágenes') {
    return res.status(400).json({ success: false, message: err.message });
  }
  return next(err);
});

// Global
app.use((error, _req, res, _next) => {
  console.error('❌ Error global:', error?.message || error);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

// Bootstrap - CORREGIDO
(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB conectado');

    const fs = await import('fs');
    // CORRECCIÓN: Usar process.cwd() para crear uploads en la raíz del proyecto
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
      console.log('✅ Carpeta uploads creada en:', uploadsDir);
    } else {
      console.log('✅ Carpeta uploads ya existe en:', uploadsDir);
    }

    app.listen(PORT, () => {
      console.log(`🚀 API http://localhost:${PORT}/api/${API_VERSION}`);
      console.log('📋 Endpoints disponibles:');
      console.log(`   🔐 Auth: http://localhost:${PORT}/api/${API_VERSION}/auth`);
      console.log(`   👤 Users: http://localhost:${PORT}/api/${API_VERSION}/users`);
      console.log(`   👑 Admin: http://localhost:${PORT}/api/${API_VERSION}/admin`);
      console.log(`   📅 Appointments: http://localhost:${PORT}/api/${API_VERSION}/appointments`);
      console.log(`   👨‍⚕️ Professional: http://localhost:${PORT}/api/${API_VERSION}/professional`);
      console.log(`   🎗️ Patient: http://localhost:${PORT}/api/${API_VERSION}/patient`);
      console.log(`   📦 Kits: http://localhost:${PORT}/api/${API_VERSION}/kits`);
      console.log(`   💝 Paquetes Acompañamiento: http://localhost:${PORT}/api/${API_VERSION}/paquetes-acompanamiento`);
      console.log(`   📖 Testimonios: http://localhost:${PORT}/api/${API_VERSION}/testimonios`);
      console.log(`   📁 Archivos estáticos: http://localhost:${PORT}/uploads`);
    });
  } catch (err) {
    console.error('❌ No se pudo conectar a MongoDB:', err.message);
    process.exit(1);
  }
})();
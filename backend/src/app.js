// ✅ ESTO DEBE SER LA PRIMERA LÍNEA DE TODO TU PROYECTO
import './config/env.js';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/database.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js'; // ✅ AGREGAR ESTA 
import professionalRoutes from './routes/professionalRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
const API_VERSION = process.env.API_VERSION || 'v1';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/users`, userRoutes);
app.use(`/api/${API_VERSION}/admin`, adminRoutes);
app.use(`/api/${API_VERSION}/appointments`, appointmentRoutes); // ✅ AGREGAR ESTA RUTA
app.use(`/api/${API_VERSION}/professional`, professionalRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  console.log('⚠️  Ruta no encontrada:', req.method, req.originalUrl);
  res.status(404).json({ 
    success: false, 
    message: 'Ruta no encontrada' 
  });
});

// Manejo global de errores
app.use((error, req, res, next) => {
  console.error('❌ Error global:', error);
  res.status(500).json({ 
    success: false, 
    message: 'Error interno del servidor' 
  });
});

(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB conectado');
    app.listen(PORT, () => {
      console.log(`🚀 API http://localhost:${PORT}/api/${API_VERSION}`);
      console.log('📋 Endpoints disponibles:');
      console.log(`   🔐 Auth: http://localhost:${PORT}/api/${API_VERSION}/auth`);
      console.log(`   👤 Users: http://localhost:${PORT}/api/${API_VERSION}/users`);
      console.log(`   👑 Admin: http://localhost:${PORT}/api/${API_VERSION}/admin`);
      console.log(`   📅 Appointments: http://localhost:${PORT}/api/${API_VERSION}/appointments`);
      console.log(`   👨‍⚕️ Professional: http://localhost:${PORT}/api/${API_VERSION}/professional`);
    });
  } catch (err) {
    console.error('❌ No se pudo conectar a MongoDB:', err.message);
    process.exit(1);
  }
})();
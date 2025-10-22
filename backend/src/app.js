import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/database.js';
// COMENTA TEMPORALMENTE LOS NUEVOS IMPORTS HASTA QUE LOS CREES
// import Logger from './utils/logger.js';
// import { requestLogger } from './middlewares/requestLogger.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const API_VERSION = process.env.API_VERSION || 'v1';

app.use(cors());
app.use(morgan('dev')); // Mantén 'dev' por ahora
app.use(express.json());
// app.use(requestLogger); // Comenta temporalmente

// Rutas
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/users`, userRoutes);
app.use(`/api/${API_VERSION}/admin`, adminRoutes);

// ✅ Manejo de rutas no encontradas - CORREGIDO
app.use((req, res) => {
  console.log('⚠️  Ruta no encontrada:', req.method, req.originalUrl);
  res.status(404).json({ 
    success: false, 
    message: 'Ruta no encontrada' 
  });
});

// ✅ Manejo global de errores - CORREGIDO
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
    });
  } catch (err) {
    console.error('❌ No se pudo conectar a MongoDB:', err.message);
    process.exit(1);
  }
})();
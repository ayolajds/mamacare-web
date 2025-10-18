import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './config/database.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const API_VERSION = process.env.API_VERSION || 'v1';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/users`, userRoutes);

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 API http://localhost:${PORT}/api/${API_VERSION}`));
  } catch (err) {
    console.error('❌ No se pudo conectar a Mongo:', err.message);
    process.exit(1);
  }
})();

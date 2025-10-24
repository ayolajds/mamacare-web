// scripts/seedAdmin.js (VERSIÓN MODIFICADA)
import 'dotenv/config';
import { connectDB } from '../src/config/database.js';
import { User } from '../src/models/User.js';
import { hashPassword } from '../src/utils/password.js';

async function main() {
  const {
    ADMIN_NAME = 'Admin',
    ADMIN_EMAIL = 'admin@mamare.com',
    ADMIN_PASSWORD = 'Admin123!'
  } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('❌ Faltan ADMIN_EMAIL o ADMIN_PASSWORD en el .env');
    process.exit(1);
  }

  await connectDB();

  let user = await User.findOne({ email: ADMIN_EMAIL });
  
  if (user) {
    console.log('ℹ️ El admin ya existe, actualizando campos faltantes...');
    
    // ACTUALIZAR campos faltantes
    user.lastName = 'Root';
    user.phone = '0000000000';
    user.birthDate = new Date('1990-01-01');
    
    await user.save();
    console.log('✅ Admin actualizado con campos faltantes');
  } else {
    // CREAR nuevo admin
    user = await User.create({
      name: ADMIN_NAME,
      lastName: 'Root',
      email: ADMIN_EMAIL,
      role: 'admin',
      isActive: true,
      phone: '0000000000',
      birthDate: new Date('1990-01-01'),
      passwordHash: await hashPassword(ADMIN_PASSWORD)
    });
    console.log('✅ Admin creado con éxito');
  }

  console.log('📧 Email:', ADMIN_EMAIL);
  process.exit(0);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
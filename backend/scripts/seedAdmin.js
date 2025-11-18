import 'dotenv/config';
import { connectDB } from '../src/config/database.js';
import { User } from '../src/models/User.js';
import { hashPassword } from '../src/utils/password.js';

async function main() {
  const {
    ADMIN_NAME = 'Admin Ma´Care',
    ADMIN_EMAIL = 'mama.c4re@gmail.com',
    ADMIN_PASSWORD = 'MamaCare2024!Secure'
  } = process.env;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('❌ Faltan ADMIN_EMAIL o ADMIN_PASSWORD en el .env');
    process.exit(1);
  }

  await connectDB();

  let user = await User.findOne({ email: ADMIN_EMAIL });
  
  if (user) {
    console.log('ℹ️ El admin ya existe, actualizando todos los campos...');
    
    // ACTUALIZAR todos los campos
    user.name = ADMIN_NAME;
    user.lastName = 'Ma´Care';
    user.phone = '+57-300-123-4567';
    user.birthDate = new Date('1985-05-15');
    user.passwordHash = await hashPassword(ADMIN_PASSWORD);
    
    await user.save();
    console.log('✅ Admin actualizado completamente');
  } else {
    // CREAR nuevo admin
    user = await User.create({
      name: ADMIN_NAME,
      lastName: 'Ma´Care',
      email: ADMIN_EMAIL,
      role: 'admin',
      isActive: true,
      phone: '+57-300-123-4567',
      birthDate: new Date('1985-05-15'),
      passwordHash: await hashPassword(ADMIN_PASSWORD)
    });
    console.log('✅ Nuevo admin creado con éxito');
  }

  console.log('👑 Admin actualizado:');
  console.log('📧 Email:', user.email);
  console.log('👤 Nombre:', `${user.name} ${user.lastName}`);
  console.log('📞 Teléfono:', user.phone);
  console.log('🎂 Fecha nacimiento:', user.birthDate.toISOString().split('T')[0]);
  console.log('🔑 Contraseña: **********');
  
  process.exit(0);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
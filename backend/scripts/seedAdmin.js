// scripts/seedAdmin.js
import 'dotenv/config';
import { connectDB } from '../src/config/database.js';
import { User } from '../src/models/User.js';
import { hashPassword } from '../src/utils/password.js';

async function main() {
  // Puedes definirlos en .env (recomendado) o usar estos defaults
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
    console.log('ℹ️ El admin ya existe:', ADMIN_EMAIL);
    process.exit(0);
  }

  user = await User.create({
    name: ADMIN_NAME,
    lastName: 'Root',
    email: ADMIN_EMAIL,
    role: 'admin',
    isActive: true,
    passwordHash: await hashPassword(ADMIN_PASSWORD)
  });

  console.log('✅ Admin creado con éxito:');
  console.log('   Email:', ADMIN_EMAIL);
  console.log('   Password:', ADMIN_PASSWORD);
  process.exit(0);
}

main().catch(err => {
  console.error('❌ Error al crear admin:', err.message);
  process.exit(1);
});

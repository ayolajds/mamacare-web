// 📁 scripts/seedKitsAndPaquetes.js - VERSIÓN COMPLETA ACTUALIZADA
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const seedData = async () => {
  try {
    // ✅ IMPORTAR DESDE src/models/
    const { Kit } = await import('../src/models/Kit.js');
    const { PaqueteAcompanamiento } = await import('../src/models/PaqueteAcompanamiento.js');
    
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mamacare';
    console.log(`📡 Conectando a: ${MONGODB_URI}...`);
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado a MongoDB...');

    // 🎯 DATOS PARA SEMILLAR - KITS
    const kits = [
      {
        id: 1,
        nombre: 'Kit Básico',
        categoria: 'basico',
        precio: 63800,
        imagen: 'assets/images/kit-basico.jpg',
        descripcion: 'Selección básica para iniciar tu ritual y documentar tus momentos.',
        elementos: ["Diario", "Mazo", "Accesorio"],
        beneficios: [
          {
            titulo: "Material físico premium",
            descripcion: "Elementos cuidadosamente seleccionados para tu bienestar"
          },
          {
            titulo: "Guía de uso", 
            descripcion: "Instrucciones para aprovechar al máximo tu kit"
          }
        ],
        incluyeQR: false
      },
      {
        id: 2,
        nombre: 'Kit Intermedio', 
        categoria: 'intermedio',
        precio: 79200,
        imagen: 'assets/images/kit-intermedio.jpg',
        descripcion: 'Incluye acceso digital y elementos extra para profundizar en tu cuidado.',
        elementos: ["Acceso digital (QR)", "Espejo", "Accesorio"],
        beneficios: [
          {
            titulo: "Recursos digitales",
            descripcion: "Contenido exclusivo disponible mediante código QR"
          },
          {
            titulo: "Elementos adicionales",
            descripcion: "Más herramientas para tu proceso de autocuidado"
          }
        ],
        incluyeQR: true
      },
      {
        id: 3,
        nombre: 'Kit Integral',
        categoria: 'integral',
        precio: 112200,
        imagen: 'assets/images/kit-integral.jpg',
        descripcion: 'Experiencia completa con elementos para un ritual más profundo.',
        elementos: ["Vela", "Pañoleta", "Caja"],
        beneficios: [
          {
            titulo: "Experiencia completa",
            descripcion: "Todos los elementos necesarios para un ritual transformador"
          },
          {
            titulo: "Materiales premium",
            descripcion: "Productos de alta calidad para tu bienestar integral"
          }
        ],
        incluyeQR: false
      }
    ];

    // 🎯 DATOS PARA SEMILLAR - PAQUETES (CON kitIncluidoId)
    const paquetes = [
      {
        id: 1, // ✅ NUEVO CAMPO
        nombre: 'Paquete Básico de Acompañamiento',
        categoria: 'basico',
        kitIncluidoId: 1, // ✅ NUEVO CAMPO - Relación directa con Kit 1
        precio: 378180,
        imagen: 'assets/images/paquete-basico.jpg',
        descripcion: 'Perfecto para comenzar tu proceso de acompañamiento con sesiones básicas.',
        elementos: ["4 sesiones individuales", "Kit Básico incluido", "Seguimiento personalizado"],
        beneficios: [
          {
            titulo: "Atención personalizada",
            descripcion: "Sesiones one-on-one con especialistas certificados"
          },
          {
            titulo: "Material físico incluido", 
            descripcion: "Recibe tu Kit Básico en la comodidad de tu hogar"
          }
        ],
        sesionesIncluidas: 4,
        duracionSesion: 60,
        tipoSesiones: ['individual']
      },
      {
        id: 2, // ✅ NUEVO CAMPO
        nombre: 'Paquete Intermedio de Acompañamiento',
        categoria: 'intermedio',
        kitIncluidoId: 2, // ✅ NUEVO CAMPO - Relación directa con Kit 2
        precio: 505120,
        imagen: 'assets/images/paquete-intermedio.jpg', 
        descripcion: 'Para un trabajo más profundo y continuo con mayor flexibilidad.',
        elementos: ["8 sesiones individuales", "Kit Intermedio incluido", "Acceso a talleres", "Soporte prioritario"],
        beneficios: [
          {
            titulo: "Mayor flexibilidad",
            descripcion: "Combina sesiones individuales y grupales según tus necesidades"
          },
          {
            titulo: "Recursos digitales",
            descripcion: "Acceso a contenido exclusivo y comunidad de apoyo"
          }
        ],
        sesionesIncluidas: 8,
        duracionSesion: 60,
        tipoSesiones: ['individual', 'grupal']
      },
      {
        id: 3, // ✅ NUEVO CAMPO
        nombre: 'Paquete Integral de Acompañamiento',
        categoria: 'integral',
        kitIncluidoId: 3, // ✅ NUEVO CAMPO - Relación directa con Kit 3
        precio: 684420,
        imagen: 'assets/images/paquete-integral.jpg',
        descripcion: 'Acompañamiento completo y transformador para un cambio profundo.',
        elementos: ["12 sesiones personalizadas", "Kit Integral incluido", "Talleres ilimitados", "Soporte 24/7", "Sesiones familiares"],
        beneficios: [
          {
            titulo: "Atención integral",
            descripcion: "Abordaje completo que incluye sesiones individuales, grupales y familiares"
          },
          {
            titulo: "Soporte continuo", 
            descripcion: "Acceso prioritario y seguimiento constante durante todo el proceso"
          },
          {
            titulo: "Recursos premium",
            descripcion: "Materiales exclusivos y acceso a eventos especiales"
          }
        ],
        sesionesIncluidas: 12,
        duracionSesion: 60,
        tipoSesiones: ['individual', 'grupal', 'familiar', 'taller']
      }
    ];

    // 🗑️ LIMPIAR Y SEMILLAR
    console.log('🧹 Limpiando colecciones...');
    await Kit.deleteMany({});
    await PaqueteAcompanamiento.deleteMany({});

    console.log('🌱 Insertando datos...');
    await Kit.insertMany(kits);
    await PaqueteAcompanamiento.insertMany(paquetes);

    console.log('✅ ¡Semillado completado!');
    console.log(`📦 Kits: ${kits.length}`);
    console.log(`🎯 Paquetes: ${paquetes.length}`);

    // 📊 VERIFICACIÓN DETALLADA
    const kitsCount = await Kit.countDocuments();
    const paquetesCount = await PaqueteAcompanamiento.countDocuments();
    
    console.log(`\n📊 Verificación en BD:`);
    console.log(`   Kits: ${kitsCount}`);
    console.log(`   Paquetes: ${paquetesCount}`);
    
    // Mostrar relaciones
    console.log('\n🔗 Relaciones Paquete → Kit:');
    paquetes.forEach(paquete => {
      const kit = kits.find(k => k.id === paquete.kitIncluidoId);
      console.log(`   ${paquete.nombre} → ${kit?.nombre} (Kit ${paquete.kitIncluidoId})`);
    });

    process.exit(0);

  } catch (error) {
    console.error('💥 Error en el semillado:', error);
    process.exit(1);
  }
};

seedData();
export function requireRoles(...roles) {
  return (req, res, next) => {
    console.log('👑 Middleware requireRoles ejecutándose...');
    console.log('📋 Roles requeridos:', roles);
    console.log('👤 Usuario actual:', req.user);
    
    if (!req.user) {
      console.log('❌ No hay usuario en req.user');
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    if (!roles.includes(req.user.role)) {
      console.log(`❌ Usuario rol: "${req.user.role}", requiere:`, roles);
      return res.status(403).json({ message: 'Forbidden' });
    }
    
    console.log('✅ Autorización exitosa');
    next();
  };
}
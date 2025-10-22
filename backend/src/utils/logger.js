class Logger {
  static info(message, data = null) {
    console.log(`📗 [INFO] ${new Date().toLocaleTimeString()} - ${message}`);
    if (data && process.env.NODE_ENV !== 'production') {
      console.log('   📦 Data:', JSON.stringify(data, null, 2));
    }
  }

  static success(message, data = null) {
    console.log(`📘 [SUCCESS] ${new Date().toLocaleTimeString()} - ${message}`);
    if (data && process.env.NODE_ENV !== 'production') {
      console.log('   ✅ Result:', JSON.stringify(data, null, 2));
    }
  }

  static warn(message, data = null) {
    console.log(`📙 [WARN] ${new Date().toLocaleTimeString()} - ${message}`);
    if (data && process.env.NODE_ENV !== 'production') {
      console.log('   ⚠️  Details:', JSON.stringify(data, null, 2));
    }
  }

  static error(message, error = null) {
    console.log(`📕 [ERROR] ${new Date().toLocaleTimeString()} - ${message}`);
    if (error && process.env.NODE_ENV !== 'production') {
      console.log('   ❌ Stack:', error.stack || error.message);
    }
  }

  static auth(message, user = null) {
    console.log(`🔐 [AUTH] ${new Date().toLocaleTimeString()} - ${message}`);
    if (user && process.env.NODE_ENV !== 'production') {
      console.log('   👤 User:', { 
        id: user.id?.substring(0, 8) + '...', 
        role: user.role, 
        email: user.email 
      });
    }
  }

  static route(method, path, statusCode, duration = null) {
    const statusIcon = statusCode >= 400 ? '📕' : statusCode >= 300 ? '📙' : '📘';
    const durationMsg = duration ? `(${duration}ms)` : '';
    console.log(`${statusIcon} [ROUTE] ${method} ${path} → ${statusCode} ${durationMsg}`);
  }

  static database(message, data = null) {
    console.log(`🗄️  [DB] ${new Date().toLocaleTimeString()} - ${message}`);
    if (data && process.env.NODE_ENV !== 'production') {
      console.log('   💾 Operation:', JSON.stringify(data, null, 2));
    }
  }
}

export default Logger;
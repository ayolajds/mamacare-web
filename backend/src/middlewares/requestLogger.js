import Logger from '../utils/logger.js';

export function requestLogger(req, res, next) {
  const start = Date.now();
  
  // Log cuando la respuesta termina
  res.on('finish', () => {
    const duration = Date.now() - start;
    Logger.route(req.method, req.originalUrl, res.statusCode, duration);
  });

  next();
}
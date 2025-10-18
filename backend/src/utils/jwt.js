import jwt from 'jsonwebtoken';

const { JWT_SECRET = 'dev_secret', JWT_EXPIRES = '7d' } = process.env;

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

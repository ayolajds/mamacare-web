export const resetPasswordTemplate = (name, resetURL) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; }
    .header { color: #e15886; text-align: center; }
    .button { background: #e15886; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; }
    .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="header">MamaCare - Restablecer Contraseña</h2>
    <p>Hola <strong>${name}</strong>,</p>
    <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente botón:</p>
    <p style="text-align: center;">
      <a href="${resetURL}" class="button">Restablecer Contraseña</a>
    </p>
    <p>Este enlace expirará en 1 hora.</p>
    <p>Si no solicitaste este cambio, ignora este email.</p>
    <div class="footer">
      © 2024 MamaCare. Todos los derechos reservados.
    </div>
  </div>
</body>
</html>
`;

export const passwordUpdatedTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; }
    .header { color: #2d7d32; text-align: center; }
    .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="header">¡Contraseña Actualizada!</h2>
    <p>Hola <strong>${name}</strong>,</p>
    <p>Tu contraseña ha sido restablecida exitosamente.</p>
    <p>Si no realizaste esta acción, por favor contacta con soporte inmediatamente.</p>
    <div class="footer">
      © 2024 MamaCare. Todos los derechos reservados.
    </div>
  </div>
</body>
</html>
`;
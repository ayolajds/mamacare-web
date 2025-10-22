import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export async function sendMail({ to, subject, html }) {
  try {
    await transporter.sendMail({
      from: `"MamaCare 💕" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html
    });
    console.log(`✅ Correo enviado a ${to}`);
  } catch (err) {
    console.error('❌ Error enviando correo:', err.message);
  }
}

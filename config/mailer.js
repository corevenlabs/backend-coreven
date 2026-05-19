const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Usa el host oficial, no la IP
    port: 465,              // Cambiamos al puerto seguro SSL
    secure: true,           // true para el puerto 465

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Asegúrate de que esta sea una "Contraseña de Aplicación" de Google, no tu clave normal
    },

    tls: {
        // Esto ayuda si hay problemas de resolución de nombres con el certificado de Google en Render
        rejectUnauthorized: false
    }
});

module.exports = transporter;
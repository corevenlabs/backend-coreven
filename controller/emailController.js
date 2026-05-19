const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Deja esto en true para puerto 465
    
    // ESTA LÍNEA ES CLAVE EN RENDER:
    // Obliga a Node a resolver la IP usando el comportamiento nativo del sistema operativo
    connectionTimeout: 10000, // 10 segundos de límite para no congelar el servidor
    greetingTimeout: 10000,
    
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;
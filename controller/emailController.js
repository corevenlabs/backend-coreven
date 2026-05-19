const nodemailer = require("nodemailer");
const dns = require("dns"); // Importamos el módulo nativo de DNS
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    
    // FORZAR IPV4 EN RENDER:
    // Esta función obliga a resolver el host usando solo la familia 4 (IPv4)
    dnsLookup: (hostname, options, callback) => {
        dns.lookup(hostname, { family: 4 }, callback);
    },

    connectionTimeout: 10000,
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
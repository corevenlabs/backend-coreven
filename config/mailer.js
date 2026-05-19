const { Resend } = require("resend");
require("dotenv").config();

// Inicializamos Resend con la API Key configurada en Render
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = resend;
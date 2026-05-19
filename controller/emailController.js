const resend = require("../config/mailer") // Ahora importa Resend en lugar de Nodemailer

const sendEmail = async (req, res, next) => {
    try {

        const {nombre, email, mensaje} = req.body

        // Cambiamos 'from' a 'onboarding@resend.dev' porque Resend gratis exige ese remitente para pruebas
        const mailOptions = {
            from : "onboarding@resend.dev", 
            to : "corevenlabs@gmail.com",
            text :  `
            Nombre: ${nombre}
            Email: ${email}
            Mensaje: ${mensaje}
        `
        };

        // Aquí cambiamos .sendMail(mailOptions) de Nodemailer por .emails.send(mailOptions) de Resend
        await resend.emails.send(mailOptions)

        res.status(200).json({
            message : "Correo enviado exitosamente"
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports = sendEmail

const transporter = require("../config/mailer")


const sendEmail = async (req, res, next) => {
    try {

        const {nombre, email, mensaje} = req.body

        const mailOptions = {
            from : "corevenlabs@gmail.com",
            to : "corevenlabs@gmail.com",
            text :  `
            Nombre: ${nombre}
            Email: ${email}
            Mensaje: ${mensaje}
        `
        };

        await transporter.sendMail(mailOptions)

        res.status(200).json({
            message : "Correo enviado exitosamente"
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports = sendEmail
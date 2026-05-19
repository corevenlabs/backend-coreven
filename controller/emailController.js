const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req, res, next) => {

    try {

        const { nombre, email, mensaje } = req.body;

        const data = await resend.emails.send({

            from: "onboarding@resend.dev",

            to: "corevenlabs@gmail.com",

            subject: "Nuevo mensaje de contacto",

            html: `
                <h2>Nuevo mensaje</h2>

                <p><strong>Nombre:</strong> ${nombre}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `
        });

        res.status(200).json({
            ok: true,
            data
        });

    } catch (error) {

        console.log(error);

        next(error);
    }
};

module.exports = sendEmail;
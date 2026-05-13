const validarEmail = (req, res, next) =>{

    const {nombre, email, mensaje} = req.body

    if(!nombre || !email || !mensaje){
        return res.status(500).json({
            error : "Todos los campos son obligatorios"
        })
    }

    next()

}

module.exports = validarEmail


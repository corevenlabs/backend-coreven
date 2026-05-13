const manejadorErrors = (err, req, res, next) =>{
    console.error(err)
    return res.status(500).json({
        error : " Error en el servidor"
    })
}

module.exports = manejadorErrors
require("dotenv").config()
const express = require("express")
const cors = require("cors")


const emailRoutes = require("./routes/email")
const manejadorErrores = require("./middleware/menjadorErrores")

const app = express()
app.use(cors({origin: "https://www.corevenlabs.com"}));
app.use(express.json())

app.use("/email", emailRoutes)
app.use(manejadorErrores)


const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

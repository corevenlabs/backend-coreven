const express = require("express")
const router = express.Router();

const validarEmail = require("../middleware/validarEmail");
const sendEmail = require("../controller/emailController");


router.post("/", validarEmail, sendEmail )

module.exports = router
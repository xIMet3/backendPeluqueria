const router = require("express").Router();
const authController = require("../controllers/authController");

// Ruta para el Register.
router.post("/registro", authController.registerUsuario);
// Ruta para el Login.
router.post("/login", authController.loginUsuario);

module.exports = router;
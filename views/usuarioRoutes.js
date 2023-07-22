const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require("../middleware/verifyToken");

// Ruta para mostrar los datos del perfil del usuario que esta logeado.
router.get("/perfilUsuario", auth, usuarioController.getPerfil);
// Ruta para modificar el perfil del usuario que esta logeado.
router.put("/modificarPerfil", auth, usuarioController.updatePerfil);

module.exports = router;
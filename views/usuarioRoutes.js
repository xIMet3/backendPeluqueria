const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require("../middleware/verifyToken");

// Ruta para mostrar los datos del perfil del usuario que esta logeado.
router.get("/perfilUsuario", auth, usuarioController.getPerfil);
// Ruta para modificar el perfil del usuario que esta logeado.
router.put("/modificarPerfil", auth, usuarioController.updatePerfil);
// Ruta para mostrar todos los empleados.
router.get("/verEmpleados", usuarioController.verEmpleados);
// Ruta para mostrar todos los servicios
router.get("/verServicios", usuarioController.verServicios);

module.exports = router;
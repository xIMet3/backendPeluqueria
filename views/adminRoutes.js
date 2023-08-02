const router = require("express").Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

// Ruta para mostrar todos los usuarios registrados si estas logeado como Amin.
router.get("/todosLosUsuarios", auth, isAdmin, adminController.todosLosUsuarios);
// Ruta para eliminar un usuario por el ID si estas logeado como Admin.
router.delete("/eliminarUsuario/:id", auth, isAdmin, adminController.eliminarUsuario);
// Ruta para eliminar las citas de un usuario
router.delete("/eliminarCitasUsuario/id", auth, isAdmin, adminController.eliminarCitasDeUsuario);
// Ruta para eliminar un usuario con todas sus citas
router.delete("/eliminarCitasUsuario/id", auth, isAdmin, adminController.eliminarUsuarioConCitas);

module.exports = router;
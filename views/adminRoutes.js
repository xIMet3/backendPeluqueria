const router = require("express").Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

// Ruta para mostrar todos los usuarios registrados si estas logeado como Amin.
router.get("/todosLosUsuarios", auth, isAdmin, adminController.todosLosUsuarios);
// Ruta para eliminar un usuario por el ID si estas logeado como Admin.
router.delete("/eliminarUsuario/:id", auth, isAdmin, adminController.eliminarUsuario);

module.exports = router;
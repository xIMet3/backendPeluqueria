const router = require("express").Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/verifyToken");
const isAdmin = require("../middleware/isAdmin");

router.get("/todosLosUsuarios", auth, isAdmin, adminController.todosLosUsuarios);
router.delete("/eliminarUsuario/:id", auth, isAdmin, adminController.eliminarUsuario);

module.exports = router;
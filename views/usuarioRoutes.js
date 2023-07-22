const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require("../middleware/verifyToken");

router.get("/perfilUsuario", auth, usuarioController.getPerfil);
router.put("/modificarPerfil", auth, usuarioController.updatePerfil);

module.exports = router;
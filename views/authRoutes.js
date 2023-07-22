const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/registro", authController.registerUsuario);
router.post("/login", authController.loginUsuario);

module.exports = router;
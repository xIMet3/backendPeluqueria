const router = require("express").Router();
const citaController = require("../controllers/citaController");
const auth = require("../middleware/verifyToken");

router.post("/solicitarCita", auth, citaController.pedirCita);
router.get("/misCitas", auth, citaController.verMisCitas);
router.delete("/cancelarCita/:id", auth, citaController.cancelarCita);

module.exports = router;
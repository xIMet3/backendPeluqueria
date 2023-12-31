const router = require("express").Router();
const citaController = require("../controllers/citaController");
const auth = require("../middleware/verifyToken");

// Ruta para solicitar una cita.
router.post("/solicitarCita", auth, citaController.pedirCita);
// Ruta para ver todas mis citas como cliente.
router.get("/misCitas", auth, citaController.verMisCitas);
// Ruta para eliminar una cita por su ID.
router.delete("/cancelarCita/:id", auth, citaController.cancelarCita);

module.exports = router;
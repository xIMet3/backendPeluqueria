const router = require("express").Router();
const auth = require("../middleware/verifyToken");
const isEmpleado = require("../middleware/isEmpleado");
const empleadoController = require("../controllers/empleadoController");

// Ruta para ver todas las citas pendientes si estas logeado como Empleado.
router.get("/todasLasCitas", auth, isEmpleado, empleadoController.todasLasCitas);
// Ruta para modificar una cita por su ID si estas logeado como Empleado.
router.put("/modificarCita/:id", auth, isEmpleado, empleadoController.modificarCita);
// Ruta para eliminar una cita por su ID si estas logeado como Empleado.
router.delete("/cancelarCita/:id", auth, isEmpleado, empleadoController.empleadoCancelaCitas);

module.exports = router;
const router = require("express").Router();
const auth = require("../middleware/verifyToken");
const isEmpleado = require("../middleware/isEmpleado");
const empleadoController = require("../controllers/empleadoController");

// Ruta para ver todas las citas pendientes si estas logeado como Empleado.
router.get("/todasLasCitas", auth, empleadoController.todasLasCitas);
// Ruta para modificar una cita por su ID si estas logeado como Empleado.
router.put("/modificarCita/:id", auth, empleadoController.modificarCita);
// Ruta para eliminar una cita por su ID si estas logeado como Empleado.
router.delete("/cancelarCita/:id", auth, isEmpleado, empleadoController.empleadoEliminaCitas);
// Ruta para ver todas las citas de un usuario filtrado por nombre
router.get("/citasPorUsuario/:nombre_usuario", auth, isEmpleado, empleadoController.citasPorUsuario);
// Ruta para obtener los posibles estados de las citas
router.get("/obtenerEstados", auth, isEmpleado, empleadoController.obtenerEstadosCita);


module.exports = router;
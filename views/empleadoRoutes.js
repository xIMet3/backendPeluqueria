const router = require("express").Router();
const auth = require("../middleware/verifyToken");
const isEmpleado = require("../middleware/isEmpleado");
const empleadoController = require("../controllers/empleadoController");

router.get("/todasLasCitas", auth, isEmpleado, empleadoController.todasLasCitas);
router.put("/modificarCita/:id", auth, isEmpleado, empleadoController.modificarCita);
router.delete("/cancelarCita/:id", auth, isEmpleado, empleadoController.empleadoCancelaCitas);

module.exports = router;
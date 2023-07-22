const router = require("express").Router();

const authRoutes = require("./views/authRoutes");
const usuarioRoutes = require("./views/usuarioRoutes");
const citaRoutes = require("./views/citaRoutes");
const empleadoRoutes = require("./views/empleadoRoutes");
const adminRoutes = require("./views/adminRoutes");

// Prefijos de las rutas.
router.use("/auth", authRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/cita", citaRoutes);
router.use("/empleado", empleadoRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
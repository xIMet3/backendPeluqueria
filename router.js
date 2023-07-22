const router = require("express").Router();

const authRoutes = require("./views/authRoutes");
const usuarioRoutes = require("./views/usuarioRoutes");
const citaRoutes = require("./views/citaRoutes");
const empleadoRoutes = require("./views/empleadoRoutes");
const adminRoutes = require("./views/adminRoutes");

// Ahora la ruta sera "localhost:3000/auth/ruta endpoint"
router.use("/auth", authRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/cita", citaRoutes);
router.use("/empleado", empleadoRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
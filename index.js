const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const auth = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const authController = require("./controllers/authController");
const usuarioController = require("./controllers/usuarioController");
const citaController = require("./controllers/citaController");
const isEmpleado = require("./middleware/isEmpleado");
const empleadoController = require("./controllers/empleadoController");



const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
})

app.use(express.json());
app.use(cors());


// RUTAS AUTHCONTROLLER
// Registro usuario
app.post("/registro", authController.registerUsuario);
// Login usuario
app.post("/login", authController.loginUsuario);

// RUTAS USUARIO
// Buscar perfil de usuario
app.get("/perfilUsuario", auth, usuarioController.getPerfil);
// Modificar el perfil de usuario
app.put("/modificarPerfil", auth, usuarioController.updatePerfil);

// RUTAS CITAS
// Pedir cita
app.post("/solicitarCita", auth, citaController.pedirCita);
// Ver mis citas
app.get("/misCitas", auth, citaController.verMisCitas);
// Modificar una cita
app.put("/modificarCita/:id", auth, citaController.modificarCita);
// Eliminar una cita
app.delete("/cancelarCita/:id", auth, citaController.cancelarCita);

// RUTAS EMPLEADO
// Ruta para ver todos los usuarios registrados como empleado
app.get("/todasLasCitas", auth, isEmpleado, empleadoController.todasLasCitas);


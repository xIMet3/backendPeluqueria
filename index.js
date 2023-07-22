const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const router = require("./router");

app.use(express.json());
app.use(cors());
app.use(router);



const auth = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const usuarioController = require("./controllers/usuarioController");
const citaController = require("./controllers/citaController");
const isEmpleado = require("./middleware/isEmpleado");
const empleadoController = require("./controllers/empleadoController");
const adminController = require("./controllers/adminController");



const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
}). catch((error) => console.error(error.message));



// // RUTAS AUTHCONTROLLER
// // Registro usuario
// app.post("/registro", authController.registerUsuario);
// // Login usuario
// app.post("/login", authController.loginUsuario);

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
// Eliminar una cita
app.delete("/cancelarCita/:id", auth, citaController.cancelarCita);

// RUTAS EMPLEADO
// Ruta para ver todos los usuarios registrados como empleado
app.get("/todasLasCitas", auth, isEmpleado, empleadoController.todasLasCitas);
// Modificar una cita
app.put("/modificarCita/:id", auth, isEmpleado, empleadoController.modificarCita);
// Cancelar una cita
app.delete("/cancelarCita/:id", isEmpleado, empleadoController.empleadoCancelaCitas);

// RUTAS ADMIN
// Ruta para mostrar todos los usuarios
app.get("/todosLosUsuarios", auth, isAdmin, adminController.todosLosUsuarios);
// Ruta para eliminar un usuario
app.delete("/eliminarUsuario/:id", auth, isAdmin, adminController.eliminarUsuario);
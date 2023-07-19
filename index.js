const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const auth = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const isDoctor = require("./middleware/isDoctor");
const authController = require("./controllers/authController");
const usuarioController = require("./controllers/usuarioController");
const citaController = require("./controllers/citaController");


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
app.post("/solicitarCita", auth, citaController.pedirCita);





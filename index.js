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
const adminController = require("./controllers/adminController");



const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
}). catch((error) => console.error(error.message));

// RUTAS ADMIN
// Ruta para mostrar todos los usuarios
app.get("/todosLosUsuarios", auth, isAdmin, adminController.todosLosUsuarios);
// Ruta para eliminar un usuario
app.delete("/eliminarUsuario/:id", auth, isAdmin, adminController.eliminarUsuario);
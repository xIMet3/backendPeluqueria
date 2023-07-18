const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const auth = require("./middleware/verifyToken");
const isAdmin = require("./middleware/isAdmin");
const isDoctor = require("./middleware/isDoctor");
const authController = require("./controllers/authController");


const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
})

app.use(express.json());
app.use(cors());


// RUTAS
// Registro usuario
app.post("/registro", authController.registerUsuario);







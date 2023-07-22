const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const router = require("./router");

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
}). catch((error) => console.error(error.message));
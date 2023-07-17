const express = require("express");
const db = require("./db");






const cors = require("cors");

const app = express();

const PORT = 3000;
db.then(() => {
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + PORT);
});
})


app.use(express.json());
app.use(cors());
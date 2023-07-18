const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");
const MIN_PASSWORD_LENGTH = 6;

const authController = {};

// Registro de usuario
authController.registerUsuario = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const codigo_postal = req.body.codigo_postal;
    const contraseña = req.body.contraseña;

    if (telefono.length != 9) {
      return res.status(400).json({
        error: "Porfavor, introduce un número de telefono válido (9 digitos)",
      });
    }
    
    // Encripta la contraseña

    const newContraseña = bcrypt.hashSync(contraseña, 6);

    const newUsuario = await Usuario.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      codigo_postal: codigo_postal,
      contraseña: newContraseña,
      rol_id: 3,
    });

    return res.status(201).json({
      message: "Usuario creado con éxito",
      usuario: newUsuario,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear usuario",
      error: error.message,
    });
  }
};
module.exports = authController;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");

const usuarioController = {};

// Buscar perfil de usuario
usuarioController.getPerfil = async (req, res) => {
  try {
    // Obtener el ID del usuario actual desde la solicitud
    const usuarioId = req.usuarioId;
    console.log(Usuario)

    // Buscar el usuario en la base de datos por ID
    const usuario = await Usuario.findByPk(usuarioId);
    console.log(usuario)

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
        error: error,
      });
    }

    // Enviar el perfil del usuario como respuesta
    return res.status(200).json({
      success: true,
      data: usuario,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener el perfil del usuario",
      error: error,
    });
  }
};
module.exports = usuarioController;

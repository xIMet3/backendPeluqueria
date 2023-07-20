const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usuario } = require("../models");

const usuarioController = {};

// Buscar perfil de usuario
usuarioController.getPerfil = async (req, res) => {
  try {
    // Obtener el ID del usuario actual desde la solicitud
    const usuarioId = req.usuarioId;
    console.log(Usuario);

    // Buscar el usuario en la base de datos por ID
    const usuario = await Usuario.findByPk(usuarioId);
    console.log(usuario);

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
        error: error,
      });
    }

    // Devuelve el perfil del usuario como respuesta
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

// Modificar perfil de usuario
usuarioController.updatePerfil = async (req, res) => {
  try {
    const usuarioId = req.usuarioId;
    const usuario = await Usuario.findByPk(usuarioId);

    if (!usuario) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }
    // Parametros que se pueden modificar
    const { nombre, apellido, email, telefono, codigo_postal, contraseña } =
      req.body;
    // Recibe el perfil actualizado como respuesta
    const perfilActualizado = await usuario.update(
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        codigo_postal: codigo_postal,
        contraseña: contraseña,
      },
      {
        where: {
          id: usuarioId,
        },
      }
    );
    return res.json({
      success: true,
      message: "Perfil actualizado",
      data: perfilActualizado,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El perfil de usuario no pudo ser actualizado",
      error: error,
    });
  }
};
module.exports = usuarioController;

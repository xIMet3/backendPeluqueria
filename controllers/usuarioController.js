const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usuario, Empleado, Servicio } = require("../models");

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

    const encriptaContraseña = await bcrypt.hash(contraseña, 6);

    // Recibe el perfil actualizado como respuesta
    const perfilActualizado = await usuario.update(
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        codigo_postal: codigo_postal,
        contraseña: encriptaContraseña,
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
// Ver los empleados
usuarioController.verEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll(
      {
        attributes: [
          'id',
          'nombre'
        ],
      }
    );
    return res.json(
      {
        success: true,
        message: "Empleados encontrados",
        data: empleados
      }
    );
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "No se encontraron empleados",
        error: error.message
      }
    );
  }
};
// Ver los servicios
usuarioController.verServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll(
      {
        attributes: [
          'id',
          'nombre_servicio',
          'precio_servicio',
          'descripcion'
        ],
      }
    );
    return res.json(
      {
        success: true,
        message: "Servicios encontrados",
        data: servicios
      }
    );
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "No se encontraron servicios",
        error: error.message
      }
    );
  }
};
module.exports = usuarioController;

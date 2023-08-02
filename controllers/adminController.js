const { Usuario } = require("../models");
const citaController = require("./citaController");

const adminController = {};

// Ver todos los usuarios registrados
adminController.todosLosUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      where: {
        rol_id: [2, 3],
      },
    });
    return res.json({
      success: true,
      message: "Usuarios encontrados",
      data: usuarios,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se encontraron usuarios",
      error: error,
    });
  }
};

// Eliminar un usuario y todas sus citas
adminController.eliminarUsuarioConCitas = async (req, res) => {
  try {
    const usuarioId = req.params.id;

    // Eliminar todas las citas asociadas al usuario primero
    await citaController.eliminarCitasDeUsuario(usuarioId);

    // Eliminar el usuario
    const usuarioEliminado = await Usuario.destroy({
      where: {
        id: usuarioId,
      },
    });

    return res.json({
      success: true,
      message: "El usuario y todas sus citas han sido eliminados",
      data: usuarioEliminado,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario y sus citas no pudieron ser eliminados",
      error: error,
    });
  }
};

module.exports = adminController;
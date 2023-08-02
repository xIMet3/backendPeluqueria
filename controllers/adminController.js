const { Usuario } = require("../models");

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

adminController.eliminarUsuario = async (req, res) => {
  try {
    const usuarioId = req.params.id;

    const usuarioEliminado = await Usuario.findOne({
      where: {
        id: usuarioId,
      },
    });
    if (!usuarioEliminado) {
      return res.status(404).json({
        success: false,
        message: "El usuario no existe",
      });
    }
    const borraUsuario = await Usuario.destroy({
      where: {
        id: usuarioId,
      },
    });
    return res.json({
      success: true,
      message: "El usuario ha sido eliminado",
      data: { borraUsuario, usuarioEliminado },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no pudo ser eliminado",
      error: error,
    });
  }
};

adminController.eliminarCitasDeUsuario = async (req, res) => {
  try {
    const usuarioId = req.params.id;

    // Eliminar todas las citas asociadas al usuario
    await citaController.eliminarCitasDeUsuario(usuarioId);

    return res.json({
      success: true,
      message: "Todas las citas del usuario han sido eliminadas",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al eliminar las citas del usuario",
      error: error.message,
    });
  }
};

module.exports = adminController;

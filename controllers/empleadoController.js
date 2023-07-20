const { Cita } = require("../models");

const empleadoController = {};

// Ver todas las citas pendientes como empleado
empleadoController.todasLasCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll({});

    return res.json({
      succes: true,
      message: "Estas son todas las citas pendientes",
      data: citas,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se encontraron citas pendientes",
      error: error,
    });
  }
};

module.exports = empleadoController;

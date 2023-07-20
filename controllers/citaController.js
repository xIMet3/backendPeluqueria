const { Cita } = require("../models");

const citaController = {};

// Crear una cita
citaController.pedirCita = async (req, res) => {
  try {
    const { empleado_id, fecha, servicio_id, comentario } = req.body;
    const { usuarioId: usuario_id } = req;
    const { rolId, usuarioId } = req;

    if (rolId === 3 && usuario_id != usuarioId) {
      return res.json({
        succes: false,
        message: "Solo puedes crear tus propias citas",
      });
    }

    if (rolId === 2 && !usuario_id) {
      return res.json({
        succes: false,
        message: "Debes identificarte como cliente",
      });
    }

    const nuevaCita = await Cita.create({
      usuario_id: usuarioId,
      empleado_id: empleado_id,
      servicio_id: servicio_id,
      fecha: fecha,
      comentario: comentario,
    });

    return res.json({
      succes: true,
      message: "Cita reservada con éxito",
      data: nuevaCita,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se pudo reservar la cita",
      error: error,
    });
  }
};

// Obtener mis citas
citaController.verMisCitas = async (req, res) => {
  try {
    const { usuarioId } = req;

    const misCitas = await Cita.findAll({
      where: {
        usuario_id: usuarioId,
      },
    });

    return res.json({
      succes: true,
      message: "Citas encontradas",
      data: misCitas,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se encontraron citas",
      error: error.message,
    });
  }
};
module.exports = citaController;

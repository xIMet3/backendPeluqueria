const { Cita, Cita_estado } = require("../models");

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
    const estadoCita = await Cita_estado.findByPk(1);
    const nuevaCita = await Cita.create(
      {
        usuario_id: usuarioId,
        empleado_id: empleado_id,
        servicio_id: servicio_id,
        fecha: fecha,
        comentario: comentario,
        cita_estado_id: estadoCita.id
      }
    );

    return res.json(
      {
        succes: true,
        message: "Cita reservada con éxito",
        data: nuevaCita,
      }
    );
  } catch (error) {
      return res.status(500).json(
        {
          message: "No se pudo reservar la cita",
          error: error,
          succes: false,
        }
      );
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
      include: [Cita_estado],
      attributes: [
        'id', 
        'usuario_id', 
        'empleado_id',
        'fecha',
        'comentario',
        'servicio_id', 
        ['cita_estado_id', 
        'nombre_cita_estado'
        ]
    ],
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

// Eliminar una cita
citaController.cancelarCita = async (req, res) => {
  try {
    const citaId = req.params.id;

    const cancelacionCita = await Cita.destroy({
      where: {
        id: citaId,
      },
    });
    return res.json({
      succes: true,
      message: "La cita ha sido cancelada",
      data: cancelacionCita,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "La cita no pudo ser cancelada",
      error: error,
    });
  }
};

module.exports = citaController;

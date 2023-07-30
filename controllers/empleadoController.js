const { Cita, Cita_estado, Usuario, Empleado, Servicio } = require("../models");

const empleadoController = {};

// Ver todas las citas pendientes como empleado
empleadoController.todasLasCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll({
      include: [
        {
          model: Usuario,
          attributes: ["nombre", "apellido", "telefono"],
        },
        {
          model: Empleado,
          attributes: ["nombre"],
        },
        {
          model: Servicio,
          attributes: ["nombre_servicio", "precio_servicio", "descripcion"],
        },
        {
          model: Cita_estado,
          attributes: ["nombre_cita_estado"],
        },
      ],
      attributes: [
        "id",
        "usuario_id",
        "empleado_id",
        "fecha",
        "comentario",
        "servicio_id",
        "cita_estado_id",
      ],
    });

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

// Ver todas las citas de un usuario filtrado por nombre
empleadoController.citasPorUsuario = async (req, res) => {
  try {
    const { nombre_usuario } = req.params;

    const citas = await Cita.findAll({
      include: [
        {
          model: Usuario,
          attributes: ["nombre"],
          where: { nombre: nombre_usuario },
        },
        {
          model: Empleado,
          attributes: ["nombre"],
        },
        {
          model: Servicio,
          attributes: ["nombre_servicio", "precio_servicio", "descripcion"],
        },
        {
          model: Cita_estado,
          attributes: ["nombre_cita_estado"],
        },
      ],
      attributes: [
        "id",
        "usuario_id",
        "empleado_id",
        "fecha",
        "comentario",
        "servicio_id",
        "cita_estado_id",
      ],
    });

    return res.json({
      succes: true,
      message: `Citas filtradas de ${nombre_usuario}`,
      data: citas,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: `No se obtuvieron citas de ${nombre_usuario}`,
      error: error,
    });
  }
};

// Modificar cualquier cita
empleadoController.modificarCita = async (req, res) => {
  try {
    const citaId = req.params.id;

    const citas = await Cita.findByPk(citaId);

    if (!citas) {
      return res.json({
        succes: true,
        message: "El id de la cita no existe",
      });
    }

    // Obtener los datos de la solicitud
    const {
      empleado_id,
      fecha,
      hora,
      servicio_id,
      comentario,
      cita_estado_id,
    } = req.body;

    // Construir el objeto con los datos modificados
    const nuevaCitaData = {
      empleado_id: empleado_id || citas.empleado_id,
      fecha: fecha || citas.fecha,
      servicio_id: servicio_id || citas.servicio_id,
      comentario: comentario || citas.comentario,
      cita_estado_id: cita_estado_id || citas.cita_estado_id,
    };

    // Formatear la fecha y hora si están presentes en la solicitud
    if (fecha && hora) {
      const fechaHora = new Date(`${fecha}T${hora}`);
      nuevaCitaData.fecha = fechaHora.toISOString();
    }

    // Realizar la actualización de la cita
    await Cita.update(nuevaCitaData, {
      where: {
        id: citaId,
      },
    });

    const citaActualizada = await Cita.findByPk(citaId);

    return res.json({
      succes: true,
      message: "Cita actualizada",
      data: citaActualizada,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se pudo modificar la cita",
      error: error,
    });
  }
};

// Eliminar una cita
empleadoController.empleadoCancelaCitas = async (req, res) => {
  try {
    const citaId = req.params.id;
    const cancelaCitas = await Cita.destroy({
      where: {
        id: citaId,
      },
    });

    return res.json({
      succes: true,
      message: "Cita cancelada",
      data: cancelaCitas,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "La cita no pudo ser cancelada",
      error: error,
    });
  }
};

// Obtener los posibles estados de las citas
empleadoController.obtenerEstadosCita = async (req, res) => {
  try {
    const estadosCita = await Cita_estado.findAll({
      attributes: ["id", "nombre_cita_estado"],
    });

    return res.json({
      success: true,
      message: "Estados de cita encontrados",
      data: estadosCita,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se encontraron estados de cita",
      error: error.message,
    });
  }
};
module.exports = empleadoController;

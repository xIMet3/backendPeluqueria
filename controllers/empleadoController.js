const { Cita, Cita_estado, Usuario, Empleado, Servicio } = require("../models");

const empleadoController = {};

// Ver todas las citas pendientes como empleado
empleadoController.todasLasCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll(
        {
            include: [
                {
                    model: Usuario,
                    attributes: ['nombre']
                },
                {
                    model: Empleado,
                    attributes: ['nombre']
                },
                {
                    model: Servicio,
                    attributes: ['nombre_servicio', 'precio_servicio', 'descripcion']
                },
                {
                    model: Cita_estado,
                    attributes: ['nombre_cita_estado']
                }
            ],
            attributes: [
                'id',
                'usuario_id',
                'empleado_id',
                'fecha',
                'comentario',
                'servicio_id',
                'cita_estado_id'
            ],
        }
    );

    return res.json(
        {
            succes: true,
            message: "Estas son todas las citas pendientes",
            data: citas,
        }
    );
  } catch (error) {
    return res.status(500).json(
        {
        succes: false,
        message: "No se encontraron citas pendientes",
        error: error,
        }
    );
  }
};
// Modificar cualquier cita
empleadoController.modificarCita = async (req, res) => {
  try {
    const citaId = req.params.id;

    const citas = await Cita.findByPk(citaId);

    if (!citas) {
      return res.json(
        {
            succes: true,
            message: "El id de la cita no existe",
        }
      );
    }
    const { empleado_id, fecha, servicio_id, comentario } = req.body;

    const citaModificada = await Cita.update(
        {
        empleado_id: empleado_id,
        fecha: fecha,
        servicio_id: servicio_id,
        comentario: comentario,
        },
        {
            where: {
                id: citaId
            }
        }
    );
    if(citaModificada[0]=== 1){
        const citaActualizada = await Cita.findByPk(citaId);
        return res.json(
            {
                succes: true,
                message: "Cita actualizada",
                data: citaActualizada
            }
        );
    } else {
        return res.json(
            {
                succes: true,
                message: "Cita actualizada",
                data:  citaModificada
            }
        );
       }
  } catch (error) {
    return res.status(500).json(
        {
            succes: false,
            message: "No se pudo modificar la cita",
            error: error,
        }
    );
  }
};
// Cancelar una cita
empleadoController.empleadoCancelaCitas = async (req, res) => {
    try {
        const citaId = req.params.id;
        const cancelaCitas = await Cita.destroy(
            {
                where: {
                    id: citaId
                }
            }
        );
        
        return res.json(
            {
                succes: true,
                message: "Cita cancelada",
                data: cancelaCitas
            }
        )
    }   catch (error) {
        return res.status(500).json(
            {
                succes: false,
                message: "La cita no pudo ser cancelada",
                error: error
            }
        );
    }
};
module.exports = empleadoController;
const { Usuario } = require("../models");

const adminController = {};

// Ver todos los usuarios registrados
adminController.todosLosUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(
            {
                where: {
                    rol_id: [2, 3]
                }
            }
        );
        return res.json(
            {
                succes: true,
                message: "Usuarios encontrados",
                data: usuarios
            }
        );
    }   catch (error) {
        return res.status(500).json(
            {
                succes: false,
                message: "No se encontraron usuarios",
                error: error
            }
        );
    }
};

adminController.eliminarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;

        const usuarioEliminado = await Usuario.findOne(
            {
                where: {
                    id: usuarioId
                }
            }
        );
        if (!usuarioEliminado){
            return res.status(404).json(
                {
                    succes: false,
                    message: "El usuario no existe"
                }
            );
        }
        const borraUsuario = await Usuario.destroy(
            {
                where:{
                    id: usuarioId
                }
            }
        );
        return res.json(
            {
                succes: true,
                message: "El usuario ha sido eliminado",
                data: { borraUsuario, usuarioEliminado }
            }
        );
    }   catch (error){
        return res.status(500).json(
            {
                succes: false,
                message: "El usuario no pudo ser eliminado",
                error: error
            }
        );
    }
};
module.exports = adminController;
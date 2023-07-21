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


module.exports = adminController;
const isDoctor = async (req, res, next) => {
    try {
      const rolId = req.rol_id;
      if (req.rol_id !== 1 && req.rol_id !== 2) {
        return res.json({
          success: true,
          message: "No tienes los permisos necesarios",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Algo salió mal",
        error: error.message,
      });
    }
  };
  
  module.exports = isDoctor;
  
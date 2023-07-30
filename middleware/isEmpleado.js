const isEmpleado = async (req, res, next) => {
  try {
    const rolId = req.body.rolId;
    if (req.rolId !== 1 && req.rolId !== 2) {
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

module.exports = isEmpleado;

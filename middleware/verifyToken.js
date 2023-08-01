const auth = (req, res, next) => {
  try {
    const jwt = require("jsonwebtoken");

    // Obtener el token
    const bearerToken = req.headers.authorization;
    // Verifica si no se proporciona un token
    if (!bearerToken) {
      return res.json({
        success: true,
        message: "No tienes permisos necesarios",
      });
    }
    // Extraer el token de autorizacion
    const token = bearerToken.split(" ")[1];
    // Verifica y decodifica el token utilizando jwt
    const decoded = jwt.verify(token, "misterio");
    // Almacena los datos del usuario extraidos del token
    req.usuarioId = decoded.usuarioId;
    req.rolId = decoded.rolId;
    req.nombre = decoded.nombre;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token inválido",
      error: error,
    });
  }
};

module.exports = auth;

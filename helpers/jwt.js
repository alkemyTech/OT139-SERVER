const verifyJsonWebToken = (token, callback) => {
  // @TODO Reemplazar con la verdadera implementación
  // Verificar el token y decodificar el payload
  const decodedToken = { id: 1 };
  return callback(null, decodedToken);
};

module.exports = { verifyJsonWebToken };

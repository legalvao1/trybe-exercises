const jwt = require ('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateAdmin = async(req, res, next) => {
  const token = req.headers.authorization;

  if(!token)
    return next({ statusCode: 401, message: "Token não informado" });

    try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (!payload.data.admin) next({ statusCode: 403, message: "Restricted access" })

    req.user = payload.data; // coloca dentro do req na chave user o payload q tem username e admn
    return next()
  } catch (error) {
    return next({ statusCode: 401, message: 'Erro: Seu token é inválido.' });
  }
}

module.exports = validateAdmin;
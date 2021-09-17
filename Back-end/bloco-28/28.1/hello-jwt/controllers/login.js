const validadeLogin = ({ username, password }) => {
  if (!username || username.length < 5) return false;
  if (!password || username.length < 5) return false;

  return true;
}

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfiguration = {
  expiresIn: '1h',
  algorithm: 'HS256',
}

module.exports = async (req, res, next) => {
  try {
    const isValid = validadeLogin(req.body);
  
    if(!isValid) next({ statusCode: 401, message: 'username or password invalid'});

    if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') next(
      { statusCode: 401, message: 'username or password invalid'}
    );
    
    const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
  
    const payload = {
    username: req.body.username,
    admin,
    };

    const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfiguration);
    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error })
  }
};
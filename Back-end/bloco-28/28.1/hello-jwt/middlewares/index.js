const error = require('./error');
const authMiddleware = require('./validateJWT');
const validateAdmin = require('./validateAdmin');

module.exports = {
  error,
  authMiddleware,
  validateAdmin,
};

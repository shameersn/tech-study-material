const debug = require('debug')('app:dev');

module.exports = (req, res, next) => {
  
  debug('req path', req.path);
  next();
}
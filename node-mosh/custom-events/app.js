const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (args) => {
  console.log('Args', args);
});

logger.log('logged');
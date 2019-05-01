const util = require('util');
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.json(),
  transports: [new transports.Console()],
});

class Utils {
  static inspect(params) {
    if (!params) { return '{}'; }
    return util.inspect(params, { showHidden: true, depth: null }).replace(/\n/g, '').replace(/\s+/g, ' ');
  }

  static log(message) {
    logger.info(message);
  }

  static error(message) {
    logger.error(message);
  }
}

module.exports = Utils;

const Ajv = require('ajv');
const { AppError, ErrorCode } = require('../services/appError');
const utils = require('../services/utils');

module.exports = schema => (
  (req, res, next) => {
    const ajv = new Ajv({ format: 'full' });
    const payload = { ...req.params, ...req.query, ...req.body };

    const valid = ajv.validate(schema, payload);

    if (!valid) {
      utils.error(utils.inspect(ajv.errors));
      const error = new AppError(ErrorCode.General.InvalidParameters);
      return res.status(error.status).json(error);
    }

    return next();
  }
);

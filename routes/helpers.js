const { AppError } = require('../services/appError');

module.exports = {
  wrap: fn => (
    async (req, res) => {
      try {
        await Promise.resolve(fn(req, res));
      } catch (err) {
        const error = AppError.wrap(err);
        res.status(error.status).json(error);
      }
    }
  ),
};

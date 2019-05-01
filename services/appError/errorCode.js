const HttpStatus = require('./httpStatus');

const error = (code, message, status = HttpStatus.InternalServerError) => (
  { code, message, status }
);

module.exports = {
  General: {
    InternalServerError: error(0, 'Internal server error.'),
    InvalidParameters: error(1, 'Invalid parameters.', HttpStatus.BadRequest),
    AccessDenied: error(2, 'Access is denied.', HttpStatus.Forbidden),
    NotFound: error(3, 'Resource not found.', HttpStatus.NotFound),
  },
  Token: {
    Invalid: error(10, 'Invalid token.', HttpStatus.Unauthorized),
  },
};

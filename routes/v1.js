const express = require('express');

const { validate } = require('../middlewares');
const { wrap } = require('./helpers');
const { UserController, UserSchema } = require('../controllers/v1/userController');

class V1 {
  // V1 Routes
  static routes() {
    const r = express.Router();

    r.use('/me', V1._meRouter());
    r.use('/users', V1._userRouter());

    return r;
  }

  // Me Routes
  static _meRouter() {
    const r = express.Router();

    r.route('/')
      .get(wrap(UserController.getCurrentUser))
      .put(validate(UserSchema.updateUser), wrap(UserController.updateUser));

    return r;
  }

  // User Routes
  static _userRouter() {
    const r = express.Router();

    r.route('/')
      .post(wrap(UserController.createUser));

    return r;
  }
}

module.exports = V1;

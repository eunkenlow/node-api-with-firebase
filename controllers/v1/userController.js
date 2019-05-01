const { AppError, ErrorCode, HttpStatus } = require('../../services/appError');
const { User } = require('../../models');

class UserController {
  // Create a new user from firebase data
  static async createUser(req, res) {
    const { user_id: id, email, name } = req.user;

    const user = await User.query().insert({
      id,
      email: email.toLowerCase(),
      name,
    });

    res.status(HttpStatus.Created).json({ user });
  }

  // Update current user
  static async updateUser(req, res) {
    const { user_id: userId } = req.user;
    const { email, name } = req.body;

    const user = await User.query().patchAndFetchById(userId, {
      email: email.toLowerCase(),
      name
    });

    res.status(HttpStatus.Ok).json({ user });
  }

  // Get current user
  static async getCurrentUser(req, res) {
    const user = await User.query().findById(req.user.user_id);
    if (!user) throw new AppError(ErrorCode.General.NotFound);

    res.status(HttpStatus.Ok).json({ user });
  }
}

const UserSchema = {
  updateUser: {
    properties: {
      email: { type: 'string', format: 'email', maxLength: 255 },
      name: { type: 'string', maxLength: 255 },
    },
    required: ['email'],
  },
};

module.exports = { UserController, UserSchema };

const admin = require('firebase-admin');
const { AppError, ErrorCode } = require('./appError');
const serviceAccount = require('../firebase.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

class Firebase {
  static async validateToken(req, res, next) {
    if (!req.headers.authorization) {
      throw new AppError(ErrorCode.Token.Invalid);
    }

    try {
      const token = req.headers.authorization;
      const decodedIdToken = await app.auth().verifyIdToken(token);
      req.user = decodedIdToken;
      return next();
    } catch (err) {
      const error = new AppError(ErrorCode.Token.Invalid, err);
      return res.status(error.status).json(error);
    }
  }
}

module.exports = Firebase;

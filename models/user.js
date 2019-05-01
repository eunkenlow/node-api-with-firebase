const BaseModel = require('./baseModel');

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  $toJson() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  }
}

module.exports = User;

'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');

// Validator
class User {
  constructor(email, password) {
      this.email = email;
      this.password = password;
  }
}

class AuthService {
  secret = 'themostsecretofsecretkeys-123';

  /**
   * @param {User} user
   * @returns {string | null} jwt as string
   */
  login(user) {
    const users = this.getUsers();
    const found = users.find(u => u.email === user.email);

    return found && found.password === user.password
      ? this.signJwt(found.email)
      : null;
  }

  /** @returns {User[]} */
  getUsers() {
    const userFile = fs.readFileSync('db/users.json');
    return JSON.parse(userFile);
  }

  /** @returns {string} */
  signJwt(email) {
    return jwt.sign(
      { iss: 'localhost:3000', sub: email },
      this.secret
    );
  }

  /**
   * @param {User} user
   * @returns {void}
   */
  registerUser(user) {
    const users = this.getUsers();
    users.push(user);
    fs.writeFileSync('db/users.json', JSON.stringify(users));
  }

  /**
   * @param {User} user
   * @returns {boolean}
   */
  exists(user) {
    const users = this.getUsers();
    const found = users.find(u => u.email === user.email);
    return !!found;
  }
}

const authService = new AuthService();

module.exports = authService;
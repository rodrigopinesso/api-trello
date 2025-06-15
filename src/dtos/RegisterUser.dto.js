class RegisterUserDTO {
  constructor({ username, password }) {
    if (!username || !password) {
      throw new Error('Username e password são obrigatórios.');
    }

    this.username = username;
    this.password = password;
  }
}

module.exports = RegisterUserDTO;
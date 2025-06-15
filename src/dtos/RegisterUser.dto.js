class RegisterUserDTO {
  constructor({ username, password, role }) {
    if (!username || !password) {
      throw new Error('Username e password são obrigatórios.');
    }

    const validRoles = ['user', 'admin', 'moderator'];
    if (role && !validRoles.includes(role)) {
      throw new Error('Role inválida.');
    }

    this.username = username;
    this.password = password;
    this.role = role || 'user'; // Se não for enviado, assume 'user'
  }
}

module.exports = RegisterUserDTO;
const User = require('../models/User');

class UserService {
  async listAllUsers() {
    return await User.find({}, '-password'); // exclui o campo password do retorno
  }

  async deleteUserById(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return { message: 'Usuário deletado com sucesso.' };
  }

  async getOwnProfile(userId) {
  return await User.findById(userId, '-password');
}

async updateOwnProfile(userId, data) {
  const { username, password } = data;
  const update = {};
  if (username) update.username = username;
  if (password) update.password = await require('bcrypt').hash(password, 10);

  return await User.findByIdAndUpdate(userId, update, { new: true, fields: '-password' });
}

async getUserById(id) {
  return await User.findById(id, '-password');
}

async updateUserById(id, data) {
  const { username, password, role } = data;
  const update = {};
  if (username) update.username = username;
  if (password) update.password = await require('bcrypt').hash(password, 10);
  if (role) update.role = role;

  return await User.findByIdAndUpdate(id, update, { new: true, fields: '-password' });
}
}

module.exports = new UserService();
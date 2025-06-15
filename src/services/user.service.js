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
}

module.exports = new UserService();
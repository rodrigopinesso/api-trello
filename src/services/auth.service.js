const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthService {
  async registerUser(registerUserDTO) {
    const { username, password } = registerUserDTO;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('Usuário já existe.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();
    return { id: user._id, username: user.username, role: user.role };
  }
}

module.exports = new AuthService();
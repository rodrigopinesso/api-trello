const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

  async loginUser({ username, password }) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Senha inválida.');
    }

    const payload = {
      id: user._id,
      username: user.username,
      role: user.role
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token, user: payload };
  }
}

module.exports = new AuthService();
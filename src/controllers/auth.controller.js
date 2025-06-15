const RegisterUserDTO = require('../dtos/RegisterUser.dto');
const authService = require('../services/auth.service');

class AuthController {
  async register(req, res) {
    try {
      const dto = new RegisterUserDTO(req.body);
      const user = await authService.registerUser(dto);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

    async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: 'Username e password são obrigatórios.' });
      }

      const result = await authService.loginUser({ username, password });
      res.status(200).json(result);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
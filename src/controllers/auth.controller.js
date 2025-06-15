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
}

module.exports = new AuthController();
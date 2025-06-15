const userService = require('../services/user.service');

class UserController {
  async list(req, res) {
    try {
      const users = await userService.listAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar usuários.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await userService.deleteUserById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
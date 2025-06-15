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

  async getMe(req, res) {
  try {
    const user = await userService.getOwnProfile(req.user.id);
    res.status(200).json(user);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar seu perfil.' });
  }
}

async updateMe(req, res) {
  try {
    const user = await userService.updateOwnProfile(req.user.id, req.body);
    res.status(200).json(user);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar seu perfil.' });
  }
}

async getById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json(user);
  } catch {
    res.status(400).json({ error: 'Erro ao buscar usuário.' });
  }
}

async updateById(req, res) {
  try {
    const user = await userService.updateUserById(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json(user);
  } catch {
    res.status(400).json({ error: 'Erro ao atualizar usuário.' });
  }
}
}

module.exports = new UserController();
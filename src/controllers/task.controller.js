const CreateTaskDTO = require('../dtos/CreateTask.dto');
const taskService = require('../services/task.service');

class TaskController {
  async create(req, res) {
    try {
      const dto = new CreateTaskDTO(req.body);
      const task = await taskService.createTask(dto, req.user.id);
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    try {
      const tasks = await taskService.getAllTasks(req.user.id);
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar tarefas.' });
    }
  }

  async updateStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await taskService.updateStatus(id, req.user.id, status);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async delete(req, res) {
  try {
    const { id } = req.params;
    const result = await taskService.deleteTask(id, req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
}

module.exports = new TaskController();
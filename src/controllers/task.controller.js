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
}

module.exports = new TaskController();
const Task = require('../models/Task');

class TaskService {
  async createTask(dto, userId) {
    const task = new Task({
      title: dto.title,
      description: dto.description,
      status: dto.status,
      userId
    });

    await task.save();
    return task;
  }
}

module.exports = new TaskService();
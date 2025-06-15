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
  
  async getAllTasks(userId) {
  return await Task.find({ userId }).sort({ createdAt: -1 });
  }

  async updateStatus(taskId, userId, newStatus) {
  const validStatuses = ['pendente', 'em andamento', 'concluída'];

  if (!validStatuses.includes(newStatus)) {
    throw new Error('Status inválido.');
  }

  const task = await Task.findOne({ _id: taskId, userId });
  if (!task) {
    throw new Error('Tarefa não encontrada ou não pertence ao usuário.');
  }

  task.status = newStatus;
  await task.save();

  return task;
}
}

module.exports = new TaskService();
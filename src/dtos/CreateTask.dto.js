class CreateTaskDTO {
  constructor({ title, description }) {
    if (!title || typeof title !== 'string') {
      throw new Error('Título é obrigatório e deve ser uma string.');
    }

    this.title = title;
    this.description = description || '';
    this.status = 'pendente'; 
  }
}

module.exports = CreateTaskDTO;
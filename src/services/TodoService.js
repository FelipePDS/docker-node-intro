const TodoRepository = require('../data/TodoRepository');

class TodoService {
    todoRepository;
    
    constructor() {
        this.todoRepository = new TodoRepository();
    }

    async findAll() {
        try {
            return await this.todoRepository.findAll();
        } catch (err) {
            console.error('Erro:', err);
            throw new Error(err.message);
        }
    }

    async findById(id) {
        try {
            return await this.todoRepository.findById(id);
        } catch (err) {
            console.error('Erro:', err);
            throw new Error(err.message);
        }
    }

    async create(todo) {
        try {
            return await this.todoRepository.create(todo);
        } catch (err) {
            console.error('Erro:', err);
            throw new Error(err.message);
        }
    }

    async update(id, todo) {
        try {
            return await this.todoRepository.update(id, todo);
        } catch (err) {
            console.error('Erro:', err);
            throw new Error(err.message);
        }
    }

    async delete(id) {
        try {
            return await this.todoRepository.delete(id);
        } catch (err) {
            console.error('Erro:', err);
            throw new Error(err.message);
        }
    }
}

module.exports = TodoService;

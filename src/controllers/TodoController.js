const TodoService = require('../services/TodoService');

class TodoController {
    todoService;
    
    constructor() {
        this.todoService = new TodoService();
    }

    async findAll(req, res) {
        try {
            const todos = await this.todoService.findAll();
            return res.json(todos);
        } catch (err) {
            console.error('Erro:', err);
            return res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const todo = await this.todoService.findById(id);
            return res.json(todo);
        } catch (err) {
            console.error('Erro:', err);
            return res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const todo = req.body;
            const newTodo = await this.todoService.create(todo);
            return res.json(newTodo);
        } catch (err) {
            console.error('Erro:', err);
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const todo = req.body;

            const updatedTodo = await this.todoService.update(id, todo);
            return res.json(updatedTodo);
        } catch (err) {
            console.error('Erro:', err);
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedTodo = await this.todoService.delete(id);
            return res.json(deletedTodo);
        } catch (err) {
            console.error('Erro:', err);
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = TodoController;

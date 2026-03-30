const { Router } = require('express');
const TodoController = require('./controllers/TodoController');

const router = Router();
const todoController = new TodoController();

router.get('/todos', (req, res) => todoController.findAll(req, res));
router.get('/todos/:id', (req, res) => todoController.findById(req, res));
router.post('/todos', (req, res) => todoController.create(req, res));
router.put('/todos/:id', (req, res) => todoController.update(req, res));
router.delete('/todos/:id', (req, res) => todoController.delete(req, res));

module.exports = router;

const pool = require('../db/connect');

class TodoRepository {
    async findAll() {
        const result = await pool.query('SELECT * FROM todo');
        return result.rows;
    };

    async findById(id) {
        const result = await pool.query('SELECT * FROM todo WHERE id = $1', [id]);
        return result.rows[0];
    };

    async create(todo) {
        const result = await pool.query('INSERT INTO todo (title, description, completed) VALUES ($1, $2, $3) RETURNING *', [todo.title, todo.description, todo.completed || false]);
        return result.rows[0];
    };

    async update(id, todo) {
        const result = await pool.query('UPDATE todo SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *', [todo.title, todo.description, todo.completed, id]);
        return result.rows[0];
    };

    async delete(id) {
        const result = await pool.query('DELETE FROM todo WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    };
}

module.exports = TodoRepository;

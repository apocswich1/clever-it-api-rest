"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require('sqlite3').verbose();
class TaskDatabase {
    constructor(dbFilePath) {
        this.dbFilePath = dbFilePath;
        this.db = new sqlite3.Database(this.dbFilePath, (err) => {
            if (err) {
                console.error('Error al abrir la base de datos:', err.message);
            }
            else {
                console.log('Base de datos SQLite3 abierta.');
                this.initDatabase();
            }
        });
    }
    // Inicializa la base de datos y crea la tabla si no existe
    initDatabase() {
        this.db.serialize(() => {
            this.db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY,
          name TEXT,
          description TEXT,
          expirationDate TEXT,
          status TEXT
        )
      `);
        });
    }
    createTask(taskData) {
        return new Promise((resolve, reject) => {
            const { name, description, expirationDate, status } = taskData;
            const query = `
        INSERT INTO tasks (name, description, expirationDate, status)
        VALUES (?, ?, ?, ?)
      `;
            // Anotación de tipo para 'this'
            this.db.run(query, [name, description, expirationDate, status], function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    const lastID = this.lastID;
                    if (typeof lastID === 'number') {
                        resolve(lastID);
                    }
                    else {
                        reject(new Error('No se pudo obtener el ID del registro insertado.'));
                    }
                }
            });
        });
    }
    // Obtiene todas las tareas de la base de datos
    getAllTasks() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks';
            this.db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }
    // Obtiene una tarea por su ID
    getTaskById(taskId) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks WHERE id = ?';
            this.db.get(query, [taskId], (err, row) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(row || null);
                }
            });
        });
    }
    // Actualizar una tarea por su ID
    updateTask(taskId, updatedTaskData) {
        return new Promise((resolve, reject) => {
            const { name, description, expirationDate, status } = updatedTaskData;
            const query = `
        UPDATE tasks
        SET name = ?, description = ?, expirationDate = ?, status = ?
        WHERE id = ?
      `;
            this.db.run(query, [name, description, expirationDate, status, taskId], (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('Tarea actualizada correctamente');
                }
            });
        });
    }
    // Eliminar una tarea por su ID
    deleteTask(taskId) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM tasks WHERE id = ?';
            this.db.run(query, [taskId], (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('Tarea eliminada correctamente');
                }
            });
        });
    }
    // Cierra la conexión de la base de datos
    closeDatabase() {
        this.db.close((err) => {
            if (err) {
                console.error('Error al cerrar la base de datos:', err.message);
            }
            else {
                console.log('Base de datos cerrada.');
            }
        });
    }
}
exports.default = TaskDatabase;
module.exports = TaskDatabase;

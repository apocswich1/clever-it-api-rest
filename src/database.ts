const sqlite3 = require('sqlite3').verbose();

export default class TaskDatabase {
    private db: any;

    constructor(private readonly dbFilePath: any) {
        this.db = new sqlite3.Database(this.dbFilePath, (err: any) => {
            if (err) {
                console.error('Error al abrir la base de datos:', err.message);
            } else {
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

    createTask(taskData: {
        name: string;
        description: string;
        expirationDate: string;
        status: string;
    }): Promise<number> {
        return new Promise((resolve, reject) => {
            const { name, description, expirationDate, status } = taskData;
            const query = `
        INSERT INTO tasks (name, description, expirationDate, status)
        VALUES (?, ?, ?, ?)
      `;

            // Anotación de tipo para 'this'
            this.db.run(query, [name, description, expirationDate, status], function (this: any, err: Error | null) {
                if (err) {
                    reject(err);
                } else {
                    const lastID = this.lastID;
                    if (typeof lastID === 'number') {
                        resolve(lastID);
                    } else {
                        reject(new Error('No se pudo obtener el ID del registro insertado.'));
                    }
                }
            });
        });
    }

    // Obtiene todas las tareas de la base de datos
    getAllTasks(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks';
            this.db.all(query, [], (err: Error | null, rows: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    // Obtiene una tarea por su ID
    getTaskById(taskId: number): Promise<any | null> {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks WHERE id = ?';

            this.db.get(query, [taskId], (err: Error | null, row: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row || null);
                }
            });
        });
    }

    // Actualizar una tarea por su ID
    updateTask(taskId: number, updatedTaskData: any): Promise<string> {
        return new Promise((resolve, reject) => {
            const { name, description, expirationDate, status } = updatedTaskData;
            const query = `
        UPDATE tasks
        SET name = ?, description = ?, expirationDate = ?, status = ?
        WHERE id = ?
      `;

            this.db.run(query, [name, description, expirationDate, status, taskId], (err: Error | null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Tarea actualizada correctamente');
                }
            });
        });
    }

    // Eliminar una tarea por su ID
    deleteTask(taskId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM tasks WHERE id = ?';

            this.db.run(query, [taskId], (err: Error | null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve('Tarea eliminada correctamente');
                }
            });
        });
    }


    // Cierra la conexión de la base de datos
    closeDatabase() {
        this.db.close((err: any) => {
            if (err) {
                console.error('Error al cerrar la base de datos:', err.message);
            } else {
                console.log('Base de datos cerrada.');
            }
        });
    }
}

module.exports = TaskDatabase;

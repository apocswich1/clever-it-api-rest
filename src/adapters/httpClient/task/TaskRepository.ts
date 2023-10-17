import ITaskRepository from "../../../domain/ports/segment/ITaskRepository";
import TaskDatabase from '../../../database';

export default class TaskRepository implements ITaskRepository {
    private db: any;

    async createTask(task: any): Promise<any> {
        this.db = new TaskDatabase('task.db');
        const result = await this.db.createTask(task)
        this.db.closeDatabase();
        return result;
    }

    async getTask(taskId: any): Promise<any> {
        this.db = new TaskDatabase('task.db');
        const result = await this.db.getTaskById(taskId);
        this.db.closeDatabase();
        return result
    }

    async deleteTask(taskId: any): Promise<any> {
        this.db = new TaskDatabase('task.db');
        const result = await this.db.deleteTask(taskId);
        this.db.closeDatabase();
        return result
    }

    async taskList(): Promise<any> {
        this.db = new TaskDatabase('task.db');
        const result = await this.db.getAllTasks();
        this.db.closeDatabase();
        return result
    }

    async updateTask(taskId: any, task: any): Promise<any> {
        this.db = new TaskDatabase('task.db');
        const result = await this.db.updateTask(taskId, task);
        this.db.closeDatabase();
        return result
    }

}
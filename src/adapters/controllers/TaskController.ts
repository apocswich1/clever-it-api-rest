import ITaskRepository from "../../domain/ports/segment/ITaskRepository";
import { TaskService } from "../../domain/services/TaskService";
import CustomTaskValidator from "../validations/CustomTaskValidator";

export default class TaskController {
    constructor(private readonly taskrepository: ITaskRepository){}

    async createTask(task:any): Promise<any>{
        try {
            const taskService = new TaskService(this.taskrepository);
            await CustomTaskValidator.validate(task);
            const result = await taskService.createTask(task);
            
            return {
                status: 200,
                result: {
                    message: 'Task created',
                    data: result
                }
            }   
        } catch (error:any) {
            return {
                status: 400,
                message: String(error)
            }
        }   
    }
    
    async taskList(): Promise<any>{
        const taskService = new TaskService(this.taskrepository);
        const result = await taskService.taskList();
        return {
            status: 200,
            result: {
                message: 'Task list',
                data: result
            }
        }

    }
    
    async getTask(taskId:any): Promise<any>{
        const taskService = new TaskService(this.taskrepository);
        const result = await taskService.getTask(taskId);
        return {
            status: 200,
            result: {
                message: 'Task by Id',
                data: result
            }
        }

    }
    
    async updateTask(taskId:any, task:any): Promise<any>{
        const taskService = new TaskService(this.taskrepository);
        const result = await taskService.updateTask(taskId, task);
        return {
            status: 200,
            result: {
                message: 'Task updated',
                data: result
            }
        }

    }
    
    async deleteTask(taskId:any): Promise<any>{
        const taskService = new TaskService(this.taskrepository);
        const result = await taskService.deleteTask(taskId);
        return {
            status: 200,
            result: {
                message: 'Task deleted',
                data: result
            }
        }

    }
}
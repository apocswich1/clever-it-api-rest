import ITaskRepository from "../../../domain/ports/segment/ITaskRepository";

export default class Task {
    constructor(private readonly taskrepository: ITaskRepository){}

    public async createTask(task:any):Promise<any>{
        console.log("task service")
        console.log(task)
        const result = this.taskrepository.createTask({...task});
        return result;
    }
    
    public async getTask(taskId:any):Promise<any>{
        const result = this.taskrepository.getTask(taskId);
        return result;
    }
    
    public async deleteTask(taskId:any):Promise<any>{
        const result = this.taskrepository.deleteTask(taskId);
        return result;
    }
    
    public async updateTask(taskId:any, task:any):Promise<any>{
        const result = this.taskrepository.updateTask(taskId, task);
        return result;
    }
    
    public async taskList():Promise<any>{
        const result = this.taskrepository.taskList();
        return result;
        /*
        return [{
            name: "Task 1",
            taskId: "1",
            description: "Task - example",
            status: "PENDING",
            expirationDate: "12-12-2023",
        }];*/
    }
}
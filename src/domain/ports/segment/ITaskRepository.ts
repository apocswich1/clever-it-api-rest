export default interface ITaskRepository {
    createTask(task:any):Promise<any>
    getTask(taskId:any):Promise<any>
    taskList():Promise<any>
    deleteTask(taskId:any):Promise<any>
    updateTask(taskId:any, task:any):Promise<any>
}
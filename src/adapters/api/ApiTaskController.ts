import { Path, POST, GET, PUT, DELETE, PathParam } from 'typescript-rest';
import { Response } from 'typescript-rest-swagger';
import TaskController from '../controllers/TaskController';

@Path('/tasks') // Rutas deben comenzar con una barra /
export default class ApiTaskController {
  constructor(private readonly taskController: TaskController) {}

  @POST
  @Path('/create')
  @Response(500)
  public async createTask(task: any): Promise<any> {
    const result = await this.taskController.createTask(task);
    return result;
  }

  @GET
  @Path('/list')
  public async taskList(): Promise<any> {
    const result = await this.taskController.taskList();
    return result;
  }

  @GET
  @Path('/:taskId') // Utiliza parámetros en la ruta
  public async task(taskId: any): Promise<any> {
    const result = await this.taskController.getTask(taskId);
    return result;
  }

  @PUT
  @Path('/update/:taskId')
  public async updateTask(@PathParam('taskId') taskId: any, task: any): Promise<any> {
      // Aquí, 'task' representa el objeto que deseas enviar en el cuerpo de la solicitud.
      // 'taskId' se obtiene de la URL como un parámetro de ruta.
      const result = await this.taskController.updateTask(taskId, task);
      return result;
  }

  @DELETE
  @Path('/delete/:taskId') // Utiliza parámetros en la ruta
  public async deleteTask(taskId: any): Promise<any> {
    const result = await this.taskController.deleteTask(taskId);
    return result;
  }
}

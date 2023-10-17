import { Router } from "express";
import ApiTaskController from "../adapters/api/ApiTaskController";
import TaskController from "../adapters/controllers/TaskController";
import TaskRepository from "../adapters/httpClient/task/TaskRepository";
const routes = Router();

const apiTaskController = new ApiTaskController(new TaskController(
    new TaskRepository()
));

routes.post('/create', async ({ body }, res, next) => {
    try {
        const name = body.name as string;
        const description = body.description as string;
        const expirationDate = body.expirationDate as Date;
        const status = body.status as string;
        const response = await apiTaskController.createTask(
            {
                name,
                description,
                expirationDate,
                status
            }
        )
        res.json(response);
    } catch (error) {
        return next(error);
    }
})

routes.delete('/delete/:id', async ({ params }, res, next) => {
    try {
        const taskId = params.id as string;
        const response = await apiTaskController.deleteTask(taskId)
        res.json(response);
    } catch (error) {
        return next(error);
    }
})

routes.put('/update/:id', async ({ params, body }, res, next) => {
    try {
        const taskId = params.id as string;
        const task = body as string;
        const response = await apiTaskController.updateTask(taskId, task)
        res.json(response);
    } catch (error) {
        return next(error);
    }
})

routes.get('/task/:id', async ({ params }, res, next) => {
    try {
        const taskId = params.id as string;
        const response = await apiTaskController.task(taskId)
        res.json(response);
    } catch (error) {
        return next(error);
    }
})

routes.get('/list', async (req, res, next) => {
    try {
        const response = await apiTaskController.taskList()
        res.json(response);
    } catch (error) {
        return next(error);
    }
})

export default routes;
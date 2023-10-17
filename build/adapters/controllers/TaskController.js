"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = require("../../domain/services/TaskService");
const CustomTaskValidator_1 = __importDefault(require("../validations/CustomTaskValidator"));
class TaskController {
    constructor(taskrepository) {
        this.taskrepository = taskrepository;
    }
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskService = new TaskService_1.TaskService(this.taskrepository);
                yield CustomTaskValidator_1.default.validate(task);
                const result = yield taskService.createTask(task);
                return {
                    status: 200,
                    result: {
                        message: 'Task created',
                        data: result
                    }
                };
            }
            catch (error) {
                return {
                    status: 400,
                    message: String(error)
                };
            }
        });
    }
    taskList() {
        return __awaiter(this, void 0, void 0, function* () {
            const taskService = new TaskService_1.TaskService(this.taskrepository);
            const result = yield taskService.taskList();
            return {
                status: 200,
                result: {
                    message: 'Task list',
                    data: result
                }
            };
        });
    }
    getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskService = new TaskService_1.TaskService(this.taskrepository);
            const result = yield taskService.getTask(taskId);
            return {
                status: 200,
                result: {
                    message: 'Task by Id',
                    data: result
                }
            };
        });
    }
    updateTask(taskId, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskService = new TaskService_1.TaskService(this.taskrepository);
            const result = yield taskService.updateTask(taskId, task);
            return {
                status: 200,
                result: {
                    message: 'Task updated',
                    data: result
                }
            };
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskService = new TaskService_1.TaskService(this.taskrepository);
            const result = yield taskService.deleteTask(taskId);
            return {
                status: 200,
                result: {
                    message: 'Task deleted',
                    data: result
                }
            };
        });
    }
}
exports.default = TaskController;

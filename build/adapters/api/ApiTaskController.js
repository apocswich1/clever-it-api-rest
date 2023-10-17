"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const typescript_rest_1 = require("typescript-rest");
const typescript_rest_swagger_1 = require("typescript-rest-swagger");
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
let ApiTaskController = class ApiTaskController {
    constructor(taskController) {
        this.taskController = taskController;
    }
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskController.createTask(task);
            return result;
        });
    }
    taskList() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskController.taskList();
            return result;
        });
    }
    task(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskController.getTask(taskId);
            return result;
        });
    }
    updateTask(taskId, task) {
        return __awaiter(this, void 0, void 0, function* () {
            // Aquí, 'task' representa el objeto que deseas enviar en el cuerpo de la solicitud.
            // 'taskId' se obtiene de la URL como un parámetro de ruta.
            const result = yield this.taskController.updateTask(taskId, task);
            return result;
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskController.deleteTask(taskId);
            return result;
        });
    }
};
__decorate([
    typescript_rest_1.POST,
    (0, typescript_rest_1.Path)('/create'),
    (0, typescript_rest_swagger_1.Response)(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiTaskController.prototype, "createTask", null);
__decorate([
    typescript_rest_1.GET,
    (0, typescript_rest_1.Path)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiTaskController.prototype, "taskList", null);
__decorate([
    typescript_rest_1.GET,
    (0, typescript_rest_1.Path)('/:taskId') // Utiliza parámetros en la ruta
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiTaskController.prototype, "task", null);
__decorate([
    typescript_rest_1.PUT,
    (0, typescript_rest_1.Path)('/update/:taskId'),
    __param(0, (0, typescript_rest_1.PathParam)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ApiTaskController.prototype, "updateTask", null);
__decorate([
    typescript_rest_1.DELETE,
    (0, typescript_rest_1.Path)('/delete/:taskId') // Utiliza parámetros en la ruta
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiTaskController.prototype, "deleteTask", null);
ApiTaskController = __decorate([
    (0, typescript_rest_1.Path)('/tasks') // Rutas deben comenzar con una barra /
    ,
    __metadata("design:paramtypes", [TaskController_1.default])
], ApiTaskController);
exports.default = ApiTaskController;

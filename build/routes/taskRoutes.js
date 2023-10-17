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
const express_1 = require("express");
const ApiTaskController_1 = __importDefault(require("../adapters/api/ApiTaskController"));
const TaskController_1 = __importDefault(require("../adapters/controllers/TaskController"));
const TaskRepository_1 = __importDefault(require("../adapters/httpClient/task/TaskRepository"));
const routes = (0, express_1.Router)();
const apiTaskController = new ApiTaskController_1.default(new TaskController_1.default(new TaskRepository_1.default()));
routes.post('/create', ({ body }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = body.name;
        const description = body.description;
        const expirationDate = body.expirationDate;
        const status = body.status;
        const response = yield apiTaskController.createTask({
            name,
            description,
            expirationDate,
            status
        });
        res.json(response);
    }
    catch (error) {
        return next(error);
    }
}));
routes.delete('/delete/:id', ({ params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = params.id;
        const response = yield apiTaskController.deleteTask(taskId);
        res.json(response);
    }
    catch (error) {
        return next(error);
    }
}));
routes.put('/update/:id', ({ params, body }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = params.id;
        const task = body;
        const response = yield apiTaskController.updateTask(taskId, task);
        res.json(response);
    }
    catch (error) {
        return next(error);
    }
}));
routes.get('/task/:id', ({ params }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = params.id;
        const response = yield apiTaskController.task(taskId);
        res.json(response);
    }
    catch (error) {
        return next(error);
    }
}));
routes.get('/list', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield apiTaskController.taskList();
        res.json(response);
    }
    catch (error) {
        return next(error);
    }
}));
exports.default = routes;

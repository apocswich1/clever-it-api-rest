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
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(taskrepository) {
        this.taskrepository = taskrepository;
    }
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("task service");
            console.log(task);
            const result = this.taskrepository.createTask(Object.assign({}, task));
            return result;
        });
    }
    getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.taskrepository.getTask(taskId);
            return result;
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.taskrepository.deleteTask(taskId);
            return result;
        });
    }
    updateTask(taskId, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.taskrepository.updateTask(taskId, task);
            return result;
        });
    }
    taskList() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.default = Task;

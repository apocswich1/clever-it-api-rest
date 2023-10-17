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
const database_1 = __importDefault(require("../../../database"));
class TaskRepository {
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new database_1.default('task.db');
            const result = yield this.db.createTask(task);
            this.db.closeDatabase();
            return result;
        });
    }
    getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new database_1.default('task.db');
            const result = yield this.db.getTaskById(taskId);
            this.db.closeDatabase();
            return result;
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new database_1.default('task.db');
            const result = yield this.db.deleteTask(taskId);
            this.db.closeDatabase();
            return result;
        });
    }
    taskList() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new database_1.default('task.db');
            const result = yield this.db.getAllTasks();
            this.db.closeDatabase();
            return result;
        });
    }
    updateTask(taskId, task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.db = new database_1.default('task.db');
            const result = yield this.db.updateTask(taskId, task);
            this.db.closeDatabase();
            return result;
        });
    }
}
exports.default = TaskRepository;

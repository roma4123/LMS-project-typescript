"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
class Teachers {
    constructor() {
        this.teachers = new Map();
    }
    add(data) {
        let id = String(Teachers.counter++);
        this.teachers.set(id, data);
        return id;
    }
    read(id) {
        return Object.assign({ id: id }, this.teachers.get(id));
    }
    update(id, profile) {
        this.teachers.set(id, profile);
    }
    remove(id) {
        this.teachers.delete(id);
    }
}
exports.Teachers = Teachers;
Teachers.counter = 0;

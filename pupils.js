"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    constructor() {
        this.pupils = new Map();
    }
    add(data) {
        let pupilsId = String(Pupils.counter++);
        this.pupils.set(pupilsId, data);
        return Object.assign({ id: pupilsId }, data);
    }
    read(id) {
        return Object.assign({ id: id }, this.pupils.get(id));
    }
    update(id, profile) {
        this.pupils.set(id, profile);
    }
    remove(id) {
        this.pupils.delete(id);
    }
}
exports.Pupils = Pupils;
Pupils.counter = 0;

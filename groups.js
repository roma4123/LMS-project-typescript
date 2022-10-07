"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    constructor() {
        this.groups = new Map();
    }
    add(room) {
        let id = String(Groups.counter++);
        this.groups.set(id, { room: room, pupils: [] });
        return id;
    }
    addPupil(groupId, pupil) {
        if (!this.groups.has(groupId)) {
            throw new Error('aseti Id ze jgufi ar arsebobs');
        }
        this.groups.get(groupId).pupils.push(pupil);
    }
    remove(groupId, pupilid) {
        let arr = this.groups.get(groupId).pupils;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === pupilid) {
                arr.splice(i, 1);
            }
        }
    }
    update(groupId, { room: roomsnumber }) {
        this.groups.get(groupId).room = roomsnumber;
    }
    read(groupId) {
        let x = this.groups.get(groupId);
        return Object.assign({ id: groupId }, x);
    }
    readAll() {
        let arr = [];
        // for(let i = 0; i<this.groups.size; i++){
        //    let x = this.groups.get(String(i));
        //    arr.push({id: String(i),...x})
        // }
        //     return arr;
        this.groups.forEach((value, key) => {
            arr.push(this.read(key));
        });
        return arr;
    }
}
exports.Groups = Groups;
Groups.counter = 0;

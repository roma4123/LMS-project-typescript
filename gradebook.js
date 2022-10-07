"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebooks = void 0;
class Gradebooks {
    constructor(groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add(groupId) {
        let c = String(Gradebooks.counter++);
        let x = this.groups.read(groupId);
        delete x.id;
        Gradebooks.gradebooks.set(c, x);
    }
    clear() {
        Gradebooks.gradebooks.clear();
    }
    addRecord(gradebookId, record) {
        if (Gradebooks.gradebooks.get(gradebookId)) {
            const pupilId = record.pupilId;
            const pupilebi = Gradebooks.gradebooks.get(gradebookId).pupils.find((x) => {
                return x.id === pupilId;
            });
            const saxeli = `${pupilebi.name.first} ${pupilebi.name.last}`; /// pupil fullname
            const teacherId = record.teacherId;
            const teacherRead = this.teachers.read(teacherId);
            const teacherName = `${teacherRead.name.first} ${teacherRead.name.last}`; //// teachers fullname
            const subjectId = record.subjectId;
            let x = this.lms.readAll();
            const subjectebi = x.find((el) => {
                return el.id === subjectId;
            });
            const subject = subjectebi.title;
            let shesafushi = { name: teacherName, subject: subject, lesson: record.lesson, mark: record.mark };
            if (!Gradebooks.gradebooks.get(gradebookId)[pupilId]) {
                let danarcheni = { name: saxeli, record: [] };
                danarcheni.record.push(shesafushi);
                Gradebooks.gradebooks.get(gradebookId)[record.pupilId] = danarcheni;
            }
            else {
                Gradebooks.gradebooks.get(gradebookId)[pupilId].record.push(shesafushi);
            }
        }
        else {
            throw new Error('araris eseti grradeid');
        }
    }
    read(gradebookId, pupilId) {
        let x = Gradebooks.gradebooks.get(gradebookId)[pupilId];
        return x;
    }
    readAll(gradebookId) {
        let x = Gradebooks.gradebooks.get(gradebookId);
        return [x];
    }
}
exports.Gradebooks = Gradebooks;
Gradebooks.gradebooks = new Map();
Gradebooks.counter = 0;

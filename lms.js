"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Subject_subjectId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
class Subject {
    constructor(subj) {
        _Subject_subjectId.set(this, String(Subject.counter));
        // this.title = subj.title;
        // this.lessons = subj.lessons;
        // if(subj.description){
        //     this.description = subj.description;
        // }
        Object.assign(this, subj);
        Subject.counter++;
    }
    get id() {
        return __classPrivateFieldGet(this, _Subject_subjectId, "f");
    }
}
exports.Subject = Subject;
_Subject_subjectId = new WeakMap();
// public title: string;
// public description: string;
// public lessons: number;
Subject.counter = 0;
class LMS {
    constructor() {
        this.lms = new Map();
    }
    add(subj) {
        this.lms.set(subj.id, Object.assign({ id: subj.id }, subj));
    }
    remove(subj) {
        this.lms.delete(subj.id);
    }
    verify(subj) {
        return this.lms.has(subj.id);
    }
    readAll() {
        return [...this.lms.values()];
    }
}
exports.LMS = LMS;

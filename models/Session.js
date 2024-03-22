"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Session {
    constructor(studentId, testId, sectionId, date, grade, answers) {
        this.studentId = studentId;
        this.testId = testId;
        this.sectionId = sectionId;
        this.date = date;
        this.grade = grade;
        this.answers = answers;
    }
}
exports.default = Session;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exam {
    constructor(key, id, type, sections, scoreScale) {
        this.key = key;
        this.id = id;
        this.type = type;
        this.sections = sections;
        this.scoreScale = scoreScale;
    }
}
exports.default = Exam;

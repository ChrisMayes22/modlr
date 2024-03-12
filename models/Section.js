"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Section {
    constructor(key, id, parentId, problems) {
        this.key = key;
        this.id = id;
        this.parentId = parentId;
        this.problems = problems;
    }
}
exports.default = Section;

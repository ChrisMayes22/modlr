import Problem from "./Problem";

class Section {
    constructor(
        public key: number,
        public id: string,
        public parentId: string,
        public problems: Problem[]
    ) {}
}

export default Section;

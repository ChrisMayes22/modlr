import ProblemModel from "./Problem";

class Section {
    constructor(
        public key: number,
        public id: string,
        public parentId: string,
        public problems: ProblemModel[]
    ) {}
}

export default Section;

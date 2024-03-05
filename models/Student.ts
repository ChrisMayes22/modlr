
class Session {
    constructor(
        public studentId: string,
        public testId: string,
        public sectionId: string,
        public date: Date,
        public grade: number,
        public answers: string[]
    ) {}
}

export default Session;


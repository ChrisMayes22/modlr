import Session from "./Session";

class Student {
    constructor(
        public key: number,
        public fName: string,
        public lName: string,
        public pastWork: Session[]
    ) {}
}

export default Student;

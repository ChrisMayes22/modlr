import Section from "./Section";

class Test {
    constructor(
        public key: number,
        public id: string,
        public type: string,
        public sections: Section[],
        public scoreScale: number[]
    ) {}
}

export default Test
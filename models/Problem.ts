class Problem {
    constructor(
        public key: number,
        public problemId: string,
        public parentId: string,
        public problemTypes: string[],
        public prompt: string,
        public text: string,
        public answerChoices: string[],
        public correctAnswer: string
    ) {}
}

export default Problem
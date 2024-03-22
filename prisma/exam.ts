import prisma from './client'

interface ExamInterface {
  type: String;
  sections: {}
}


const mockExam = {
    type: 'English',
    sections: {
        create: {
            scoreScale: '12345689',
            sectionType: 'English',
            problems: {
                create: {
                    problemTypes: 'conciseness',
                    prompt: 'Prompt',
                    text: 'text',
                    answerChoices: 'A,B,C,D',
                    correctAnswer: 'A',
                }
            }
        }
    }
};
async function createExam(data: {}) {

  const problem = await prisma.exam.create({
    data: data
  })

  return problem;

}

export {
    ExamInterface,
    createExam
}
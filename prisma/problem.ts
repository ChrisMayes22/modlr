import { Prisma } from '@prisma/client'
import prisma from './client'
  
interface ProblemInterface {
  id: String;            
  problemTypes: String;  
  prompt: String;      
  text: String;          
  answerChoices : String
  correctAnswer : String
  section       : String
  sectionId     : String
  session       : String
  sessionId     : String
}

async function createProblem(data: {}) {

  const problem = await prisma.exam.create({
    data: data
  })

  return problem;

}

export {
  ProblemInterface,
  createProblem
}
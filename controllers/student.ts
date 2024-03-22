import { Prisma, Student } from '@prisma/client'
import prisma  from '../prisma/client';


/**
 * Creates a new student.
 * 
 * @param payload - The data for the new student.
 * @param payload.firstName - The first name of the student.
 * @param payload.lastName - The last name of the student.
 * 
 * @returns The created student.
 */
async function createStudent(payload: Prisma.StudentCreateInput): Promise<Student> {
  try {
    return await prisma.student.create({
      data: payload
    })
  } catch(e){
    console.error(e)
    throw e;
  }
}

/**
 * Updates a student.
 * 
 * @param payload - The data for the new student.
 * @param payload.firstName - The first name of the student.
 * @param payload.lastName - The last name of the student.
 * 
 * @returns The created student.
 */
async function updateStudent(targetStudent: number, payload: Prisma.StudentUpdateInput): Promise<Student> {
    try{
        return await prisma.student.update({
        where: { id: targetStudent },
        data: payload
        })
    } catch(e){
        console.error(e)
        throw e;
    }
}

async function getStudentById(targetStudent: number): Promise<Student> {
    try{
        const result = await prisma.student.findUnique({
            where: { id: targetStudent }
        })
        
        // If the student is not found, throw an error
        if(result === null){
            throw new Error("Student not found")
        }

        // Otherwise, return the student
        return result;

    } catch(e){
        console.error(e)
        throw e;
    }
}

async function deleteStudent(targetStudent: number): Promise<Boolean>{
    try{
        await prisma.student.delete({
            where: { id: targetStudent }
        })
        return true;
    } catch(e){
        console.error(e)
        throw e;
    }
}

export { 
    createStudent,
    updateStudent,
    getStudentById,
    deleteStudent
}
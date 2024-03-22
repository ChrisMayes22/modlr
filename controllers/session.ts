import prisma from '../prisma/client';
import {Prisma, Session } from '@prisma/client';

/**
 * Creates a new session.
 * 
 * @param payload - The data for the new session.
 * @param payload.studentId - The ID of the student associated with the session.
 * @param payload.date - The date of the session.
 * @param payload.studentAnswers - The student's answers for the session. Defaults to an empty string.
 * 
 * @returns The created session.
 */
async function createSession(payload: Prisma.SessionCreateInput): Promise<Session> {
  try {
    return await prisma.session.create({
      data: payload,
      include: {
        problems: true,
        student: true
      }
    })
  } catch (e) {
    console.error(e)
    throw e;
  }
}

/**
 * Update a new session.
 * 
 * @param payload - The data for the new session.
 * @param payload.studentId - The ID of the student associated with the session.
 * @param payload.date - The date of the session.
 * @param payload.studentAnswers - The student's answers for the session. Defaults to an empty string.
 * 
 * @returns The created session.
 */
async function updateSession(targetSession: number, payload: Prisma.SessionUpdateInput): Promise<Session> {
    try{
        return await prisma.session.update({
            where: { id: targetSession },
            data: payload,
            include: {
                problems: true,
                student: true
            }
        })
    } catch(e){
        console.error(e);
        throw e;
    }
}

async function getSessionById(targetSession: number): Promise<Session> {
    try{
        const result = await prisma.session.findUnique({
            where: { id: targetSession },
            include: {
                problems: true,
                student: true
            }
        })
        
        // If the session is not found, throw an error
        if(result === null){
            throw new Error("Session not found")
        }

        // Otherwise, return the session
        return result;

    } catch(e){
        console.error(e)
        throw e;
    }
}

async function getSessionByStudent(targetStudent: number): Promise<Session[]> {
    try{
        return await prisma.session.findMany({
            where: { studentId: targetStudent },
            include: {
                problems: true,
                student: true
            }
        })
    } catch(e){
        console.error(e)
        throw e;
    }
}

async function getSessionByDate(targetDate: Date): Promise<Session[]> {
    try{
        return await prisma.session.findMany({
            where: { date: targetDate },
            include: {
                problems: true,
                student: true
            }
        })
    } catch(e){
        console.error(e)
        throw e;
    }
}

async function deleteSession(targetSession: number): Promise<Boolean>{
    try{
        await prisma.session.delete({
            where: { id: targetSession }
        })
        return true;
    } catch(e){
        console.error(e)
        throw e;
    }
}

export {
    createSession,
    updateSession,
    getSessionById,
    getSessionByStudent,
    getSessionByDate,
    deleteSession
}
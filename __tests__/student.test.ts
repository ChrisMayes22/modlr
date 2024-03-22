import { createStudent, getStudentById, deleteStudent } from '../controllers/student';
import { prismaMock } from '../prisma/singleton';

// Mock data
const mockStudent = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
};

test('creates a student', async () => {
  prismaMock.student.create.mockResolvedValue(mockStudent);

  const student = await createStudent({
    firstName: 'John',
    lastName: 'Doe',
  });

  expect(student).toEqual(mockStudent);
  expect(prismaMock.student.create).toBeCalledWith({
    data: {
      firstName: 'John',
      lastName: 'Doe',
    },
  });
});

test('gets a student by id', async () => {
  prismaMock.student.findUnique.mockResolvedValue(mockStudent);

  const student = await getStudentById(1);

  expect(student).toEqual(mockStudent);
  expect(prismaMock.student.findUnique).toBeCalledWith({
    where: { id: 1 },
  });
});

test('deletes a student', async () => {
  prismaMock.student.delete.mockResolvedValue(mockStudent);

  const result = await deleteStudent(1);

  expect(result).toBe(true);
  expect(prismaMock.student.delete).toBeCalledWith({
    where: { id: 1 },
  });
});
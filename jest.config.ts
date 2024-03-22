import type {Config} from 'jest';
import path from 'path';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: [path.resolve(__dirname, '/prisma/singleton.ts')],
  };
};
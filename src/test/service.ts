import { getMongoManager, ObjectID } from 'typeorm';
import { Test } from './model/test.entity';

export const getTest = async (id: string) => {
  const manager = getMongoManager();

  const test = await manager.findOne(Test, id);

  return test;
};

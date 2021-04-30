import { Request, Response, Router } from 'express';

import * as service from './service';

export const router = Router();

export const getTest = async (req: Request, res: Response) => {
  const { testId } = req.params;

  const test = await service.getTest(testId);

  res.json(test);
};
router.get('/:testId', getTest);

export const createTest = async (req: Request, res: Response) => {
  const { testId } = req.params;

  const test = await service.getTest(testId);
};
router.post('/', createTest);

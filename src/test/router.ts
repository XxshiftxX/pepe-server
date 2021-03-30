import { Request, Response, Router } from 'express';

export const router = Router();

export const getTest = (req: Request, res: Response) => {
  const { testId } = req.params;

  res.json({ testId });
};
router.use('/:testId', getTest);

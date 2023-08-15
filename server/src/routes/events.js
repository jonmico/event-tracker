import { Router } from 'express';
import AppError from '../AppError.js';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('get');
});

router.post('/', (req, res, next) => {
  try {
    throw new AppError(402, 'huh');
  } catch (err) {
    next(err);
  }
});

export default router;

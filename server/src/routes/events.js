import { Router } from 'express';
import validateEvent from '../middleware/validateEvent.js';
import EventModel from '../models/event.js';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('get');
});

router.post('/', validateEvent, (req, res, next) => {
  try {
    const newEvent = new EventModel(req.body);
    newEvent.save();
    console.log(newEvent);
    res.send(newEvent);
  } catch (err) {
    next(err);
  }
});

export default router;

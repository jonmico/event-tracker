import { Router } from 'express';
import validateEvent from '../middleware/validateEvent.js';
import EventModel from '../models/event.js';

import {
  createEvent,
  editEvent,
  getEvent,
  getEvents,
} from '../controllers/events.js';

import AppError from '../AppError.js';

const router = Router();

router.get('/', getEvents);

router.get('/:id', getEvent);

router.post('/', validateEvent, createEvent);

router.put('/:id', validateEvent, editEvent);

export default router;

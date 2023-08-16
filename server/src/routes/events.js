import { Router } from 'express';
import validateEvent from '../middleware/validateEvent.js';
import EventModel from '../models/event.js';

const router = Router();

import {
  createEvent,
  deleteEvent,
  editEvent,
  getEvent,
  getEvents,
} from '../controllers/events.js';

import AppError from '../AppError.js';

router.get('/', getEvents);

router.get('/:id', getEvent);

router.post('/', validateEvent, createEvent);

router.put('/:id', validateEvent, editEvent);

router.delete('/:id', deleteEvent);

export default router;

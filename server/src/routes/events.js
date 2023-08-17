import { Router } from 'express';

import {
  createEvent,
  deleteEvent,
  editEvent,
  getEvent,
  getEvents,
  filterEvents,
  addUserToEvent,
} from '../controllers/events.js';
import validateEvent from '../middleware/validateEvent.js';

const router = Router();

router.get('/search', filterEvents);

router.get('/', getEvents);

router.get('/:id', getEvent);

router.post('/', validateEvent, createEvent);

router.post('/:eventId/:userId', addUserToEvent);

router.put('/:id', validateEvent, editEvent);

router.delete('/:id', deleteEvent);

export default router;

import { Router } from 'express';
import validateEvent from '../middleware/validateEvent.js';
import EventModel from '../models/event.js';

import { createEvent, getEvents } from '../controllers/events.js';

const router = Router();

router.get('/', getEvents);

router.post('/', validateEvent, createEvent);

export default router;

import { Router } from 'express';
import { createUser, getUser } from '../controllers/user.js';
import validateUser from '../middleware/validateUser.js';

const router = Router();

router.post('/', validateUser, createUser);

router.get('/:id', getUser);

export default router;

import { Router } from 'express';
import { createUser, getUser, editUser } from '../controllers/user.js';
import validateUser from '../middleware/validateUser.js';

const router = Router();

router.post('/', validateUser, createUser);

router.get('/:id', getUser);

router.put('/:id', validateUser, editUser);

export default router;

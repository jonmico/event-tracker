import { Router } from 'express';
import { createUser } from '../controllers/user.js';
import validateUser from '../middleware/validateUser.js';

const router = Router();

router.post('/', validateUser, createUser);

export default router;

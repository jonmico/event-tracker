import { Router } from 'express';
import {
  createUser,
  getUser,
  editUser,
  deleteUser,
} from '../controllers/user.js';
import validateUser from '../middleware/validateUser.js';

const router = Router();

router.post('/', validateUser, createUser);

router.get('/:id', getUser);

router.put('/:id', validateUser, editUser);

router.delete('/:id', deleteUser);

export default router;

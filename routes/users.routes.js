import { Router } from 'express';
const router = Router();
import { getUsers, createUser } from '../controllers/users.controller.js';

router.get('/', getUsers);
router.post('/', createUser);

export default router;

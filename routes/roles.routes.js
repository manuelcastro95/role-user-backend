import { Router } from 'express';
const router = Router();
import { getRoles, createRole } from '../controllers/roles.controller.js';

router.get('/', getRoles);
router.post('/', createRole);

export default router; 



// import { register, login } from '../controllers/auth.controller.js';



// router.post('/register', register);
// router.post('/login', login);

// export default router; 
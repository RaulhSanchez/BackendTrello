// backend/src/routes/task.routes.ts

import { Router } from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controller/controller';

const router = Router();

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;

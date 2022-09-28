import express from 'express';
import { getUser } from './workers.service';

export const workersRouter = express.Router();

workersRouter.get('/', (req,res) => res.status(200).json('This is the workers json'));
workersRouter.get('/:id', getUser);

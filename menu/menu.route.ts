import express from 'express';
import { getMenu } from './menu.service';

export const menuRouter = express.Router();

menuRouter.get('/',getMenu);
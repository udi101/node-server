import express from 'express';
import { app } from './../index'
import { getMenu } from './menu.service';

export const menuRouter = express.Router();


menuRouter.get('/',getMenu);
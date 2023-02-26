import express from 'express';
import { getUser, getDashboardStats } from '../controllers/general.js';

const generalRouter = express.Router();

generalRouter.get('/user/:id', getUser);
generalRouter.get('/dashboard', getDashboardStats);

export default generalRouter;
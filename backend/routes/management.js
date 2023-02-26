import express from 'express';
import { getAdmins } from '../controllers/management.js';

const managementRouter = express.Router();

managementRouter.get('/admins', getAdmins);

export default managementRouter;
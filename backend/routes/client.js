import express from 'express';
import { getProducts } from '../controllers/client.js';

const clientRouter = express.Router();

router.get('/products', getProducts);

export default clientRouter;
import express from 'express';
import 'express-async-errors';

import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

app.use(httpErrorMiddleware);

export default app;

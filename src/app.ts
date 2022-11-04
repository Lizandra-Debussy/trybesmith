import express from 'express';
import 'express-async-errors';
// import statusCodes from './statusCodes';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.status(statusCodes.OK).send('Express + TypeScript');
// });

app.use('/products', productsRoutes);

app.use(httpErrorMiddleware);

export default app;

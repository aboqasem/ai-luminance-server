import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import indexRouter from './routes/index';
import { notFound, errorHandler } from './middlewares';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('common'));

app.use('/', indexRouter);

app.use(notFound);
app.use(errorHandler);

export default app;

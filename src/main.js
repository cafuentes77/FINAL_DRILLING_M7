import express from 'express';
import { serverInit } from './services/serverInit.js';

import userRouter from './routes/user.routes.js';
import userBootcamp from './routes/bootcamp.routes.js';


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', userRouter);
app.use('/api/v1', userBootcamp);



serverInit(app, PORT);
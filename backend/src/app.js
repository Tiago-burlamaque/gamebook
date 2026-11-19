import express from 'express';
import cors from 'cors';
import userRouter from './routes/usuario.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', userRouter)

export default app;
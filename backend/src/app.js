import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', loginRouter)

export default app;
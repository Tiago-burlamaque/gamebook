import express from 'express'
import { usuarioController } from '../controllers/login.controller.js';

const loginRouter = express.Router();

loginRouter.post('/login', usuarioController.login)

export default loginRouter;
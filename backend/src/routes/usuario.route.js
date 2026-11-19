import express from 'express'
import { usuarioController } from '../controllers/usuario.controller.js';

const userRouter = express.Router();

userRouter.get('/get', usuarioController.get)

export default userRouter;
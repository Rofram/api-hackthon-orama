import express from 'express';
import acoesController from './controllers/acoesController.js';
import userController from './controllers/userController.js';

const routes = express.Router();

routes.use('/acao', acoesController);
routes.use('/user', userController);

export default routes;
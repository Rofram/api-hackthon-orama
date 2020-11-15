import express from 'express';
import acoesController from './controllers/acoesController.js';
import userController from './controllers/userController.js';
import rendaFixaController from './controllers/rendaFixaController.js';

const routes = express.Router();

routes.use('/acao', acoesController);
routes.use('/user', userController);
routes.use('/rendafix', rendaFixaController);

export default routes;
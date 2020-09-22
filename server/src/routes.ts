import express from 'express'
import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionsController();
//Rota para criação da página de criar aulas

routes.post('/classes' , classesControllers.create );
routes.get('/classes', classesControllers.index);
routes.post('/connections',connectionsController.create);
routes.get('/connections',connectionsController.index);

export default routes;
import express from 'express';
import ClassController from './controllers/ClassesController';


const routes = express.Router();


const classController = new ClassController();

routes.post('/classes', classController.create );

export default routes;
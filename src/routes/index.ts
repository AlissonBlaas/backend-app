import { Router } from 'express';
import userRoutes from './users.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userRoutes);

export default routes;

import { Router } from 'express';
import userRoutes from './users.routes';
import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;

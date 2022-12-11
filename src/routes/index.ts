import {Router} from 'express';
import { emailRoutes } from './email.routes';

export const routes = Router();
routes.use('/email',emailRoutes);
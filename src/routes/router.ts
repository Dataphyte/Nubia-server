import faacRoutes from './faac.routes';
import { Router, Request, Response } from 'express';
import ResponseMiddleware from '../middlewares/Response.middleware';

const AppRoutes = Router();
ResponseMiddleware(AppRoutes);

// prettier-ignore
AppRoutes
    .route('/') // root
        .get((req: Request, res: Response) => {
            res.status(200).json({message:'Root route hit!', status: 200});
        });

AppRoutes.use(faacRoutes);

export default AppRoutes;

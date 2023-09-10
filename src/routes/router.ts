import faacRoutes from './faac.routes';
import { Router, Request, Response } from 'express';
import ResponseMiddleware from '../middlewares/Response.middleware';
import KerosineRoutes from './kerosine.routes';
import UserRouter from './user.routes';

const AppRoutes = Router();
ResponseMiddleware(AppRoutes);

// prettier-ignore
AppRoutes
    .route('/') // root
        .get((req: Request, res: Response) => {
            res.status(200).json({message:'NUBIA Root', status: 200});
        });

// prettier-ignore
AppRoutes
    .use(faacRoutes)
    .use(KerosineRoutes)
    .use(UserRouter)

export default AppRoutes;

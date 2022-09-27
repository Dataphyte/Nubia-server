import { Router, Request, Response } from 'express';
import faacRoutes from './faac.routes';

const AppRoutes = Router();

// prettier-ignore
AppRoutes
    .route('/') // root
        .get((req: Request, res: Response) => {
            res.status(200).send('Root route hit!');
        });

AppRoutes.use(faacRoutes);

export default AppRoutes;

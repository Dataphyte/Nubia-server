import { Router } from 'express';
import faacController from '../controllers/faac.controller';

const faacRoutes = Router();

// prettier-ignore
faacRoutes
    .route('/faac')
        .get(faacController.CREATE)

// prettier-ignore
faacRoutes
    .route('/faac/data')
        .get(faacController.GET_DATA);

export default faacRoutes;

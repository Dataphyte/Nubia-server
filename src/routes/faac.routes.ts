import { Router } from 'express';
import faacController from '../controllers/faac.controller';

const faacRoutes = Router();

// prettier-ignore
faacRoutes
    .route('/faac')
        .get(faacController.CREATE)

export default faacRoutes;

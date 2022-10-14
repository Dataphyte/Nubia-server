import { Router } from 'express';
import kerosineController from '../controllers/kerosine.controller';
import asyncHandler from '../utils/asyncHandler.utils';

const KerosineRoutes = Router();

// prettier-ignore
KerosineRoutes
    .route('/kerosine-watch')
     .get(asyncHandler(kerosineController.CREATE))

export default KerosineRoutes;

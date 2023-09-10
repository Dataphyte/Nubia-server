import { Router } from 'express';
import userController from '../controllers/user.controller';
import asyncHandler from '../utils/asyncHandler.utils';

const UserRouter = Router();
// prettier-ignore
UserRouter.route('/user')
    .get(asyncHandler(userController.GET))
    .post(asyncHandler(userController.CREATE))
    .put(asyncHandler(userController.UPDATE))

export default UserRouter;

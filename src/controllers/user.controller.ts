import { Request } from 'express';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';
import { responder } from '../utils/responder';
import userService from '../services/user.service';

class User_Controller {
  async CREATE(req: Request, res: CustomResponseInterface): Promise<void> {
    const userData = req.body;
    console.log(userData);
    const newUser = await userService.CREATE(userData);
    responder(res, 200, 'ok', 'New user created', newUser);
  }

  async GET(req: Request, res: CustomResponseInterface): Promise<void> {
    const user_id = req.params.id;
    const user = 'Single user';

    responder(res, 200, 'ok', 'Found single user', user);
  }
  async UPDATE(req: Request, res: CustomResponseInterface): Promise<void> {
    const user_id = req.params.id;
    const updatedUser = 'Updated user';

    responder(res, 200, 'ok', 'User Uopdated');
  }

  async DELTE(req: Request, res: CustomResponseInterface): Promise<void> {
    const user_id = req.params.id;
    const deletedUser = 'User deleted';

    responder(res, 200, 'ok', 'user deleted');
  }
}

export default new User_Controller();

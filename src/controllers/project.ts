import { NextFunction } from 'express';
import {
  CustomRequestInterface,
  CustomResponseInterface,
} from '../typescript/interfaces/customResponse.interface';
import { responder } from '../utils/responder';

class Project_Controller {
  async CREATE(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ): Promise<void> {
    const data = req.body;

    const query = 'created project'; // create new project
    responder(res, 200, 'ok', 'New project has been created', query);
  }

  async UPDATE(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ): Promise<void> {
    const userId = req.authData?.cognito_id;
    const updateData = req.body;

    const query = 'updated project'; // update project
    responder(res, 200, 'ok', 'New project has been updated', query);
  }

  async GET(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ): Promise<void> {
    const query = 'Fetched all project'; // get all projects
    responder(res, 200, 'ok', 'ALl projkect fetched', query);
  }

  async GET_BY_ID(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ): Promise<void> {
    const data = req.body;

    const query = 'Got 1 project'; // Get project by id
    responder(res, 200, 'ok', 'Single project has been fetched', query);
  }

  async DELETE(
    req: CustomRequestInterface,
    res: CustomResponseInterface,
    next: NextFunction
  ): Promise<void> {
    const data = req.body;

    const query = 'deleted project'; //delete project
    responder(res, 200, 'ok', 'New project has been deleted', query);
  }
}

export default new Project_Controller();

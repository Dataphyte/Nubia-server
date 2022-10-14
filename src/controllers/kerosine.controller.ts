import { Request } from 'express';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';
import { classType } from '../typescript/types/classnames.types';

class kerosine_ctrl {
  async CREATE(req: Request, res: CustomResponseInterface): Promise<void> {
    const kerosineTemplate = 'This is an example template';
    const classnames: classType[] = [];
    res.created({ template: kerosineTemplate, classnames }, 'Kerosine Stories');
  }
}

export default new kerosine_ctrl();

import { Request } from 'express';
import kerosineService from '../services/kerosine-watch/kerosine.service';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';
import { classType } from '../typescript/types/classnames.types';

class kerosine_ctrl {
  async CREATE(req: Request, res: CustomResponseInterface): Promise<void> {
    const kerosineTemplate = await kerosineService.CREATE();
    const classnames: classType[] = [
      {
        class: 'story__container',
        tag: 'h1',
        desc: 'Container that wraps the whole story',
      },
    ];

    const payload = 'Kerosine stories loading';
    res.created(payload, 'Kerosine Stories');
  }
}

export default new kerosine_ctrl();

import { Request, response } from 'express';
import faacService from '../services/faac/faac.service';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';
import { classType } from '../typescript/types/classnames.types';
import { PayloadInterface } from '../typescript/interfaces/customResponse.interface';

/**
 * Controller to handle all FAAC related requests
 * @category Controllers
 * @example <caption>Using the controller for sample route</caption>
 * const faac_ctrl = require('path/to/controller')
 *
 * const FAACRoute = express.Router()
 * FAACRoute
 * .route('/api/faac')
 * .use(faac_ctrl.CREATE)
 */
class faac_ctrl {
  /**
   *
   * @param {Request} req - request Object
   * @param {CustomResponseInterface} res - CustomResponse Object
   * @returns Newly created user
   */
  async CREATE(req: Request, res: CustomResponseInterface) {
    const faacTemplate = await faacService.CREATE();
    const classnames: classType[] = [
      {
        class: 'container__story',
        desc: 'The wrapping container around the whole story',
        tag: 'div',
      },
      {
        class: 'container__lgc',
        desc: 'The wrapping container around the whole LGC section of the story',
        tag: 'ul',
      },
      {
        class: 'section__heading',
        desc: 'Heading text of a new section',
        tag: 'h1',
      },
      {
        class: 'section__sub-heading',
        desc: 'Heading for subsections',
        tag: 'h2',
      },
      {
        class: 'content',
        desc: 'Paragraph and story body',
        tag: 'p',
      },
      {
        class: 'item__lgc',
        desc: 'The wrapping container of each LGC list story',
        tag: 'li',
      },
      {
        class: 'list__heading',
        desc: 'Since the LGC story section is returned as a list, this class is assigned to the heading of each list item',
        tag: 'h3',
      },
    ];

    const payload: PayloadInterface = {
      template: faacTemplate,
      classnames,
      type: 'Multiple',
    };

    res.created(payload, 'FAAC Stories');
  }

  async GET_DATA(req: Request, res: CustomResponseInterface) {
    const data = await faacService.GET_DATA();
    res.found(data, 'FAAC data');
  }
}

export default new faac_ctrl();

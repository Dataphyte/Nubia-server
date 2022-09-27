import { Request } from 'express';
import faacService from '../services/faac/faac.service';
import { CustomResponseInterface } from '../typescript/interfaces/customResponse.interface';

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
    const faacData = req.body;
    const faacTemplate = await faacService.CREATE();
    res.created(faacTemplate, 'FAAC Stories');
  }
}

export default new faac_ctrl();

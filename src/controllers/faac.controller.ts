import { Request, Response } from 'express';
import faacService from '../services/faac/faac.service';

class faac_ctrl {
  async CREATE(req: Request, res: Response) {
    const faacData = req.body;
    const faacTemplate = await faacService.CREATE();
    res.status(200).send(faacTemplate);
  }
}

export default new faac_ctrl();

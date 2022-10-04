import fs from 'fs';
import rosae from 'rosaenlg';
import papa from 'papaparse';
import neatCsv from 'neat-csv';
import csvParser from 'csv-parser';
import { FAAC } from './faac.interface';
import useNumber from '../../utils/useNumber.utils';

const file = fs.readFileSync('./src/data/single.csv', { encoding: 'utf-8' });

/**
 * FAAC service class
 * Handles all FAAC services
 * @category Services
 * @example <caption>Creating a new FAAC strory</caption>
 * // calling in user.controller.js
 * const faac_service = require('path/to/faac_service.js')
 *
 * const faacData = req.body
 * const newStory = await faac_service.CREATE(faacData)
 * res.status(201).send(newStory)
 */
class faac_service {
  async CREATE() {
    let templates: any[] = [];
    const parsed: boolean = false;
    let results: any = [];

    const cFile = await neatCsv('./src/data/single.csv');
    console.log(cFile);

    fs.createReadStream('./src/data/single.csv')
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('res', () => {
        // console.log(results);
      });

    results.map((data: any) => {
      const rosaePage = rosae.renderFile(
        './src/static/templates/faac_state.pug',
        {
          language: 'en_US',
          data,
        }
      );

      templates.push(rosaePage);
    });

    return templates;
  }
}

export default new faac_service();

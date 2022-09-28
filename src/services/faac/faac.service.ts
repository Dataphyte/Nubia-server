import fs from 'fs';
import rosae from 'rosaenlg';
import papa from 'papaparse';
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
    const data = papa.parse(file);
    let results: any = [];

    fs.createReadStream('./src/data/single.csv')
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
      });

    /* ====== Convert parsed data to required NLG interface */
    const keys = Object.assign({}, data.data[0]);

    data.data.map((item, index) => {
      // exclude the title iteration
      if (index !== 0 || index > 0) {
        const entry: any = Object.assign({}, item);

        // parse single entry to the FAAC interface
        const parsedEntry: FAAC = {
          state: entry[0],
          prev_month: 'Febuary',
          prev_state_value: entry[1],
          population: entry[6],
          difference: Number(useNumber(entry[5])) - Number(useNumber(entry[4])),
          state_value: entry[2],
          no_of_lgc: entry[9],
          rank: entry[8],
          faac_per_capita: entry[7],
          state_total: entry[5],
          prev_state_total: entry[4],
        };

        // console.log(`${parsedEntry.state}: `, parsedEntry.difference);

        const rosaePage = rosae.renderFile(
          './src/static/templates/faac_state.pug',
          {
            language: 'en_US',
            data: parsedEntry,
          }
        );

        templates.push(rosaePage);
      }
    });

    return templates;
  }
}

export default new faac_service();

/* ====== indexing format of the keys */
/*
[1] {
[1]   '0': 'State',
[1]   '1': 'State Feb 2022',
[1]   '2': 'State Mar 2022',
[1]   '3': 'state lgc Jan 2022',
[1]   '4': 'state lgc Feb 2022',
[1]   '5': 'state lgc Mar 2022',
[1]   '6': 'State Population',
[1]   '7': 'State Mar 2022 per capita',
[1]   '8': 'State FAAC rank Mar 2022',
[1]   '9': 'No of LGC'
[1] }
*/

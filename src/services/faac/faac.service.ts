import rosae from 'rosaenlg';
import { FAAC, FAAC_LGC } from './faac.interface';
import useNumber from '../../utils/useNumber.utils';
import { parser } from '../../utils/parseCSV.util';

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

    /* ====== Get parsed state data */
    const stateData: FAAC[] = await parser(
      './src/data/faac-state-data.csv',
      this.setStateDifference
      // (result: FAAC[]) => console.log(result[0])
    );

    /* ====== get oparsed lgc data */
    const lgcData = await parser(
      './src/data/faac-lgc-data.csv',
      null
      // (result: FAAC_LGC[]) => console.log(result[0])
    );

    stateData.forEach((stateData: FAAC) => {
      lgcData.forEach((lgcData: FAAC_LGC) => {
        stateData.state === lgcData.state && this.pushLGC(stateData, lgcData);
      });
      console.log(stateData);
      templates.push(
        rosae.renderFile('./src/static/templates/faac_state.pug', {
          language: 'en_US',
          stateData,
        })
      );
    });

    return templates;
  }

  /**
   *
   * @param {{Any}} chunck - SIngle data entry from parsed csv files. This param is passed down from the parser function object
   * @returns difference between state total and  previous state total
   */
  setStateDifference(chunck: any) {
    chunck.difference =
      Number(useNumber(chunck.state_total)) -
      Number(useNumber(chunck.prev_state_total));

    /* ====== Add up lgc data to main state faac object */
    chunck.lgc_data = [];
  }

  pushLGC(stateData: FAAC, lgc: FAAC_LGC) {
    return stateData && lgc && stateData.lgc_data?.push(lgc);
  }
}

export default new faac_service();

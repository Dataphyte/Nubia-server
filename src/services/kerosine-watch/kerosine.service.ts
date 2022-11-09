import rosae from 'rosaenlg';
import { parser } from '../../utils/parseCSV.util';
import { KEROSINE } from './kerosine.interface';

class kerosine_service {
  async CREATE() {
    let templates: any[] = [];

    // ======= get parsed data -->
    const kerosineData: KEROSINE[] = await parser(
      './src/data/kerosine-price-watch/kerosine-price-watch.csv',
      () => '',
      (result: any) => console.log(result)
    );

    // ======= get templates  -->
    kerosineData.forEach((data: KEROSINE) => {
      templates.push(
        rosae.renderFile('./src/static/templates/kerosine.pug', {
          language: 'en_us',
          data,
        })
      );
    });

    return kerosineData;
  }
}

export default new kerosine_service();

const kerosineData = {
  region: 'north central',
  state: 'Abuja',
};

import { FMPlayGround, PlayGroundPage } from "../../@types/eleventy";
import * as luxon from "luxon";


class Template implements PlayGroundPage {
  render(data: FMPlayGround): string {
    return '';
  }
  data(): FMPlayGround {
    return {
      year: 2023,
      layout: "layouts/ihriska.njk",
      tags: ["playground"],
      source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf', 
      playgrounds: [
        {
          name: 'Zadunajská',
          district: 1,
          category: ['A'],
          year: 2023,
          flag: null
        },{
          name: 'Harmanecká',
          district: 1,
          category: ['A'],
          year: 2023,
          flag: null
        },{
          name: 'Černyševského 7',
          district: 1,
          category: ['A', 'B'],
          year: 2023,
          flag: null
        },{
          name: 'Prokofievova',
          district: 2,
          category: ['B'],
          year: 2023,
          flag: null
        },{
          name: 'Ambroseho',
          district: 3,
          category: ['A'],
          year: 2023,
          flag: null
        },{
          name: 'Hrobákova 1',
          district: 3,
          category: ['B'],
          year: 2023,
          flag: null
        },{
          name: 'Pankúchova',
          district: 4,
          category: ['A'],
          year: 2023,
          flag: null
        },{
          name: 'Mamateyova 28',
          district: 4,
          category: ['A'],
          year: 2023,
          flag: null
        },{
          name: 'Budatínska 25',
          district: 5,
          category: ['B'],
          year: 2023,
          flag: null
        },{
          name: 'Smolenická 8',
          district: 5,
          category: ['A', 'B'],
          year: 2023,
          flag: null
        },{
          name: 'Šášovská JAMA',
          district: 6,
          category: ['B', 'C'],
          year: 2023,
          flag: null
        },{
          name: 'Krásnohorská',
          district: 6,
          category: [],
          year: 2023,
          flag: 'workout'
        },
        
      ]
    }
  }
}

module.exports = Template;

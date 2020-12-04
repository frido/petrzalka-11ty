import { FMPlayGround, PlayGroundPage } from "../../@types/eleventy";
import * as luxon from "luxon";


class Template implements PlayGroundPage {
  render(data: FMPlayGround): string {
    return '';
  }
  data(): FMPlayGround {
    return {
      year: 2024,
      layout: "layouts/ihriska.njk",
      tags: ["playground"],
      source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf', 
      playgrounds: [
        {
          name: 'Černyševského 9',
          district: 1,
          category: ['B'],
          year: 2024,
          flag: []
        },{
          name: ' Nobelovo nám.',
          district: 1,
          category: ['A', 'B'],
          year: 2024,
          flag: []
        },{
          name: 'Kapicova',
          district: 1,
          category: [],
          year: 2024,
          flag: []
        },{
          name: 'Pifflova',
          district: 1,
          category: [],
          year: 2024,
          flag: []
        },{
          name: 'Rovniakova',
          district: 3,
          category: ['A', 'B'],
          year: 2024,
          flag: []
        },{
          name: 'Bradáčova',
          district: 3,
          category: ['B'],
          year: 2024,
          flag: []
        },{
          name: 'Osuského',
          district: 3,
          category: [],
          year: 2024,
          flag: []
        },{
          name: 'Mlynarovičova',
          district: 4,
          category: [],
          year: 2024,
          flag: []
        },{
          name: 'Topoľčianska',
          district: 5,
          category: ['A', 'B'],
          year: 2024,
          flag: []
        },{
          name: 'Smolenická 1',
          district: 5,
          category: ['B'],
          year: 2024,
          flag: []
        },{
          name: 'Znievska 8',
          district: 5,
          category: ['A'],
          year: 2024,
          flag: []
        },{
          name: 'Znievska 9',
          district: 5,
          category: [],
          year: 2024,
          flag: []
        },{
          name: 'Budatínska 41',
          district: 5,
          category: [],
          year: 2024,
          flag: []
        },
        
      ]
    }
  }
}

module.exports = Template;

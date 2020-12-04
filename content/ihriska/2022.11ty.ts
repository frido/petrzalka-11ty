import { FMPlayGround, PlayGroundPage } from "../../@types/eleventy";
import * as luxon from "luxon";


class Template implements PlayGroundPage {
  render(data: FMPlayGround): string {
    return '';
  }
  data(): FMPlayGround {
    return {
      year: 2022,
      layout: "layouts/ihriska.njk",
      tags: ["playground"],
      source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf', 
      playgrounds: [
        {
          name: 'Gercenova',
          district: 1,
          category: ['A'],
          year: 2022,
          flag: []
        },{
          name: 'Gercenova GIB',
          district: 1,
          category: ['A'],
          year: 2022,
          flag: []
        },{
          name: 'Kopčianska',
          district: 1,
          category: ['A', 'B'],
          year: 2022,
          flag: []
        },{
          name: 'Andrusovova',
          district: 2,
          category: ['A'],
          year: 2022,
          flag: []
        },{
          name: 'Ševčenkova',
          district: 2,
          category: ['A','B'],
          year: 2022,
          flag: []
        },{
          name: 'Gessayova',
          district: 3,
          category: ['A', 'B'],
          year: 2022,
          flag: []
        },{
          name: 'Furdekova',
          district: 3,
          category: ['A','B'],
          year: 2022,
          flag: []
        },{
          name: 'Medveďovej',
          district: 4,
          category: ['A','B'],
          year: 2022,
          flag: []
        },{
          name: 'Jankolova',
          district: 4,
          category: ['A','B'],
          year: 2022,
          flag: []
        },{
          name: 'Starhradská',
          district: 5,
          category: ['A', 'B'],
          year: 2022,
          flag: []
        },{
          name: 'Budatínska',
          district: 5,
          category: ['A', 'B'],
          year: 2022,
          flag: []
        },{
          name: 'Bzovícka',
          district: 6,
          category: ['A'],
          year: 2022,
          flag: []
        },{
          name: 'Žehrianska',
          district: 6,
          category: ['A', 'B'],
          year: 2022,
          flag: []
        },
        
      ]
    }
  }
}

module.exports = Template;

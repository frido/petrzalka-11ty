import { FMPlayGround, PlayGroundPage } from "../../@types/eleventy";
import * as luxon from "luxon";


class Template implements PlayGroundPage {
  render(data: FMPlayGround): string {
    return '';
  }
  data(): FMPlayGround {
    return {
      year: 2021,
      layout: "layouts/ihriska.njk",
      tags: ["playground"],
      source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf', 
      playgrounds: [
        {
          name: 'Wolkrova',
          district: 1,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Pečnianska',
          district: 1,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Vavilovova',
          district: 1,
          category: ['A'],
          year: 2021,
          flag: []
        },{
          name: 'Markova',
          district: 2,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Fedinova',
          district: 2,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Hrobákova',
          district: 3,
          category: ['A'],
          year: 2021,
          flag: []
        },{
          name: 'Lachova',
          district: 3,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Haanova',
          district: 4,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Mamateyova',
          district: 4,
          category: ['A','B'],
          year: 2021,
          flag: []
        },{
          name: 'Holíčska',
          district: 5,
          category: ['A'],
          year: 2021,
          flag: []
        },{
          name: 'Šintavská',
          district: 5,
          category: ['A'],
          year: 2021,
          flag: []
        },{
          name: 'Jasovská',
          district: 6,
          category: ['A'],
          year: 2021,
          flag: []
        },{
          name: 'Šášovská',
          district: 6,
          category: ['A'],
          year: 2021,
          flag: []
        },
        
      ]
    }
  }
}

module.exports = Template;

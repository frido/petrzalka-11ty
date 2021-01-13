import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
   return this.frontMatterWrapper( {
      "title": "Výťahové parkovacie domy",
      "date": "2020-10-27",
      "description": "Zámer budovania výťahových parkovacích domov spoločnosťou UpDown Parking v Petržalke",
      "icon": "/img/vytahove-parkovacie-domy/3.png",
      gallery: [
        { link: 'img/vytahove-parkovacie-domy/3.png' },
        { link: 'img/vytahove-parkovacie-domy/4.png' },
        { link: 'img/vytahove-parkovacie-domy/5.png' },
        { link: 'img/vytahove-parkovacie-domy/6.png' },
        { link: 'img/vytahove-parkovacie-domy/7.png' },
        { link: 'img/vytahove-parkovacie-domy/8.png' },
        { link: 'img/vytahove-parkovacie-domy/9.png' },
        { link: 'img/vytahove-parkovacie-domy/10.png' },
        { link: 'img/vytahove-parkovacie-domy/11.png' },
        { link: 'img/vytahove-parkovacie-domy/12.png' },
        { link: 'img/vytahove-parkovacie-domy/13.png' },
      ],
      "sources": [
         "http://updownparking.sk/assets/dist/images/presentation.pdf"
      ],
      "execution": [
         {
            "title": "Investičný zámer",
            "status": "inwork",
            "description": "prebieha",
            "sub": [
               {
                  "title": "Infomateriál",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/09/INFO-7.-Z%C3%A1mer-budovania-v%C3%BD%C5%A5ahov%C3%BDch-parkovac%C3%ADch-domov-v-Petr%C5%BEalke.pdf",
                  "status": "success",
                  "description": "",
                  date: luxon.DateTime.fromISO("2020-08-26")
               }
            ]
         }
      ]
   });
  }

  render(data: FMProject) {
    return `
    Zámer budovania výťahových parkovacích domov spoločnosťou UpDown Parking v Petržalke.
    `;
  }
}

module.exports = Template;

import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      "title": "Šrobárovo námestie",
      "date": "2020-08-17",
      "description": "Idea zriadenia verejného parku s výsadbou zelene a cvičebnými prvkami na Šrobárovom námestí",
      "icon": "/img/srobarovo-namestie/peticia.jpeg",
      gallery: [
        { link: 'img/srobarovo-namestie/peticia.jpeg' }
      ],
      "tags": [TAG_PROJECT],
      "layout": LAYOUT_PROJECT,
      "sources": [
         "https://www.enviroportal.sk/sk_SK/eia/detail/vista-tower-polyfunkcny-objekt-srobarovo-namestie-ba-petrzalka",
         "http://www.vistatower.com/_sk/poloha.html"
      ],
      "execution": [
         {
            "title": "Príprava projektu",
            "status": "inwork",
            "description": "prebieha",
            "startReal": "2016",
            "sub": [ 
               {
                  "title": "Petícia za verejný park",
                  "source": "http://www.ekoforum.sk/peticia/park-petrzalka",
                  "status": "success",
                  "description": "odovzdaná",
                  date: luxon.DateTime.fromISO("2018-09-14")
               },
               {
                  "title": "Prerokovanie petície",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2018/09/23_Prerokovanie-peticie-Srobarovo-park.pdf",
                  "status": "success",
                  "description": "vyhovuje",
                  date: luxon.DateTime.fromISO("2018-09-25")
               }
               ,
               {
                  "title": "Zasadnutie komisie MZ",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-14_overena.pdf",
                  "status": "success",
                  "description": "schválené.",
                  date: luxon.DateTime.fromISO("2020-01-14")
               }
            ]
         }
      ]
   };
  }

  render(data: FMProject) {
    return `
    Idea zriadenia verejného parku s výsadbou zelene a cvičebnými prvkami na Šrobárovom námestí
    `;
  }
}

module.exports = Template;

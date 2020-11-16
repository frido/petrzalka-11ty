import { FrontMatter, Post } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      "title": "Projekt revitalizácie Námestia Republiky",
      "date": "2020-07-14",
      "tags": [
         "projekt"
      ],
      "layout": "layouts/post2.njk",
      "description": "V súčasnosti sa spevnená časť námestia využíva na spoločenské a kultúrne podujatia mestskej časti. Už tradične sa tu konajú navštevované Petržalské vianočné trhy. Plocha bývalého parkoviska susediaca s Chorvátskym ramenom slúži ako spomínaný skatepark. ",
      "icon": "/img/revitalizacia-namestia-republiky/revitalizacia-namestia-republiky.jpg",
      "sources": [ "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-14_overena.pdf"
      ],
      "amount": 0,
      "schedule": [
         {
            "title": "Analýza súčasného stavu",
            "status": "inwork",
            "description": "prebieha",
            "startReal": "marec 2020",
            "endExpected": "december 2020",
            "sub": [
               {
                  "title": "Analýza súčasného stavu",
                  "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                  "status": "inwork",
                  description: 'prebieha',
                  timeline: luxon.DateTime.fromISO("2020-03-01")
               }
            ]
         }, 
         {
            "title": "Architektonická súťaž",
            "status": "unknown",
            "description": "",
            "startExpected": "2021",
            "endExpected": "2021/2022",
            timeline: luxon.DateTime.fromISO("2021-01-01"),
            "sub": [ 
               {
                  "title": "Vypracovanie zadania architektonickej súťaže",
                  "status": "unknown",
                  description: '',
                  "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                  "startExpected": "2021",
                  "endExpected": "2021"
               },
               {
                  "title": "Vyhlásenie architektonickej súťaže",
                  "status": "unknown",
                  description: '',
                  "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                  "startExpected": "2021",
                  "endExpected": "2021"
               },
               {
                  "title": "Výsledky architektonickej súťaže",
                  "status": "unknown",
                  description: '',
                  "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                  "startExpected": "2021",
                  "endExpected": "2021/2022"
               }
            ]
         },
         {
            "title": "Realizácia víťazného návrhu",
            "status": "unknown",
            description: '',
            "startExpected": "2022",
            "endExpected": "2026",
            timeline: luxon.DateTime.fromISO("2022-01-01"),
            "sub": [
              {
                "title": "Realizácia víťazného návrhu",
                "status": "unknown",
                description: '',
                "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                "startExpected": "2022",
                "endExpected": "2026"
             }
            ]
         }
      ]
   };
  }

  render(data: FrontMatter) {
    return `
    V súčasnosti sa spevnená časť námestia využíva na spoločenské a kultúrne podujatia mestskej časti. Už tradične sa tu konajú navštevované Petržalské vianočné trhy. Plocha bývalého parkoviska susediaca s Chorvátskym ramenom slúži ako spomínaný skatepark. Priestor námestia však nemá jasne zadefinovanú funkciu a využitie. Výsledkom je do značnej miery zdevastované a chátrajúce územie, poškodzované vandalmi. Aj obyvatelia ho vnímajú ako zanedbané. No jeho poloha, veľkosť i pomerne jednoduchý prístup k elektrickému napojeniu mu poskytujú veľký potenciál do budúcnosti, napríklad na organizovanie ďalších spoločenských a kultúrnych podujatí.
    `;
  }
}

module.exports = Template;

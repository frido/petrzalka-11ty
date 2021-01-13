import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
   return this.frontMatterWrapper( {
      "title": "Šrobárovo námestie",
      "date": "2021-01-07",
      "description": "Mestská časť plánuje v priestore Šrobárovho námestia vysadiť približne 50 stromov. Ďalšie úpravy verejného priestoru sa týkajú rekonštrukcie chodníkov. Súčasťou bude aj ich rozšírenie. Následne pôjde o výmenu mobiliáru (lavičky, koše). Pribudne psí výbeh na odhľahlejšom pozemku, pitná fontánka a street-workoutové  ihrisko v areály školy.  V ďalšej etape je naplánovaná obnova tartanovej dráhy. Cieľom celej revitalizácie námestia je zachovanie najmä parkového charakteru.  Na stretnutí svoje námietky predostreli občania z priľahlého bytového domu so zástupcami mestskej časti, ktorí požadovali vynechanie pavilónu z projektovej dokumentácie.",
      "icon": "/img/srobarovo-namestie/2.png",
      gallery: [
        { link: 'img/srobarovo-namestie/peticia.jpeg' },
        { link: 'img/srobarovo-namestie/1.png' },
        { link: 'img/srobarovo-namestie/2.png' },
        { link: 'img/srobarovo-namestie/3.png' },
        { link: 'img/srobarovo-namestie/4.png' },
        { link: 'img/srobarovo-namestie/5.png' }
      ],
      "sources": [
         "https://www.enviroportal.sk/sk_SK/eia/detail/vista-tower-polyfunkcny-objekt-srobarovo-namestie-ba-petrzalka",
         "http://www.vistatower.com/_sk/poloha.html"
      ],
      source: 'https://www.petrzalka.sk/2021-01-05-na-srobarovom-namesti-vznikne-novy-zeleny-priestor/',
      budgetRef: '2021-22',
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
   });
  }

  render(data: FMProject) {
    return `
    Mestská časť plánuje v priestore Šrobárovho námestia vysadiť približne 50 stromov. Ďalšie úpravy verejného priestoru sa týkajú rekonštrukcie chodníkov. Súčasťou bude aj ich rozšírenie. Následne pôjde o výmenu mobiliáru (lavičky, koše). Pribudne psí výbeh na odhľahlejšom pozemku, pitná fontánka a street-workoutové  ihrisko v areály školy.  V ďalšej etape je naplánovaná obnova tartanovej dráhy. Cieľom celej revitalizácie námestia je zachovanie najmä parkového charakteru.  Na stretnutí svoje námietky predostreli občania z priľahlého bytového domu so zástupcami mestskej časti, ktorí požadovali vynechanie pavilónu z projektovej dokumentácie.
    `;
  }
}

module.exports = Template;

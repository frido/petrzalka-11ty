import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/projectAddon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      "title": "Polyfunkčný dom Tematínska",
      "date": "2019-02-07",
      "tags": [TAG_PROJECT],
      "layout": "layouts/post2.njk",
      "description": "Rekonštrukcia, prestavba a nadstavba v súčasnosti 2-podlažného objektu (pôvodná funkcia školstvo a vzdelávanie) na 3-podlažný polyfunkčný objekt (prechodné ubytovanie – 27 apartmánov a bývanie – 12 b. j.), s dopravným pripojením na priľahlú zaslepenú miestnu komunikáciu Tematínska ulica. Súčasťou dopravného riešenia stavby je aj riešenie statickej dopravy - parkovisko na teréne (37 státí) a parkovanie v hromadnej garáži na 1.NP (13 státí) ",
      "icon": "",
      "sources": [
         "https://bratislava.blob.core.windows.net/media/Default/Dokumenty/Str%C3%A1nky/2018%20Pet%C3%ADcia%20proti%20v%C3%BDstavbe%20na%20Temat%C3%ADnskej%201.pdf",
         "https://docs.google.com/viewerng/viewer?url=https://www.petrzalka.sk/wp-content/uploads/2020/10/elektronick%C3%A9-zverejnenie-inform%C3%A1cie-v-zmysle-%C2%A7-82-ods.-3-zakona-V.D.-LAKE-1.pdf",
      ],
      "amount": 0,
      "execution": [
         {
            "title": EXE_TITLE_UK,
            "status": "error",
            "description": "zamietnuté",
            "sub": [
               {
                  "title": "Petíciu proti výstavbe na Tematinskej 1",
                  "source": "https://zastupitelstvo.bratislava.sk/data/att/40163.pdf",
                  "status": "success",
                  "description": "odovzdaná",
                  date: luxon.DateTime.fromISO("2018-10-11")
               },
               {
                  "title": "Záväzné stanovisko hlavného mesta",
                  "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=60157",
                  "status": "error",
                  "description": "zamietnuté",
                  date: luxon.DateTime.fromISO("2019-01-17")
               },
               {
                  "title": "Uznesenie mestského zastupiteľstva",
                  "source": "https://zastupitelstvo.bratislava.sk/mestske-zastupitelstvo-hlavneho-mesta-sr-bratislavy-zasadnutie-07022019/bod-35/",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2019-02-07")
               }
            ]
         }
      ]
   };
  }

  render(data: FMProject) {
    return `
    Rekonštrukcia, prestavba a nadstavba v súčasnosti 2-podlažného objektu (pôvodná funkcia školstvo a vzdelávanie) na 3-podlažný polyfunkčný objekt (prechodné ubytovanie – 27 apartmánov a bývanie – 12 b. j.), s dopravným pripojením na priľahlú zaslepenú miestnu komunikáciu Tematínska ulica. Súčasťou dopravného riešenia stavby je aj riešenie statickej dopravy - parkovisko na teréne (37 státí) a parkovanie v hromadnej garáži na 1.NP (13 státí) 
    `;
  }
}

module.exports = Template;

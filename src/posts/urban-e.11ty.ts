import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/projectAddon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      "title": "Urban E",
      "date": "2020-07-05",
      "tags": [TAG_PROJECT],
      "layout": "layouts/post2.njk",
      "description": "Medzinárodný projekt URBAN-E je zameraný na rozvoj elektromobility, podporu rozširovania infraštruktúry elektronabíjacích staníc a prepojenia na iné druhy dopravy, na znižovanie znečistenia ovzdušia v hlavných mestách Slovinska, Chorvátska a Slovenska – v Ľubľane, Záhrebe a Bratislave.",
      "icon": "",
      "amount": 0,
      "execution": [
   {
            "title": "Príprava projektu",
            "status": "success",
            "description": "hotovo",
            "sub": [ 
               {
                  "title": "Informácia o schválení projektu",
                  "source": "https://zastupitelstvo.bratislava.sk/data/att/23543.pdf",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2017-12-07")
               },
               {
                  "title": "Zasadnutie komisie správy majetku a miestnych podnikov",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/Z%C3%A1pisnica-%C4%8D.7-janu%C3%A1r-2020.pdf",
                  "status": "success",
                  "description": "",
                  date: luxon.DateTime.fromISO("2020-01-20")
               },
               {
                  "title": "Zasadnutie komisie územného plánu, výstavby a rozvoja",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-21_overena.pdf",
                  "status": "success",
                  "description": "",
                  date: luxon.DateTime.fromISO("2020-01-21")
               }
            ]
         }
      ]
   };
  }

  render(data: FMProject) {
    return `
    <p>
    Medzinárodný projekt URBAN-E je zameraný na rozvoj elektromobility, podporu
    rozširovania infraštruktúry elektronabíjacích staníc a prepojenia na iné druhy dopravy, na
    znižovanie znečistenia ovzdušia v hlavných mestách Slovinska, Chorvátska a Slovenska – v
    Ľubľane, Záhrebe a Bratislave.
    </p>
    <p>
    V rámci navrhovaného projektu sa v mestách Bratislava, Ľubľana a Záhreb postaví celkom
    167 nabíjacích staníc pre elektromobily z toho 144 ks na striedavý prúd AC (doba nabitia
    v priebehu niekoľkých hodín) a 23 ks rýchlonabíjacích staníc na jednosmerný prúd DC (doba
    nabitia cca. 20 minút). Pre mesto Bratislava je z toho naplánovaných 50 ks AC a 5 ks DC
    staníc, ktorých inštaláciu zabezpečí kompletne Západoslovenská energetika. Nabíjacie
    stanice budú spĺňať všetky zodpovedajúce štandardy nabíjania (CCS, CHAdeMO, Typ 2)
    a budú plne interoperabilné v rámci slovenskej aj celoeurópskej siete nabíjacích staníc.
    Zabezpečí sa tak okrem iného aj bezproblémové nabíjanie elektromobilov prichádzajúcich do
    hlavného mesta zo zahraničia.
    </p>
    `;
  }
}

module.exports = Template;

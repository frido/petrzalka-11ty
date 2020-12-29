import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      "title": "Polyfunkčný dom Topoľčianska",
      "date": "2020-06-27",
      "tags": [TAG_PROJECT],
      "layout": "layouts/post2.njk",
      "description": "Polyfunkčný objekt s prevládajúcou funkciou bývania (68 %) s 8 nadzemnými a 2 podzemnými podlažiami, dopravne prístupným cez jestvujúce miestne komunikácie. V objekte sú priestory obchodu (10), služieb, administratívy (16) a bývania (60). Navrhnuté sú 2 dopravné vjazdy – rampa do garáže na 1. a 2. podzemnom podlaží (78 parkovacích miest) a priamy vjazd na spevnenú plochu na teréne (20 parkovacích miest).",
      "icon": "/img/polyfunkcny-dom-topolcianska/Topolcianska_riesene_uzemie.jpg",
      "sources": [
         "https://www.enviroportal.sk/sk/eia/detail/polyfunkcny-dom-bratislava-petrzalka-topolcianska-ul-",
         "https://bratislava.blob.core.windows.net/media/Default/Dokumenty/Str%C3%A1nky/2019%20Peticia%20proti%20vystavbe%20BD-Topolcianska.pdf",
         "https://www.petrzalka.sk/2018-10-31-polyfunkcny-bytovy-dom-topolcianska-bratislava/",
         "https://www.petrzalka.sk/2019-05-24-prezentacia-investicneho-zameru-polyfunkcny-dom-topolcianska/",
      ],
      gallery: [
        {link: "img/polyfunkcny-dom-topolcianska/Topolcianska_riesene_uzemie.jpg"}
      ],
      "amount": 0,
      "execution": [
         {
            "title": EXE_TITLE_UK,
            "status": "pause",
            "description": "prerušené",
            "sub": [
               {
                  "title": "Záväzné stanovisko hlavného mesta",
                  "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=59362",
                  "status": "success",
                  "description": "súhlasí",
                  date: luxon.DateTime.fromISO("2018-10-05")
               },
               {
                  "title": "Petícia proti výstavbe",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2019/03/1-MZ-peticia-Topolcianska.pdf",
                  "status": "success",
                  "description": "odovzdaná",
                  date: luxon.DateTime.fromISO("2019-02-28")
               },
               {
                  "title": "Uznesenie Miestneho zastupiteľstva",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2019/03/Uznesenia-MZ-26.03.2019.pdf",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2019-03-26")
               },
               {
                  "title": "Uznesenie Mestského zastupiteľstva",
                  "source": "https://zastupitelstvo.bratislava.sk/data/att/41660.pdf",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2019-04-25")
               },
               {
                  "title": "Začatie územného konania",
                  "source": "https://www.petrzalka.sk/2020-03-04-uzemne-konania/",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2020-01-07")
               },
               {
                  "title": "Uznesenie Miestneho zastupiteľstva",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/uznesenia_04_02_2020opraven%C3%A9.pdf",
                  "status": "success",
                  "description": "berie na vedomie",
                  date: luxon.DateTime.fromISO("2020-02-04")
               },
               {
                  "title": "Prerušenie územného konania",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/Topolcianska_UR_PK_namietky_PET20200012217.pdf",
                  "status": "inwork",
                  "description": "prerušuje",
                  date: luxon.DateTime.fromISO("2020-02-17")
               }
            ]
         }
      ]
   };
  }

  render(data: FMProject) {
    return `
    <p>
    Polyfunkčný objekt s prevládajúcou funkciou
    bývania (68 %) s 8 nadzemnými a 2 podzemnými podlažiami, dopravne prístupným cez jestvujúce
    miestne komunikácie. V objekte sú priestory obchodu (10), služieb, administratívy (16) a bývania
    (60). Navrhnuté sú 2 dopravné vjazdy – rampa do garáže na 1. a 2. podzemnom podlaží (78
    parkovacích miest) a priamy vjazd na spevnenú plochu na teréne (20 parkovacích miest). 
    </p>
    <p>
    Územie je súčasťou aktuálne spracovávanej urbanistickej štúdie centrálnej rozvojovej osi (CRO)
    Petržalky. Pripravovaná štúdia sa zaoberá prehodnotením rozvoja územia pozdĺž severojužnej osi
    okolo Chorvátskeho ramena v Mestskej časti Bratislava-Petržalka a návrhom zmien a doplnkov
    ÚPN 2007 HM SR Bratislavy v znení zmien a doplnkov v danej lokalite.
    </p>
    <p>
    Predložený IZ s prihliadnutím na majetko-právne vzťahy v území nebráni rozvoju územia v zmysle
    pripravovanej urbanistickej štúdie Centrálnej rozvojovej osi Petržalka (ďalej CRO). Objekt svojou
    hmotou a úpravou okolia neblokuje zámery v zmysle pripravovanej štúdie CRO a Navrhované
    komunikácie a plochy situuje v rámci parcely vo vlastníctve predkladateľa. 
    </p>
    `;
  }
}

module.exports = Template;

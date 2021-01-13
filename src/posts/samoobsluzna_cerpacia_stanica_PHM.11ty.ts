import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Samoobslužná čerpacia stanica PHM, Petržalka Juh",
      date: "2020-11-22",
      description: "Samoobslužná čerpacia stanica pohonných hmôt pre osobné autá (2 dvojproduktové stojany), navrhnutá ako samostatná stavba s dopravnou väzbou na súbežne posudzovanú stavbu „samoobslužná autoumyváreň“ t. j. s dopravnou obsluhou, využívajúcou účelové komunikácie areálu „samoobslužná autoumyváreň“ s dopravným pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného mesta – zóna A (Labutia ulica), s následným pripojením na Panónsku cestu.",
      icon: "",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67275",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-02-06")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    Samoobslužná čerpacia
    stanica pohonných hmôt pre osobné autá (2 dvojproduktové stojany), navrhnutá ako samostatná
    stavba s dopravnou väzbou na súbežne posudzovanú stavbu „samoobslužná autoumyváreň“ t. j.
    s dopravnou obsluhou, využívajúcou účelové komunikácie areálu „samoobslužná autoumyváreň“
    s dopravným pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného
    mesta – zóna A (Labutia ulica), s následným pripojením na Panónsku cestu.
    Údaje k zámeru v zmysle predloženej dokumentácie, spracovanej a potvrdenej subjektom odborne
    spôsobilým (Ing. Ján Virostko, 11/2019). 
    `;
  }
}

module.exports = Template;

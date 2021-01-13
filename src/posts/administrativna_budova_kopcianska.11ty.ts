import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper({
      title: "Administratívna budova, Kopčianska",
      date: "2020-11-23",
      description: "Trojpodlažná nepodpivničená administratívna budova, slúžiaca pre potreby riadenia spoločnosti, s 1 služobným bytom na 3. nadzemnom podlaží a extenzívnou vegetačnou strechou. Súčasťou riešenia bude aj dopravné pripojenie z priľahlej miestnej komunikácie Kopčianskej ulice a parkovanie na spevnených plochách na vlastnom pozemku v počte 7 parkovacích miest.",
      icon: "",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "success",
          description: "", 
          sub: [
            {
              title: EXE_SUB_TITLE_ZKMZ,
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68659",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-04-28")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    Trojpodlažná nepodpivničená administratívna
    budova, slúžiaca pre potreby riadenia spoločnosti, s 1 služobným bytom na 3. nadzemnom podlaží
    a extenzívnou vegetačnou strechou. Súčasťou riešenia bude aj dopravné pripojenie z priľahlej
    miestnej komunikácie Kopčianskej ulice a parkovanie na spevnených plochách na vlastnom
    pozemku v počte 7 parkovacích miest.
    Údaje k zámeru v zmysle predloženej dokumentácie, spracovanej a potvrdenej subjektom odborne
    spôsobilým (Ing. arch. Daniel Kubiš, 04/2020).
    `;
  }
}

module.exports = Template;

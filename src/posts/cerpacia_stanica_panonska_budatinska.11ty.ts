import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Panónska-Budatínska – čerpacia stanica pohonných hmôt",
      date: "2021-04-03",
      description: "Čerpacia stanica pohonných hmôt s dvomi obojstranne prístupnými stojanmi na tankovanie pre 4 autá súčasne",
      icon: "",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=74069",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2021-02-03")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    Návrh predstavuje čerpaciu stanicu pohonných hmôt s dvomi obojstranne prístupnými stojanmi 
    na tankovanie pre 4 autá súčasne a to na spevnenej ploche, prekrytej oceľovo-betónovou
    konštrukciou s krytinou vo výške + 6,000 m. Na ňu nadväzuje jednopodlažný obslužný objekt 2
    s plochou strechou a atikou vo výške + 4,500 m, ktorý slúži na predaj pohonných hmôt, auto-doplnkov a občerstvenia a poskytuje priestory pre hygienické zariadenie, zázemie pre zamestnancov
    a sklad. Čerpacia stanica je dopravne napojená na komunikáciu, ktorá je spojnicou Budatínskej 
    ulice a Panónskej cesty.`;
  }
}

module.exports = Template;

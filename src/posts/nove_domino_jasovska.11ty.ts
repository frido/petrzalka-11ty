import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Nové Domino na Jasovskej ulici",
      date: "2020-11-01",
      description: "Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.",
      icon: "https://www.novedomino.sk/img/obr5.jpg",
      source: "https://www.novedomino.sk/",
      gallery: [
        { link: "https://www.novedomino.sk/img/obr5.jpg" }
      ],
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "",
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
              status: "error",
              description: "žiada ďalšie možnosti riešenia",
              date: luxon.DateTime.fromISO("2020-08-25"),
            },
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
              status: "error",
              description: "žiada ďalšie dokumenty",
              date: luxon.DateTime.fromISO("2020-09-29"),
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.
    `;
  }
}

module.exports = Template;

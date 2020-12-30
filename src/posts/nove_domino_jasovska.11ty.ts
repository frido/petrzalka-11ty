import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      title: "Nové Domino na Jasovskej ulici",
      date: "2020-11-01",
      tags: [TAG_PROJECT],
      layout: LAYOUT_PROJECT,
      description: "Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.",
      icon: "https://www.novedomino.sk/img/obr5.jpg",
      source: "https://www.novedomino.sk/",
      gallery: [
        { link: "https://www.novedomino.sk/img/obr5.jpg" }
      ],
      amount: 0,
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "",
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
              status: "success",
              description: "žiada ďalšie možnosti riešenia",
              date: luxon.DateTime.fromISO("2020-08-25"),
            },
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
              status: "success",
              description: "žiada ďalšie dokumenty",
              date: luxon.DateTime.fromISO("2020-09-29"),
            }
          ]
        }
      ]
    };
  }

  render(data: FMProject) {
    return `
    Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.
    `;
  }
}

module.exports = Template;

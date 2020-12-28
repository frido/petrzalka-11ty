import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/projectAddon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      title: "X-Box skladové priestory",
      date: "2020-11-05",
      tags: [TAG_PROJECT],
      layout: "layouts/post2.njk",
      description: "",
      icon: "",
      execution: [
        {
          title: "Investičný zámer",
          status: "inwork",
          description: "",
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-09-29"),
            }
          ]
        }
      ],
    };
  }

  render(data: FMProject) {
    return `
    `;
  }
}

module.exports = Template;

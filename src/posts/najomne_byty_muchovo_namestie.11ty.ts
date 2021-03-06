import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Nájomné byty, Muchovo námestie",
      date: "2020-11-05",
      description: "",
      icon: "https://bratislavskykraj.sk/wp-content/uploads/2020/09/119068162_3541246765938335_4381885082729630819_o-1024x722.jpg",
      gallery: [
        { link: 'https://bratislavskykraj.sk/wp-content/uploads/2020/09/119068162_3541246765938335_4381885082729630819_o-1024x722.jpg' }
      ],
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "",
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
              status: "success",
              description: "berie na vedomie",
              date: luxon.DateTime.fromISO("2020-09-29"),
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    `;
  }
}

module.exports = Template;

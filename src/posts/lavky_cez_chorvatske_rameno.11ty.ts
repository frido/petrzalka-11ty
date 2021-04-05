import { ProjectPage } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper({
      title: "Lávky cez Chorvátske rameno",
      date: "2021-04-05",
      description: "Štyri lávky budú urbanisticky, architektonicky, funkčne a dopravne napojené do kontextu miesta. Návrh prinesie aj riešenie predpolia lávok na oboch brehoch a bude v maximálnej možnej miere rešpektovať tvarovanie terénu a zelene Chorvátskeho ramena.",
      icon: "img/lavky_cez_chorvatske_rameno/1.jpg",
      source: "https://mib.sk/sutaz/lavky-cez-chorvatske-rameno-v-petrzalke/?fbclid=IwAR16xcz6Ql7kGz5bRpXU7nRz-6aWyQQi_xj-ogqj822WExkFgHvf3-SOWAc",
      gallery: [
        {link: "img/lavky_cez_chorvatske_rameno/1.jpg"},
        {link: "img/lavky_cez_chorvatske_rameno/2.jpg"},
        {link: "img/lavky_cez_chorvatske_rameno/3.jpg"},
        {link: "img/lavky_cez_chorvatske_rameno/4.jpg"},
        {link: "img/lavky_cez_chorvatske_rameno/0.jpg"}
      ],
      execution: [
        {
          title: "Príprava projektu",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Súťaž",
              source: "https://mib.sk/sutaz/lavky-cez-chorvatske-rameno-v-petrzalke/?fbclid=IwAR16xcz6Ql7kGz5bRpXU7nRz-6aWyQQi_xj-ogqj822WExkFgHvf3-SOWAc",
              status: "inwork",
              description: "prebieha",
              date: luxon.DateTime.fromISO("2021-02-11")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    Štyri lávky budú urbanisticky, architektonicky, funkčne a dopravne napojené do kontextu miesta. Návrh prinesie aj riešenie predpolia lávok na oboch brehoch a bude v maximálnej možnej miere rešpektovať tvarovanie terénu a zelene Chorvátskeho ramena.
    `;
  }
}

module.exports = Template;

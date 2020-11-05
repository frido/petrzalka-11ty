import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Skladovo-prevádzkový areál - DEKTER, s.r.o.",
      date: "2020-11-05",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "",
      icon: "",
      schedule: [
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
              timeline: luxon.DateTime.fromISO("2020-09-29"),
            }
          ]
        }
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    `;
  }
}

module.exports = Template;

import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Bytový dom Habern Au",
      date: "2020-11-03",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Bytový dom Habern Au na ulici A. Gwerkovej.",
      icon: "",
      schedule: [
        {
          title: "Investičný zámer",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: 'Stanovisko komisie MZ',
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/06/KUPVaR-zapisnica_2020-05-26_overena.pdf",
              status: "success",
              description: "žiada prepracovanie",
              timeline: luxon.DateTime.fromISO("2020-05-26")
            },
          ],
        },
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    Bytový dom Habern Au na ulici A. Gwerkovej.
    `;
  }
}

module.exports = Template;

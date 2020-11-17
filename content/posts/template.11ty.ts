import { FrontMatter, Post } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Polyfunkčný objekt - Tematínska",
      date: "2020-10-29",
      tags: ["template"],
      layout: "layouts/post2.njk",
      description: "Polyfunkčná stavba s dvoma samostatnými objektami a troma prevádzkovými celkami. Má jedno podzemné parkovacie podlažie, štyri nadzemné a jedno ustúpené piate podlažie. V objektoch sa nachádza 55 bytov a občianska vybavenosť – reštaurácia, kancelárske priestory, telocvičňa v prízemnom trakte pozdĺž bulváru.",
      icon: "",
      source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001",
      sources: ["https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001", "https://www.petrzalka.sk/wp-content/uploads/2020/10/elektronick%C3%A9-zverejnenie-inform%C3%A1cie-v-zmysle-%C2%A7-82-ods.-3-zakona-V.D.-LAKE-1.pdf"],
      amount: 0,
      schedule: [
        {
          title: "Investičný zámer",
          status: "success",
          description: "", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/03/KUPVaR-zapisnica_2020-03-03_overena.pdf",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-03-03")
            }
          ]
        }
      ]
    };
  }

  render(data: FrontMatter) {
    return `
xxx
    `;
  }
}

module.exports = Template;

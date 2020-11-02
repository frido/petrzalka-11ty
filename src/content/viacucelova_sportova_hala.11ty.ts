import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Viacúčelová športová hala – univerzitné športové centrum pri EU",
      date: "2020-11-02",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Viacúčelová športová hala bude mať hraciu plochu minimálne 42x24 metrov s grafickým vyznačením viacerých ihrísk pre rôzne športy (volejbal, basketbal, futsal, florbal, hádzaná či bedminton), 8 šatní s celkovou kapacitou 130 športovcov, šatňami pre trénerov a rozhodcov a taktiež priestory pre relax a regeneráciu športovcov.",
      icon: "/img/viacucelova_sportova_hala/usmiestnenie.jpg",
      gallery: [
        { link: "/img/viacucelova_sportova_hala/usmiestnenie.jpg" },
        { link: "/img/viacucelova_sportova_hala/lokalizacia.jpg" },
      ],
      schedule: [
        {
          title: "Investičný zámer",
          status: "success",
          description: "súhlasí", 
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-08-25")
            },
          ],
        },
        {
          title: "Územné konanie",
          status: "pause",
          description: "prerušené",
          sub: [
            {
              title: "Územné konanie",
              source: "https://www.petrzalka.sk/viacucelova-sportova-hala-univerzitne-sportove-centrum-pri-eu-v-bratislave/",
              status: "success",
              description: "začiatok",
              timeline: luxon.DateTime.fromISO("2020-07-28"),
            },
          ],
        }
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    Viacúčelová športová hala bude mať hraciu plochu minimálne 42x24 metrov s grafickým vyznačením viacerých ihrísk pre rôzne športy (volejbal, basketbal, futsal, florbal, hádzaná či bedminton), 8 šatní s celkovou kapacitou 130 športovcov, šatňami pre trénerov a rozhodcov a taktiež priestory pre relax a regeneráciu športovcov. Výhľadová kapacita hľadiska je 700 – 750 miest. Hala bude po dokončení slúžiť pre potreby výuky a rozvoja športových a pohybových aktivít študentov EU v Bratislave, pre potreby športovej reprezentácie a organizovanie významných národných a medzinárodných športových podujatí v halových športoch. Predpokladané investičné náklady na realizáciu stavby sú odhadované v celkovej hodnote 2,28 mil. Eur bez dane. Výstavba by mala byť ukončená v decembri 2021.
    `;
  }
}

module.exports = Template;

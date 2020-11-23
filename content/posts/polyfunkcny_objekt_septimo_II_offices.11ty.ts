import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Polyfunkčný objekt Septimo II - Offices",
      date: "2020-11-23",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Polyfunkčný päť podlažný objekt s dvomi podzemnými a s tromi nadzemnými podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty – 20 bytových jednotiek. ",
      icon: "",
      amount: 0,
      schedule: [
        {
          title: "Investičný zámer",
          status: "success",
          description: "", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68753",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-04-07")
            }
          ]
        }
      ]
    };
  }

  render(data: FrontMatter) {
    return `
    TODO !!! Uvádzame, že dňa 26.01.2018 vydalo hlavné mesto SR Bratislava súhlasné záväzné stanovisko
    k investičnému zámeru „Polyfunkčný objekt Septimo II – Offices“,
    <p>
    Polyfunkčný päť podlažný objekt s dvomi podzemnými a s tromi nadzemnými
    podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady
    a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty –
    20 bytových jednotiek. Objekt je mierne členitého pôdorysu s celkovými rozmermi 15,75 x 23,80
    m. Pôdorysne majú podlažia mierne odlišné rozmery. Výška atiky je +17,65 m nad úrovňou
    podlahy prízemia ± 0,000 m.
    </p>
    <p>
    Dopravný prístup je riešený priamym vjazdom z priľahlej komunikácie komunikáciu Údernícka ul..
    Statická doprava je riešená v podzemných podlažiach objektu a na teréne na vlastnom pozemku.
    Predložené riešenie je predmetom II. etapy projektu, pričom I. etapa (susedný objekt), ktorá je jeho
    súčasťou nebola predložená na posúdenie hlavnému mestu SR Bratislava.
    </p>
    `;
  }
}

module.exports = Template;

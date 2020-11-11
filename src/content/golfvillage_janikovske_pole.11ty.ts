import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Golfvillage ",
      date: "2020-11-07",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Dokumentácia sa funkciou, usporiadaním a kapacitou obytnej zóny zaoberá iba schematicky, riešením je návrh komunikačnej siete zóny s dopravným pripojením na nadradenú komunikačnú sieť (cestu I/2) cez miestnu komunikáciu vo výstavbe (FT C3 – vetva Y – vydané je stavebné povolenie) pre susednú dočasnú stavbu golfového klubu Energau. ",
      icon: "",
      gallery: [
        { link: "img/golfvillage_janikovske_pole/1.jpg" },
        { link: "img/golfvillage_janikovske_pole/2.jpg" },
        { link: "img/golfvillage_janikovske_pole/3.jpg" },
      ],
      sources: [
        "https://www.petrzalka.sk/wp-content/uploads/2017/07/Golfvillage_Janikovske-pole.pdf", 
        "https://www.petrzalka.sk/golfvillage-infrastruktura-jarovce-petrzalka/"
      ],
      amount: 0,
      schedule: [
        {
          title: "Investičný zámer",
          status: "error",
          description: "nebolo schválené", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2017/05/Zapisnica_UPVaD_19_6_2017.pdf",
              status: "error",
              description: "nebolo schválené",
              timeline: luxon.DateTime.fromISO("2017-06-17")
            }
          ]
        },
        {
          title: "Územné konanie",
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: "Záväzné stanovisko hlavného mesta",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=38329",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2015-11-18")
            }
          ]
        }
      ]
    };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Dokumentácia sa funkciou, usporiadaním a kapacitou obytnej zóny zaoberá iba schematicky,
    riešením je návrh komunikačnej siete zóny s dopravným pripojením na nadradenú komunikačnú
    sieť (cestu I/2) cez miestnu komunikáciu vo výstavbe (FT C3 – vetva Y – vydané je stavebné
    povolenie) pre susednú dočasnú stavbu golfového klubu Energau.
    </p><p>
    Komunikačná sieť obytnej zóny je tvorená sieťou miestnych komunikácií funkčnej triedy B2
    (navrhnutá kategória MZ 13,5) – vetva A (s dočasným obratiskom pre autobusovú MHD), funkčnej
    triedy C2 (navrhnuté kategórie MOU 7,5) – vetvy B, C, K, funkčnej triedy D1 - vetvy D, E, F, G,
    H1, H2, I, J a priľahlými resp. samostatnými chodníkmi; schematické usporiadanie budúcej
    zástavby umožňuje výhľadové predĺženie vetvy A a B do susedného územia.
    </p><p>
    Statická doprava pre budúcu zástavbu sa uvažuje pre funkciu bývania v rodinných domoch výlučne
    v rámci vlastných pozemkov, v hromadných garážach integrovaných do polyfunkčných objektov
    a vytvorením exteriérových parkovacích miest v rámci hlavného dopravného priestoru zbernej
    komunikácie (vetva A). Konkrétne riešenie statickej dopravy nie je predmetom predloženej
    dokumentácie, nároky budú bilancované v samostatných dokumentáciách.
    </p><p>
    Podľa tabuľky predpokladaných kapacít územia v obytnej zóne bude 54 RD, bytové domy (289
    b.j.), občianska vybavenosť (149 zamestnancov, 14 822 m2 úžitkovej plochy) 
    </p>
    `;
  }
}

module.exports = Template;

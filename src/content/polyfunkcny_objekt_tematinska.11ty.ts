import { FrontMatter, Post } from "../../@types/eleventy";

class PolyfunkcnyObjektTematinska implements Post {
  data(): FrontMatter {
    return {
      title: "Polyfunkčný objekt Tematínska",
      date: "2020-10-29",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Polyfunkčná stavba s dvoma samostatnými objektami a troma prevádzkovými celkami. Má jedno podzemné parkovacie podlažie, štyri nadzemné a jedno ustúpené piate podlažie. V objektoch sa nachádza 55 bytov a občianska vybavenosť – reštaurácia, kancelárske priestory, telocvičňa v prízemnom trakte pozdĺž bulváru.",
      source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001",
      sources: ["https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001", "https://www.petrzalka.sk/wp-content/uploads/2020/10/elektronick%C3%A9-zverejnenie-inform%C3%A1cie-v-zmysle-%C2%A7-82-ods.-3-zakona-V.D.-LAKE-1.pdf"],
      amount: 0,
      schedule: [
        {
          title: "Územné konanie",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Záväzné stanovisko hlavného mesta",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001",
              status: "success",
              description: "súhlasí",
              timelineDate: "2020-08-27"
            },
          ],
        },
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Polyfunkčná stavba s dvoma samostatnými
    objektami a troma prevádzkovými celkami. Má jedno podzemné parkovacie podlažie, štyri
    nadzemné a jedno ustúpené piate podlažie. V objektoch sa nachádza 55 bytov a občianska
    vybavenosť – reštaurácia, kancelárske priestory, telocvičňa v prízemnom trakte pozdĺž bulváru.
    </p>
    <p>
    V parteri polyfunkčných objektov sa nachádza správa parku, materská škôlka pre 36 detí, dva
    kancelárske priestory, tri zubné ambulancie, zubný technik. Na ustúpenom podlaží
    severovýchodného objektu je celoročný wellness klub s vnútorným bazénom, saunami a vírivými
    vaňami. Súčasťou polyfunkčnej stavby sú aj verejné funkcie vo väzbe na vodnú plochu Veľký
    Draždiak - bulvár pre peších, promenáda, umelý potok, dažďová záhrada, komunitná záhrada, pláž
    so zázemím, mólo, oddychová lúka s ohniskom, vnútroblokový park, tri detské ihriská, amfiteáter
    pre drobné podujatia a stanovisko bike sharing.
    </p>
    <p>
    Stavba je dopravne pripojená na jestvujúce komunikácie v území - Tematínska ulica popri
    Chorvátskom ramene s následným pripojením cez premostenie Chorvátskeho ramena na Jantárovú
    cestu a účelová prístupová komunikácia susedného hotela s následným pripojením na Antolskú
    ulicu.
    </p>
    <p>
    Statická doprava (130 parkovacích miest) je riešená v spoločnej integrovanej hromadnej garáži (1
    vjazd zo smeru od Jantárovej cesty a 1 vjazd zo smeru od Antolskej ulice), 18 verejných
    parkovacích miest je umiestnených ako kolmé parkovanie pri jestvujúcej komunikácii - úseku
    Tematínskej ulice, vedenej ku vodnej ploche Veľkého Draždiaka.
    </p>
    `;
  }
}

module.exports = PolyfunkcnyObjektTematinska;

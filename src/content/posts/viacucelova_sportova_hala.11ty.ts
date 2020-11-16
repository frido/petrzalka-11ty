import { FrontMatter, Post } from "../../../@types/eleventy";
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
              timeline: luxon.DateTime.fromISO("2020-07-18"),
            },
            {
              title: "Záväzné stanovisko",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71584",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-09-25"),
            },
            
          ],
        }
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    Predložená projektová dokumentácia rieši novostavbu viacúčelovej športovej haly
obdĺžnikového pôdorysu, so zastrešením z priehradových väzníkov v tvare lomenice, ktorej hrebene
dosiahnu výšku max. + 13,000 m (od podlahy 1. NP ± 0,000, čo je 149,000 m n. m. Bpv).
Využívaná bude pre potreby výuky a rozvoja športových a pohybových aktivít študentov
a zamestnancov Ekonomickej univerzity v Bratislave (ďalej len „EU BA“). Priečelie budovy tvorí
vystupujúci jednopodlažný trakt, kde sa nachádzajú vstupné priestory, hygienické zariadenia
pre divákov a ďalšie prevádzkové priestory. Dominantná časť stavby je dispozične rozdelená na dve
časti: samotnú športovú halu s tribúnou pre 230 divákov a na zázemie pre športovcov, kde sú
na dvoch výškových úrovniach rozmiestnené šatne, sociálne zariadenia a prislúchajúce prevádzkové
priestory.
Objekt bude dopravne napojený z komunikácie – Májová ulica, odkiaľ sa jedným vjazdom
sprístupní navrhované parkovisko pre 20 osobných automobilov. Požiadavky na zabezpečenie
statickej dopravy predmetnej športovej haly pre ďalších 63 áut budú splnené zástupným
parkovaním na jestvujúcich parkoviskách v areáli EU BA.
    `;
  }
}

module.exports = Template;

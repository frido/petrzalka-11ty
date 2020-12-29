import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_SUB_TITLE_ZSHM, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      title: "Samoobslužná autoumyváreň, Petržalka Juh",
      date: "2020-11-05",
      tags: [TAG_PROJECT],
      layout: "layouts/post2.njk",
      description: "Autoumyváreň na Panónskej ceste.",
      icon: "",
      sources: [
        "https://www.petrzalka.sk/samoobsluzna-autoumyvaren-petrzalka-juh/"
      ],
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: EXE_SUB_TITLE_ZSHM,
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67277",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-02-06")
            }
          ]
        }
      ],
    };
  }

  render(data: FMProject) {
    return `
    <p>
    Predložená dokumentácia rieši: umiestnenie objektu samoobslužnej autoumyvárne pre osobné
    autá – 2 nepodpivničené jednopodlažné objekty, (spolu 8 umývacích boxov, kapacita 200
    vozidiel/deň), vrátane zásobníka propánu, odstavných priestorov a komunikačných priestorov.
    V rámci riešeného areálu sa nachádza aj plocha, určená pre umiestnenie stavby čerpacej stanice
    pohonných hmôt, ktorá je však riešená samostatnou dokumentáciou a bude predmetom
    samostatného posudzovania.
    </p>
    <p>
    Dopravná obsluha areálu je navrhnutá po účelových komunikáciách riešeného areálu s dopravným
    pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného mesta – zóna
    A ( Labutia ulica), s následným pripojením na Panónsku cestu.
    </p>
`;
  }
}

module.exports = Template;

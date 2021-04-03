import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Revitalizácia okolia Pamätníka obetiam extrémizmu",
      date: "2021-04-03",
      description: "Revitalizácia okolia jestvujúceho pamätníka obetiam extrémizmu. Prioritou návrhu je zachovať pietny charakter priestoru, zdôrazniť prítomnosť pamätníka a podporiť jeho pôsobenie v priestore. Aktuálne je verejná plocha v okolí pamätníka využívaná na neorganizované parkovanie, avšak neevidujeme žiadny projekt, ktorým by bola táto činnosť resp. funkčné využívanie plochy legislatívne potvrdené.",
      "icon": "img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/1.jpg",
      gallery: [
        { link: 'img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/1.jpg' },
        { link: 'img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/2.jpg' }
      ],
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=73956",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2021-01-25")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    <p>
    Revitalizácia okolia jestvujúceho pamätníka obetiam extrémizmu. 
Prioritou návrhu je zachovať pietny charakter priestoru, zdôrazniť prítomnosť pamätníka a podporiť 
jeho pôsobenie v priestore. Aktuálne je verejná plocha v okolí pamätníka využívaná na 
neorganizované parkovanie, avšak neevidujeme žiadny projekt, ktorým by bola táto činnosť resp. 
funkčné využívanie plochy legislatívne potvrdené.
</p><p>
Návrh eliminuje plochu existujúcej spevnenej plochy na úkor vegetačných úprav, pričom predkladá 
etapizáciu projektu pre postupnú adaptáciu upraveného priestoru. Navrhnuté členenie priestoru je 
ovplyvnené existujúcimi napojeniami a vstupmi do územia, priestor je vyčlenený dvoma 
pretínajúcimi sa pešími trasami, ktoré vymedzujú centrálny priestor v bode ich križovania, 
definovanom v mieste osadenia pamätníka. V rámci revitalizácie bude upravený terén, realizované 
sadové úpravy, umiestnené mobiliárové prvky (betónové sedáky, lavičky, odpadkové koše, 
osvetlenie, atď.). V I. etape je ponechaná a upravená spevnená plocha pre parkovanie, jasne
definovaná a pomocou výsadby oddelená od kontaktu s pamätníkom. V II. etape sa táto plocha 
zatrávni, línie chodníkov sa predĺžia a napoja na komunikácie (promenáda pri Dunaji a vstup na 
Tyršovo nábrežie od divadla Aréna).</p>`;
  }
}

module.exports = Template;

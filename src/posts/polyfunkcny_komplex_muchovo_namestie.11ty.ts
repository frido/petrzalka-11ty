import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Polyfunkčný komplex Muchovo námestie",
      date: "2021-04-03",
      description: "Umiestnenie polyfunkčného komplexu budov s 8 nadzemnými podlažiami, s funkciou náhradného a nájomného bývania a prechodného ubytovania v dvoch etapách. V I. etape doskový objekt bytového domu s dvoma sekciami - nájomné bývanie – náhradné bývanie s občianskou vybavenosťou v parteri. V II. etape – garni hotel, 63 izieb/154 lôžok, vrátane doplnkových funkcií obchodu a služieb v parteri.",
      "icon": "img/polyfunkcny_komplex_muchovo_namestie/1.png",
      gallery: [
        { link: 'img/polyfunkcny_komplex_muchovo_namestie/1.png' }
      ],
      source: "https://www.enviroportal.sk/eia/dokument/317714?uid=f6508f5f61a8c5172760d7d6fc49c0922999a7f9",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=73878",
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
    Umiestnenie polyfunkčného komplexu budov s 8 nadzemnými 
podlažiami, s funkciou náhradného a nájomného bývania a prechodného ubytovania v dvoch 
etapách. V I. etape doskový objekt bytového domu s dvoma sekciami - nájomné bývanie, náhradné bývanie s občianskou vybavenosťou v parteri. V II. etape - garni hotel, 63 izieb/154 lôžok, vrátane doplnkových funkcií obchodu a služieb v parteri.
Priestor medzi bytovým domom a objektom garni hotela je koncipovaný ako námestie vo väzbe na
občiansku vybavenosť a zelený vnútroblok. Investičný zámer je situovaný v lokalite Muchovho 
námestia, na pozemku, ohraničenom ulicami Černyševského, na južnej strane sa nachádza 
parkovisko supermarketu Billa a východnú hranicu lemuje nový bytový dom a priemyselný areál.
<p/><p>
Dopravná obsluha je riešená z priľahlej miestnej obslužnej komunikácie Černyševského ulice. 
Súčasťou je aj riešenie statickej dopravy, spolu v konečnej fáze výstavby 283 PM: pre I. etapu na 
parkoviskách A, B, C a D na teréne, ktoré sú umiestňované v dochádzkovej vzdialenosti v rôznych 
polohách v dotknutom území stavby a pre II. etapu aj v hromadnej garáži, integrovanej do objektu 
hotela (zruší sa parkovisko B), pričom predmetom riešenia je aj náhrada/premiestnenie jestvujúcich 
parkovacích miest v území. Vlastná potreba statickej dopravy zámeru pre I. a II. etapu je 175 PM.</p>`;
  }
}

module.exports = Template;

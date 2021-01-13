import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Parkovací dom, Panónska ul.",
      date: "2020-11-22",
      description: "parkovací dom uvažuje v 1. podzemnom podlaží prevádzku autoservisu, 4 nadzemné podlažia a strecha objektu sú určené pre parkovanie, s kapacitou 93 parkovacích miest. 6 parkovacích miest je umiestnených na teréne pred objektom.",
      icon: "",
      source: "https://www.petrzalka.sk/parkovaci-dom-panonska-ul-bratislava-mc-petrzalka/",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: "Záväzné stanovisko MZ",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67275",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-02-06")
            },
            {
              title: "Začatie územného konania",
              source: "https://www.petrzalka.sk/parkovaci-dom-panonska-ul-bratislava-mc-petrzalka/",
              status: "success",
              description: "",
              date: luxon.DateTime.fromISO("2019-11-27")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    <p>
    Umiestnenie parkovacieho domu ako I. etapy v lokalite, kde je
    v súčasnosti nefunkčný objekt servisného centra PEUGEOT, určený na asanáciu. Pre dotknuté
    územie bola spracovaná Urbanistická štúdia Panónska – Dolnozemská (čistopis 05/2019), ako
    podklad pre schválenie zmien a doplnkov Územného plánu hlavného mesta SR Bratislavy, rok 2007
    v znení zmien a doplnkov. V II. etape bude na pozemku na mieste asanovaného objektu servisného
    centra PEUGEOT umiestnený investičný zámer v zmysle uvedenej štúdie až po schválení zmien
    a doplnkov ÚPN hlavného mesta SR Bratislavy.
    </p>
    <p>
    Aktuálne umiestňovaný parkovací dom uvažuje v 1. podzemnom podlaží prevádzku autoservisu, 4
    nadzemné podlažia a strecha objektu sú určené pre parkovanie, s kapacitou 93 parkovacích miest. 6
    parkovacích miest je umiestnených na teréne pred objektom. Príjazdová komunikácia
    k parkovaciemu domu je riešená podľa textovej časti v dĺžke 57 m a šírky 5,50 m, s dopravným
    pripojením na priľahlú jestvujúcu komunikáciu, s následným pripojením na Jasovskú ulicu.
    Poloha a kapacita parkovacieho domu je z hľadiska dopravného riešenia v súlade s riešením
    spracovanej UŠ Panónska – Dolnozemská, 25 parkovacích miest je určených pre autoservis
    a zvyšné parkovacie miesta pre súčasnú okolitú bytovú zástavbu.
    </p>`;
  }
}

module.exports = Template;

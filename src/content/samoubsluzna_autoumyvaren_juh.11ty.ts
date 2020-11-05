import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Samoobslužná autoumyváreň, Petržalka Juh",
      date: "2020-11-05",
      tags: ["template"],
      layout: "layouts/post2.njk",
      description: "Autoumyváreň na Panónskej ceste.",
      icon: "",
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
        },{
          title: "Územné konanie",
          status: "success",
          description: "ukončené", 
          sub: [
            {
              title: "Záväzné stanovisko hlavného mesta",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=69412",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-05-19")
            }
          ]
        },{
          title: "Stavebné konanie",
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: "Začatie konania",
              source: "https://www.petrzalka.sk/bytovy-dom-fend-apartmens-budatinska/",
              status: "success",
              description: "",
              timeline: luxon.DateTime.fromISO("2019-03-22")
            }
          ]
        }
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Predložená dokumentácia rieši: umiestnenie novostavby samostatne stojacej samoobslužnej
    autoumyvárne. Prevádzka je dispozične rozčlenená na 7 prevádzkových priestorov; 5 priestorov na
    samoobslužné umývanie (5 boxov), jeden umývací portál a priestor, kde bude umiestnená
    technológia umyvárne. Počet státí na samoobslužné umývanie je 5 + 1 a počet státí na čistenie
    interiérov je 3.
    </p>
    <p>
    Vnútroareálové spevnené plochy budú riešené ako pojazdná plocha do 3,5 t s krytom z betónovej
    zámkovej dlažby hr. 80 mm, ohraničená cestnými obrubníkmi, ktorú bude čiastočne lemovať
    zatrávnená plocha. Doplnkovou funkciou sú dva ostrovčeky vybavené doplnkovými zariadeniami
    na čistenie interiérov pre automobily s tromi parkovacími miestami.
    Predpokladaná projektovaná umývacia kapacita linky je 2 autá za hodinu, čo pri pracovnej dobe 8
    hod. za deň a 360 pracovných dňoch predstavuje cca 5760 áut za rok. Nakoľko prevádzka je závislá
    od požiadaviek zákazníkov, môže skutočná kapacita autoumyvárne byť rozdielna.
    Dopravná obsluha areálu je riešená po účelových komunikáciách priľahlej ČSPL Lukoil, bez zmeny
    nadradeného dopravného pripojenia na Panónsku cestu
    </p>
`;
  }
}

module.exports = Template;

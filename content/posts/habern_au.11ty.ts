import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Bytový dom Habern Au",
      date: "2020-11-11",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Bytový dom Habern Au na ulici A. Gwerkovej.",
      icon: "",
      schedule: [
        {
          title: "Investičný zámer",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: 'Stanovisko komisie MZ',
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/06/KUPVaR-zapisnica_2020-05-26_overena.pdf",
              status: "success",
              description: "žiada prepracovanie",
              timeline: luxon.DateTime.fromISO("2020-05-26")
            },
            {
              title: 'Petícia proti výstavbe',
              source: "https://www.peticie.com/peticia_proti_vystavbe_bytoveho_domu_habern_au_na_luke_nachadzajucej_sa_na_ulici_a_gwerkovej_v_mestskej_asti_bratislava__petralka_v_ovsiti",
              status: "inwork",
              description: "",
              timeline: luxon.DateTime.fromISO("2020-11-10")
            }
          ]
        },
        {
          title: "Územné konanie",
          status: "error",
          description: "zastavené", 
          sub: [
            {
              title: "Záväzné stanovisko hlavného mesta",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=31041",
              status: "error",
              description: "nesúhlasí",
              timeline: luxon.DateTime.fromISO("2014-09-18")
            },
            {
              title: "Rozhodnutie mestskej časti",
              source: "https://www.petrzalka.sk/wp-content/uploads/2015/08/Rozhodnutie_Ovsiste.pdf",
              status: "error",
              description: "zastavené",
              timeline: luxon.DateTime.fromISO("2015-08-03")
            }
          ]
        }
      ]
    };
  }

  render(data: FrontMatter) {
    return `
    Bytový dom Habern Au na ulici A. Gwerkovej.
    `;
  }
}

module.exports = Template;

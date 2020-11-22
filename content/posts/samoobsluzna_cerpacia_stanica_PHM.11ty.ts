import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Samoobslužná čerpacia stanica PHM, Petržalka Juh",
      date: "2020-11-22",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Samoobslužná čerpacia stanica pohonných hmôt pre osobné autá (2 dvojproduktové stojany), navrhnutá ako samostatná stavba s dopravnou väzbou na súbežne posudzovanú stavbu „samoobslužná autoumyváreň“ t. j. s dopravnou obsluhou, využívajúcou účelové komunikácie areálu „samoobslužná autoumyváreň“ s dopravným pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného mesta – zóna A (Labutia ulica), s následným pripojením na Panónsku cestu.",
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
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67275",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-02-06")
            }
          ]
        },
        {
          title: "Územné konanie",
          status: "pause",
          description: "prerušené", 
          sub: [
            {
              title: "Začatie územného konania",
              source: "https://www.petrzalka.sk/samoobsluzna-cerpacia-stanica-phm-petrzalka-juh/",
              status: "success",
              description: "",
              timeline: luxon.DateTime.fromISO("2020-02-26")
            }
          ]
        }
      ]
    };
  }

  render(data: FrontMatter) {
    return `
    Samoobslužná čerpacia
    stanica pohonných hmôt pre osobné autá (2 dvojproduktové stojany), navrhnutá ako samostatná
    stavba s dopravnou väzbou na súbežne posudzovanú stavbu „samoobslužná autoumyváreň“ t. j.
    s dopravnou obsluhou, využívajúcou účelové komunikácie areálu „samoobslužná autoumyváreň“
    s dopravným pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného
    mesta – zóna A (Labutia ulica), s následným pripojením na Panónsku cestu.
    Údaje k zámeru v zmysle predloženej dokumentácie, spracovanej a potvrdenej subjektom odborne
    spôsobilým (Ing. Ján Virostko, 11/2019). 
    `;
  }
}

module.exports = Template;

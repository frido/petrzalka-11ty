import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      "title": "Výťahové parkovacie domy",
      "date": "2020-10-27",
      "tags": [
         "projekt"
      ],
      "layout": "layouts/post2.njk",
      "description": "Zámer budovania výťahových parkovacích domov spoločnosťou UpDown Parking v Petržalke",
      "icon": "/img/vytahove-parkovacie-domy/3.png",
      gallery: [
        { link: 'img/vytahove-parkovacie-domy/3.png' },
        { link: 'img/vytahove-parkovacie-domy/4.png' },
        { link: 'img/vytahove-parkovacie-domy/5.png' },
        { link: 'img/vytahove-parkovacie-domy/6.png' },
        { link: 'img/vytahove-parkovacie-domy/7.png' },
        { link: 'img/vytahove-parkovacie-domy/8.png' },
        { link: 'img/vytahove-parkovacie-domy/9.png' },
        { link: 'img/vytahove-parkovacie-domy/10.png' },
        { link: 'img/vytahove-parkovacie-domy/11.png' },
        { link: 'img/vytahove-parkovacie-domy/12.png' },
        { link: 'img/vytahove-parkovacie-domy/13.png' },
      ],
      "sources": [
         "http://updownparking.sk/assets/dist/images/presentation.pdf"
      ],
      "amount": 0,
      "schedule": [
         {
            "title": "Investičný zámer",
            "status": "inwork",
            "description": "prebieha",
            "sub": [
               {
                  "title": "Infomateriál",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/09/INFO-7.-Z%C3%A1mer-budovania-v%C3%BD%C5%A5ahov%C3%BDch-parkovac%C3%ADch-domov-v-Petr%C5%BEalke.pdf",
                  "status": "success",
                  "description": "",
                  timeline: luxon.DateTime.fromISO("2020-08-26")
               }
            ]
         }
      ]
   };
  }

  render(data: FrontMatter) {
    return `
    Zámer budovania výťahových parkovacích domov spoločnosťou UpDown Parking v Petržalke.
    `;
  }
}

module.exports = Template;
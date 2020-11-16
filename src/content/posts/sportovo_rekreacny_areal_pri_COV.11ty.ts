import { FrontMatter, Post } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      "title": "Športovo Rekreačný Areál Pri ČOV",
      "date": "2020-06-14",
      "tags": [
         "projekt"
      ],
      "layout": "layouts/post2.njk",
      "description": "Zámerom urbanistického návrhu je športovo-rekreačný kampus, výškovo diferencovaná krajina s halovými športovými objektmi, externými športoviskami, zariadeniami občianskej vybavenosti nadväzujúcimi na hlavnú funkciu /napr. ubytovne, hotely, penzióny/ a pobytovou a parkovou zeleňou",
      "icon": "/img/sportovo_rekreacny_areal_pri_COV/image--000.jpg",
      gallery: [
        { 
          link: 'img/sportovo_rekreacny_areal_pri_COV/image--000.jpg',
          title: 'Variant A'
        },
        { 
          link: 'img/sportovo_rekreacny_areal_pri_COV/image--001.jpg',
          title: 'Variant B'
        }
      ],
      "sources": [
         "https://www.petrzalka.sk/wp-content/uploads/2020/01/z%C3%A1pisnica-K%C5%BDP-23.1.2020.pdf",
         "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-21_overena.pdf",
         "https://www.petrzalka.sk/wp-content/uploads/2020/02/z%C3%A1pis-z-komisie-29-1.2020.pdf"
      ],
      "amount": 0,
      "schedule": [
          {
            "title": "Urbanistický návrh",
            "status": "inwork",
            "description": "prebieha",
            "sub": [
               {
                  "title": "Materiál na rokovanie MZ",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/Info.-3.-%C5%A1portovo-rekrea%C4%8Dn%C3%BD-are%C3%A1l-pri-%C4%8COV-MZ.pdf",
                  "status": "success",
                  "description": "",
                  timeline: luxon.DateTime.fromISO("2020-02-04")
               }
            ]
          }
      ]
   };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Riešené územie urbanistickej štúdie sa nachádza východne od Dolnozemskej cesty. Jej
    priestorové ohraničenie tvorí: Betliarska ulica, resp. Sitnianska ulica, Dolnozemská cesta,
    vozovňa Petržalka, vrátane prístupovej komunikácie, miestna komunikácia k ČOV, resp.
    parcely v rámci funkčnej plochy vo vlastníctve VÚC.
    </p>
    <p>
    Zámerom urbanistického návrhu je športovo-rekreačný kampus, výškovo
    diferencovaná krajina s halovými športovými objektmi, externými športoviskami,
    zariadeniami občianskej vybavenosti nadväzujúcimi na hlavnú funkciu /napr. ubytovne,
    hotely, penzióny/ a pobytovou a parkovou zeleňou. Územie je urbanisticky členené na severnú
    časť /zóna D/ a južnú časť /zóna E/.
    </p>
    <p>
    Spracovateľom urbanistickej štúdie je spoločnosť MV ARCHITECTURE s.r.o.,
    Bratislava. BSK zabezpečuje prerokovanie štúdie prostredníctvom Ing. arch. Jany Zlámalovej,
    odborne spôsobilej osoby pre obstarávanie ÚPP a ÚPD.
    </p>
    <p>
    Urbanistická štúdia je spracovaná v dvoch variantoch „A“ a „B“. Variantné riešenie
    vychádza zo zadania Bratislavského samosprávneho kraja, ktoré pre ťažiskové územie
    urbanistického bloku E2 južného sektoru /vo vlastníctve BSK/ požaduje overenie umiestnenia
    mestského pobytového parku so športovo-rekreačnou funkciou.
    </p>
    `;
  }
}

module.exports = Template;

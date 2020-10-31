import { FrontMatter, Post } from "../../@types/eleventy";

class Template implements Post {
  data(): FrontMatter {
    return {
      "title": "Škola Južné mesto",
      "date": "2020-07-29",
      "tags": [
         "projekt"
      ],
      "layout": "layouts/post2.njk",
      "description": "Škola je situovaná v rozvojovom území na pozemku s funkčným využitím občianska vybavenosť celomestského a nadmestského významu kód 201, severozápadná časť budovy je umiestňovaná na hranicu funkčnej plochy sadovnícke a lesoparkové úpravy, kód funkcie 1110. Návrh plôch pre školskú telesnú výchovu a šport je riešený ako športový areál s bežeckým oválom 250 m + 100 m dráhou a multifunkčným ihriskom 20 x 40 m. ",
      "icon": "/img/skola-juzne-mesto/4.jpg",
      gallery: [
        { link: 'img/skola-juzne-mesto/1.jpg' },
        { link: 'img/skola-juzne-mesto/2.jpg' },
        { link: 'img/skola-juzne-mesto/3.jpg' },
        { link: 'img/skola-juzne-mesto/4.jpg' }
      ],
      "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=66735",
      "sources": [
         "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=66735",
         "https://www.petrzalka.sk/wp-content/uploads/2018/02/Skola_Juzne_mesto.pdf",
         "https://www.petrzalka.sk/wp-content/uploads/2020/03/KUPVaR-zapisnica_2020-03-03_overena.pdf",
         "https://www.enviroportal.sk/sk/eia/detail/skola-juzne-mesto-bratislava-petrzalka-",
         "https://www.petrzalka.sk/wp-content/uploads/2017/12/EIA_skola_Juzne_mesto.pdf",
         "https://www.minzp.sk/uradna-tabula/vody/skola-juzne-mesto-bratislava-petrzalka.html"
      ],
      "amount": 0,
      "schedule": [
         {
            "title": "Územné konanie",
            "status": "success",
            "description": "hotovo",
            "sub": [
               {
                  "title": "Investičný zámer",
                  "source": "https://www.petrzalka.sk/wp-content/uploads/2018/02/Skola_Juzne_mesto.pdf",
                  "status": "success",
                  description: '',
                  timelineDate: "2018-02-01"
               },
               {
                  "title": "Záväzné stanovisko",
                  "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=66735",
                  "status": "success",
                  description: 'súhlasí',
                  timelineDate: "2020-01-24"
               }
            ]
         }
      ]
   };
  }

  render(data: FrontMatter) {
    return `
    <ul>
      <li>základná škola – kompletných 47 tried - 940 žiakov</li>
      <li>stredná škola – počet tried 12 - 240 žiakov</li>
      <li>materská škola – počet tried 3 - 60 žiakov</li>
    </ul>
    <p>
    Spolu 1 240 detí. Škola je situovaná v rozvojovom
    území na pozemku s funkčným využitím občianska vybavenosť celomestského a nadmestského
    významu kód 201, severozápadná časť budovy je umiestňovaná na hranicu funkčnej plochy
    sadovnícke a lesoparkové úpravy, kód funkcie 1110. Návrh plôch pre školskú telesnú výchovu
    a šport je riešený ako športový areál s bežeckým oválom 250 m + 100 m dráhou a multifunkčným
    ihriskom 20 x 40 m. Športový areál je z prevažnej časti situovaný na pozemku s funkčným využitím
    občianska vybavenosť celomestského a nadmestského významu kód 201, malá časť na pozemku
    s funkčným využitím viacpodlažná zástavba obytného územia, číslo funkcie 101 a do územia so
    stanoveným funkčným využitím parky, sadovnícke a lesoparkové úpravy kód funkcie 1110
    zasahuje časťou bežeckého oválu
    </p>
    `;
  }
}

module.exports = Template;

import { EXE_SUB_TITLE_ZKMZ, EXE_SUB_TITLE_ZSHM, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Hotel Sphinx",
      date: "2020-11-11",
      description: "Hotel bude čiastočne podpivničený, s 8 nadzemnými podlažiami, z toho 2 ustúpené. V objekte sa nachádza raňajkáreň/kaviareň, recepcia, 2 byty, 16 hotelových izieb a prislúchajúce zázemie hotela.",
      icon: "img/hotel_sphinx/2.png",
      gallery: [
        {link: 'img/hotel_sphinx/1.png'},
        {link: 'img/hotel_sphinx/2.png'},
        {link: 'img/hotel_sphinx/3.png'},
        {link: 'img/hotel_sphinx/4.jpg'}
      ],
      source: "https://www.petrzalka.sk/wp-content/uploads/2019/09/KUPVaD_09-10_bod-10_Hotel_Sphinx-Kopcianska.pdf",
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: EXE_SUB_TITLE_ZSHM,
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68661",
              status: "success",
              description: "súhlasí",
              date: luxon.DateTime.fromISO("2020-05-11")
            },
            {
              title: EXE_SUB_TITLE_ZKMZ,
              source: "https://www.petrzalka.sk/wp-content/uploads/2019/09/KUPVaD-zapisnica_2019-09-10_overena.pdf",
              status: "error",
              description: "neschválené",
              date: luxon.DateTime.fromISO("2019-09-10")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    <p>
    Projekt rieši umiestnenie stavby hotela v lokalite na Kopčianskej ulici,
    v súčasnosti zastavaným bývalou výrobnou halou, ktorá bude asanovaná. Hotel bude čiastočne
    podpivničený, s 8 nadzemnými podlažiami, z toho 2 ustúpené. V objekte sa nachádza
    raňajkáreň/kaviareň, recepcia, 2 byty, 16 hotelových izieb a prislúchajúce zázemie hotela.
    </p><p>
    Dopravný prístup k objektu je uvažovaný z priľahlej komunikácie Kopčianska ulica využitím
    jestvujúceho dopravného pripojenia a upravených areálových komunikácií na pozemkoch investora
    v susednom areáli skladov, v ktorom je riešená aj statická doprava pre potreby hotela v počte 18
    PM (SO 03 Cesty a spevnené plochy). Ako súčasť stavby bude pred objektom hotela priamo na
    Kopčianskej ulici vybudované miesto pre krátkodobé zastavenie motorového vozidla (taxi), vrátane
    úpravy priľahlého chodníka a cyklotrasy (SO 02 Úprava chodníka a cyklotrasy).
    </p>
    `;
  }
}

module.exports = Template;

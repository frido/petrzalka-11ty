import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_UK, LAYOUT_PROJECT, ProjectPage, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class PolyfunkcnyDomNaHumenskomNamesti2 extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Polyfunkčný dom na Humenskom námestí",
      date: "2020-06-23",
      description: "Novostavba polyfunkčného domu s 1 podzemným a 4 nadzemnými podlažiami, s 2 priestormi obchodu a služieb, komunitnými priestormi, administratívnymi priestormi pre 23 zamestnancov (9 nebytových priestorov) a 27 bytmi. Dopravná obsluha objektu bude zabezpečená po jestvujúcich miestnych komunikáciách a parkovisku (Jasovská ul., Humenské nám). Súčasťou riešenia je aj nové parkovanie - v garáži na 1. podzemnom podlaží 26 státí s obsluhou autovýťahom s obojstranným vjazdom, pod budovou na úrovni 1. nadzemného podlažia (4 státia) a na vonkajšom parkovisku (24 státí), z čoho je 7 státí náhradou za stavbou zabraté jestvujúce parkovacie miesta.",
      icon: "/img/polyfunkcny_dom_humenske_nam/polyfunkcny_dom_humenske_nam_2.jpg",
      sources: [
        "https://www.petrzalka.sk/wp-content/uploads/2018/09/polyfunkcny_dom_humenske_nam..pdf", 
        "http://www.arealstav.eu/files/humens.%20n%C3%A1m/hm1_komplet.pdf", 
        "http://www.arealstav.eu/files/humens.%20n%C3%A1m/hm2_komplet.pdf", 
        "https://troscak.blog.sme.sk/c/537054/uz-zajtra-sa-rozhodne-o-dalsom-osude-umiestnenia-zbytocnej-stavby-v-petrzalke-na-humenskom.html"],
      gallery: [
        { link: "img/polyfunkcny_dom_humenske_nam/polyfunkcny_dom_humenske_nam_2.jpg" },
        { link: "img/polyfunkcny_dom_humenske_nam/polyfunkcny_dom_humenske_nam_3.jpg" },
        { link: "img/polyfunkcny_dom_humenske_nam/polyfunkcny_dom_humenske_nam_1.jpg" },
        { link: "img/polyfunkcny_dom_humenske_nam/polyfunkcny_dom_humenske_nam_4.jpg" }
      ],
      execution: [
        {
          title: EXE_TITLE_UK,
          status: "pause",
          description: "prerušené",
          sub: [
            {
              title: "Záväzné stanovisko",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=52637",
              status: "error",
              description: "zamietnuté",
              date: luxon.DateTime.fromISO("2017-09-18"),
            },
            {
              title: "Stanovené požiadavky do spracovania projektu",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=52637",
              status: "success",
              description: "",
              date: luxon.DateTime.fromISO("2018-10-23"),
            },
            {
              title: "Záväzné stanovisko",
              source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=64278",
              status: "success",
              description: "súhlasné",
              date: luxon.DateTime.fromISO("2019-07-25"),
            },
            {
              title: "Začatie územného konania",
              source: "https://www.petrzalka.sk/2020-03-04-uzemne-konania/",
              status: "inwork",
              description: "",
              date: luxon.DateTime.fromISO("2019-11-27"),
            },
            {
              title: "Zasadnutie Miestneho zastupiteľstva",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/01/uznesenia_04_02_2020opraven%C3%A9.pdf",
              status: "error",
              description: "vyjadruje nesúhlas",
              date: luxon.DateTime.fromISO("2020-02-04"),
            },
            {
              title: "Petícia PROTI zástavbe parku a časti parkoviska",
              source: "https://zastupitelstvo.bratislava.sk/data/att/46753.pdf",
              status: "success",
              description: "berie na vedomie",
              date: luxon.DateTime.fromISO("2020-02-27"),
            },
            {
              title: "Oznámenie výsledku vybavenia petície",
              source: "https://esluzby.bratislava.sk/Upload/EDEM/NoticeBoardEntry/19396/2020PeticiaprotizastavbeparkuacastiparkoviskaHumenskenamestievlokaliteLukyVII._2%20doc.pdf",
              status: "success",
              description: "berie na vedomie",
              date: luxon.DateTime.fromISO("2020-05-28"),
            },
            {
              title: "Zasadnutie Mestského zastupiteľstva",
              source: "https://zastupitelstvo.bratislava.sk/mestske-zastupitelstvo-hlavneho-mesta-sr-bratislavy-zasadnutie-28052020/bod-43/",
              status: "success",
              description: "berie na vedomie",
              date: luxon.DateTime.fromISO("2020-05-28"),
            },
          ],
        },
      ],
    });
  }

  render(data: FMProject) {
    return `
    Novostavba polyfunkčného domu s 1 podzemným a 4 nadzemnými podlažiami, s 2 priestormi obchodu a služieb, komunitnými priestormi, administratívnymi priestormi pre 23 zamestnancov (9 nebytových priestorov) a 27 bytmi. Dopravná obsluha objektu bude zabezpečená po jestvujúcich miestnych komunikáciách a parkovisku (Jasovská ul., Humenské nám). Súčasťou riešenia je aj nové parkovanie - v garáži na 1. podzemnom podlaží 26 státí s obsluhou autovýťahom s obojstranným vjazdom, pod budovou na úrovni 1. nadzemného podlažia (4 státia) a na vonkajšom parkovisku (24 státí), z čoho je 7 státí náhradou za stavbou zabraté jestvujúce parkovacie miesta.
    `;
  }
}

module.exports = PolyfunkcnyDomNaHumenskomNamesti2;

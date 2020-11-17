import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      title: "Bratislavský dunajský park",
      date: "2020-11-03",
      tags: ["projekt"],
      layout: "layouts/post2.njk",
      description: "Hlavným cieľom zriadenia a vybudovania Bratislavského dunajského parku je vytvoriť prijemné estetické a prírodné prostredie. Miera upravenosti a organizovanosti bude rôzna, tak ako je to aj v súčasnosti. Park bude integrovať miesta rôzneho charakteru",
      icon: "https://www.yimba.sk/upload/Projekty/Downtown/Nov%C3%A9%20Lido/StudiaLido_01/03_Lido_Letecky_pohlad_01.jpg",
      gallery: [
        { link: 'https://www.yimba.sk/upload/Projekty/Downtown/Nov%C3%A9%20Lido/StudiaLido_01/03_Lido_Letecky_pohlad_01.jpg' }
      ],
      source: "https://www.bdp.sk/studia.pdf",
      amount: 0,
      schedule: [
        {
          title: "Úvodná štúdia",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Stanovisko komisie MZ",
              source: "https://www.petrzalka.sk/wp-content/uploads/2020/06/z%C3%A1pisnica-K%C5%BDP-28.05.2020-podp%C3%ADsan%C3%A1.pdf",
              status: "success",
              description: "súhlasí",
              timeline: luxon.DateTime.fromISO("2020-05-28")
            },
          ],
        },
      ],
    };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Dunaj, so svojimi brehmi, lužnými lesmi, plážami, ramenami a ostrovmi je pre Bratislavu, jej
    obyvateľov a návštevníkov, strategickým a zásadným prírodným prvkom a nositeľom
    identity. Pre Bratislavu, ako hlavné mesto a centrum regiónu s presahom hraníc, má Dunaj
    dôležitý význam pre životne prostredie, pre kvalitu života ľudí a udržateľný hospodársky
    rozvoj. Predložená štúdiá definuje a opisuje prírodné územie pri Dunaji v Bratislave ako
    Bratislavsky dunajsky park (BDP), ktorý ma slúžiť ľuďom na oddych a záujmové aktivity v
    prírodnom prostredí Dunaja v dotyku s mestom, a tak prispievať k vyššej kvalite života
    obyvateľov a návštevníkov Bratislavy.
    <p></p>
    Hlavnou ambíciou zriadenia a vybudovania BDP je zvýšenie kvality života ľudí v súlade s
    princípom spolužitia s prírodou. V rámci toho sleduje BDP nasledujúce ciele:
    <ul>
    <li>Využiť potenciál Dunaja v Bratislave na oddych, rekreáciu a šport v prírodnom prostredí</li>
    <li>Vytvoriť ucelene prepojene územie pozdĺž Dunaja integrujúce ľudské aktivity a prírodné
    prostredie (zachovajme oázy a vnímajme celok)</li>
    <li>Prepojiť vhodne BDP s ďalšími atraktívnymi územiami aj za ochrannou protipovodňovou
    líniou</li>
    <li>Zabezpečiť prístup ľudí do územia BDP, vytvoriť pozdĺžne prepojenie chodníkmi pozdĺž
    Dunaja (pokiaľ možno priamo pri brehu), ako aj priečne vstupy do územia na vhodných
    miestach</li>
    <li>Zjednodušiť prístup do územia BDP vytvorením premostenia Dolnozemskej cesty, ktoré by
    formou chodníka v korunách stromov zároveň prepájalo Chorvátske rameno v oblasti
    Draždiaku so Starohájskym ramenom</li>
    <li>Vytvoriť viac miest umožňujúcich pobyt pri vode, vstup do vody a kúpanie priamo na
    brehu Dunaja</li>
    <li>Zachovať a rešpektovať existujúce chránené prírodné územia a zveľaďovať ich</li>
    <li>Zachovať s obnoviť laterálnu a pozdĺžnu konektivitu Dunaja a jeho bočných ramien</li>
    <li>Obnoviť prírodný charakter brehov predovšetkým v chránených územiach a tam, kde to
    umožňujú hydraulické a hydromorfologické podmienky</li>
    <li>Na úsekoch kde hydraulické a hydromorfologické podmienky vyžadujú opevnenie brehu,
    vytvoriť na vhodných miestach prírode blízku alternatívu opevnenia, lokálne prijemne
    prístupy až k vode, vyhliadkové a odpočinkové miesta pre ľudí</li>
    <li>Obnoviť Ovsištske rameno a jeho spojenie s Dunajom na jeho vtokovej a výtokovej časti</li>
    <li>Prečistiť Starohájske rameno a prepojiť ho s Dunajom v mieste jeho historickej vtokovej
    časti</li>
    <li>Prepojiť Starohájske rameno s Jarovským ramenom (pri obnove ramien budú používané
    prírodné, prírode blízke a estetičke úpravy a vhodne zakrivene trasy v maximálnej miere
    vychádzajúce z historickej polohy ramien v minulosti)</li>
    <li>Revitalizačne úpravy a opatrenia navrhnúť a realizovať tak, aby boli udržateľne a čo
    najstabilnejšie</li>
    <li>Vytvoriť miesto na vodácke táborisko</li>
    <li>V chránených územiach Pečniansky les, Soví les a Starý haj revitalizovať brehy a bočne
    ramena v maximálnej miere ktorá neohrozí protipovodňovú ochranu a plavbu</li>
    <li>V chránených územiach Pečniansky les, Soví les a Starý haj, ktoré sú v intraviláne mesta,
    umožniť pohyb osôb po vyznačených chodníkoch a vodáckych trasách</li>
    <li>V chránenom území Dunajské ostrovy umožniť pohyb ľudí iba chodníkmi po jeho obvode</li>
    <li>Nájsť vhodnú polohu pre budovu správy parku a návštevníckeho centra BDP ako priestoru
    pre osvetove a rôzne voľno časove aktivity spojene s BDP.</li>
    </ul>
    <p>
    Predmetne územie prechádza od Rakúskych hraníc cez centrum mesta až k maďarským
    hraniciam, kopíruje koryto Dunaja a zahŕňa najmä záplavové územia, ktoré je ťažké využiť
    ekonomicky a preto ostali dodnes neurbanizovane. Nachádzajú sa v ňom vzácne zbytky
    ramenného systému, prírodné rezervácie Starý haj, Dunajské ostrovy a Ostrovne lúčky, ako
    aj chránené areály Pečniansky les, Soví les, Chorvátske rameno a Hrabiny, prírodné lužne
    lesy, ako aj množstvo ďalších prírodných útvarov, ale aj produkčne plantáže nepôvodných
    topoľov kanadských a iné hospodársky využívané plochy.
    <p></p>
    V centre mesta sa zamýšľaný Bratislavsky dunajsky park dotýka Sadu Janka Kráľa,
    najstaršieho verejného parku v strednej Európe, nižšie po prúde plynulo prechádza
    do lesoparku v Rusovciach a ďalej do parku okolo neogotického kaštieľa. Pri rakúskych
    hraniciach a tiež na riečnom kilometri 1862 sa nachádzajú zachovalé objekty opevnenia
    bratislavského predmostia z roku 1938.
    <p></p>
    Budovy v tomto území nie sú prípustné, s výstavbou neráta ani územný plán. Pozemky na
    miestach revitalizačných uprav sú vo vlastníctve viacerých organizácií .
    Hlavným cieľom zriadenia a vybudovania Bratislavského dunajského parku je vytvoriť
    prijemné estetické a prírodné prostredie. Miera upravenosti a organizovanosti bude rôzna, tak
    ako je to aj v súčasnosti. Park bude integrovať miesta rôzneho charakteru. Od upraveného
    nábrežného parku, vhodne upravené, ale aj prírodné brehy, po pravú dunajskú džungľu v
    chránenom území Soví les, či pri Starohájskom ramene. Popri tom aj intenzívne ľudské
    aktivity, napríklad veslársku lodenicu a reštaurácie Aušpic, Aucafe, divadlo Aréna, alebo
    územie Zemníka, kde v susedstve dunajskej džungle rastie športový areál kanoistiky a
    veslovania v symbióze s aktivitami rybárskeho zväzu.
    <p></p>
    Na niektorých miestach bude vývoj ponechaný na prírodu, ale veľká časť územia je v meste a
    ta bude prevádzkovaná v súlade s rôznymi funkciami a existujúcimi ľudskými aktivitami.
    Ambíciou je územie otvoriť, kultivovať (najmä v priamom kontakte so zastavaným obytným
    územím Petržalky), ale aj chrániť. Spôsob ochrany bude potrebne zvážiť a dať mu vhodný
    rámec, dohodnúť spôsob prevádzkovania územia s dôležitými aktérmi, napríklad vhodne
    spôsoby manažmentu toku, ochrany vodných zdrojov a lesa. Zámer je plne kompatibilný
    s ideou Národného parku Podunajsko. Bratislavsky dunajsky park môže byť v budúcnosti do
    Národného parku plne začlenený, ale môže fungovať aj bez neho.
    <p></p>
    Významnou súčasťou Bratislavského dunajského parku budú aj ramena Dunaja. Idea
    Bratislavského dunajského parku ma podporu aj v oficiálnych strategických dokumentoch a
    legislatíve. Na prvom mieste je to Rámcová smernica o vodách Európskej Únie, ďalej
    európska Smernica o biotopoch (Natura 2000), Spoločne vyhlásenie o hlavných zásadách
    rozvoja vnútrozemskej lodnej dopravy a ochrane životného prostredia v povodí rieky Dunaj,
    výstupy pracovnej skupiny RiverLab Dunajského fondu, atď. Príslušné revitalizačne úpravy
    brehov a ramien Dunaja na tomto území by sa tiež mali dostať do aktualizácie Vodného plánu
    Slovenska pre čiastkové povodie Dunaja.
    </p>`;
  }
}

module.exports = Template;

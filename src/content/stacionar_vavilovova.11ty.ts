import { FrontMatter, Post } from "../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Post {
  data(): FrontMatter {
    return {
      "title": "Vybudovanie denného stacionáru pre seniorov na Vavilovovej ul",
      "date": "2020-06-06",
      "tags": [
         "projekt"
      ],
      "layout": "layouts/post2.njk",
      "description": "Cieľom projektu „Vybudovanie denného stacionáru pre seniorov na Vavilovovej ul., Bratislava“ je vybudovanie denného stacionára pre seniorov na Vavilovovej ulici č. 18 v Mestskej časti Bratislava-Petržalka",
      "source": "https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf",
      "sources": [
         "https://www.petrzalka.sk/wp-content/uploads/2018/09/Priloha-4_Sprievodna-sprava-k-navrhu-dispozicneho-riesenia.pdf",
         "https://www.petrzalka.sk/2018-09-07-vyzva-na-predlozenie-ponuk-vybudovanie-denneho-stacionaru-pre-seniorov-na-vavilovovej-ulici-bratislava/",
         "https://www.petrzalka.sk/wp-content/uploads/2018/10/Zmluva_335_2018.pdf"
      ],
      "amount": 34651,
      "amountAll": 1030152,
      "schedule": [
         {
            "title": "Projektová dokumentácia",
            "status": "success",
            "description": "hotovo",
            "sub": [
               {
                  "title": "Výzva na projektovú dokumentáciu",
                  "status": "success",
                  source: 'https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf',
                  "description": "",
                  timeline: luxon.DateTime.fromISO("2018-09-07")
               },{
                  "title": "Materiál na rokovanie MZ",
                  "status": "success",
                  "description": "schvaľuje",
                  source: 'https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf',
                  timeline: luxon.DateTime.fromISO("2018-09-25")
               },{
                  "title": "Podpis zmluvy na projektovú dokumentáciu",
                  "status": "success",
                  "description": "",
                  source: 'https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf',
                  timeline: luxon.DateTime.fromISO("2018-09-26")
               }
            ]
         },
         {
            "title": "Verejné obstarávanie",
            "status": "success",
            "description": "hotovo",
            "sub": [
               {
                  "title": "Ukončenie verejného obstarávania",
                  "status": "success",
                  "description": "",
                  source: 'https://www.petrzalka.sk/2018-09-07-vyzva-na-predlozenie-ponuk-vybudovanie-denneho-stacionaru-pre-seniorov-na-vavilovovej-ulici-bratislava/',
                  timeline: luxon.DateTime.fromISO("2018-10-01")
               },{
                "title": "Odovzdanie projektovej dokumentácie",
                "status": "success",
                "description": "",
                source: 'https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf',
                timeline: luxon.DateTime.fromISO("2018-12-20")
             }
            ]
         },
         {
            "title": "Výstavba",
            "status": "inwork",
            "description": "prebieha",
            "sub": [
               {
                  "title": "Koniec výstavby",
                  "status": "inwork",
                  "description": "",
                  source: 'https://www.petrzalka.sk/wp-content/uploads/2018/10/Zmluva_335_2018.pdf',
                  timeline: luxon.DateTime.fromISO("2021-03-01")
               }
            ]
         }
      ]
   };
  }

  render(data: FrontMatter) {
    return `
    <p>
    Cieľom projektu „Vybudovanie denného stacionáru pre seniorov na Vavilovovej ul.,
    Bratislava“ je vybudovanie denného stacionára pre seniorov na Vavilovovej ulici č. 18
    v Mestskej časti Bratislava-Petržalka. Priestory pre denný stacionár získa mestská časť
    Bratislava-Petržalka prístavbou a nadstavbou v rámci existujúcej budovy bývalej materskej
    školy. V rámci daného objektu ide o časť pavilónu „D“, v tesnej blízkosti existujúceho
    Zariadenia opatrovateľskej služby na Vavilovovej ulici. Kapacita novovybudovaného
    denného stacionára je 24 klientov denne, s čím súvisí aj a zabezpečenie potrebného počtu
    zamestnancov v rámci personálu. 
    </p>
    <p>
    Novozriadený denný stacionár bude včlenený do bežnej zástavby mestskej časti
    Bratislava-Petržalka a bude primerane vzdialený od už existujúceho Zariadenia
    opatrovateľskej služby. Predmetné Zariadenia opatrovateľskej služby prevádzkuje Stredisko
    sociálnych služieb Petržalka, ktoré je v zriaďovateľskej pôsobnosti mestskej časti BratislavaPetržalka). Stredisko sociálnych služieb bude tiež prevádzkovateľom novozriadeného
    denného stacionára. 
    </p>
    <p>
    Ambulantné sociálne služby poskytované v dennom stacionári budú zabezpečované
    oddelene (personálne aj priestorovo) od sociálnych služieb spojených s bývaním. Ambulantné
    služby budú síce poskytované v jednom objekte, ale obe zariadenia - a to tak existujúce
    Zariadenie opatrovateľskej služby ako aj novozriadený denný stacionár - budú mať 
    k dispozícii samostatné vchody, čím bude zabezpečené zreteľné oddelenie pobytovej sociálnej
    služby a ambulantnej sociálnej služby. Odborný personál pre pobytovú a ambulantnú sociálnu
    službu bude v rámci oboch zariadení tiež zabezpečený oddelene.
    </p>
    <p>
    Cieľom denného stacionára je zabezpečovanie odborných služieb, ktoré zodpovedajú
    potrebám seniorov so zohľadnením ich potrieb, prirodzených vzťahov, ktoré slúžia
    k zvyšovaniu kvality života seniorov z dôvodu ich veku a odkázanosti. Rekonštrukciou,
    rozšírením a modernizáciou stavebného objektu pre vytvorenie priestorových podmienok na
    poskytovanie a zabezpečenie komunitnej starostlivosti v súlade s princípmi
    deinštitucionalizácie bude zriadený denný stacionár, ktorý umožní:
    </p>
    <ul>
    <li>ľahší prístup k efektívnejším verejným a sociálnym službám;</li>
    <li>rozvoj služieb na komunitnej úrovni pre 24 klientov odkázaných na sociálnu službu;</li>
    <li>rodinným príslušníkom klientov denného stacionára zotrvať v pracovnom procese, čím nebude ohrozený ich sociálny štandard.</li>
    </ul>
    <h2>Dispozičné a stavebné riešenie</h2>
    
    <h4>Nadzemné podlažie</h4>
    <ul>
    <li>V 1. nadzemnom podlaží bude situovaný hlavný vstup do objektu, ktorý bude krytý markízou. Napravo bude nové schodisko a výťah, čím bude zabezpečená bezbariérovosť v rámci oboch podlaží objektu sociálneho zariadenia. Naľavo bude izolačná miestnosť s kúpeľňou a WC. V strednej časti objektu bude situované sociálne jadro, kde je umiestnené WC pre mužov a ženy;</li>
    <li>V ľavej, juhozápadnej časti objektu bude denná miestnosť pre seniorov na vykonávanie denných aktivít. Cez krátku chodbu bude prepojenie do odpočinkovej miestnosti, ktorá bude mať okná orientované na sever. Podľa najnovšej legislatívy bude potrebné tento priestor vybaviť polohovateľným kreslom alebo lôžkom pre každého klienta;</li>
    <li>V severovýchodnej časti bude stravovacie zázemie. Predpokladáme dovoz stravy, čiže uvažuje sa len s výdajom. Priestor bude rozdelený na vlastný výdaj, prípravu stravy a umývanie riadu. Jedáleň bude obsluhovať 24 klientov;</li>
    <li>Ďalej sa v tomto podlaží bude nachádzať kúpeľňa s WC s vybavením pre imobilných klientov – vozíčkarov. Kancelária pre personál bude situovaná v severnej časti objektu. Pod ramenom schodiska bude priestor pre upratovačku s priestorom pre odkladanie čistiacich prostriedkov. 1. nadzemné podlažie bude mať maximálnu kapacitu 16 klientov.</li>
    </ul>
    <h4>Nadzemné podlažie</h4>
    <ul>
    <li>V 2. nadzemnom podlaží budú situované priestory pre seniorov v podobe dennej miestnosti pre vykonávanie denných aktivít. Cez krátku chodbu bude prepojenie do odpočinkovej miestnosti, ktorá bude mať okná orientované na sever. Ďalej budú v rámci 2. Nadzemného podlažia nutné prevádzkové priestory. Prístupné bude schodiskom a výťahom z 1. nadzemného podlažia;</li>
    <li>Hygienické zariadenia budú situované v centrálnej časti tak, aby boli sústredené pri stúpačkách z 1. NP. Miestnosť pre dekontamináciu zdravotných pomôcok bude vybavená výlevkou a umývadlom a priestorom pre odkladanie dezinfekčných prostriedkov. V zadnom trakte bude miestnosť pre pranie bielizne a priestor na sušenie, žehlenie a skladovanie čistej bielizne. 2. Nadzemné podlažie bude mať kapacitu 8 klientov.</li>
    </ul>
    `;
  }
}

module.exports = Template;

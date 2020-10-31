"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
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
                        }, {
                            "title": "Materiál na rokovanie MZ",
                            "status": "success",
                            "description": "schvaľuje",
                            source: 'https://www.petrzalka.sk/wp-content/uploads/2018/09/03_Projekt_Denny_stacionar_pre_seniorov-1.pdf',
                            timeline: luxon.DateTime.fromISO("2018-09-25")
                        }, {
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
                        }, {
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
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Cie\u013Eom projektu \u201EVybudovanie denn\u00E9ho stacion\u00E1ru pre seniorov na Vavilovovej ul.,\n    Bratislava\u201C je vybudovanie denn\u00E9ho stacion\u00E1ra pre seniorov na Vavilovovej ulici \u010D. 18\n    v Mestskej \u010Dasti Bratislava-Petr\u017Ealka. Priestory pre denn\u00FD stacion\u00E1r z\u00EDska mestsk\u00E1 \u010Das\u0165\n    Bratislava-Petr\u017Ealka pr\u00EDstavbou a nadstavbou v r\u00E1mci existuj\u00FAcej budovy b\u00FDvalej materskej\n    \u0161koly. V r\u00E1mci dan\u00E9ho objektu ide o \u010Das\u0165 pavil\u00F3nu \u201ED\u201C, v tesnej bl\u00EDzkosti existuj\u00FAceho\n    Zariadenia opatrovate\u013Eskej slu\u017Eby na Vavilovovej ulici. Kapacita novovybudovan\u00E9ho\n    denn\u00E9ho stacion\u00E1ra je 24 klientov denne, s \u010D\u00EDm s\u00FAvis\u00ED aj a zabezpe\u010Denie potrebn\u00E9ho po\u010Dtu\n    zamestnancov v r\u00E1mci person\u00E1lu. \n    </p>\n    <p>\n    Novozriaden\u00FD denn\u00FD stacion\u00E1r bude v\u010Dlenen\u00FD do be\u017Enej z\u00E1stavby mestskej \u010Dasti\n    Bratislava-Petr\u017Ealka a bude primerane vzdialen\u00FD od u\u017E existuj\u00FAceho Zariadenia\n    opatrovate\u013Eskej slu\u017Eby. Predmetn\u00E9 Zariadenia opatrovate\u013Eskej slu\u017Eby prev\u00E1dzkuje Stredisko\n    soci\u00E1lnych slu\u017Eieb Petr\u017Ealka, ktor\u00E9 je v zria\u010Fovate\u013Eskej p\u00F4sobnosti mestskej \u010Dasti BratislavaPetr\u017Ealka). Stredisko soci\u00E1lnych slu\u017Eieb bude tie\u017E prev\u00E1dzkovate\u013Eom novozriaden\u00E9ho\n    denn\u00E9ho stacion\u00E1ra. \n    </p>\n    <p>\n    Ambulantn\u00E9 soci\u00E1lne slu\u017Eby poskytovan\u00E9 v dennom stacion\u00E1ri bud\u00FA zabezpe\u010Dovan\u00E9\n    oddelene (person\u00E1lne aj priestorovo) od soci\u00E1lnych slu\u017Eieb spojen\u00FDch s b\u00FDvan\u00EDm. Ambulantn\u00E9\n    slu\u017Eby bud\u00FA s\u00EDce poskytovan\u00E9 v jednom objekte, ale obe zariadenia - a to tak existuj\u00FAce\n    Zariadenie opatrovate\u013Eskej slu\u017Eby ako aj novozriaden\u00FD denn\u00FD stacion\u00E1r - bud\u00FA ma\u0165 \n    k dispoz\u00EDcii samostatn\u00E9 vchody, \u010D\u00EDm bude zabezpe\u010Den\u00E9 zrete\u013En\u00E9 oddelenie pobytovej soci\u00E1lnej\n    slu\u017Eby a ambulantnej soci\u00E1lnej slu\u017Eby. Odborn\u00FD person\u00E1l pre pobytov\u00FA a ambulantn\u00FA soci\u00E1lnu\n    slu\u017Ebu bude v r\u00E1mci oboch zariaden\u00ED tie\u017E zabezpe\u010Den\u00FD oddelene.\n    </p>\n    <p>\n    Cie\u013Eom denn\u00E9ho stacion\u00E1ra je zabezpe\u010Dovanie odborn\u00FDch slu\u017Eieb, ktor\u00E9 zodpovedaj\u00FA\n    potreb\u00E1m seniorov so zoh\u013Eadnen\u00EDm ich potrieb, prirodzen\u00FDch vz\u0165ahov, ktor\u00E9 sl\u00FA\u017Eia\n    k zvy\u0161ovaniu kvality \u017Eivota seniorov z d\u00F4vodu ich veku a odk\u00E1zanosti. Rekon\u0161trukciou,\n    roz\u0161\u00EDren\u00EDm a moderniz\u00E1ciou stavebn\u00E9ho objektu pre vytvorenie priestorov\u00FDch podmienok na\n    poskytovanie a zabezpe\u010Denie komunitnej starostlivosti v s\u00FAlade s princ\u00EDpmi\n    dein\u0161titucionaliz\u00E1cie bude zriaden\u00FD denn\u00FD stacion\u00E1r, ktor\u00FD umo\u017En\u00ED:\n    </p>\n    <ul>\n    <li>\u013Eah\u0161\u00ED pr\u00EDstup k efekt\u00EDvnej\u0161\u00EDm verejn\u00FDm a soci\u00E1lnym slu\u017Eb\u00E1m;</li>\n    <li>rozvoj slu\u017Eieb na komunitnej \u00FArovni pre 24 klientov odk\u00E1zan\u00FDch na soci\u00E1lnu slu\u017Ebu;</li>\n    <li>rodinn\u00FDm pr\u00EDslu\u0161n\u00EDkom klientov denn\u00E9ho stacion\u00E1ra zotrva\u0165 v pracovnom procese, \u010D\u00EDm nebude ohrozen\u00FD ich soci\u00E1lny \u0161tandard.</li>\n    </ul>\n    <h2>Dispozi\u010Dn\u00E9 a stavebn\u00E9 rie\u0161enie</h2>\n    \n    <h4>Nadzemn\u00E9 podla\u017Eie</h4>\n    <ul>\n    <li>V 1. nadzemnom podla\u017E\u00ED bude situovan\u00FD hlavn\u00FD vstup do objektu, ktor\u00FD bude kryt\u00FD mark\u00EDzou. Napravo bude nov\u00E9 schodisko a v\u00FD\u0165ah, \u010D\u00EDm bude zabezpe\u010Den\u00E1 bezbari\u00E9rovos\u0165 v r\u00E1mci oboch podla\u017E\u00ED objektu soci\u00E1lneho zariadenia. Na\u013Eavo bude izola\u010Dn\u00E1 miestnos\u0165 s k\u00FApe\u013E\u0148ou a WC. V strednej \u010Dasti objektu bude situovan\u00E9 soci\u00E1lne jadro, kde je umiestnen\u00E9 WC pre mu\u017Eov a \u017Eeny;</li>\n    <li>V \u013Eavej, juhoz\u00E1padnej \u010Dasti objektu bude denn\u00E1 miestnos\u0165 pre seniorov na vykon\u00E1vanie denn\u00FDch aktiv\u00EDt. Cez kr\u00E1tku chodbu bude prepojenie do odpo\u010Dinkovej miestnosti, ktor\u00E1 bude ma\u0165 okn\u00E1 orientovan\u00E9 na sever. Pod\u013Ea najnov\u0161ej legislat\u00EDvy bude potrebn\u00E9 tento priestor vybavi\u0165 polohovate\u013En\u00FDm kreslom alebo l\u00F4\u017Ekom pre ka\u017Ed\u00E9ho klienta;</li>\n    <li>V severov\u00FDchodnej \u010Dasti bude stravovacie z\u00E1zemie. Predpoklad\u00E1me dovoz stravy, \u010Di\u017Ee uva\u017Euje sa len s v\u00FDdajom. Priestor bude rozdelen\u00FD na vlastn\u00FD v\u00FDdaj, pr\u00EDpravu stravy a um\u00FDvanie riadu. Jed\u00E1le\u0148 bude obsluhova\u0165 24 klientov;</li>\n    <li>\u010Ealej sa v tomto podla\u017E\u00ED bude nach\u00E1dza\u0165 k\u00FApe\u013E\u0148a s WC s vybaven\u00EDm pre imobiln\u00FDch klientov \u2013 voz\u00ED\u010Dkarov. Kancel\u00E1ria pre person\u00E1l bude situovan\u00E1 v severnej \u010Dasti objektu. Pod ramenom schodiska bude priestor pre upratova\u010Dku s priestorom pre odkladanie \u010Distiacich prostriedkov. 1. nadzemn\u00E9 podla\u017Eie bude ma\u0165 maxim\u00E1lnu kapacitu 16 klientov.</li>\n    </ul>\n    <h4>Nadzemn\u00E9 podla\u017Eie</h4>\n    <ul>\n    <li>V 2. nadzemnom podla\u017E\u00ED bud\u00FA situovan\u00E9 priestory pre seniorov v podobe dennej miestnosti pre vykon\u00E1vanie denn\u00FDch aktiv\u00EDt. Cez kr\u00E1tku chodbu bude prepojenie do odpo\u010Dinkovej miestnosti, ktor\u00E1 bude ma\u0165 okn\u00E1 orientovan\u00E9 na sever. \u010Ealej bud\u00FA v r\u00E1mci 2. Nadzemn\u00E9ho podla\u017Eia nutn\u00E9 prev\u00E1dzkov\u00E9 priestory. Pr\u00EDstupn\u00E9 bude schodiskom a v\u00FD\u0165ahom z 1. nadzemn\u00E9ho podla\u017Eia;</li>\n    <li>Hygienick\u00E9 zariadenia bud\u00FA situovan\u00E9 v centr\u00E1lnej \u010Dasti tak, aby boli s\u00FAstreden\u00E9 pri st\u00FApa\u010Dk\u00E1ch z 1. NP. Miestnos\u0165 pre dekontamin\u00E1ciu zdravotn\u00FDch pom\u00F4cok bude vybaven\u00E1 v\u00FDlevkou a um\u00FDvadlom a priestorom pre odkladanie dezinfek\u010Dn\u00FDch prostriedkov. V zadnom trakte bude miestnos\u0165 pre pranie bielizne a priestor na su\u0161enie, \u017Eehlenie a skladovanie \u010Distej bielizne. 2. Nadzemn\u00E9 podla\u017Eie bude ma\u0165 kapacitu 8 klientov.</li>\n    </ul>\n    ";
    };
    return Template;
}());
module.exports = Template;

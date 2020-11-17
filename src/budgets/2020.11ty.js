"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.render = function (data) {
        return '';
    };
    Template.prototype.data = function () {
        return {
            year: 2020,
            layout: "layouts/rozpocet.njk",
            tags: ["budget2"],
            programs: [
                {
                    program: 1,
                    items: [
                        {
                            amount: 0,
                            title: 'Moderná prezentácia pamiatok a pamätihodností MČ',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "niCE life projekt. Náhradné čerpanie za neschválený pôvodný projekt. Pre potreby niCE life projektu sú potrebné iba bežné výdavky. Kapitálové výdavky v roku 2020 nebudú čerpané",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 2,
                    items: [
                        {
                            amount: 3000,
                            title: 'Nákup licencie software na verejné obstarávanie',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 1500,
                                    realAmount: 0,
                                    comment: "Príprava podkladov na verejné obstarávanie",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 30000,
                            title: 'Virtualizácie serverov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 30000,
                                    realAmount: 0,
                                    comment: "priebežne sa plní",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 35000,
                            title: 'Komunikačná infraštruktúra',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 30000,
                                    realAmount: 16253.42,
                                    comment: "priebežne sa plní",
                                    status: 'inwork'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 3,
                    items: []
                }, {
                    program: 4,
                    items: [
                        {
                            amount: 100000,
                            title: 'Rekonštrukcia chodníkov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 95000,
                                    realAmount: 36836,
                                    comment: "",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 80000,
                            title: 'Rekonstrukcia a modernizácia',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 145000,
                            title: 'Vybudovanie cyklotrasy, prípadne nových chodníkov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 15852,
                                    realAmount: 5352,
                                    comment: "platba za PD, aktualne prebiehaju zistovania vlastnickych vztahov na pozemkoch cyklotras",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 370000,
                            title: 'Prípravná projektová dokumentácia na budovanie nových chodníkov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Nerealizuje sa, bolo by vhodné od MZ presunúť na opravu jestvujúcich chodnikov",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 23000,
                            title: 'Projektová dokumentácia na nové parkoviská',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 14437.8,
                                    realAmount: 14437.8,
                                    comment: "zrealizované",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 5,
                    items: [
                        {
                            amount: 911536,
                            title: 'Rekonštrukcia školkských zariadení',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 867554.53,
                                    realAmount: 454520.07,
                                    comment: "realizuje sa",
                                    status: 'inwork',
                                    items: [
                                        {
                                            title: 'PD rekonštrukcia priestorov kuchyne - realizačná dokumentácia',
                                            status: 'success',
                                            description: 'zrealizované'
                                        }, {
                                            title: 'PD rekonštrukcia odpadov zo ŠJ vrátane lapača tukov',
                                            status: 'success',
                                            description: 'zrealizované'
                                        }, , {
                                            title: 'PD rekonštrukcia šatní pri telocvični a bazéne ',
                                            status: 'success',
                                            description: 'zrealizované'
                                        }, , {
                                            title: 'Rekonštrukcia hygienických zariadení v pavilóne B3',
                                            status: 'inwork',
                                            description: 'Realizuje sa termín ukončenia 30.9.2020'
                                        }, , {
                                            title: 'Rekonštrukcia šatní pri telocvični a bazéne ',
                                            status: 'inwork',
                                            description: 'Realizuje sa termín ukončenia 30.9.2020'
                                        }, , {
                                            title: 'Rekonštrukcia priestorov kuchyne a toaliet ŠKD na 2.NP pavilónu A1 vrátane gastrozariadení',
                                            status: 'inwork',
                                            description: 'Termín ukončenia prác koniec 10/2020'
                                        }, , {
                                            title: 'Rekonštrukcia okien na 3. a 4. poschodí v pavilóne prístavby',
                                            status: 'success',
                                            description: 'zrealizované'
                                        }, , {
                                            title: 'Rekonštrukcia vonkajšej terasy vstupov do 2. NP',
                                            status: 'inwork',
                                            description: 'realizuje sa, predpokadaný termín ukončenia prác 18.9.2020'
                                        }, , {
                                            title: 'Prestavba školníckeho bytu na triedu MŠ a úniková cesta z 2.NP',
                                            status: 'inwork',
                                            description: 'Príprava súťaže'
                                        }, , {
                                            title: 'Prestavba školníckeho bytu na triedu MŠ a zvýšenie kapacity kuchyne  vrátane gastrozariadenia',
                                            status: 'inwork',
                                            description: 'Príprava súťaže'
                                        }, , {
                                            title: 'Prestavba hospodárskeho pavilónu',
                                            status: 'inwork',
                                            description: 'realizuje sa, spracováva sa zmena využitia stavby'
                                        }, , {
                                            title: 'Prestavba hospodárskeho pavilónu',
                                            status: 'inwork',
                                            description: 'zrealizované, prebieha zmena účelu využívania'
                                        }, , {
                                            title: 'Úprava oplotenia areálu MŠ',
                                            status: 'error',
                                            description: 'nerealizuje sa'
                                        }, , {
                                            title: 'Rekonštrukcia hydroizolácie strechy',
                                            status: 'inwork',
                                            description: 'Žačali sa prvé rokovania s projektantom čakáme na CP za projekt'
                                        }, , {
                                            title: 'Rekonštrukcia a vybavenie odborných učební',
                                            status: 'inwork',
                                            description: 'NFP schválený, dodavatel vysutazeny (s realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020 )'
                                        }, , {
                                            title: 'Rekonštrukcia a modernizácia kuchýň a zariadení',
                                            status: 'success',
                                            description: 'zrealizované'
                                        }, , {
                                            title: 'Vyplatenie zádržného dodávateľom prác na školských objektoch',
                                            status: 'inwork',
                                            description: 'priebežne sa plní'
                                        }, , {
                                            title: 'Rekonštrukcia hygienických zariadení v pavilóne B3',
                                            status: 'inwork',
                                            description: 'prebiehajú práce, predpokladaný termín odovzdania 18.9.2020'
                                        },
                                    ]
                                }
                            ]
                        }, {
                            amount: 777246,
                            title: 'Dotácia na obnovu odborných učební ZŠ',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 18740,
                            title: 'Rekonštrukcia časti objektu za účelom zvýšenia kapacity',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 94734,
                            title: 'Rekonštrukcia a vybavenie odborných učební',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                                    status: 'error'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 6,
                    items: [
                        {
                            amount: 0,
                            title: 'Vybudovanie klimatizácie v DK Zrkadlový háj ',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Spracováva sa projektová dokumentácia v réžii KZP",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 0,
                            title: 'Rekonštrukcia jestvujúceho multifunkčného ihriska',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Zrealizované cez bežné výdavky",
                                    status: 'success'
                                }
                            ]
                        }, {
                            amount: 67123,
                            title: 'Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 30000,
                                    realAmount: 0,
                                    comment: "Realiyovať sa bude projektová dokumentácia na multifunkčné ihrisko a dráhu. Prebieha príprava súťaže.",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 0,
                            title: 'Výmena mantinelov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 18534,
                                    realAmount: 18534,
                                    comment: "Realizácia v polovici 10/2020",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 7,
                    items: [
                        {
                            amount: 219348,
                            title: 'Nakup vozidiel a plošiny',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 179348,
                                    realAmount: 113075.99,
                                    comment: "",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 18252,
                            title: 'Prevádzkové stroje',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 18252,
                                    realAmount: 18252,
                                    comment: "",
                                    status: 'success'
                                }
                            ]
                        }, {
                            amount: 0,
                            title: 'Vybudovanie jedného nového výbehu pre psov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Prebieha identifikácia vhodných pozemkov. V roku 2020 sa nebude realizovať",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 10000,
                            title: 'Príspevky na stavebné úpravy a vybudovanie nových kontajnerových stanovíšť',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 10000,
                                    realAmount: 0,
                                    comment: "Priebežne sa plní",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 63200,
                            title: 'Revitalizácia verejných detských ihrísk',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 53322,
                                    realAmount: 38322,
                                    comment: "Prebieha inventarizácia stavu detských ihrísk",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 91614,
                            title: 'Nákup nákladných automobilov a prevádzkových strojov a prístrojov',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 89384.33,
                                    realAmount: 89384.33,
                                    comment: "",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 8,
                    items: [
                        {
                            amount: 34757,
                            title: 'Dofinancovanie ÚP zóny Kapitulský dvor',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 34757,
                                    realAmount: 34757,
                                    comment: "V procese spracovania návrhu ÚP",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 9,
                    items: [
                        {
                            amount: 34651,
                            title: 'Vybudovanie denného stacionáru',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Nenávratný finančný prispevok bol zamietnutý. Aktuálne prebieha odvolacie konanie",
                                    status: 'error'
                                }
                            ]
                        }, {
                            amount: 34730,
                            title: 'Participatívny výskum na Nám. Republiky a Šrobárovom námestí',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 23570,
                                    realAmount: 8200,
                                    comment: "",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 0,
                            title: 'Riešenie sociálneho zar. pre seniorov, príp. na zvýšenie kapacity MŠ',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Prebratie objektu Hrobákova, na obhliadke objektu Hrobáková sa určila cena rekonštrukcie ref, investičných činností na sumu 450 000 - 520 000 €",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 15100,
                            title: 'Nákup budov, objektov a ich časti',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 15100,
                                    realAmount: 15100,
                                    comment: "Zrealizované",
                                    status: 'success'
                                }
                            ]
                        }, {
                            amount: 29000,
                            title: 'Vyhotovenie projektových dokumentácií k novým projektom podľa vyhlásených výziev',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 2065,
                                    realAmount: 0,
                                    comment: "Neočakáva sa ďalšie čerpanie",
                                    status: 'success'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 10,
                    items: [
                        {
                            amount: 0,
                            title: 'Zabezpečenie klimatizácie do ZSS na Vavilovovej ulici',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "Z dôvodu pandémie nebolo možné realizovať. 26/07/2020 požiadalo ZSS o dotáciu pre zabezpečenie klimatizázie vo vlastnej réžii",
                                    status: 'error'
                                }
                            ]
                        }
                    ]
                }, {
                    program: 11,
                    items: [
                        {
                            amount: 20000,
                            title: 'Obstaranie špeciálneho vozidla pre DVPZ Petržalka',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 20000,
                                    realAmount: 0,
                                    comment: "V príprave",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 100000,
                            title: 'Nákup telekomunikačnej techniky - kamery',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 100000,
                                    realAmount: 0,
                                    comment: "",
                                    status: 'inwork'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

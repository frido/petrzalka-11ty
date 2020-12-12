"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.render = function (data) {
        return "";
    };
    Template.prototype.data = function () {
        return {
            year: 2020,
            layout: "layouts/rozpocet.njk",
            tags: ["budget2"],
            updatedDate: luxon.DateTime.fromISO("2020-10-01"),
            items: [
                {
                    title: "Moderná prezentácia pamiatok a pamätihodností MČ",
                    id: "2020-1",
                    program: 1,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "niCE life projekt. Náhradné čerpanie za neschválený pôvodný projekt. Pre potreby niCE life projektu sú potrebné iba bežné výdavky. Kapitálové výdavky v roku 2020 nebudú čerpané",
                    status: "error"
                },
                {
                    title: "Nákup licencie software na verejné obstarávanie",
                    id: "2020-2",
                    program: 2,
                    amountOriginal: 3000,
                    amountUpdated: 1500,
                    amountReal: 0,
                    comment: "Príprava podkladov na verejné obstarávanie",
                    status: "inwork"
                },
                {
                    title: "Virtualizácie serverov",
                    id: "2020-3",
                    program: 2,
                    amountOriginal: 30000,
                    amountUpdated: 30000,
                    amountReal: 0,
                    comment: "priebežne sa plní",
                    status: "inwork"
                },
                {
                    title: "Komunikačná infraštruktúra",
                    id: "2020-4",
                    program: 2,
                    amountOriginal: 35000,
                    amountUpdated: 30000,
                    amountReal: 16253.42,
                    comment: "priebežne sa plní",
                    status: "inwork"
                },
                {
                    title: "Rekonštrukcia chodníkov",
                    id: "2020-5",
                    program: 4,
                    amountOriginal: 100000,
                    amountUpdated: 95000,
                    amountReal: 36836,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Rekonstrukcia a modernizácia komunikácii",
                    id: "2020-6",
                    program: 4,
                    amountOriginal: 80000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Vybudovanie cyklotrasy, prípadne nových chodníkov",
                    id: "2020-7",
                    program: 4,
                    amountOriginal: 145000,
                    amountUpdated: 15852,
                    amountReal: 5352,
                    comment: "platba za PD, aktualne prebiehaju zistovania vlastnickych vztahov na pozemkoch cyklotras",
                    status: "inwork"
                },
                {
                    title: "Prípravná projektová dokumentácia a budovanie nových chodníkov",
                    id: "2020-8",
                    program: 4,
                    amountOriginal: 370000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Nerealizuje sa, bolo by vhodné od MZ presunúť na opravu jestvujúcich chodnikov",
                    status: "error"
                },
                {
                    title: "Projektová dokumentácia na nové parkoviská",
                    id: "2020-9",
                    program: 4,
                    amountOriginal: 23000,
                    amountUpdated: 14437.8,
                    amountReal: 14437.8,
                    comment: "zrealizované",
                    status: "success"
                },
                {
                    title: "Rekonštrukcia školkských zariadení",
                    id: "2020-10",
                    program: 5,
                    amountOriginal: 911536,
                    amountUpdated: 867554.53,
                    amountReal: 454520.07,
                    comment: "realizuje sa",
                    status: "inwork"
                },
                {
                    title: "Dotácia na obnovu odborných učební ZŠ",
                    id: "2020-11",
                    program: 5,
                    amountOriginal: 777246,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                    status: "postpone"
                },
                {
                    title: "Rekonštrukcia časti objektu za účelom zvýšenia kapacity",
                    id: "2020-12",
                    program: 5,
                    amountOriginal: 18740,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                    status: "postpone"
                },
                {
                    title: "Rekonštrukcia a vybavenie odborných učební",
                    id: "2020-13",
                    program: 5,
                    amountOriginal: 94734,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Nenávratný finančný príspevok bol schválený. Dodávateľ je vysúťažený. Zmluvy sú na kontrole na ministerstve. S realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020",
                    status: "postpone"
                },
                {
                    title: "Vybudovanie klimatizácie v DK Zrkadlový háj",
                    id: "2020-14",
                    program: 6,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Spracováva sa projektová dokumentácia v réžii KZP",
                    status: "error"
                },
                {
                    title: "Rekonštrukcia jestvujúceho multifunkčného ihriska",
                    id: "2020-15",
                    program: 6,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Zrealizované cez bežné výdavky",
                    status: "success"
                },
                {
                    title: "Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza",
                    id: "2020-16",
                    program: 6,
                    amountOriginal: 67123,
                    amountUpdated: 30000,
                    amountReal: 0,
                    comment: "Realizovať sa bude projektová dokumentácia na multifunkčné ihrisko a dráhu. Prebieha príprava súťaže.",
                    status: "inwork"
                },
                {
                    title: "Výmena mantinelov",
                    id: "2020-17",
                    program: 6,
                    amountOriginal: 0,
                    amountUpdated: 18534,
                    amountReal: 18534,
                    comment: "Realizácia v polovici 10/2020",
                    status: "success"
                },
                {
                    title: "Nákup vozidiel a plošiny (žacích strojov s príslušenstvom)",
                    id: "2020-18",
                    program: 7,
                    amountOriginal: 219348,
                    amountUpdated: 179348,
                    amountReal: 113075.99,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Vybudovanie jedného nového výbehu pre psov",
                    id: "2020-19",
                    program: 7,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Prebieha identifikácia vhodných pozemkov. V roku 2020 sa nebude realizovať",
                    status: "postpone"
                },
                {
                    title: "Príspevky na stavebné úpravy a vybudovanie nových kontajnerových stanovíšť",
                    id: "2020-20",
                    program: 7,
                    amountOriginal: 10000,
                    amountUpdated: 10000,
                    amountReal: 0,
                    comment: "Priebežne sa plní",
                    status: "inwork"
                },
                {
                    title: "Revitalizácia verejných detských ihrísk (príslušenstvo k strojom, prístrojom, zariadeniam a technikám)",
                    id: "2020-21",
                    program: 7,
                    amountOriginal: 63200,
                    amountUpdated: 53322,
                    amountReal: 38322,
                    comment: "Prebieha inventarizácia stavu detských ihrísk",
                    status: "inwork"
                },
                {
                    title: "Nákup nákladných automobilov a prevádzkových strojov a prístrojov (2 kusov nákladných automobilov značky Man, jadrovej vŕtačky a stolového sústruhu)",
                    id: "2020-22",
                    program: 7,
                    amountOriginal: 91614,
                    amountUpdated: 89384.33,
                    amountReal: 89384.33,
                    comment: "",
                    status: "success"
                },
                {
                    title: "Dofinancovanie ÚP zóny Kapitulský dvor",
                    id: "2020-23",
                    program: 8,
                    amountOriginal: 34757,
                    amountUpdated: 34757,
                    amountReal: 34757,
                    comment: "V procese spracovania návrhu ÚP",
                    status: "success"
                },
                {
                    title: "Vybudovanie denného stacionáru",
                    id: "2020-24",
                    program: 9,
                    amountOriginal: 34651,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Nenávratný finančný prispevok bol zamietnutý. Aktuálne prebieha odvolacie konanie",
                    status: "postpone"
                },
                {
                    title: "Participatívny výskum na Nám. Republiky a Šrobárovom námestí",
                    id: "2020-25",
                    program: 9,
                    amountOriginal: 34730,
                    amountUpdated: 23570,
                    amountReal: 8200,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Riešenie sociálneho zariadenia pre seniorov, prípadne na zvýšenie kapacity MŠ",
                    id: "2020-26",
                    program: 9,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Prebratie objektu Hrobákova, na obhliadke objektu Hrobáková sa určila cena rekonštrukcie ref, investičných činností na sumu 450 000 - 520 000 €",
                    status: "inwork"
                },
                {
                    title: "Nákup budov, objektov a ich časti",
                    id: "2020-27",
                    program: 9,
                    amountOriginal: 15100,
                    amountUpdated: 15100,
                    amountReal: 15100,
                    comment: "Zrealizované",
                    status: "success"
                },
                {
                    title: "Vyhotovenie projektových dokumentácií k novým projektom podľa vyhlásených výziev",
                    id: "2020-28",
                    program: 9,
                    amountOriginal: 29000,
                    amountUpdated: 2065,
                    amountReal: 0,
                    comment: "Neočakáva sa ďalšie čerpanie",
                    status: "success"
                },
                {
                    title: "Zabezpečenie klimatizácie do ZSS na Vavilovovej ulici",
                    id: "2020-29",
                    program: 10,
                    amountOriginal: 0,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "Z dôvodu pandémie nebolo možné realizovať. 26/07/2020 požiadalo ZSS o dotáciu pre zabezpečenie klimatizázie vo vlastnej réžii",
                    status: "error"
                },
                {
                    title: "Obstaranie špeciálneho vozidla pre DVPZ Petržalka",
                    id: "2020-30",
                    program: 11,
                    amountOriginal: 20000,
                    amountUpdated: 20000,
                    amountReal: 0,
                    comment: "V príprave",
                    status: "inwork"
                },
                {
                    title: "Nákup telekomunikačnej techniky - kamery",
                    id: "2020-31",
                    program: 11,
                    amountOriginal: 100000,
                    amountUpdated: 100000,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
            ]
        };
    };
    return Template;
}());
module.exports = Template;

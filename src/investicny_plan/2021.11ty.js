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
            year: 2021,
            layout: "layouts/rozpocet.njk",
            tags: ["budget2"],
            updatedDate: luxon.DateTime.fromISO("2020-12-15"),
            items: [
                {
                    title: "Poslanecké priority na kapitálové výdavky (rekonštrukcie školských budov, obnova chodníkov a športova infraštruktúra)",
                    id: "2021-1",
                    program: 1,
                    amountOriginal: 205000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Nákup licencie sofware na verejné obstarávanie",
                    id: "2021-2",
                    previous: '2020-2',
                    program: 2,
                    amountOriginal: 3000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Obstaranie virtualizácie serverov",
                    id: "2021-3",
                    previous: '2020-3',
                    program: 2,
                    amountOriginal: 30000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Obnova komunikácií",
                    id: "2021-4",
                    previous: '2020-4',
                    program: 4,
                    amountOriginal: 200000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Cyklotrasa O4 I. Etapa - Prístavného mostu, Májová ulica, Nám. Hraničiarov ",
                    id: "2021-5",
                    previous: '2020-7',
                    program: 4,
                    amountOriginal: 185000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Cyklotrasa O4 II. Etapa - Chorvátske rameno po Rusovskú 72 100",
                    id: "2021-6",
                    previous: '2020-7',
                    program: 4,
                    amountOriginal: 75000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Bleskozvod na MŠ",
                    id: "2021-7",
                    program: 5,
                    amountOriginal: 32000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Rekonštrukcie ZŠ a MŠ",
                    id: "2021-8",
                    previous: '2020-10',
                    program: 5,
                    amountOriginal: 1676980,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Zvýšenie kapacít MŠ",
                    id: "2021-9",
                    previous: '2020-10',
                    program: 5,
                    amountOriginal: 891074,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Rekonštrukcia pobočky Vavilovova - PD",
                    id: "2021-10",
                    program: 6,
                    amountOriginal: 25000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Zateplenie DK Zrkadlový háj",
                    id: "2021-11",
                    program: 6,
                    amountOriginal: 210000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Nová bežecká dráha a multifinkčné ihrisko na ZŠ Lachova",
                    id: "2021-12",
                    previous: '2020-16',
                    program: 6,
                    amountOriginal: 215000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Nákup strojov a zariadení - podľa potrieb referátu",
                    id: "2021-13",
                    previous: '2020-18',
                    program: 7,
                    amountOriginal: 365000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Nákup strojov a zariadení - nákladné vozidlo",
                    id: "2021-14",
                    previous: '2020-18',
                    program: 7,
                    amountOriginal: 30000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Revitalizácia detských ihríska",
                    id: "2021-15",
                    previous: '2020-21',
                    program: 7,
                    amountOriginal: 121000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "6 verejných detských ihrísk určených na revitalizáciu v roku 2021 bude vybraných na základe výstupov stretnutia poslaneckej pracovnej skupiny začiatkom decembra 2020 - zo stretnutia bude vyhotovená zápisnica",
                    status: "inwork"
                },
                {
                    title: "Nové detské ihrisko na ulici Pečnianska",
                    id: "2021-16",
                    previous: '2020-21',
                    program: 7,
                    amountOriginal: 29000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Dotváranie a budovanie kontajnerových stanovíšť",
                    id: "2021-17",
                    previous: '2020-20',
                    program: 7,
                    amountOriginal: 10000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "PD Mlynarovičová",
                    id: "2021-18",
                    program: 7,
                    amountOriginal: 10000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "ÚP zóny Kapitulský dvor",
                    id: "2021-19",
                    program: 8,
                    amountOriginal: 7239,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Súťaž návrhov revitalizácie nám. Republiky",
                    id: "2021-20",
                    previous: '2020-25',
                    program: 8,
                    amountOriginal: 65000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Vypracovanie PD - MŠ Hrobákova",
                    id: "2021-21",
                    previous: '2020-26',
                    program: 9,
                    amountOriginal: 70000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "PD + realizácia - Šrobárovo námestie",
                    id: "2021-22",
                    previous: '2020-25',
                    program: 9,
                    amountOriginal: 196000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Nákup budov ZSE",
                    id: "2021-23",
                    program: 9,
                    amountOriginal: 1350000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Vypracovanie projektovej dokumnetácie - DSS OSUSKÉHO",
                    id: "2021-24",
                    program: 9,
                    amountOriginal: 70000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Zabezpečenie klimatizácie do ZSS na Vavilovovej ulici",
                    id: "2021-25",
                    previous: '2020-29',
                    program: 10,
                    amountOriginal: 14000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: "",
                    status: "inwork"
                },
                {
                    title: "Kamerový systém",
                    id: "2021-26",
                    program: 11,
                    amountOriginal: 100000,
                    amountUpdated: 0,
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

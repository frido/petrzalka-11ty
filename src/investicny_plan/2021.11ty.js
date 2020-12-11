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
            year: 2021,
            layout: "layouts/rozpocet.njk",
            tags: ["budget2"],
            updatedDate: luxon.DateTime.fromISO("2020-12-15"),
            items: [
                {
                    title: 'Poslanecké priority na kapitálové výdavky (rekonštrukcie školských budov, obnova chodníkov a športova infraštruktúra)',
                    program: 1,
                    amountOriginal: 205000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Nákup licencie sofware na verejné obstarávanie',
                    program: 2,
                    amountOriginal: 3000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Obstaranie virtualizácie serverov',
                    program: 2,
                    amountOriginal: 30000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Obnova komunikácií',
                    program: 4,
                    amountOriginal: 200000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Cyklotrasa O4 I. Etapa - Prístavného mostu, Májová ulica, Nám. Hraničiarov ',
                    program: 4,
                    amountOriginal: 185000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Cyklotrasa O4 II. Etapa - Chorvátske rameno po Rusovskú 72 100',
                    program: 4,
                    amountOriginal: 75000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Bleskozvod na MŠ',
                    program: 5,
                    amountOriginal: 32000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Rekonštrukcie ZŠ a MŠ',
                    program: 5,
                    amountOriginal: 1676980,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Zvýšenie kapacít MŠ',
                    program: 5,
                    amountOriginal: 891074,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Rekonštrukcia pobočky Vavilovova - PD',
                    program: 6,
                    amountOriginal: 25000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Zateplenie DK Zrkadlový háj',
                    program: 6,
                    amountOriginal: 210000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Nová bežecká dráha a multifinkčné ihrisko na ZŠ Lachova',
                    program: 6,
                    amountOriginal: 215000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Nákup strojov a zariadení - podľa potrieb referátu',
                    program: 7,
                    amountOriginal: 365000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Nákup strojov a zariadení - nákladné vozidlo',
                    program: 7,
                    amountOriginal: 30000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Revitalizácia detských ihríska',
                    program: 7,
                    amountOriginal: 121000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '6 verejných detských ihrísk určených na revitalizáciu v roku 2021 bude vybraných na základe výstupov stretnutia poslaneckej pracovnej skupiny začiatkom decembra 2020 - zo stretnutia bude vyhotovená zápisnica',
                    status: 'inwork'
                }, {
                    title: 'Nové detské ihrisko na ulici Pečnianska',
                    program: 7,
                    amountOriginal: 29000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Dotváranie a budovanie kontajnerových stanovíšť',
                    program: 7,
                    amountOriginal: 10000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'PD Mlynarovičová',
                    program: 7,
                    amountOriginal: 10000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'ÚP zóny Kapitulský dvor',
                    program: 8,
                    amountOriginal: 7239,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Súťaž návrhov revitalizácie nám. Republiky',
                    program: 8,
                    amountOriginal: 65000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Vypracovanie PD - MŠ Hrobákova',
                    program: 9,
                    amountOriginal: 70000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'PD + realizácia - Šrobárovo námestie',
                    program: 9,
                    amountOriginal: 196000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Nákup budov ZSE',
                    program: 9,
                    amountOriginal: 1350000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Vypracovanie projektovej dokumnetácie - DSS OSUSKÉHO',
                    program: 9,
                    amountOriginal: 70000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Zabezpečenie klimatizácie do ZSS na Vavilovovej ulici',
                    program: 10,
                    amountOriginal: 14000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }, {
                    title: 'Kamerový systém',
                    program: 11,
                    amountOriginal: 100000,
                    amountUpdated: 0,
                    amountReal: 0,
                    comment: '',
                    status: 'inwork'
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

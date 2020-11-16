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
            tags: ['budget2'],
            color: "#000000",
            icon: '003.png',
            title: 'Doprava a komunikácie',
            years: [
                {
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
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

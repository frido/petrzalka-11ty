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
                    year: 2020,
                    amount: 100000,
                    items: [
                        {
                            amount: 34651,
                            title: 'Vybudovanie denného stacionáru',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "NFP zamietnutý, aktualne prebieha odvolacie konanie",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 34730,
                            title: 'Participatívny výskum na Nám. Republiky + Šrobárovo námestie',
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
                                    comment: "prebratie objektu Hrobákova, na obhliadke objektu Hrobáková sa určila cena rekonštrukcie ref, inv. Činností na sumu 450-520000 €",
                                    status: 'inwork'
                                }
                            ]
                        }, {
                            amount: 15100,
                            title: 'nakup budov, objektov a ich casti',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 15100,
                                    realAmount: 15100,
                                    comment: " zrealizované",
                                    status: 'success'
                                }
                            ]
                        }, {
                            amount: 29000,
                            title: 'Vyhotovenie PD k novým projektom podľa vyhlásených výziev',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 2065,
                                    realAmount: 0,
                                    comment: "neocakava sa dalsie cerpanie",
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

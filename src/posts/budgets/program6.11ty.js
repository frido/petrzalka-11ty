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
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

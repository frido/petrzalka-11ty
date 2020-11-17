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
                                    status: 'inwork'
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

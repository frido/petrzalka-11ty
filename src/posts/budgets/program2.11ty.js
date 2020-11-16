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
            color: "#134E84",
            icon: '001.png',
            title: 'Moderný miestny úrad',
            years: [
                {
                    year: 2020,
                    amount: 53000,
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
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

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

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
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

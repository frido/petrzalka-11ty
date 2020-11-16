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
                            amount: 34757,
                            title: 'Dofinancovanie ÚP zóny Kapitulský dvor',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 34757,
                                    realAmount: 34757,
                                    comment: "v procese spracovania návrhu ÚP",
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
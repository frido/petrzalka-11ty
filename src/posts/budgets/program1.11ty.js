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
            color: "#99021B",
            icon: '000.png',
            title: 'Rozhodovanie, manažment a kontrola',
            years: [
                {
                    year: 2020,
                    amount: 0,
                    items: [
                        {
                            amount: 0,
                            title: 'Moderná prezentácia pamiatok a pamätihodností MČ',
                            statuses: [
                                {
                                    date: luxon.DateTime.fromISO("2020-10-01"),
                                    amount: 0,
                                    realAmount: 0,
                                    comment: "niCE life projekt. Náhradné čerpanie za neschválený pôvodný projekt. Pre potreby niCE life projektu sú potrebné iba bežné výdavky. Kapitálové výdavky v roku 2020 nebudú čerpané",
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

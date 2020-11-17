"use strict";
exports.__esModule = true;
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.render = function (data) {
        return '';
    };
    Template.prototype.data = function () {
        return {
            tags: ['budget2'],
            color: "#704521",
            icon: '002.png',
            title: 'Služby občanom',
            years: [
                {
                    program: 3,
                    items: []
                }
            ]
        };
    };
    return Template;
}());
module.exports = Template;

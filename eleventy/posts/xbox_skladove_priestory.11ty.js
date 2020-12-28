"use strict";
exports.__esModule = true;
var projectAddon_1 = require("../addons/project/projectAddon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "X-Box skladové priestory",
            date: "2020-11-05",
            tags: [projectAddon_1.TAG_PROJECT],
            layout: "layouts/post2.njk",
            description: "",
            icon: "",
            execution: [
                {
                    title: "Investičný zámer",
                    status: "inwork",
                    description: "",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-09-29")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    ";
    };
    return Template;
}());
module.exports = Template;

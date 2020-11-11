"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Skladovo-prevádzkový areál - DEKTER, s.r.o.",
            date: "2020-11-05",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "",
            icon: "",
            schedule: [
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
                            timeline: luxon.DateTime.fromISO("2020-09-29")
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

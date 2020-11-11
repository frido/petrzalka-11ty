"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Nájomné byty, Muchovo námestie",
            date: "2020-11-05",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "",
            icon: "https://bratislavskykraj.sk/wp-content/uploads/2020/09/119068162_3541246765938335_4381885082729630819_o-1024x722.jpg",
            gallery: [
                { link: 'https://bratislavskykraj.sk/wp-content/uploads/2020/09/119068162_3541246765938335_4381885082729630819_o-1024x722.jpg' }
            ],
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
                            description: "berie na vedomie",
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

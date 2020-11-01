"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Nové Domino na Jasovskej ulici",
            date: "2020-11-01",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.",
            icon: "https://www.novedomino.sk/img/obr5.jpg",
            source: "https://www.novedomino.sk/",
            gallery: [
                { link: "https://www.novedomino.sk/img/obr5.jpg" }
            ],
            amount: 0,
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "inwork",
                    description: "",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
                            status: "inwork",
                            description: "žiada ďalšie možnosti riešenia",
                            timeline: luxon.DateTime.fromISO("2020-08-25")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Skelet nedokon\u010Denej stavby stoj\u00ED na pozemku, ktor\u00FD je pod\u013Ea platn\u00E9ho \u00FAzemn\u00E9ho pl\u00E1nu ur\u010Den\u00FD na v\u00FDstavbu b\u00FDvania. Projekt m\u00E1 st\u00E1le platn\u00E9 a nezru\u0161ite\u013En\u00E9 \u00FAzemn\u00E9 rozhodnutie. Neexistuje teda leg\u00E1lny a pr\u00E1vny sp\u00F4sob, ako stavbu odstr\u00E1ni\u0165, no ak by sa v nej nepokra\u010Dovalo \u010Falej, sch\u00E1tran\u00FD skelet by pravdepodobne zotrval na svojom mieste e\u0161te ve\u013Emi dlh\u00FD \u010Das.\n    ";
    };
    return Template;
}());
module.exports = Template;

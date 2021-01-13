"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Template.prototype.data = function () {
        return this.frontMatterWrapper({
            title: "Nové Domino na Jasovskej ulici",
            date: "2020-11-01",
            description: "Skelet nedokončenej stavby stojí na pozemku, ktorý je podľa platného územného plánu určený na výstavbu bývania. Projekt má stále platné a nezrušiteľné územné rozhodnutie. Neexistuje teda legálny a právny spôsob, ako stavbu odstrániť, no ak by sa v nej nepokračovalo ďalej, schátraný skelet by pravdepodobne zotrval na svojom mieste ešte veľmi dlhý čas.",
            icon: "https://www.novedomino.sk/img/obr5.jpg",
            source: "https://www.novedomino.sk/",
            gallery: [
                { link: "https://www.novedomino.sk/img/obr5.jpg" }
            ],
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
                            status: "error",
                            description: "žiada ďalšie možnosti riešenia",
                            date: luxon.DateTime.fromISO("2020-08-25")
                        },
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
                            status: "error",
                            description: "žiada ďalšie dokumenty",
                            date: luxon.DateTime.fromISO("2020-09-29")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    Skelet nedokon\u010Denej stavby stoj\u00ED na pozemku, ktor\u00FD je pod\u013Ea platn\u00E9ho \u00FAzemn\u00E9ho pl\u00E1nu ur\u010Den\u00FD na v\u00FDstavbu b\u00FDvania. Projekt m\u00E1 st\u00E1le platn\u00E9 a nezru\u0161ite\u013En\u00E9 \u00FAzemn\u00E9 rozhodnutie. Neexistuje teda leg\u00E1lny a pr\u00E1vny sp\u00F4sob, ako stavbu odstr\u00E1ni\u0165, no ak by sa v nej nepokra\u010Dovalo \u010Falej, sch\u00E1tran\u00FD skelet by pravdepodobne zotrval na svojom mieste e\u0161te ve\u013Emi dlh\u00FD \u010Das.\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

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
            title: "Samoobslužná autoumyváreň Panónska cesta, Bratislava",
            date: "2020-11-05",
            description: "Autoumyváreň na Panónskej ceste.",
            icon: "",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "success",
                    description: "ukončené",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/03/KUPVaR-zapisnica_2020-03-03_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-03-03")
                        },
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZSHM,
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=69412",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-05-19")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Predlo\u017Een\u00E1 dokument\u00E1cia rie\u0161i: umiestnenie novostavby samostatne stojacej samoobslu\u017Enej\n    autoumyv\u00E1rne. Prev\u00E1dzka je dispozi\u010Dne roz\u010Dlenen\u00E1 na 7 prev\u00E1dzkov\u00FDch priestorov; 5 priestorov na\n    samoobslu\u017En\u00E9 um\u00FDvanie (5 boxov), jeden um\u00FDvac\u00ED port\u00E1l a priestor, kde bude umiestnen\u00E1\n    technol\u00F3gia umyv\u00E1rne. Po\u010Det st\u00E1t\u00ED na samoobslu\u017En\u00E9 um\u00FDvanie je 5 + 1 a po\u010Det st\u00E1t\u00ED na \u010Distenie\n    interi\u00E9rov je 3.\n    </p>\n    <p>\n    Vn\u00FAtroare\u00E1lov\u00E9 spevnen\u00E9 plochy bud\u00FA rie\u0161en\u00E9 ako pojazdn\u00E1 plocha do 3,5 t s krytom z bet\u00F3novej\n    z\u00E1mkovej dla\u017Eby hr. 80 mm, ohrani\u010Den\u00E1 cestn\u00FDmi obrubn\u00EDkmi, ktor\u00FA bude \u010Diasto\u010Dne lemova\u0165\n    zatr\u00E1vnen\u00E1 plocha. Doplnkovou funkciou s\u00FA dva ostrov\u010Deky vybaven\u00E9 doplnkov\u00FDmi zariadeniami\n    na \u010Distenie interi\u00E9rov pre automobily s tromi parkovac\u00EDmi miestami.\n    Predpokladan\u00E1 projektovan\u00E1 um\u00FDvacia kapacita linky je 2 aut\u00E1 za hodinu, \u010Do pri pracovnej dobe 8\n    hod. za de\u0148 a 360 pracovn\u00FDch d\u0148och predstavuje cca 5760 \u00E1ut za rok. Nako\u013Eko prev\u00E1dzka je z\u00E1visl\u00E1\n    od po\u017Eiadaviek z\u00E1kazn\u00EDkov, m\u00F4\u017Ee skuto\u010Dn\u00E1 kapacita autoumyv\u00E1rne by\u0165 rozdielna.\n    Dopravn\u00E1 obsluha are\u00E1lu je rie\u0161en\u00E1 po \u00FA\u010Delov\u00FDch komunik\u00E1ci\u00E1ch pri\u013Eahlej \u010CSPL Lukoil, bez zmeny\n    nadraden\u00E9ho dopravn\u00E9ho pripojenia na Pan\u00F3nsku cestu\n    </p>\n";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

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
            title: "Samoobslužná autoumyváreň, Petržalka Juh",
            date: "2020-11-05",
            description: "Autoumyváreň na Panónskej ceste.",
            icon: "",
            sources: [
                "https://www.petrzalka.sk/samoobsluzna-autoumyvaren-petrzalka-juh/"
            ],
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZSHM,
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67277",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-02-06")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Predlo\u017Een\u00E1 dokument\u00E1cia rie\u0161i: umiestnenie objektu samoobslu\u017Enej autoumyv\u00E1rne pre osobn\u00E9\n    aut\u00E1 \u2013 2 nepodpivni\u010Den\u00E9 jednopodla\u017En\u00E9 objekty, (spolu 8 um\u00FDvac\u00EDch boxov, kapacita 200\n    vozidiel/de\u0148), vr\u00E1tane z\u00E1sobn\u00EDka prop\u00E1nu, odstavn\u00FDch priestorov a komunika\u010Dn\u00FDch priestorov.\n    V r\u00E1mci rie\u0161en\u00E9ho are\u00E1lu sa nach\u00E1dza aj plocha, ur\u010Den\u00E1 pre umiestnenie stavby \u010Derpacej stanice\n    pohonn\u00FDch hm\u00F4t, ktor\u00E1 je v\u0161ak rie\u0161en\u00E1 samostatnou dokument\u00E1ciou a bude predmetom\n    samostatn\u00E9ho posudzovania.\n    </p>\n    <p>\n    Dopravn\u00E1 obsluha are\u00E1lu je navrhnut\u00E1 po \u00FA\u010Delov\u00FDch komunik\u00E1ci\u00E1ch rie\u0161en\u00E9ho are\u00E1lu s dopravn\u00FDm\n    pripojen\u00EDm (vjazdom/v\u00FDjazdom) na pri\u013Eahl\u00FA obslu\u017En\u00FA komunik\u00E1ciu v \u00FAzem\u00ED Ju\u017En\u00E9ho mesta \u2013 z\u00F3na\n    A ( Labutia ulica), s n\u00E1sledn\u00FDm pripojen\u00EDm na Pan\u00F3nsku cestu.\n    </p>\n";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

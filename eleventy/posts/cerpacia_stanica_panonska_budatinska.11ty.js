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
            title: "Panónska-Budatínska – čerpacia stanica pohonných hmôt",
            date: "2021-04-03",
            description: "Čerpacia stanica pohonných hmôt s dvomi obojstranne prístupnými stojanmi na tankovanie pre 4 autá súčasne",
            icon: "",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=74069",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2021-02-03")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    N\u00E1vrh predstavuje \u010Derpaciu stanicu pohonn\u00FDch hm\u00F4t s dvomi obojstranne pr\u00EDstupn\u00FDmi stojanmi \n    na tankovanie pre 4 aut\u00E1 s\u00FA\u010Dasne a to na spevnenej ploche, prekrytej oce\u013Eovo-bet\u00F3novou\n    kon\u0161trukciou s krytinou vo v\u00FD\u0161ke + 6,000 m. Na \u0148u nadv\u00E4zuje jednopodla\u017En\u00FD obslu\u017En\u00FD objekt 2\n    s plochou strechou a atikou vo v\u00FD\u0161ke + 4,500 m, ktor\u00FD sl\u00FA\u017Ei na predaj pohonn\u00FDch hm\u00F4t, auto-doplnkov a ob\u010Derstvenia a poskytuje priestory pre hygienick\u00E9 zariadenie, z\u00E1zemie pre zamestnancov\n    a sklad. \u010Cerpacia stanica je dopravne napojen\u00E1 na komunik\u00E1ciu, ktor\u00E1 je spojnicou Budat\u00EDnskej \n    ulice a Pan\u00F3nskej cesty.";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

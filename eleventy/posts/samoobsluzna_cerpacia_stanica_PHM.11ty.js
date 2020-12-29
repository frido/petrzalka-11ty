"use strict";
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Samoobslužná čerpacia stanica PHM, Petržalka Juh",
            date: "2020-11-22",
            tags: [project_addon_1.TAG_PROJECT],
            layout: "layouts/post2.njk",
            description: "Samoobslužná čerpacia stanica pohonných hmôt pre osobné autá (2 dvojproduktové stojany), navrhnutá ako samostatná stavba s dopravnou väzbou na súbežne posudzovanú stavbu „samoobslužná autoumyváreň“ t. j. s dopravnou obsluhou, využívajúcou účelové komunikácie areálu „samoobslužná autoumyváreň“ s dopravným pripojením (vjazdom/výjazdom) na priľahlú obslužnú komunikáciu v území Južného mesta – zóna A (Labutia ulica), s následným pripojením na Panónsku cestu.",
            icon: "",
            amount: 0,
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67275",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-02-06")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Samoobslu\u017En\u00E1 \u010Derpacia\n    stanica pohonn\u00FDch hm\u00F4t pre osobn\u00E9 aut\u00E1 (2 dvojproduktov\u00E9 stojany), navrhnut\u00E1 ako samostatn\u00E1\n    stavba s dopravnou v\u00E4zbou na s\u00FAbe\u017Ene posudzovan\u00FA stavbu \u201Esamoobslu\u017En\u00E1 autoumyv\u00E1re\u0148\u201C t. j.\n    s dopravnou obsluhou, vyu\u017E\u00EDvaj\u00FAcou \u00FA\u010Delov\u00E9 komunik\u00E1cie are\u00E1lu \u201Esamoobslu\u017En\u00E1 autoumyv\u00E1re\u0148\u201C\n    s dopravn\u00FDm pripojen\u00EDm (vjazdom/v\u00FDjazdom) na pri\u013Eahl\u00FA obslu\u017En\u00FA komunik\u00E1ciu v \u00FAzem\u00ED Ju\u017En\u00E9ho\n    mesta \u2013 z\u00F3na A (Labutia ulica), s n\u00E1sledn\u00FDm pripojen\u00EDm na Pan\u00F3nsku cestu.\n    \u00DAdaje k z\u00E1meru v zmysle predlo\u017Eenej dokument\u00E1cie, spracovanej a potvrdenej subjektom odborne\n    sp\u00F4sobil\u00FDm (Ing. J\u00E1n Virostko, 11/2019). \n    ";
    };
    return Template;
}());
module.exports = Template;

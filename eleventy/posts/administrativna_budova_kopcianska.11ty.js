"use strict";
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Administratívna budova, Kopčianska",
            date: "2020-11-23",
            tags: [project_addon_1.TAG_PROJECT],
            layout: project_addon_1.LAYOUT_PROJECT,
            description: "Trojpodlažná nepodpivničená administratívna budova, slúžiaca pre potreby riadenia spoločnosti, s 1 služobným bytom na 3. nadzemnom podlaží a extenzívnou vegetačnou strechou. Súčasťou riešenia bude aj dopravné pripojenie z priľahlej miestnej komunikácie Kopčianskej ulice a parkovanie na spevnených plochách na vlastnom pozemku v počte 7 parkovacích miest.",
            icon: "",
            amount: 0,
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZKMZ,
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68659",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-04-28")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Trojpodla\u017En\u00E1 nepodpivni\u010Den\u00E1 administrat\u00EDvna\n    budova, sl\u00FA\u017Eiaca pre potreby riadenia spolo\u010Dnosti, s 1 slu\u017Eobn\u00FDm bytom na 3. nadzemnom podla\u017E\u00ED\n    a extenz\u00EDvnou vegeta\u010Dnou strechou. S\u00FA\u010Das\u0165ou rie\u0161enia bude aj dopravn\u00E9 pripojenie z pri\u013Eahlej\n    miestnej komunik\u00E1cie Kop\u010Dianskej ulice a parkovanie na spevnen\u00FDch ploch\u00E1ch na vlastnom\n    pozemku v po\u010Dte 7 parkovac\u00EDch miest.\n    \u00DAdaje k z\u00E1meru v zmysle predlo\u017Eenej dokument\u00E1cie, spracovanej a potvrdenej subjektom odborne\n    sp\u00F4sobil\u00FDm (Ing. arch. Daniel Kubi\u0161, 04/2020).\n    ";
    };
    return Template;
}());
module.exports = Template;

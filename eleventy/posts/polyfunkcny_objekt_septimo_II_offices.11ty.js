"use strict";
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Polyfunkčný objekt Septimo II - Offices",
            date: "2020-11-23",
            tags: [project_addon_1.TAG_PROJECT],
            layout: "layouts/post2.njk",
            source: 'https://offices.vigroup.sk/',
            description: "Polyfunkčný päť podlažný objekt s dvomi podzemnými a s tromi nadzemnými podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty – 20 bytových jednotiek. ",
            icon: "img/polyfunkcny_objekt_septimo_II_offices/1.jpg",
            gallery: [
                { link: 'img/polyfunkcny_objekt_septimo_II_offices/1.jpg' }
            ],
            amount: 0,
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68753",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-04-07")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    V\u00FDstavba polyfunk\u010Dn\u00E9ho p\u00E4\u0165 podla\u017En\u00E9ho objektu s dvomi podzemn\u00FDmi a s tromi nadzemn\u00FDmi podla\u017Eiami, kde 3.NP je usko\u010Den\u00E9. Podzemn\u00E9 podla\u017Eia sl\u00FA\u017Eia ako gar\u00E1\u017E a pr\u00EDslu\u0161enstvo (sklady a technick\u00E9 priestory), na 1.NP s\u00FA navrhnut\u00E9 obchodn\u00E9 priestory a na 2. \u2013 5.NP s\u00FA navrhnut\u00E9 byty \u2013 20 bytov\u00FDch jednotiek. Objekt je mierne \u010Dlenit\u00E9ho p\u00F4dorysu s celkov\u00FDmi rozmermi 15,75 x 23,80 m. P\u00F4dorysne maj\u00FA podla\u017Eia mierne odli\u0161n\u00E9 rozmery.\n    </p><p>\n    Dopravn\u00FD pr\u00EDstup je rie\u0161en\u00FD priamym vjazdom z pri\u013Eahlej komunik\u00E1cie komunik\u00E1ciu \u00DAdern\u00EDcka ul. Statick\u00E1 doprava je rie\u0161en\u00E1 v podzemn\u00FDch podla\u017Eiach objektu a na ter\u00E9ne na vlastnom pozemku. Predlo\u017Een\u00E9 rie\u0161enie je predmetom II. etapy projektu, pri\u010Dom I. etapa (susedn\u00FD objekt), ktor\u00E1 je jeho s\u00FA\u010Das\u0165ou nebola predlo\u017Een\u00E1 na pos\u00FAdenie hlavn\u00E9mu mestu SR Bratislava.\n    </p>\n    ";
    };
    return Template;
}());
module.exports = Template;

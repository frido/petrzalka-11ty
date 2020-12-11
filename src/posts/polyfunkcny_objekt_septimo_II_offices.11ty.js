"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Polyfunkčný objekt Septimo II - Offices",
            date: "2020-11-23",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "Polyfunkčný päť podlažný objekt s dvomi podzemnými a s tromi nadzemnými podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty – 20 bytových jednotiek. ",
            icon: "",
            amount: 0,
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68753",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-04-07")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    TODO !!! Uv\u00E1dzame, \u017Ee d\u0148a 26.01.2018 vydalo hlavn\u00E9 mesto SR Bratislava s\u00FAhlasn\u00E9 z\u00E1v\u00E4zn\u00E9 stanovisko\n    k investi\u010Dn\u00E9mu z\u00E1meru \u201EPolyfunk\u010Dn\u00FD objekt Septimo II \u2013 Offices\u201C,\n    <p>\n    Polyfunk\u010Dn\u00FD p\u00E4\u0165 podla\u017En\u00FD objekt s dvomi podzemn\u00FDmi a s tromi nadzemn\u00FDmi\n    podla\u017Eiami, kde 3.NP je usko\u010Den\u00E9. Podzemn\u00E9 podla\u017Eia sl\u00FA\u017Eia ako gar\u00E1\u017E a pr\u00EDslu\u0161enstvo (sklady\n    a technick\u00E9 priestory), na 1.NP s\u00FA navrhnut\u00E9 obchodn\u00E9 priestory a na 2. \u2013 5.NP s\u00FA navrhnut\u00E9 byty \u2013\n    20 bytov\u00FDch jednotiek. Objekt je mierne \u010Dlenit\u00E9ho p\u00F4dorysu s celkov\u00FDmi rozmermi 15,75 x 23,80\n    m. P\u00F4dorysne maj\u00FA podla\u017Eia mierne odli\u0161n\u00E9 rozmery. V\u00FD\u0161ka atiky je +17,65 m nad \u00FArov\u0148ou\n    podlahy pr\u00EDzemia \u00B1 0,000 m.\n    </p>\n    <p>\n    Dopravn\u00FD pr\u00EDstup je rie\u0161en\u00FD priamym vjazdom z pri\u013Eahlej komunik\u00E1cie komunik\u00E1ciu \u00DAdern\u00EDcka ul..\n    Statick\u00E1 doprava je rie\u0161en\u00E1 v podzemn\u00FDch podla\u017Eiach objektu a na ter\u00E9ne na vlastnom pozemku.\n    Predlo\u017Een\u00E9 rie\u0161enie je predmetom II. etapy projektu, pri\u010Dom I. etapa (susedn\u00FD objekt), ktor\u00E1 je jeho\n    s\u00FA\u010Das\u0165ou nebola predlo\u017Een\u00E1 na pos\u00FAdenie hlavn\u00E9mu mestu SR Bratislava.\n    </p>\n    ";
    };
    return Template;
}());
module.exports = Template;

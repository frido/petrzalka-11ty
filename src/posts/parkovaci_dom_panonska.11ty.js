"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Parkovací dom, Panónska ul.",
            date: "2020-11-22",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "parkovací dom uvažuje v 1. podzemnom podlaží prevádzku autoservisu, 4 nadzemné podlažia a strecha objektu sú určené pre parkovanie, s kapacitou 93 parkovacích miest. 6 parkovacích miest je umiestnených na teréne pred objektom.",
            icon: "",
            source: "https://www.petrzalka.sk/parkovaci-dom-panonska-ul-bratislava-mc-petrzalka/",
            amount: 0,
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=67275",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-02-06")
                        }
                    ]
                },
                {
                    title: "Územné konanie",
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: "Začatie územného konania",
                            source: "https://www.petrzalka.sk/parkovaci-dom-panonska-ul-bratislava-mc-petrzalka/",
                            status: "success",
                            description: "",
                            timeline: luxon.DateTime.fromISO("2019-11-27")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Umiestnenie parkovacieho domu ako I. etapy v lokalite, kde je\n    v s\u00FA\u010Dasnosti nefunk\u010Dn\u00FD objekt servisn\u00E9ho centra PEUGEOT, ur\u010Den\u00FD na asan\u00E1ciu. Pre dotknut\u00E9\n    \u00FAzemie bola spracovan\u00E1 Urbanistick\u00E1 \u0161t\u00FAdia Pan\u00F3nska \u2013 Dolnozemsk\u00E1 (\u010Distopis 05/2019), ako\n    podklad pre schv\u00E1lenie zmien a doplnkov \u00DAzemn\u00E9ho pl\u00E1nu hlavn\u00E9ho mesta SR Bratislavy, rok 2007\n    v znen\u00ED zmien a doplnkov. V II. etape bude na pozemku na mieste asanovan\u00E9ho objektu servisn\u00E9ho\n    centra PEUGEOT umiestnen\u00FD investi\u010Dn\u00FD z\u00E1mer v zmysle uvedenej \u0161t\u00FAdie a\u017E po schv\u00E1len\u00ED zmien\n    a doplnkov \u00DAPN hlavn\u00E9ho mesta SR Bratislavy.\n    </p>\n    <p>\n    Aktu\u00E1lne umiest\u0148ovan\u00FD parkovac\u00ED dom uva\u017Euje v 1. podzemnom podla\u017E\u00ED prev\u00E1dzku autoservisu, 4\n    nadzemn\u00E9 podla\u017Eia a strecha objektu s\u00FA ur\u010Den\u00E9 pre parkovanie, s kapacitou 93 parkovac\u00EDch miest. 6\n    parkovac\u00EDch miest je umiestnen\u00FDch na ter\u00E9ne pred objektom. Pr\u00EDjazdov\u00E1 komunik\u00E1cia\n    k parkovaciemu domu je rie\u0161en\u00E1 pod\u013Ea textovej \u010Dasti v d\u013A\u017Eke 57 m a \u0161\u00EDrky 5,50 m, s dopravn\u00FDm\n    pripojen\u00EDm na pri\u013Eahl\u00FA jestvuj\u00FAcu komunik\u00E1ciu, s n\u00E1sledn\u00FDm pripojen\u00EDm na Jasovsk\u00FA ulicu.\n    Poloha a kapacita parkovacieho domu je z h\u013Eadiska dopravn\u00E9ho rie\u0161enia v s\u00FAlade s rie\u0161en\u00EDm\n    spracovanej U\u0160 Pan\u00F3nska \u2013 Dolnozemsk\u00E1, 25 parkovac\u00EDch miest je ur\u010Den\u00FDch pre autoservis\n    a zvy\u0161n\u00E9 parkovacie miesta pre s\u00FA\u010Dasn\u00FA okolit\u00FA bytov\u00FA z\u00E1stavbu.\n    </p>";
    };
    return Template;
}());
module.exports = Template;

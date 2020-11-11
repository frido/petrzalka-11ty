"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Samoobslužná autoumyváreň, Petržalka Juh",
            date: "2020-11-05",
            tags: ["template"],
            layout: "layouts/post2.njk",
            description: "Autoumyváreň na Panónskej ceste.",
            icon: "",
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/03/KUPVaR-zapisnica_2020-03-03_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-03-03")
                        }
                    ]
                }, {
                    title: "Územné konanie",
                    status: "success",
                    description: "ukončené",
                    sub: [
                        {
                            title: "Záväzné stanovisko hlavného mesta",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=69412",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-05-19")
                        }
                    ]
                }, {
                    title: "Stavebné konanie",
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: "Začatie konania",
                            source: "https://www.petrzalka.sk/bytovy-dom-fend-apartmens-budatinska/",
                            status: "success",
                            description: "",
                            timeline: luxon.DateTime.fromISO("2019-03-22")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Predlo\u017Een\u00E1 dokument\u00E1cia rie\u0161i: umiestnenie novostavby samostatne stojacej samoobslu\u017Enej\n    autoumyv\u00E1rne. Prev\u00E1dzka je dispozi\u010Dne roz\u010Dlenen\u00E1 na 7 prev\u00E1dzkov\u00FDch priestorov; 5 priestorov na\n    samoobslu\u017En\u00E9 um\u00FDvanie (5 boxov), jeden um\u00FDvac\u00ED port\u00E1l a priestor, kde bude umiestnen\u00E1\n    technol\u00F3gia umyv\u00E1rne. Po\u010Det st\u00E1t\u00ED na samoobslu\u017En\u00E9 um\u00FDvanie je 5 + 1 a po\u010Det st\u00E1t\u00ED na \u010Distenie\n    interi\u00E9rov je 3.\n    </p>\n    <p>\n    Vn\u00FAtroare\u00E1lov\u00E9 spevnen\u00E9 plochy bud\u00FA rie\u0161en\u00E9 ako pojazdn\u00E1 plocha do 3,5 t s krytom z bet\u00F3novej\n    z\u00E1mkovej dla\u017Eby hr. 80 mm, ohrani\u010Den\u00E1 cestn\u00FDmi obrubn\u00EDkmi, ktor\u00FA bude \u010Diasto\u010Dne lemova\u0165\n    zatr\u00E1vnen\u00E1 plocha. Doplnkovou funkciou s\u00FA dva ostrov\u010Deky vybaven\u00E9 doplnkov\u00FDmi zariadeniami\n    na \u010Distenie interi\u00E9rov pre automobily s tromi parkovac\u00EDmi miestami.\n    Predpokladan\u00E1 projektovan\u00E1 um\u00FDvacia kapacita linky je 2 aut\u00E1 za hodinu, \u010Do pri pracovnej dobe 8\n    hod. za de\u0148 a 360 pracovn\u00FDch d\u0148och predstavuje cca 5760 \u00E1ut za rok. Nako\u013Eko prev\u00E1dzka je z\u00E1visl\u00E1\n    od po\u017Eiadaviek z\u00E1kazn\u00EDkov, m\u00F4\u017Ee skuto\u010Dn\u00E1 kapacita autoumyv\u00E1rne by\u0165 rozdielna.\n    Dopravn\u00E1 obsluha are\u00E1lu je rie\u0161en\u00E1 po \u00FA\u010Delov\u00FDch komunik\u00E1ci\u00E1ch pri\u013Eahlej \u010CSPL Lukoil, bez zmeny\n    nadraden\u00E9ho dopravn\u00E9ho pripojenia na Pan\u00F3nsku cestu\n    </p>\n";
    };
    return Template;
}());
module.exports = Template;

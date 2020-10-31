"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            "title": "Urban E",
            "date": "2020-07-05",
            "tags": [
                "projekt"
            ],
            "layout": "layouts/post2.njk",
            "description": "Medzinárodný projekt URBAN-E je zameraný na rozvoj elektromobility, podporu rozširovania infraštruktúry elektronabíjacích staníc a prepojenia na iné druhy dopravy, na znižovanie znečistenia ovzdušia v hlavných mestách Slovinska, Chorvátska a Slovenska – v Ľubľane, Záhrebe a Bratislave.",
            "icon": "",
            "source": "https://zastupitelstvo.bratislava.sk/data/att/23543.pdf",
            "sources": [
                "https://www.petrzalka.sk/wp-content/uploads/2020/01/Z%C3%A1pisnica-%C4%8D.7-janu%C3%A1r-2020.pdf",
                "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-21_overena.pdf"
            ],
            "amount": 0,
            "schedule": [
                {
                    "title": "Príprava projektu",
                    "status": "success",
                    "description": "hotovo",
                    "sub": [
                        {
                            "title": "Informácia o schválení projektu",
                            "source": "https://zastupitelstvo.bratislava.sk/data/att/23543.pdf",
                            "status": "success",
                            "description": "berie na vedomie",
                            timeline: luxon.DateTime.fromISO("2017-12-07")
                        },
                        {
                            "title": "Zasadnutie komisie správy majetku a miestnych podnikov",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/Z%C3%A1pisnica-%C4%8D.7-janu%C3%A1r-2020.pdf",
                            "status": "success",
                            "description": "",
                            timeline: luxon.DateTime.fromISO("2020-01-20")
                        },
                        {
                            "title": "Zasadnutie komisie územného plánu, výstavby a rozvoja",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-21_overena.pdf",
                            "status": "success",
                            "description": "",
                            timeline: luxon.DateTime.fromISO("2020-01-21")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Medzin\u00E1rodn\u00FD projekt URBAN-E je zameran\u00FD na rozvoj elektromobility, podporu\n    roz\u0161irovania infra\u0161trukt\u00FAry elektronab\u00EDjac\u00EDch stan\u00EDc a prepojenia na in\u00E9 druhy dopravy, na\n    zni\u017Eovanie zne\u010Distenia ovzdu\u0161ia v hlavn\u00FDch mest\u00E1ch Slovinska, Chorv\u00E1tska a Slovenska \u2013 v\n    \u013Dub\u013Eane, Z\u00E1hrebe a Bratislave.\n    </p>\n    <p>\n    V r\u00E1mci navrhovan\u00E9ho projektu sa v mest\u00E1ch Bratislava, \u013Dub\u013Eana a Z\u00E1hreb postav\u00ED celkom\n    167 nab\u00EDjac\u00EDch stan\u00EDc pre elektromobily z toho 144 ks na striedav\u00FD pr\u00FAd AC (doba nabitia\n    v priebehu nieko\u013Ek\u00FDch hod\u00EDn) a 23 ks r\u00FDchlonab\u00EDjac\u00EDch stan\u00EDc na jednosmern\u00FD pr\u00FAd DC (doba\n    nabitia cca. 20 min\u00FAt). Pre mesto Bratislava je z toho napl\u00E1novan\u00FDch 50 ks AC a 5 ks DC\n    stan\u00EDc, ktor\u00FDch in\u0161tal\u00E1ciu zabezpe\u010D\u00ED kompletne Z\u00E1padoslovensk\u00E1 energetika. Nab\u00EDjacie\n    stanice bud\u00FA sp\u013A\u0148a\u0165 v\u0161etky zodpovedaj\u00FAce \u0161tandardy nab\u00EDjania (CCS, CHAdeMO, Typ 2)\n    a bud\u00FA plne interoperabiln\u00E9 v r\u00E1mci slovenskej aj celoeur\u00F3pskej siete nab\u00EDjac\u00EDch stan\u00EDc.\n    Zabezpe\u010D\u00ED sa tak okrem in\u00E9ho aj bezprobl\u00E9mov\u00E9 nab\u00EDjanie elektromobilov prich\u00E1dzaj\u00FAcich do\n    hlavn\u00E9ho mesta zo zahrani\u010Dia.\n    </p>\n    ";
    };
    return Template;
}());
module.exports = Template;

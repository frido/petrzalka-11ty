"use strict";
exports.__esModule = true;
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            "title": "Polyfunkčný dom Tematínska",
            "date": "2019-02-07",
            "tags": [
                "projekt"
            ],
            "layout": "layouts/post2.njk",
            "description": "Rekonštrukcia, prestavba a nadstavba v súčasnosti 2-podlažného objektu (pôvodná funkcia školstvo a vzdelávanie) na 3-podlažný polyfunkčný objekt (prechodné ubytovanie – 27 apartmánov a bývanie – 12 b. j.), s dopravným pripojením na priľahlú zaslepenú miestnu komunikáciu Tematínska ulica. Súčasťou dopravného riešenia stavby je aj riešenie statickej dopravy - parkovisko na teréne (37 státí) a parkovanie v hromadnej garáži na 1.NP (13 státí) ",
            "icon": "",
            "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=60157",
            "sources": [
                "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=60157",
                "https://zastupitelstvo.bratislava.sk/data/att/40163.pdf",
                "https://bratislava.blob.core.windows.net/media/Default/Dokumenty/Str%C3%A1nky/2018%20Pet%C3%ADcia%20proti%20v%C3%BDstavbe%20na%20Temat%C3%ADnskej%201.pdf",
                "https://docs.google.com/viewerng/viewer?url=https://www.petrzalka.sk/wp-content/uploads/2020/10/elektronick%C3%A9-zverejnenie-inform%C3%A1cie-v-zmysle-%C2%A7-82-ods.-3-zakona-V.D.-LAKE-1.pdf",
                "https://zastupitelstvo.bratislava.sk/mestske-zastupitelstvo-hlavneho-mesta-sr-bratislavy-zasadnutie-07022019/bod-35/"
            ],
            "amount": 0,
            "schedule": [
                {
                    "title": "Územné konanie",
                    "status": "error",
                    "description": "zamietnuté",
                    "sub": [
                        {
                            "title": "Petíciu proti výstavbe na Tematinskej 1",
                            "source": "https://zastupitelstvo.bratislava.sk/data/att/40163.pdf",
                            "status": "success",
                            "description": "odovzdaná",
                            "timelineDate": "2018-10-11"
                        },
                        {
                            "title": "Záväzné stanovisko hlavného mesta",
                            "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=60157",
                            "status": "error",
                            "description": "zamietnuté",
                            "timelineDate": "2019-01-17"
                        },
                        {
                            "title": "Uznesenie mestského zastupiteľstva",
                            "source": "https://zastupitelstvo.bratislava.sk/mestske-zastupitelstvo-hlavneho-mesta-sr-bratislavy-zasadnutie-07022019/bod-35/",
                            "status": "success",
                            "description": "berie na vedomie",
                            "timelineDate": "2019-02-07"
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Rekon\u0161trukcia, prestavba a nadstavba v s\u00FA\u010Dasnosti 2-podla\u017En\u00E9ho objektu (p\u00F4vodn\u00E1 funkcia \u0161kolstvo a vzdel\u00E1vanie) na 3-podla\u017En\u00FD polyfunk\u010Dn\u00FD objekt (prechodn\u00E9 ubytovanie \u2013 27 apartm\u00E1nov a b\u00FDvanie \u2013 12 b. j.), s dopravn\u00FDm pripojen\u00EDm na pri\u013Eahl\u00FA zaslepen\u00FA miestnu komunik\u00E1ciu Temat\u00EDnska ulica. S\u00FA\u010Das\u0165ou dopravn\u00E9ho rie\u0161enia stavby je aj rie\u0161enie statickej dopravy - parkovisko na ter\u00E9ne (37 st\u00E1t\u00ED) a parkovanie v hromadnej gar\u00E1\u017Ei na 1.NP (13 st\u00E1t\u00ED) \n    ";
    };
    return Template;
}());
module.exports = Template;

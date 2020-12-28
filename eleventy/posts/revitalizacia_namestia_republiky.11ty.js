"use strict";
exports.__esModule = true;
var projectAddon_1 = require("../addons/project/projectAddon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            "title": "Projekt revitalizácie Námestia Republiky",
            "date": "2020-07-14",
            "tags": [projectAddon_1.TAG_PROJECT],
            "layout": "layouts/post2.njk",
            "description": "V súčasnosti sa spevnená časť námestia využíva na spoločenské a kultúrne podujatia mestskej časti. Už tradične sa tu konajú navštevované Petržalské vianočné trhy. Plocha bývalého parkoviska susediaca s Chorvátskym ramenom slúži ako spomínaný skatepark. ",
            "icon": "/img/revitalizacia-namestia-republiky/revitalizacia-namestia-republiky.jpg",
            "sources": ["https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-14_overena.pdf"
            ],
            "amount": 0,
            "execution": [
                {
                    "title": "Analýza súčasného stavu",
                    "status": "success",
                    "description": "prebieha",
                    "startReal": "marec 2020",
                    "endExpected": "december 2020",
                    "sub": [
                        {
                            "title": "Analýza súčasného stavu",
                            "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                            "status": "inwork",
                            description: 'prebieha',
                            date: luxon.DateTime.fromISO("2020-03-01")
                        }
                    ]
                },
                {
                    "title": "Architektonická súťaž",
                    "status": "unknown",
                    "description": "",
                    "startExpected": "2021",
                    "endExpected": "2021/2022",
                    date: luxon.DateTime.fromISO("2021-01-01"),
                    "sub": [
                        {
                            "title": "Vypracovanie zadania architektonickej súťaže",
                            "status": "unknown",
                            description: '',
                            "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                            "startExpected": "2021",
                            "endExpected": "2021"
                        },
                        {
                            "title": "Vyhlásenie architektonickej súťaže",
                            "status": "unknown",
                            description: '',
                            "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                            "startExpected": "2021",
                            "endExpected": "2021"
                        },
                        {
                            "title": "Výsledky architektonickej súťaže",
                            "status": "unknown",
                            description: '',
                            "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                            "startExpected": "2021",
                            "endExpected": "2021/2022"
                        }
                    ]
                },
                {
                    "title": "Realizácia víťazného návrhu",
                    "status": "unknown",
                    description: '',
                    "startExpected": "2022",
                    "endExpected": "2026",
                    date: luxon.DateTime.fromISO("2022-01-01"),
                    "sub": [
                        {
                            "title": "Realizácia víťazného návrhu",
                            "status": "unknown",
                            description: '',
                            "source": "https://www.petrzalka.sk/projekt-revitalizacie-namestia-republiky/",
                            "startExpected": "2022",
                            "endExpected": "2026"
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    V s\u00FA\u010Dasnosti sa spevnen\u00E1 \u010Das\u0165 n\u00E1mestia vyu\u017E\u00EDva na spolo\u010Densk\u00E9 a kult\u00FArne podujatia mestskej \u010Dasti. U\u017E tradi\u010Dne sa tu konaj\u00FA nav\u0161tevovan\u00E9 Petr\u017Ealsk\u00E9 viano\u010Dn\u00E9 trhy. Plocha b\u00FDval\u00E9ho parkoviska susediaca s Chorv\u00E1tskym ramenom sl\u00FA\u017Ei ako spom\u00EDnan\u00FD skatepark. Priestor n\u00E1mestia v\u0161ak nem\u00E1 jasne zadefinovan\u00FA funkciu a vyu\u017Eitie. V\u00FDsledkom je do zna\u010Dnej miery zdevastovan\u00E9 a ch\u00E1traj\u00FAce \u00FAzemie, po\u0161kodzovan\u00E9 vandalmi. Aj obyvatelia ho vn\u00EDmaj\u00FA ako zanedban\u00E9. No jeho poloha, ve\u013Ekos\u0165 i pomerne jednoduch\u00FD pr\u00EDstup k elektrick\u00E9mu napojeniu mu poskytuj\u00FA ve\u013Ek\u00FD potenci\u00E1l do bud\u00FAcnosti, napr\u00EDklad na organizovanie \u010Fal\u0161\u00EDch spolo\u010Densk\u00FDch a kult\u00FArnych podujat\u00ED.\n    ";
    };
    return Template;
}());
module.exports = Template;

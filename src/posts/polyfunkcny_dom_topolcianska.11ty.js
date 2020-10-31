"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            "title": "Polyfunkčný dom Topoľčianska",
            "date": "2020-06-27",
            "tags": [
                "projekt"
            ],
            "layout": "layouts/post2.njk",
            "description": "Polyfunkčný objekt s prevládajúcou funkciou bývania (68 %) s 8 nadzemnými a 2 podzemnými podlažiami, dopravne prístupným cez jestvujúce miestne komunikácie. V objekte sú priestory obchodu (10), služieb, administratívy (16) a bývania (60). Navrhnuté sú 2 dopravné vjazdy – rampa do garáže na 1. a 2. podzemnom podlaží (78 parkovacích miest) a priamy vjazd na spevnenú plochu na teréne (20 parkovacích miest).",
            "icon": "/img/polyfunkcny-dom-topolcianska/Topolcianska_riesene_uzemie.jpg",
            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/uznesenia_04_02_2020opraven%C3%A9.pdf",
            "sources": [
                "https://www.enviroportal.sk/sk/eia/detail/polyfunkcny-dom-bratislava-petrzalka-topolcianska-ul-",
                "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=59362",
                "https://www.petrzalka.sk/wp-content/uploads/2020/02/Topolcianska_UR_PK_namietky_PET20200012217.pdf",
                "https://zastupitelstvo.bratislava.sk/data/att/41660.pdf",
                "https://bratislava.blob.core.windows.net/media/Default/Dokumenty/Str%C3%A1nky/2019%20Peticia%20proti%20vystavbe%20BD-Topolcianska.pdf",
                "https://www.petrzalka.sk/2018-10-31-polyfunkcny-bytovy-dom-topolcianska-bratislava/",
                "https://www.petrzalka.sk/2019-05-24-prezentacia-investicneho-zameru-polyfunkcny-dom-topolcianska/",
                "https://www.petrzalka.sk/wp-content/uploads/2019/03/Uznesenia-MZ-26.03.2019.pdf"
            ],
            gallery: [
                { link: "img/polyfunkcny-dom-topolcianska/Topolcianska_riesene_uzemie.jpg" }
            ],
            "amount": 0,
            "schedule": [
                {
                    "title": "Záväzné stanovisko",
                    "status": "success",
                    "description": "súhlasné",
                    "sub": [
                        {
                            "title": "Záväzné stanovisko hlavného mesta",
                            "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=59362",
                            "status": "success",
                            "description": "súhlasí",
                            timeline: luxon.DateTime.fromISO("2018-10-05")
                        },
                        {
                            "title": "Petícia proti výstavbe",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2019/03/1-MZ-peticia-Topolcianska.pdf",
                            "status": "success",
                            "description": "odovzdaná",
                            timeline: luxon.DateTime.fromISO("2019-02-28")
                        },
                        {
                            "title": "Uznesenie Miestneho zastupiteľstva",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2019/03/Uznesenia-MZ-26.03.2019.pdf",
                            "status": "success",
                            "description": "berie na vedomie",
                            timeline: luxon.DateTime.fromISO("2019-03-26")
                        },
                        {
                            "title": "Uznesenie Mestského zastupiteľstva",
                            "source": "https://zastupitelstvo.bratislava.sk/data/att/41660.pdf",
                            "status": "success",
                            "description": "berie na vedomie",
                            timeline: luxon.DateTime.fromISO("2019-04-25")
                        }
                    ]
                },
                {
                    "title": "Územné konanie",
                    "status": "pause",
                    "description": "prerušené",
                    "sub": [
                        {
                            "title": "Začatie územného konania",
                            "source": "https://www.petrzalka.sk/2020-03-04-uzemne-konania/",
                            "status": "success",
                            "description": "berie na vedomie",
                            timeline: luxon.DateTime.fromISO("2020-01-07")
                        },
                        {
                            "title": "Uznesenie Miestneho zastupiteľstva",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/uznesenia_04_02_2020opraven%C3%A9.pdf",
                            "status": "success",
                            "description": "berie na vedomie",
                            timeline: luxon.DateTime.fromISO("2020-02-04")
                        },
                        {
                            "title": "Prerušenie územného konania",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/Topolcianska_UR_PK_namietky_PET20200012217.pdf",
                            "status": "inwork",
                            "description": "prerušuje",
                            timeline: luxon.DateTime.fromISO("2020-02-17")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Polyfunk\u010Dn\u00FD objekt s prevl\u00E1daj\u00FAcou funkciou\n    b\u00FDvania (68 %) s 8 nadzemn\u00FDmi a 2 podzemn\u00FDmi podla\u017Eiami, dopravne pr\u00EDstupn\u00FDm cez jestvuj\u00FAce\n    miestne komunik\u00E1cie. V objekte s\u00FA priestory obchodu (10), slu\u017Eieb, administrat\u00EDvy (16) a b\u00FDvania\n    (60). Navrhnut\u00E9 s\u00FA 2 dopravn\u00E9 vjazdy \u2013 rampa do gar\u00E1\u017Ee na 1. a 2. podzemnom podla\u017E\u00ED (78\n    parkovac\u00EDch miest) a priamy vjazd na spevnen\u00FA plochu na ter\u00E9ne (20 parkovac\u00EDch miest). \n    </p>\n    <p>\n    \u00DAzemie je s\u00FA\u010Das\u0165ou aktu\u00E1lne spracov\u00E1vanej urbanistickej \u0161t\u00FAdie centr\u00E1lnej rozvojovej osi (CRO)\n    Petr\u017Ealky. Pripravovan\u00E1 \u0161t\u00FAdia sa zaober\u00E1 prehodnoten\u00EDm rozvoja \u00FAzemia pozd\u013A\u017E severoju\u017Enej osi\n    okolo Chorv\u00E1tskeho ramena v Mestskej \u010Dasti Bratislava-Petr\u017Ealka a n\u00E1vrhom zmien a doplnkov\n    \u00DAPN 2007 HM SR Bratislavy v znen\u00ED zmien a doplnkov v danej lokalite.\n    </p>\n    <p>\n    Predlo\u017Een\u00FD IZ s prihliadnut\u00EDm na majetko-pr\u00E1vne vz\u0165ahy v \u00FAzem\u00ED nebr\u00E1ni rozvoju \u00FAzemia v zmysle\n    pripravovanej urbanistickej \u0161t\u00FAdie Centr\u00E1lnej rozvojovej osi Petr\u017Ealka (\u010Falej CRO). Objekt svojou\n    hmotou a \u00FApravou okolia neblokuje z\u00E1mery v zmysle pripravovanej \u0161t\u00FAdie CRO a Navrhovan\u00E9\n    komunik\u00E1cie a plochy situuje v r\u00E1mci parcely vo vlastn\u00EDctve predkladate\u013Ea. \n    </p>\n    ";
    };
    return Template;
}());
module.exports = Template;

"use strict";
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            "title": "Šrobárovo námestie",
            "date": "2020-08-17",
            "description": "Idea zriadenia verejného parku s výsadbou zelene a cvičebnými prvkami na Šrobárovom námestí",
            "icon": "/img/srobarovo-namestie/peticia.jpeg",
            gallery: [
                { link: 'img/srobarovo-namestie/peticia.jpeg' }
            ],
            "tags": [project_addon_1.TAG_PROJECT],
            "layout": project_addon_1.LAYOUT_PROJECT,
            "sources": [
                "https://www.enviroportal.sk/sk_SK/eia/detail/vista-tower-polyfunkcny-objekt-srobarovo-namestie-ba-petrzalka",
                "http://www.vistatower.com/_sk/poloha.html"
            ],
            "execution": [
                {
                    "title": "Príprava projektu",
                    "status": "inwork",
                    "description": "prebieha",
                    "startReal": "2016",
                    "sub": [
                        {
                            "title": "Petícia za verejný park",
                            "source": "http://www.ekoforum.sk/peticia/park-petrzalka",
                            "status": "success",
                            "description": "odovzdaná",
                            date: luxon.DateTime.fromISO("2018-09-14")
                        },
                        {
                            "title": "Prerokovanie petície",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2018/09/23_Prerokovanie-peticie-Srobarovo-park.pdf",
                            "status": "success",
                            "description": "vyhovuje",
                            date: luxon.DateTime.fromISO("2018-09-25")
                        },
                        {
                            "title": "Zasadnutie komisie MZ",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-14_overena.pdf",
                            "status": "success",
                            "description": "schválené.",
                            date: luxon.DateTime.fromISO("2020-01-14")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Idea zriadenia verejn\u00E9ho parku s v\u00FDsadbou zelene a cvi\u010Debn\u00FDmi prvkami na \u0160rob\u00E1rovom n\u00E1mest\u00ED\n    ";
    };
    return Template;
}());
module.exports = Template;

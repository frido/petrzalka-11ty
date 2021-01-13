"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Template.prototype.data = function () {
        return this.frontMatterWrapper({
            "title": "Šrobárovo námestie",
            "date": "2021-01-07",
            "description": "Mestská časť plánuje v priestore Šrobárovho námestia vysadiť približne 50 stromov. Ďalšie úpravy verejného priestoru sa týkajú rekonštrukcie chodníkov. Súčasťou bude aj ich rozšírenie. Následne pôjde o výmenu mobiliáru (lavičky, koše). Pribudne psí výbeh na odhľahlejšom pozemku, pitná fontánka a street-workoutové  ihrisko v areály školy.  V ďalšej etape je naplánovaná obnova tartanovej dráhy. Cieľom celej revitalizácie námestia je zachovanie najmä parkového charakteru.  Na stretnutí svoje námietky predostreli občania z priľahlého bytového domu so zástupcami mestskej časti, ktorí požadovali vynechanie pavilónu z projektovej dokumentácie.",
            "icon": "/img/srobarovo-namestie/2.png",
            gallery: [
                { link: 'img/srobarovo-namestie/peticia.jpeg' },
                { link: 'img/srobarovo-namestie/1.png' },
                { link: 'img/srobarovo-namestie/2.png' },
                { link: 'img/srobarovo-namestie/3.png' },
                { link: 'img/srobarovo-namestie/4.png' },
                { link: 'img/srobarovo-namestie/5.png' }
            ],
            "sources": [
                "https://www.enviroportal.sk/sk_SK/eia/detail/vista-tower-polyfunkcny-objekt-srobarovo-namestie-ba-petrzalka",
                "http://www.vistatower.com/_sk/poloha.html"
            ],
            source: 'https://www.petrzalka.sk/2021-01-05-na-srobarovom-namesti-vznikne-novy-zeleny-priestor/',
            budgetRef: '2021-22',
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
        });
    };
    Template.prototype.render = function (data) {
        return "\n    Mestsk\u00E1 \u010Das\u0165 pl\u00E1nuje v priestore \u0160rob\u00E1rovho n\u00E1mestia vysadi\u0165 pribli\u017Ene 50 stromov. \u010Eal\u0161ie \u00FApravy verejn\u00E9ho priestoru sa t\u00FDkaj\u00FA rekon\u0161trukcie chodn\u00EDkov. S\u00FA\u010Das\u0165ou bude aj ich roz\u0161\u00EDrenie. N\u00E1sledne p\u00F4jde o v\u00FDmenu mobili\u00E1ru (lavi\u010Dky, ko\u0161e). Pribudne ps\u00ED v\u00FDbeh na odh\u013Eahlej\u0161om pozemku, pitn\u00E1 font\u00E1nka a street-workoutov\u00E9  ihrisko v are\u00E1ly \u0161koly.  V \u010Fal\u0161ej etape je napl\u00E1novan\u00E1 obnova tartanovej dr\u00E1hy. Cie\u013Eom celej revitaliz\u00E1cie n\u00E1mestia je zachovanie najm\u00E4 parkov\u00E9ho charakteru.  Na stretnut\u00ED svoje n\u00E1mietky predostreli ob\u010Dania z pri\u013Eahl\u00E9ho bytov\u00E9ho domu so z\u00E1stupcami mestskej \u010Dasti, ktor\u00ED po\u017Eadovali vynechanie pavil\u00F3nu z projektovej dokument\u00E1cie.\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

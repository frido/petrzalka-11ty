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
            title: "Polyfunkčný komplex Muchovo námestie",
            date: "2021-04-03",
            description: "Umiestnenie polyfunkčného komplexu budov s 8 nadzemnými podlažiami, s funkciou náhradného a nájomného bývania a prechodného ubytovania v dvoch etapách. V I. etape doskový objekt bytového domu s dvoma sekciami - nájomné bývanie – náhradné bývanie s občianskou vybavenosťou v parteri. V II. etape – garni hotel, 63 izieb/154 lôžok, vrátane doplnkových funkcií obchodu a služieb v parteri.",
            "icon": "img/polyfunkcny_komplex_muchovo_namestie/1.png",
            gallery: [
                { link: 'img/polyfunkcny_komplex_muchovo_namestie/1.png' }
            ],
            source: "https://www.enviroportal.sk/eia/dokument/317714?uid=f6508f5f61a8c5172760d7d6fc49c0922999a7f9",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=73878",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2021-01-25")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Umiestnenie polyfunk\u010Dn\u00E9ho komplexu budov s 8 nadzemn\u00FDmi \npodla\u017Eiami, s funkciou n\u00E1hradn\u00E9ho a n\u00E1jomn\u00E9ho b\u00FDvania a prechodn\u00E9ho ubytovania v dvoch \netap\u00E1ch. V I. etape doskov\u00FD objekt bytov\u00E9ho domu s dvoma sekciami - n\u00E1jomn\u00E9 b\u00FDvanie, n\u00E1hradn\u00E9 b\u00FDvanie s ob\u010Dianskou vybavenos\u0165ou v parteri. V II. etape - garni hotel, 63 izieb/154 l\u00F4\u017Eok, vr\u00E1tane doplnkov\u00FDch funkci\u00ED obchodu a slu\u017Eieb v parteri.\nPriestor medzi bytov\u00FDm domom a objektom garni hotela je koncipovan\u00FD ako n\u00E1mestie vo v\u00E4zbe na\nob\u010Diansku vybavenos\u0165 a zelen\u00FD vn\u00FAtroblok. Investi\u010Dn\u00FD z\u00E1mer je situovan\u00FD v lokalite Muchovho \nn\u00E1mestia, na pozemku, ohrani\u010Denom ulicami \u010Cerny\u0161evsk\u00E9ho, na ju\u017Enej strane sa nach\u00E1dza \nparkovisko supermarketu Billa a v\u00FDchodn\u00FA hranicu lemuje nov\u00FD bytov\u00FD dom a priemyseln\u00FD are\u00E1l.\n<p/><p>\nDopravn\u00E1 obsluha je rie\u0161en\u00E1 z pri\u013Eahlej miestnej obslu\u017Enej komunik\u00E1cie \u010Cerny\u0161evsk\u00E9ho ulice. \nS\u00FA\u010Das\u0165ou je aj rie\u0161enie statickej dopravy, spolu v kone\u010Dnej f\u00E1ze v\u00FDstavby 283 PM: pre I. etapu na \nparkovisk\u00E1ch A, B, C a D na ter\u00E9ne, ktor\u00E9 s\u00FA umiest\u0148ovan\u00E9 v doch\u00E1dzkovej vzdialenosti v r\u00F4znych \npoloh\u00E1ch v dotknutom \u00FAzem\u00ED stavby a pre II. etapu aj v hromadnej gar\u00E1\u017Ei, integrovanej do objektu \nhotela (zru\u0161\u00ED sa parkovisko B), pri\u010Dom predmetom rie\u0161enia je aj n\u00E1hrada/premiestnenie jestvuj\u00FAcich \nparkovac\u00EDch miest v \u00FAzem\u00ED. Vlastn\u00E1 potreba statickej dopravy z\u00E1meru pre I. a II. etapu je 175 PM.</p>";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

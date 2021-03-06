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
            title: "Hotel Sphinx",
            date: "2020-11-11",
            description: "Hotel bude čiastočne podpivničený, s 8 nadzemnými podlažiami, z toho 2 ustúpené. V objekte sa nachádza raňajkáreň/kaviareň, recepcia, 2 byty, 16 hotelových izieb a prislúchajúce zázemie hotela.",
            icon: "img/hotel_sphinx/2.png",
            gallery: [
                { link: 'img/hotel_sphinx/1.png' },
                { link: 'img/hotel_sphinx/2.png' },
                { link: 'img/hotel_sphinx/3.png' },
                { link: 'img/hotel_sphinx/4.jpg' }
            ],
            source: "https://www.petrzalka.sk/wp-content/uploads/2019/09/KUPVaD_09-10_bod-10_Hotel_Sphinx-Kopcianska.pdf",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZSHM,
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68661",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-05-11")
                        },
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZKMZ,
                            source: "https://www.petrzalka.sk/wp-content/uploads/2019/09/KUPVaD-zapisnica_2019-09-10_overena.pdf",
                            status: "error",
                            description: "neschválené",
                            date: luxon.DateTime.fromISO("2019-09-10")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Projekt rie\u0161i umiestnenie stavby hotela v lokalite na Kop\u010Dianskej ulici,\n    v s\u00FA\u010Dasnosti zastavan\u00FDm b\u00FDvalou v\u00FDrobnou halou, ktor\u00E1 bude asanovan\u00E1. Hotel bude \u010Diasto\u010Dne\n    podpivni\u010Den\u00FD, s 8 nadzemn\u00FDmi podla\u017Eiami, z toho 2 ust\u00FApen\u00E9. V objekte sa nach\u00E1dza\n    ra\u0148ajk\u00E1re\u0148/kaviare\u0148, recepcia, 2 byty, 16 hotelov\u00FDch izieb a prisl\u00FAchaj\u00FAce z\u00E1zemie hotela.\n    </p><p>\n    Dopravn\u00FD pr\u00EDstup k objektu je uva\u017Eovan\u00FD z pri\u013Eahlej komunik\u00E1cie Kop\u010Dianska ulica vyu\u017Eit\u00EDm\n    jestvuj\u00FAceho dopravn\u00E9ho pripojenia a upraven\u00FDch are\u00E1lov\u00FDch komunik\u00E1ci\u00ED na pozemkoch investora\n    v susednom are\u00E1li skladov, v ktorom je rie\u0161en\u00E1 aj statick\u00E1 doprava pre potreby hotela v po\u010Dte 18\n    PM (SO 03 Cesty a spevnen\u00E9 plochy). Ako s\u00FA\u010Das\u0165 stavby bude pred objektom hotela priamo na\n    Kop\u010Dianskej ulici vybudovan\u00E9 miesto pre kr\u00E1tkodob\u00E9 zastavenie motorov\u00E9ho vozidla (taxi), vr\u00E1tane\n    \u00FApravy pri\u013Eahl\u00E9ho chodn\u00EDka a cyklotrasy (SO 02 \u00DAprava chodn\u00EDka a cyklotrasy).\n    </p>\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

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
            title: "Revitalizácia okolia Pamätníka obetiam extrémizmu",
            date: "2021-04-03",
            description: "Revitalizácia okolia jestvujúceho pamätníka obetiam extrémizmu. Prioritou návrhu je zachovať pietny charakter priestoru, zdôrazniť prítomnosť pamätníka a podporiť jeho pôsobenie v priestore. Aktuálne je verejná plocha v okolí pamätníka využívaná na neorganizované parkovanie, avšak neevidujeme žiadny projekt, ktorým by bola táto činnosť resp. funkčné využívanie plochy legislatívne potvrdené.",
            "icon": "/img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/1.jpg",
            gallery: [
                { link: 'img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/1.jpg' },
                { link: 'img/revitalizacia_okolia_pamatnika_obetiam_extremizmu/2.jpg' }
            ],
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=73956",
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
        return "\n    Revitaliz\u00E1cia okolia jestvuj\u00FAceho pam\u00E4tn\u00EDka obetiam extr\u00E9mizmu. \nPrioritou n\u00E1vrhu je zachova\u0165 pietny charakter priestoru, zd\u00F4razni\u0165 pr\u00EDtomnos\u0165 pam\u00E4tn\u00EDka a podpori\u0165 \njeho p\u00F4sobenie v priestore. Aktu\u00E1lne je verejn\u00E1 plocha v okol\u00ED pam\u00E4tn\u00EDka vyu\u017E\u00EDvan\u00E1 na \nneorganizovan\u00E9 parkovanie, av\u0161ak neevidujeme \u017Eiadny projekt, ktor\u00FDm by bola t\u00E1to \u010Dinnos\u0165 resp. \nfunk\u010Dn\u00E9 vyu\u017E\u00EDvanie plochy legislat\u00EDvne potvrden\u00E9.\nN\u00E1vrh eliminuje plochu existuj\u00FAcej spevnenej plochy na \u00FAkor vegeta\u010Dn\u00FDch \u00FAprav, pri\u010Dom predklad\u00E1 \netapiz\u00E1ciu projektu pre postupn\u00FA adapt\u00E1ciu upraven\u00E9ho priestoru. Navrhnut\u00E9 \u010Dlenenie priestoru je \novplyvnen\u00E9 existuj\u00FAcimi napojeniami a vstupmi do \u00FAzemia, priestor je vy\u010Dlenen\u00FD dvoma \npret\u00EDnaj\u00FAcimi sa pe\u0161\u00EDmi trasami, ktor\u00E9 vymedzuj\u00FA centr\u00E1lny priestor v bode ich kri\u017Eovania, \ndefinovanom v mieste osadenia pam\u00E4tn\u00EDka. V r\u00E1mci revitaliz\u00E1cie bude upraven\u00FD ter\u00E9n, realizovan\u00E9 \nsadov\u00E9 \u00FApravy, umiestnen\u00E9 mobili\u00E1rov\u00E9 prvky (bet\u00F3nov\u00E9 sed\u00E1ky, lavi\u010Dky, odpadkov\u00E9 ko\u0161e, \nosvetlenie, at\u010F.). V I. etape je ponechan\u00E1 a upraven\u00E1 spevnen\u00E1 plocha pre parkovanie, jasne\ndefinovan\u00E1 a pomocou v\u00FDsadby oddelen\u00E1 od kontaktu s pam\u00E4tn\u00EDkom. V II. etape sa t\u00E1to plocha \nzatr\u00E1vni, l\u00EDnie chodn\u00EDkov sa pred\u013A\u017Eia a napoja na komunik\u00E1cie (promen\u00E1da pri Dunaji a vstup na \nTyr\u0161ovo n\u00E1bre\u017Eie od divadla Ar\u00E9na).";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

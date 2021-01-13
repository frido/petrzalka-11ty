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
            title: "Golfvillage ",
            date: "2020-11-07",
            description: "Dokumentácia sa funkciou, usporiadaním a kapacitou obytnej zóny zaoberá iba schematicky, riešením je návrh komunikačnej siete zóny s dopravným pripojením na nadradenú komunikačnú sieť (cestu I/2) cez miestnu komunikáciu vo výstavbe (FT C3 – vetva Y – vydané je stavebné povolenie) pre susednú dočasnú stavbu golfového klubu Energau. ",
            icon: "",
            gallery: [
                { link: "img/golfvillage_janikovske_pole/1.jpg" },
                { link: "img/golfvillage_janikovske_pole/2.jpg" },
                { link: "img/golfvillage_janikovske_pole/3.jpg" },
            ],
            sources: [
                "https://www.petrzalka.sk/wp-content/uploads/2017/07/Golfvillage_Janikovske-pole.pdf",
                "https://www.petrzalka.sk/golfvillage-infrastruktura-jarovce-petrzalka/"
            ],
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZKMZ,
                            source: "https://www.petrzalka.sk/wp-content/uploads/2017/05/Zapisnica_UPVaD_19_6_2017.pdf",
                            status: "error",
                            description: "nebolo schválené",
                            date: luxon.DateTime.fromISO("2017-06-17")
                        },
                        {
                            title: project_addon_1.EXE_SUB_TITLE_ZSHM,
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=38329",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2015-11-18")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Dokument\u00E1cia sa funkciou, usporiadan\u00EDm a kapacitou obytnej z\u00F3ny zaober\u00E1 iba schematicky,\n    rie\u0161en\u00EDm je n\u00E1vrh komunika\u010Dnej siete z\u00F3ny s dopravn\u00FDm pripojen\u00EDm na nadraden\u00FA komunika\u010Dn\u00FA\n    sie\u0165 (cestu I/2) cez miestnu komunik\u00E1ciu vo v\u00FDstavbe (FT C3 \u2013 vetva Y \u2013 vydan\u00E9 je stavebn\u00E9\n    povolenie) pre susedn\u00FA do\u010Dasn\u00FA stavbu golfov\u00E9ho klubu Energau.\n    </p><p>\n    Komunika\u010Dn\u00E1 sie\u0165 obytnej z\u00F3ny je tvoren\u00E1 sie\u0165ou miestnych komunik\u00E1ci\u00ED funk\u010Dnej triedy B2\n    (navrhnut\u00E1 kateg\u00F3ria MZ 13,5) \u2013 vetva A (s do\u010Dasn\u00FDm obratiskom pre autobusov\u00FA MHD), funk\u010Dnej\n    triedy C2 (navrhnut\u00E9 kateg\u00F3rie MOU 7,5) \u2013 vetvy B, C, K, funk\u010Dnej triedy D1 - vetvy D, E, F, G,\n    H1, H2, I, J a pri\u013Eahl\u00FDmi resp. samostatn\u00FDmi chodn\u00EDkmi; schematick\u00E9 usporiadanie bud\u00FAcej\n    z\u00E1stavby umo\u017E\u0148uje v\u00FDh\u013Eadov\u00E9 pred\u013A\u017Eenie vetvy A a B do susedn\u00E9ho \u00FAzemia.\n    </p><p>\n    Statick\u00E1 doprava pre bud\u00FAcu z\u00E1stavbu sa uva\u017Euje pre funkciu b\u00FDvania v rodinn\u00FDch domoch v\u00FDlu\u010Dne\n    v r\u00E1mci vlastn\u00FDch pozemkov, v hromadn\u00FDch gar\u00E1\u017Each integrovan\u00FDch do polyfunk\u010Dn\u00FDch objektov\n    a vytvoren\u00EDm exteri\u00E9rov\u00FDch parkovac\u00EDch miest v r\u00E1mci hlavn\u00E9ho dopravn\u00E9ho priestoru zbernej\n    komunik\u00E1cie (vetva A). Konkr\u00E9tne rie\u0161enie statickej dopravy nie je predmetom predlo\u017Eenej\n    dokument\u00E1cie, n\u00E1roky bud\u00FA bilancovan\u00E9 v samostatn\u00FDch dokument\u00E1ci\u00E1ch.\n    </p><p>\n    Pod\u013Ea tabu\u013Eky predpokladan\u00FDch kapac\u00EDt \u00FAzemia v obytnej z\u00F3ne bude 54 RD, bytov\u00E9 domy (289\n    b.j.), ob\u010Dianska vybavenos\u0165 (149 zamestnancov, 14 822 m2 \u00FA\u017Eitkovej plochy) \n    </p>\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

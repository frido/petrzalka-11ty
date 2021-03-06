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
            "title": "Škola Južné mesto",
            "date": "2020-07-29",
            "description": "Škola je situovaná v rozvojovom území na pozemku s funkčným využitím občianska vybavenosť celomestského a nadmestského významu kód 201, severozápadná časť budovy je umiestňovaná na hranicu funkčnej plochy sadovnícke a lesoparkové úpravy, kód funkcie 1110. Návrh plôch pre školskú telesnú výchovu a šport je riešený ako športový areál s bežeckým oválom 250 m + 100 m dráhou a multifunkčným ihriskom 20 x 40 m. ",
            "icon": "/img/skola-juzne-mesto/4.jpg",
            gallery: [
                { link: 'img/skola-juzne-mesto/1.jpg' },
                { link: 'img/skola-juzne-mesto/2.jpg' },
                { link: 'img/skola-juzne-mesto/3.jpg' },
                { link: 'img/skola-juzne-mesto/4.jpg' }
            ],
            "sources": [
                "https://www.petrzalka.sk/wp-content/uploads/2020/03/KUPVaR-zapisnica_2020-03-03_overena.pdf",
                "https://www.enviroportal.sk/sk/eia/detail/skola-juzne-mesto-bratislava-petrzalka-",
                "https://www.petrzalka.sk/wp-content/uploads/2017/12/EIA_skola_Juzne_mesto.pdf",
                "https://www.minzp.sk/uradna-tabula/vody/skola-juzne-mesto-bratislava-petrzalka.html"
            ],
            "execution": [
                {
                    "title": project_addon_1.EXE_TITLE_UK,
                    "status": "success",
                    "description": "hotovo",
                    "sub": [
                        {
                            "title": "Investičný zámer",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2018/02/Skola_Juzne_mesto.pdf",
                            "status": "success",
                            description: '',
                            date: luxon.DateTime.fromISO("2018-02-01")
                        },
                        {
                            "title": "Záväzné stanovisko",
                            "source": "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=66735",
                            "status": "success",
                            description: 'súhlasí',
                            date: luxon.DateTime.fromISO("2020-01-24")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <ul>\n      <li>z\u00E1kladn\u00E1 \u0161kola \u2013 kompletn\u00FDch 47 tried - 940 \u017Eiakov</li>\n      <li>stredn\u00E1 \u0161kola \u2013 po\u010Det tried 12 - 240 \u017Eiakov</li>\n      <li>matersk\u00E1 \u0161kola \u2013 po\u010Det tried 3 - 60 \u017Eiakov</li>\n    </ul>\n    <p>\n    Spolu 1 240 det\u00ED. \u0160kola je situovan\u00E1 v rozvojovom\n    \u00FAzem\u00ED na pozemku s funk\u010Dn\u00FDm vyu\u017Eit\u00EDm ob\u010Dianska vybavenos\u0165 celomestsk\u00E9ho a nadmestsk\u00E9ho\n    v\u00FDznamu k\u00F3d 201, severoz\u00E1padn\u00E1 \u010Das\u0165 budovy je umiest\u0148ovan\u00E1 na hranicu funk\u010Dnej plochy\n    sadovn\u00EDcke a lesoparkov\u00E9 \u00FApravy, k\u00F3d funkcie 1110. N\u00E1vrh pl\u00F4ch pre \u0161kolsk\u00FA telesn\u00FA v\u00FDchovu\n    a \u0161port je rie\u0161en\u00FD ako \u0161portov\u00FD are\u00E1l s be\u017Eeck\u00FDm ov\u00E1lom 250 m + 100 m dr\u00E1hou a multifunk\u010Dn\u00FDm\n    ihriskom 20 x 40 m. \u0160portov\u00FD are\u00E1l je z preva\u017Enej \u010Dasti situovan\u00FD na pozemku s funk\u010Dn\u00FDm vyu\u017Eit\u00EDm\n    ob\u010Dianska vybavenos\u0165 celomestsk\u00E9ho a nadmestsk\u00E9ho v\u00FDznamu k\u00F3d 201, mal\u00E1 \u010Das\u0165 na pozemku\n    s funk\u010Dn\u00FDm vyu\u017Eit\u00EDm viacpodla\u017En\u00E1 z\u00E1stavba obytn\u00E9ho \u00FAzemia, \u010D\u00EDslo funkcie 101 a do \u00FAzemia so\n    stanoven\u00FDm funk\u010Dn\u00FDm vyu\u017Eit\u00EDm parky, sadovn\u00EDcke a lesoparkov\u00E9 \u00FApravy k\u00F3d funkcie 1110\n    zasahuje \u010Das\u0165ou be\u017Eeck\u00E9ho ov\u00E1lu\n    </p>\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

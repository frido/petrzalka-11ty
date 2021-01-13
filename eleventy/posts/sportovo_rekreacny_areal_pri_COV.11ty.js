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
            "title": "Športovo Rekreačný Areál Pri ČOV",
            "date": "2020-06-14",
            "description": "Zámerom urbanistického návrhu je športovo-rekreačný kampus, výškovo diferencovaná krajina s halovými športovými objektmi, externými športoviskami, zariadeniami občianskej vybavenosti nadväzujúcimi na hlavnú funkciu /napr. ubytovne, hotely, penzióny/ a pobytovou a parkovou zeleňou",
            "icon": "/img/sportovo_rekreacny_areal_pri_COV/image--000.jpg",
            gallery: [
                {
                    link: 'img/sportovo_rekreacny_areal_pri_COV/image--000.jpg',
                    title: 'Variant A'
                },
                {
                    link: 'img/sportovo_rekreacny_areal_pri_COV/image--001.jpg',
                    title: 'Variant B'
                }
            ],
            "sources": [
                "https://www.petrzalka.sk/wp-content/uploads/2020/01/z%C3%A1pisnica-K%C5%BDP-23.1.2020.pdf",
                "https://www.petrzalka.sk/wp-content/uploads/2020/02/KUPVaR-zapisnica_2020-01-21_overena.pdf",
                "https://www.petrzalka.sk/wp-content/uploads/2020/02/z%C3%A1pis-z-komisie-29-1.2020.pdf"
            ],
            "execution": [
                {
                    "title": "Urbanistický návrh",
                    "status": "inwork",
                    "description": "prebieha",
                    "sub": [
                        {
                            "title": "Materiál na rokovanie MZ",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/01/Info.-3.-%C5%A1portovo-rekrea%C4%8Dn%C3%BD-are%C3%A1l-pri-%C4%8COV-MZ.pdf",
                            "status": "success",
                            "description": "",
                            date: luxon.DateTime.fromISO("2020-02-04")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Rie\u0161en\u00E9 \u00FAzemie urbanistickej \u0161t\u00FAdie sa nach\u00E1dza v\u00FDchodne od Dolnozemskej cesty. Jej\n    priestorov\u00E9 ohrani\u010Denie tvor\u00ED: Betliarska ulica, resp. Sitnianska ulica, Dolnozemsk\u00E1 cesta,\n    vozov\u0148a Petr\u017Ealka, vr\u00E1tane pr\u00EDstupovej komunik\u00E1cie, miestna komunik\u00E1cia k \u010COV, resp.\n    parcely v r\u00E1mci funk\u010Dnej plochy vo vlastn\u00EDctve V\u00DAC.\n    </p>\n    <p>\n    Z\u00E1merom urbanistick\u00E9ho n\u00E1vrhu je \u0161portovo-rekrea\u010Dn\u00FD kampus, v\u00FD\u0161kovo\n    diferencovan\u00E1 krajina s halov\u00FDmi \u0161portov\u00FDmi objektmi, extern\u00FDmi \u0161portoviskami,\n    zariadeniami ob\u010Dianskej vybavenosti nadv\u00E4zuj\u00FAcimi na hlavn\u00FA funkciu /napr. ubytovne,\n    hotely, penzi\u00F3ny/ a pobytovou a parkovou zele\u0148ou. \u00DAzemie je urbanisticky \u010Dlenen\u00E9 na severn\u00FA\n    \u010Das\u0165 /z\u00F3na D/ a ju\u017En\u00FA \u010Das\u0165 /z\u00F3na E/.\n    </p>\n    <p>\n    Spracovate\u013Eom urbanistickej \u0161t\u00FAdie je spolo\u010Dnos\u0165 MV ARCHITECTURE s.r.o.,\n    Bratislava. BSK zabezpe\u010Duje prerokovanie \u0161t\u00FAdie prostredn\u00EDctvom Ing. arch. Jany Zl\u00E1malovej,\n    odborne sp\u00F4sobilej osoby pre obstar\u00E1vanie \u00DAPP a \u00DAPD.\n    </p>\n    <p>\n    Urbanistick\u00E1 \u0161t\u00FAdia je spracovan\u00E1 v dvoch variantoch \u201EA\u201C a \u201EB\u201C. Variantn\u00E9 rie\u0161enie\n    vych\u00E1dza zo zadania Bratislavsk\u00E9ho samospr\u00E1vneho kraja, ktor\u00E9 pre \u0165a\u017Eiskov\u00E9 \u00FAzemie\n    urbanistick\u00E9ho bloku E2 ju\u017En\u00E9ho sektoru /vo vlastn\u00EDctve BSK/ po\u017Eaduje overenie umiestnenia\n    mestsk\u00E9ho pobytov\u00E9ho parku so \u0161portovo-rekrea\u010Dnou funkciou.\n    </p>\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

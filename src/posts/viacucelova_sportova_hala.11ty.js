"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Viacúčelová športová hala – univerzitné športové centrum pri EU",
            date: "2020-11-02",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "Viacúčelová športová hala bude mať hraciu plochu minimálne 42x24 metrov s grafickým vyznačením viacerých ihrísk pre rôzne športy (volejbal, basketbal, futsal, florbal, hádzaná či bedminton), 8 šatní s celkovou kapacitou 130 športovcov, šatňami pre trénerov a rozhodcov a taktiež priestory pre relax a regeneráciu športovcov.",
            icon: "/img/viacucelova_sportova_hala/usmiestnenie.jpg",
            gallery: [
                { link: "/img/viacucelova_sportova_hala/usmiestnenie.jpg" },
                { link: "/img/viacucelova_sportova_hala/lokalizacia.jpg" },
            ],
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "success",
                    description: "súhlasí",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-08-25")
                        },
                    ]
                },
                {
                    title: "Územné konanie",
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: "Územné konanie",
                            source: "https://www.petrzalka.sk/viacucelova-sportova-hala-univerzitne-sportove-centrum-pri-eu-v-bratislave/",
                            status: "success",
                            description: "začiatok",
                            timeline: luxon.DateTime.fromISO("2020-07-28")
                        },
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Viac\u00FA\u010Delov\u00E1 \u0161portov\u00E1 hala bude ma\u0165 hraciu plochu minim\u00E1lne 42x24 metrov s grafick\u00FDm vyzna\u010Den\u00EDm viacer\u00FDch ihr\u00EDsk pre r\u00F4zne \u0161porty (volejbal, basketbal, futsal, florbal, h\u00E1dzan\u00E1 \u010Di bedminton), 8 \u0161atn\u00ED s celkovou kapacitou 130 \u0161portovcov, \u0161at\u0148ami pre tr\u00E9nerov a rozhodcov a taktie\u017E priestory pre relax a regener\u00E1ciu \u0161portovcov. V\u00FDh\u013Eadov\u00E1 kapacita h\u013Eadiska je 700 \u2013 750 miest. Hala bude po dokon\u010Den\u00ED sl\u00FA\u017Ei\u0165 pre potreby v\u00FDuky a rozvoja \u0161portov\u00FDch a pohybov\u00FDch aktiv\u00EDt \u0161tudentov EU v Bratislave, pre potreby \u0161portovej reprezent\u00E1cie a organizovanie v\u00FDznamn\u00FDch n\u00E1rodn\u00FDch a medzin\u00E1rodn\u00FDch \u0161portov\u00FDch podujat\u00ED v halov\u00FDch \u0161portoch. Predpokladan\u00E9 investi\u010Dn\u00E9 n\u00E1klady na realiz\u00E1ciu stavby s\u00FA odhadovan\u00E9 v celkovej hodnote 2,28 mil. Eur bez dane. V\u00FDstavba by mala by\u0165 ukon\u010Den\u00E1 v decembri 2021.\n    ";
    };
    return Template;
}());
module.exports = Template;

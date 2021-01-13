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
            title: "Viacúčelová športová hala – univerzitné športové centrum pri EU",
            date: "2020-11-02",
            description: "Viacúčelová športová hala bude mať hraciu plochu minimálne 42x24 metrov s grafickým vyznačením viacerých ihrísk pre rôzne športy (volejbal, basketbal, futsal, florbal, hádzaná či bedminton), 8 šatní s celkovou kapacitou 130 športovcov, šatňami pre trénerov a rozhodcov a taktiež priestory pre relax a regeneráciu športovcov.",
            icon: "/img/viacucelova_sportova_hala/usmiestnenie.jpg",
            gallery: [
                { link: "/img/viacucelova_sportova_hala/usmiestnenie.jpg" },
                { link: "/img/viacucelova_sportova_hala/lokalizacia.jpg" },
            ],
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "pause",
                    description: "prerušené",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/09/KUPVaR-zapisnica_2020-08-25_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-08-25")
                        },
                        {
                            title: "Záväzné stanovisko",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71584",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-09-25")
                        },
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    Predlo\u017Een\u00E1 projektov\u00E1 dokument\u00E1cia rie\u0161i novostavbu viac\u00FA\u010Delovej \u0161portovej haly\nobd\u013A\u017Enikov\u00E9ho p\u00F4dorysu, so zastre\u0161en\u00EDm z priehradov\u00FDch v\u00E4zn\u00EDkov v tvare lomenice, ktorej hrebene\ndosiahnu v\u00FD\u0161ku max. + 13,000 m (od podlahy 1. NP \u00B1 0,000, \u010Do je 149,000 m n. m. Bpv).\nVyu\u017E\u00EDvan\u00E1 bude pre potreby v\u00FDuky a rozvoja \u0161portov\u00FDch a pohybov\u00FDch aktiv\u00EDt \u0161tudentov\na zamestnancov Ekonomickej univerzity v Bratislave (\u010Falej len \u201EEU BA\u201C). Prie\u010Delie budovy tvor\u00ED\nvystupuj\u00FAci jednopodla\u017En\u00FD trakt, kde sa nach\u00E1dzaj\u00FA vstupn\u00E9 priestory, hygienick\u00E9 zariadenia\npre div\u00E1kov a \u010Fal\u0161ie prev\u00E1dzkov\u00E9 priestory. Dominantn\u00E1 \u010Das\u0165 stavby je dispozi\u010Dne rozdelen\u00E1 na dve\n\u010Dasti: samotn\u00FA \u0161portov\u00FA halu s trib\u00FAnou pre 230 div\u00E1kov a na z\u00E1zemie pre \u0161portovcov, kde s\u00FA\nna dvoch v\u00FD\u0161kov\u00FDch \u00FArovniach rozmiestnen\u00E9 \u0161atne, soci\u00E1lne zariadenia a prisl\u00FAchaj\u00FAce prev\u00E1dzkov\u00E9\npriestory.\nObjekt bude dopravne napojen\u00FD z komunik\u00E1cie \u2013 M\u00E1jov\u00E1 ulica, odkia\u013E sa jedn\u00FDm vjazdom\nspr\u00EDstupn\u00ED navrhovan\u00E9 parkovisko pre 20 osobn\u00FDch automobilov. Po\u017Eiadavky na zabezpe\u010Denie\nstatickej dopravy predmetnej \u0161portovej haly pre \u010Fal\u0161\u00EDch 63 \u00E1ut bud\u00FA splnen\u00E9 z\u00E1stupn\u00FDm\nparkovan\u00EDm na jestvuj\u00FAcich parkovisk\u00E1ch v are\u00E1li EU BA.\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

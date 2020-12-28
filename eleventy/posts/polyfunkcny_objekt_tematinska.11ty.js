"use strict";
exports.__esModule = true;
var projectAddon_1 = require("../addons/project/projectAddon");
var luxon = require("luxon");
var PolyfunkcnyObjektTematinska = /** @class */ (function () {
    function PolyfunkcnyObjektTematinska() {
    }
    PolyfunkcnyObjektTematinska.prototype.data = function () {
        return {
            title: "Polyfunkčný objekt Tematínska",
            date: "2020-11-17",
            tags: [projectAddon_1.TAG_PROJECT],
            layout: "layouts/post2.njk",
            description: "Polyfunkčná stavba s dvoma samostatnými objektami a troma prevádzkovými celkami. Má jedno podzemné parkovacie podlažie, štyri nadzemné a jedno ustúpené piate podlažie. V objektoch sa nachádza 55 bytov a občianska vybavenosť – reštaurácia, kancelárske priestory, telocvičňa v prízemnom trakte pozdĺž bulváru.",
            sources: ["https://www.petrzalka.sk/wp-content/uploads/2020/10/elektronick%C3%A9-zverejnenie-inform%C3%A1cie-v-zmysle-%C2%A7-82-ods.-3-zakona-V.D.-LAKE-1.pdf"],
            amount: 0,
            execution: [
                {
                    title: projectAddon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Záväzné stanovisko hlavného mesta",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=71001",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-08-27")
                        },
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/11/KUPVaR-zapisnica.pdf",
                            status: "success",
                            description: "žiada ďalšie dokumenty",
                            date: luxon.DateTime.fromISO("2020-10-27")
                        },
                        {
                            title: "Petícia proti výstavbe",
                            source: "https://www.peticie.com/peticia_proti_vystavbe_polyfunknej_stavby_na_tematinskej_ulici_pri_vekom_dradiaku_v_mestskej_asti_bratislava__petralka",
                            status: "inwork",
                            description: "",
                            date: luxon.DateTime.fromISO("2020-11-17")
                        }
                    ]
                }
            ]
        };
    };
    PolyfunkcnyObjektTematinska.prototype.render = function (data) {
        return "\n    <p>\n    Polyfunk\u010Dn\u00E1 stavba s dvoma samostatn\u00FDmi\n    objektami a troma prev\u00E1dzkov\u00FDmi celkami. M\u00E1 jedno podzemn\u00E9 parkovacie podla\u017Eie, \u0161tyri\n    nadzemn\u00E9 a jedno ust\u00FApen\u00E9 piate podla\u017Eie. V objektoch sa nach\u00E1dza 55 bytov a ob\u010Dianska\n    vybavenos\u0165 \u2013 re\u0161taur\u00E1cia, kancel\u00E1rske priestory, telocvi\u010D\u0148a v pr\u00EDzemnom trakte pozd\u013A\u017E bulv\u00E1ru.\n    </p>\n    <p>\n    V parteri polyfunk\u010Dn\u00FDch objektov sa nach\u00E1dza spr\u00E1va parku, matersk\u00E1 \u0161k\u00F4lka pre 36 det\u00ED, dva\n    kancel\u00E1rske priestory, tri zubn\u00E9 ambulancie, zubn\u00FD technik. Na ust\u00FApenom podla\u017E\u00ED\n    severov\u00FDchodn\u00E9ho objektu je celoro\u010Dn\u00FD wellness klub s vn\u00FAtorn\u00FDm baz\u00E9nom, saunami a v\u00EDriv\u00FDmi\n    va\u0148ami. S\u00FA\u010Das\u0165ou polyfunk\u010Dnej stavby s\u00FA aj verejn\u00E9 funkcie vo v\u00E4zbe na vodn\u00FA plochu Ve\u013Ek\u00FD\n    Dra\u017Ediak - bulv\u00E1r pre pe\u0161\u00EDch, promen\u00E1da, umel\u00FD potok, da\u017E\u010Fov\u00E1 z\u00E1hrada, komunitn\u00E1 z\u00E1hrada, pl\u00E1\u017E\n    so z\u00E1zem\u00EDm, m\u00F3lo, oddychov\u00E1 l\u00FAka s ohniskom, vn\u00FAtroblokov\u00FD park, tri detsk\u00E9 ihrisk\u00E1, amfite\u00E1ter\n    pre drobn\u00E9 podujatia a stanovisko bike sharing.\n    </p>\n    <p>\n    Stavba je dopravne pripojen\u00E1 na jestvuj\u00FAce komunik\u00E1cie v \u00FAzem\u00ED - Temat\u00EDnska ulica popri\n    Chorv\u00E1tskom ramene s n\u00E1sledn\u00FDm pripojen\u00EDm cez premostenie Chorv\u00E1tskeho ramena na Jant\u00E1rov\u00FA\n    cestu a \u00FA\u010Delov\u00E1 pr\u00EDstupov\u00E1 komunik\u00E1cia susedn\u00E9ho hotela s n\u00E1sledn\u00FDm pripojen\u00EDm na Antolsk\u00FA\n    ulicu.\n    </p>\n    <p>\n    Statick\u00E1 doprava (130 parkovac\u00EDch miest) je rie\u0161en\u00E1 v spolo\u010Dnej integrovanej hromadnej gar\u00E1\u017Ei (1\n    vjazd zo smeru od Jant\u00E1rovej cesty a 1 vjazd zo smeru od Antolskej ulice), 18 verejn\u00FDch\n    parkovac\u00EDch miest je umiestnen\u00FDch ako kolm\u00E9 parkovanie pri jestvuj\u00FAcej komunik\u00E1cii - \u00FAseku\n    Temat\u00EDnskej ulice, vedenej ku vodnej ploche Ve\u013Ek\u00E9ho Dra\u017Ediaka.\n    </p>\n    ";
    };
    return PolyfunkcnyObjektTematinska;
}());
module.exports = PolyfunkcnyObjektTematinska;

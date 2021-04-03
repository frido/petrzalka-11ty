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
            title: "Rekonštrukcia a dostavba výrobných hál MATADOR - I. etapa",
            date: "2021-04-03",
            description: "Investičný zámer obsahuje rekonštrukciu časti pôvodnej haly a výstavbu troch bytových domov a dvoch penziónových domov so spoločnou podzemnou garážou. Zámerom predkladaného riešenia je využitie potenciálu lokality pre účely bývania, prechodného ubytovania, administratívy a obchodu formou urbanizácie a oživenia chátrajúceho výrobného areálu",
            "icon": "img/matador_I_etapa/4.png",
            gallery: [
                { link: 'img/matador_I_etapa/1.png' },
                { link: 'img/matador_I_etapa/2.png' },
                { link: 'img/matador_I_etapa/3.png' },
                { link: 'img/matador_I_etapa/4.png' }
            ],
            source: "https://www.petrzalka.sk/wp-content/uploads/2019/01/UPVaD_01_21_10_Rekonstrukcia_a_dostavba_vyrobnych_hal_Matador.pdf",
            execution: [
                {
                    title: "Investičný zámer",
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Investičný zámer",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2019/01/UPVaD_01_21_10_Rekonstrukcia_a_dostavba_vyrobnych_hal_Matador.pdf",
                            status: "unknown",
                            description: "",
                            date: luxon.DateTime.fromISO("2019-01-01")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    <p>\n    Predmetom dokument\u00E1cie je investi\u010Dn\u00FD z\u00E1mer \u201ERekon\u0161trukcia a dostavba v\u00FDrobn\u00FDch h\u00E1l \nMATADOR - I. etapa\u201C, ktor\u00FD obsahuje rekon\u0161trukciu \u010Dasti p\u00F4vodnej haly a v\u00FDstavbu troch \nbytov\u00FDch domov a dvoch penzi\u00F3nov\u00FDch domov so spolo\u010Dnou podzemnou gar\u00E1\u017Eou. Z\u00E1merom \npredkladan\u00E9ho rie\u0161enia je vyu\u017Eitie potenci\u00E1lu lokality pre \u00FA\u010Dely b\u00FDvania, prechodn\u00E9ho \nubytovania, administrat\u00EDvy a obchodu formou urbaniz\u00E1cie a o\u017Eivenia ch\u00E1traj\u00FAceho v\u00FDrobn\u00E9ho \nare\u00E1lu.</p><p>\nSnahou je maxim\u00E1lne zachovanie p\u00F4vodn\u00FDch v\u00FDrobn\u00FDch h\u00E1l, ktor\u00E9 definuj\u00FA cel\u00FD\narchitektonick\u00FD koncept novonavrhovanej \u0161trukt\u00FAry. P\u00F4vodn\u00E9 halov\u00E9 objekty bud\u00FA\nrekon\u0161truovan\u00E9 a ich funkcia konvertovan\u00E1 na administrat\u00EDvne \u00FA\u010Dely a ob\u010Diansku vybavenos\u0165 tak,\naby bol zachovan\u00FD ich industri\u00E1lny charakter, ktor\u00FD bude jasne \u010Ditate\u013En\u00FD aj v navrhovan\u00FDch \nobjektoch.</p><p>\nVz\u00E1jomn\u00FD vz\u0165ah novej a p\u00F4vodnej stavby bude plne rozvinut\u00FD v parteri, kde v\u0161etky \nobjekty v maxim\u00E1lnej miere s\u00FA prep\u00E1jan\u00E9 a nech\u00E1va sa vynikn\u00FA\u0165 architektonick\u00E1 hodnota \nv\u00FDrobn\u00FDch h\u00E1l a tvarov\u00E1 jedine\u010Dnos\u0165 ich obl\u00FAkovej kon\u0161trukcie. V\u00FDnimo\u010Dnos\u0165 obl\u00FAkov\u00FDch h\u00E1l je \ntak z ulice jasne \u010Ditate\u013En\u00E1. V novovzniknut\u00FDch n\u00E1dvoriach s\u00FA situovan\u00E9 vstupy do objektov, \nvznik\u00E1 exteri\u00E9rov\u00FD priestor so zele\u0148ou pre umiest\u0148ovanie ter\u00E1s ob\u010Dianskej vybavenosti, ktor\u00FD\npom\u00E1ha vytv\u00E1ra\u0165 \u017Eiv\u00FD, mestotvorn\u00FD parter a vn\u00E1\u0161a do ulice \u010Fal\u0161\u00ED level zelene.\n</p><p>\nSamotn\u00E1 forma novonavrhovan\u00FDch objektov je zvolen\u00E1 tak, aby vhodne dop\u013A\u0148ala \njestvuj\u00FAci charakter a nekonkurovala halov\u00FDm objektom. Ide o 5 jednoduch\u00FDch kv\u00E1drov\u00FDch hm\u00F4t \nktor\u00E9 s\u00FA striedavo vkladan\u00E9 medzi jestvuj\u00FAce nosn\u00E9 moduly. Materi\u00E1ly fas\u00E1dy a jej artikul\u00E1cia je \nop\u00E4\u0165 volen\u00E1 tak, aby nekonkurovala p\u00F4vodn\u00E9mu charakteru. Objekty s\u00FA dop\u013A\u0148an\u00E9 o zavesen\u00E9\noce\u013Eov\u00E9 balk\u00F3ny, ktor\u00E9 svojou formou podtrhuj\u00FA industri\u00E1lny charakter cel\u00E9ho navrhovan\u00E9ho \ns\u00FAboru.</p>";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

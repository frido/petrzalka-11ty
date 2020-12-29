"use strict";
exports.__esModule = true;
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Bytový dom Habern Au",
            date: "2020-11-11",
            tags: [project_addon_1.TAG_PROJECT],
            layout: "layouts/post2.njk",
            description: "Bytový dom Habern Au na ulici A. Gwerkovej.",
            icon: "",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "error",
                    description: "zastavené",
                    sub: [
                        {
                            title: "Záväzné stanovisko hlavného mesta",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&id_dokumenty=31041",
                            status: "error",
                            description: "nesúhlasí",
                            date: luxon.DateTime.fromISO("2014-09-18")
                        },
                        {
                            title: "Rozhodnutie mestskej časti",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2015/08/Rozhodnutie_Ovsiste.pdf",
                            status: "error",
                            description: "zastavené",
                            date: luxon.DateTime.fromISO("2015-08-03")
                        },
                        {
                            title: 'Stanovisko komisie MZ',
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/06/KUPVaR-zapisnica_2020-05-26_overena.pdf",
                            status: "success",
                            description: "žiada prepracovanie",
                            date: luxon.DateTime.fromISO("2020-05-26")
                        },
                        {
                            title: 'Petícia proti výstavbe',
                            source: "https://www.peticie.com/peticia_proti_vystavbe_bytoveho_domu_habern_au_na_luke_nachadzajucej_sa_na_ulici_a_gwerkovej_v_mestskej_asti_bratislava__petralka_v_ovsiti",
                            status: "inwork",
                            description: "",
                            date: luxon.DateTime.fromISO("2020-11-10")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return "\n    Bytov\u00FD dom Habern Au na ulici A. Gwerkovej.\n    ";
    };
    return Template;
}());
module.exports = Template;

"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Bytový dom Habern Au",
            date: "2020-11-11",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "Bytový dom Habern Au na ulici A. Gwerkovej.",
            icon: "",
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: 'Stanovisko komisie MZ',
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/06/KUPVaR-zapisnica_2020-05-26_overena.pdf",
                            status: "success",
                            description: "žiada prepracovanie",
                            timeline: luxon.DateTime.fromISO("2020-05-26")
                        },
                        {
                            title: 'Petícia proti výstavbe',
                            source: "https://www.peticie.com/peticia_proti_vystavbe_bytoveho_domu_habern_au_na_luke_nachadzajucej_sa_na_ulici_a_gwerkovej_v_mestskej_asti_bratislava__petralka_v_ovsiti",
                            status: "inwork",
                            description: "",
                            timeline: luxon.DateTime.fromISO("2020-11-10")
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

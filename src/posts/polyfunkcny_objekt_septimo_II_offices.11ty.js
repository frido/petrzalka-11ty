"use strict";
exports.__esModule = true;
var luxon = require("luxon");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.data = function () {
        return {
            title: "Polyfunkčný objekt Septimo II - Offices",
            date: "2020-11-23",
            tags: ["projekt"],
            layout: "layouts/post2.njk",
            description: "Polyfunkčný päť podlažný objekt s dvomi podzemnými a s tromi nadzemnými podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty – 20 bytových jednotiek. ",
            icon: "/img/polyfunkcny_objekt_septimo_II_offices/1.jpg",
            source: "https://offices.vigroup.sk/",
            gallery: [ { link: "img/polyfunkcny_objekt_septimo_II_offices/1.jpg" } ],
            amount: 0,
            schedule: [
                {
                    title: "Investičný zámer",
                    status: "success",
                    description: "",
                    sub: [
                        {
                            title: "Záväzné stanovisko MZ",
                            source: "https://zverejnovanie.bratislava.sk/assets/File.ashx?id_org=700026&amp;id_dokumenty=68753",
                            status: "success",
                            description: "súhlasí",
                            timeline: luxon.DateTime.fromISO("2020-04-07")
                        }
                    ]
                }
            ]
        };
    };
    Template.prototype.render = function (data) {
        return `
        <p>
        Výstavba polyfunkčného päť podlažného objektu s dvomi podzemnými a s tromi nadzemnými
        podlažiami, kde 3.NP je uskočené. Podzemné podlažia slúžia ako garáž a príslušenstvo (sklady
        a technické priestory), na 1.NP sú navrhnuté obchodné priestory a na 2. – 5.NP sú navrhnuté byty –
        20 bytových jednotiek. Objekt je mierne členitého pôdorysu s celkovými rozmermi 15,75 x 23,80
        m. Pôdorysne majú podlažia mierne odlišné rozmery. 
        </p>
        <p>
        Dopravný prístup je riešený priamym vjazdom z priľahlej komunikácie komunikáciu Údernícka ul.
        Statická doprava je riešená v podzemných podlažiach objektu a na teréne na vlastnom pozemku.
        Predložené riešenie je predmetom II. etapy projektu, pričom I. etapa (susedný objekt), ktorá je jeho
        súčasťou nebola predložená na posúdenie hlavnému mestu SR Bratislava.
        </p>
        `;
    };
    return Template;
}());
module.exports = Template;

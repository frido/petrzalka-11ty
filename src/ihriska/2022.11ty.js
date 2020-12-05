"use strict";
exports.__esModule = true;
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.prototype.render = function (data) {
        return '';
    };
    Template.prototype.data = function () {
        return {
            year: 2022,
            layout: "layouts/ihriska.njk",
            tags: ["playground"],
            source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf',
            playgrounds: [
                {
                    name: 'Gercenova',
                    district: 1,
                    category: ['A'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Gercenova GIB',
                    district: 1,
                    category: ['A'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Kopčianska',
                    district: 1,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Andrusovova',
                    district: 2,
                    category: ['A'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Ševčenkova',
                    district: 2,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Gessayova',
                    district: 3,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Furdekova',
                    district: 3,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Medveďovej',
                    district: 4,
                    category: ['A', 'B', 'C'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Jankolova',
                    district: 4,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Starhradská',
                    district: 5,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Budatínska',
                    district: 5,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Bzovícka',
                    district: 6,
                    category: ['A'],
                    year: 2022,
                    flag: null
                }, {
                    name: 'Žehrianska',
                    district: 6,
                    category: ['A', 'B'],
                    year: 2022,
                    flag: null
                },
            ]
        };
    };
    return Template;
}());
module.exports = Template;

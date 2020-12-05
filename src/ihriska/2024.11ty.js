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
            year: 2024,
            layout: "layouts/ihriska.njk",
            tags: ["playground"],
            source: 'https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf',
            playgrounds: [
                {
                    name: 'Černyševského 9',
                    district: 1,
                    category: ['B'],
                    year: 2024,
                    flag: null
                }, {
                    name: ' Nobelovo nám.',
                    district: 1,
                    category: ['A', 'B'],
                    year: 2024,
                    flag: null
                }, {
                    name: 'Kapicova',
                    district: 1,
                    category: [],
                    year: 2024,
                    flag: 'green'
                }, {
                    name: 'Pifflova',
                    district: 1,
                    category: [],
                    year: 2024,
                    flag: 'green'
                }, {
                    name: 'Rovniakova',
                    district: 3,
                    category: ['A', 'B'],
                    year: 2024,
                    flag: null
                }, {
                    name: 'Bradáčova',
                    district: 3,
                    category: ['B'],
                    year: 2024,
                    flag: 'new'
                }, {
                    name: 'Osuského',
                    district: 3,
                    category: [],
                    year: 2024,
                    flag: 'green/workout'
                }, {
                    name: 'Mlynarovičova',
                    district: 4,
                    category: [],
                    year: 2024,
                    flag: 'green/workout'
                }, {
                    name: 'Topoľčianska',
                    district: 5,
                    category: ['A', 'B'],
                    year: 2024,
                    flag: null
                }, {
                    name: 'Smolenická 1',
                    district: 5,
                    category: ['B'],
                    year: 2024,
                    flag: null
                }, {
                    name: 'Znievska 8',
                    district: 5,
                    category: ['A'],
                    year: 2024,
                    flag: null
                }, {
                    name: 'Znievska 9',
                    district: 5,
                    category: [],
                    year: 2024,
                    flag: 'green/park'
                }, {
                    name: 'Budatínska 41',
                    district: 5,
                    category: [],
                    year: 2024,
                    flag: 'green'
                },
            ]
        };
    };
    return Template;
}());
module.exports = Template;

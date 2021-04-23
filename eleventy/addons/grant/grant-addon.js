"use strict";
exports.__esModule = true;
exports.grantAddon = void 0;
var grant_sport_data_1 = require("./grant-sport-data");
var grant_oz_data_1 = require("./grant-oz-data");
var CURRENT_YEAR = 2021;
var GrantImpl = /** @class */ (function () {
    function GrantImpl(g) {
        var _a, _b, _c;
        this.title = g.title;
        this.amount = g.amount.filter(function (x) { return x.year !== CURRENT_YEAR; }).sort(function (a, b) { return b.year - a.year; });
        this.currentAmount = (_b = (_a = g.amount.find(function (x) { return x.year === CURRENT_YEAR; })) === null || _a === void 0 ? void 0 : _a.amount) !== null && _b !== void 0 ? _b : 0;
        this.currentDetail = (_c = g.amount.find(function (x) { return x.year === CURRENT_YEAR; })) === null || _c === void 0 ? void 0 : _c.detail;
    }
    return GrantImpl;
}());
function sportCollection() {
    return grant_sport_data_1.SPORT_GRANTS.map(function (x) { return new GrantImpl(x); }).sort(function (a, b) { return b.currentAmount - a.currentAmount; });
}
;
function ozCollection() {
    return grant_oz_data_1.OZ_GRANTS.map(function (x) { return new GrantImpl(x); }).sort(function (a, b) { return b.currentAmount - a.currentAmount; });
}
;
function grantAddon(eleventyConfig) {
    eleventyConfig.addCollection("grantSportCollection", sportCollection);
    eleventyConfig.addCollection("grantOZCollection", ozCollection);
}
exports.grantAddon = grantAddon;

grant_oz_data_1.OZ_GRANTS.map(function (x) {
    var t = "INSERT INTO `world`.`grant_subject` (`title`) VALUES (";
    t = t + '"' + x.title + '"';
    t = t + ");\n";
    console.log(t);
});

grant_oz_data_1.OZ_GRANTS.map(function (x) {
    x.amount.map(function (g) {
        var t = "insert into world.grant_item (subject, year, amount, detail)";
        t = t + ' select id, ';
        t = t + '' + g.year + ', ';
        t = t + '' + g.amount + ', ';
        t = t + '"' + g.detail + '" ';
        t = t + 'from world.grant_subject where title = ';
        t = t + '"' + x.title + '";';
        console.log(t);
    })
});

console.log('OK');
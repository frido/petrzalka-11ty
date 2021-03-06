"use strict";
exports.__esModule = true;
exports.grantAddon = void 0;
var grantSportData_1 = require("./grantSportData");
var grantOZData_1 = require("./grantOZData");
var CURRENT_YEAR = 2020;
var GrantImpl = /** @class */ (function () {
    function GrantImpl(g) {
        var _a, _b;
        this.title = g.title;
        this.amount = g.amount;
        this.currentAmount = (_a = this.amount.find(function (x) { return x.year === CURRENT_YEAR; })) === null || _a === void 0 ? void 0 : _a.amount;
        this.currentDetail = (_b = this.amount.find(function (x) { return x.year === CURRENT_YEAR; })) === null || _b === void 0 ? void 0 : _b.detail;
    }
    return GrantImpl;
}());
function sportCollection() {
    return grantSportData_1.SPORT_GRANTS.map(function (x) { return new GrantImpl(x); });
}
;
function ozCollection() {
    return grantOZData_1.OZ_GRANTS.map(function (x) { return new GrantImpl(x); });
}
;
function grantAddon(eleventyConfig) {
    eleventyConfig.addCollection("grantSportCollection", sportCollection);
    eleventyConfig.addCollection("grantOZCollection", ozCollection);
}
exports.grantAddon = grantAddon;

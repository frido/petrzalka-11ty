"use strict";
exports.__esModule = true;
exports.budgetAddon = exports.BudgetPage = exports.TAG_BUDGET = exports.LAYOUT_BUDGET = void 0;
var budget_data_1 = require("./budget-data");
var log = require("debug")("Petrzalka:Budget");
exports.LAYOUT_BUDGET = "layouts/budget.njk";
exports.TAG_BUDGET = "budget2";
var BudgetImpl = /** @class */ (function () {
    function BudgetImpl(i) {
        this.title = i.title;
        this.id = i.id;
        this.previous = i.previous;
        this.year = i.year;
        this.program = i.program;
        this.amountOriginal = i.amountOriginal;
        this.amountUpdated = i.amountUpdated;
        this.amountReal = i.amountReal;
        this.comment = i.comment;
        this.status = i.status;
        this.setUsage();
    }
    BudgetImpl.prototype.setUsage = function () {
        var amountRef = this.amountUpdated === 0 ? this.amountOriginal : this.amountUpdated;
        this.usage = amountRef === 0 ? 0 : Math.round(this.amountReal / amountRef);
    };
    return BudgetImpl;
}());
var BudgetPage = /** @class */ (function () {
    function BudgetPage() {
    }
    BudgetPage.prototype.data = function () {
        throw new Error("Method not implemented.");
    };
    BudgetPage.prototype.render = function (data) {
        return "";
    };
    BudgetPage.prototype.frontMatterWrapper = function (year, date, items) {
        return {
            layout: exports.LAYOUT_BUDGET,
            tags: [exports.TAG_BUDGET],
            items: items,
            updatedDate: date,
            year: year
        };
    };
    return BudgetPage;
}());
exports.BudgetPage = BudgetPage;
var BudgetAddon = /** @class */ (function () {
    function BudgetAddon(fm) {
        var _this = this;
        this.list = [];
        this.collection = function (collection) {
            return _this.list;
        };
        this.list = fm.map(function (x) { return new BudgetImpl(x); });
    }
    BudgetAddon.grouper = function (items, status) {
        var list = items.sort(BudgetAddon.sorter);
        if (status) {
            list = items.filter(function (i) { return i.status === status; }).sort(BudgetAddon.sorter);
        }
        // TODO: can be as object
        return {
            amountOriginal: list.map(function (i) { return i.amountOriginal; }).reduce(BudgetAddon.reducer, 0),
            amountUpdated: list.map(function (i) { return i.amountUpdated ? i.amountUpdated : i.amountOriginal; }).reduce(BudgetAddon.reducer, 0),
            amountReal: list.map(function (i) { return i.amountReal; }).reduce(BudgetAddon.reducer, 0),
            list: list
        };
    };
    BudgetAddon.filterByYear = function (input, year) {
        var out = input.filter(function (x) { return x.year === year; });
        log("filterByYear:IN:" + input.length);
        log("filterByYear:IN:" + year);
        log("filterByYear:OUT:" + out.length);
        return out;
    };
    BudgetAddon.filterGroupByStatus = function (items) {
        // TODO: can be object
        var response = {
            all: BudgetAddon.grouper(items, null),
            success: BudgetAddon.grouper(items, "success"),
            inwork: BudgetAddon.grouper(items, "inwork"),
            error: BudgetAddon.grouper(items, "error"),
            postpone: BudgetAddon.grouper(items, "postpone")
        };
        log("groupByStatus:IN:" + items.length);
        log("groupByStatus:OUT:" + response);
        return response;
    };
    BudgetAddon.filterById = function (input, id) {
        var out = input.find(function (x) { return x.id === id; });
        log("findById:IN:" + input.length);
        log("findById:IN:" + id);
        log("findById:OUT:" + out);
        return out;
    };
    BudgetAddon.filterSortByYear = function (page) {
        return page.sort(function (a, b) { return b.data.year - a.data.year; });
    };
    BudgetAddon.reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
    BudgetAddon.sorter = function (a, b) { return b.amountOriginal - a.amountOriginal; };
    return BudgetAddon;
}());
// Filter na vratenie items podla roka - nepotrebujem, to mam v page
function budgetAddon(eleventyConfig) {
    var addon = new BudgetAddon(budget_data_1.BUDGET_2020.concat(budget_data_1.BUDGET_2021));
    eleventyConfig.addCollection("budgetCollection", addon.collection);
    eleventyConfig.addFilter("budgetFilterByYear", BudgetAddon.filterByYear);
    eleventyConfig.addFilter("budgetFilterGroupByStatus", BudgetAddon.filterGroupByStatus);
    eleventyConfig.addFilter("budgetFilterById", BudgetAddon.filterById);
    eleventyConfig.addFilter("budgetFilterSortByYear", BudgetAddon.filterSortByYear);
}
exports.budgetAddon = budgetAddon;
budget_data_1.BUDGET_2020.map(function (x) {
    var t = "INSERT INTO `world`.`budget` (`title`, `year`, `program`, `amount_original`, `amount_updated`, `amount_real`, `comment`, `status`) VALUES (";
    t = t + '"' + x.title + '", ';
    t = t + '"' + x.year + '", ';
    t = t + '"' + x.program + '", ';
    t = t + '"' + x.amountOriginal + '", ';
    t = t + '"' + x.amountUpdated + '", ';
    t = t + '"' + x.amountReal + '", ';
    t = t + '"' + x.comment + '", ';
    t = t + '"' + x.status;
    +'"';
    t = t + ");\n";
    console.log(t);
});

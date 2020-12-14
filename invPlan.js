"use strict";
exports.__esModule = true;
exports.invPlanAddon = void 0;
var log = require("debug")("Petrzalka:InvPlan");
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
var sorter = function (a, b) { return b.amountOriginal - a.amountOriginal; };
function grouper(items, status) {
    var list = items;
    if (status) {
        list = items.filter(function (i) { return i.status === status; }).sort(sorter);
    }
    return {
        amountOriginal: list.map(function (i) { return i.amountOriginal; }).reduce(reducer, 0),
        amountUpdated: list.map(function (i) { return i.amountUpdated; }).reduce(reducer, 0),
        amountReal: list.map(function (i) { return i.amountReal; }).reduce(reducer, 0),
        list: list
    };
}
function groupByStatus(items) {
    var budgetItems = items.map(function (bi) {
        var amountRef = bi.amountUpdated === 0 ? bi.amountOriginal : bi.amountUpdated;
        bi.usage = amountRef === 0 ? 0 : Math.round(bi.amountReal / amountRef);
        return bi;
    });
    var response = {
        all: grouper(budgetItems, null),
        success: grouper(budgetItems, "success"),
        inwork: grouper(budgetItems, "inwork"),
        error: grouper(budgetItems, "error"),
        postpone: grouper(budgetItems, "postpone")
    };
    log("groupByStatus:IN:" + items.length);
    log("groupByStatus:OUT:" + response);
    return response;
}
function collection(collection) {
    var list = collection
        .getFilteredByTag("budget2")
        .map(function (p) { return p.data; })
        .map(function (fm) {
        fm.items.forEach(function (i) { return (i.year = fm.year); });
        return fm;
    })
        .flatMap(function (y) { return y.items; });
    log("collection:OUT:" + list.length);
    return list;
}
function findById(input, id) {
    var out = input.find(function (x) { return x.id === id; });
    log("findById:IN:" + input.length);
    log("findById:IN:" + id);
    log("findById:OUT:" + out);
    return out;
}
function filterByYear(input, year) {
    var out = input.filter(function (x) { return x.year === year; });
    log("filterByYear:IN:" + input.length);
    log("filterByYear:IN:" + year);
    log("filterByYear:OUT:" + out.length);
    return out;
}
function sortbyYear(page) {
    return page.sort(function (a, b) { return b.data.year - a.data.year; });
}
// Filter na vratenie items podla roka - nepotrebujem, to mam v page
function invPlanAddon(eleventyConfig) {
    eleventyConfig.addFilter("invPlanGroupByStatus", groupByStatus);
    eleventyConfig.addCollection("invPlanCollection", collection);
    eleventyConfig.addFilter("invPlanFindById", findById);
    eleventyConfig.addFilter("invPlanFilterByYear", filterByYear);
    eleventyConfig.addFilter("invPlanSortByYear", sortbyYear);
}
exports.invPlanAddon = invPlanAddon;

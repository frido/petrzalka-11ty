"use strict";
exports.__esModule = true;
exports.projectAddon = exports.EXE_SUB_TITLE_ZSHM = exports.EXE_SUB_TITLE_ZKMZ = exports.EXE_TITLE_PP = exports.EXE_TITLE_UK = exports.TAG_TEMPLATE = exports.TAG_PROJECT = exports.LAYOUT_PROJECT = void 0;
var luxon = require("luxon");
var log = require("debug")("Petrzalka:Projects");
var statusOrder = { success: 0, inwork: 1, error: 2 };
exports.LAYOUT_PROJECT = "layouts/project.njk";
exports.TAG_PROJECT = "project";
exports.TAG_TEMPLATE = "template";
exports.EXE_TITLE_UK = 'Územné konanie';
exports.EXE_TITLE_PP = "Príprava projektu";
exports.EXE_SUB_TITLE_ZKMZ = 'Stanovisko komisie MZ';
exports.EXE_SUB_TITLE_ZSHM = "Záväzné stanovisko hlavného mesta";
function collection(collection) {
    var now = luxon.DateTime.local();
    var x = collection
        .getFilteredByTag(exports.TAG_PROJECT)
        .flatMap(function (page) {
        return page.data.execution.map(function (schedule) {
            schedule.page = page;
            schedule.sub.filter(function (sub) { return sub.date < now; }).forEach(function (sub) { return (schedule.date = sub.date); });
            return schedule;
        });
    })
        .filter(function (schedule) { return schedule.date; })
        .filter(function (schedule) { return schedule.date < now; });
    return x.sort(function (a, b) { return a.date.toMillis() - b.date.toMillis(); });
}
function project(value) {
    if (value === 1) {
        return "1 projekt";
    }
    if (value === 2 || value === 3 || value === 4) {
        return value + " projekty";
    }
    return value + " projektov";
}
function projectAddon(eleventyConfig) {
    eleventyConfig.addCollection("projectCollection", collection);
    eleventyConfig.addFilter("projectFilterProject", project);
}
exports.projectAddon = projectAddon;

"use strict";
exports.__esModule = true;
exports.projectAddon = exports.ProjectPage = exports.EXE_SUB_TITLE_ZSHM = exports.EXE_SUB_TITLE_ZKMZ = exports.EXE_TITLE_PP = exports.EXE_TITLE_UK = exports.TAG_TEMPLATE = exports.TAG_PROJECT = exports.LAYOUT_PROJECT = void 0;
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
var ProjectPage = /** @class */ (function () {
    function ProjectPage() {
    }
    ProjectPage.prototype.data = function () {
        throw new Error("Method not implemented.");
    };
    ProjectPage.prototype.render = function (data) {
        throw new Error("Method not implemented.");
    };
    ProjectPage.prototype.frontMatterWrapper = function (p) {
        return {
            title: p.title,
            date: p.date,
            gallery: p.gallery,
            description: p.description,
            icon: p.icon,
            source: p.source,
            sources: p.sources,
            budgetRef: p.budgetRef,
            execution: p.execution,
            tags: [exports.TAG_PROJECT],
            layout: exports.LAYOUT_PROJECT
        };
    };
    return ProjectPage;
}());
exports.ProjectPage = ProjectPage;
function collection(collection) {
    var now = luxon.DateTime.local();
    var y = collection
        .getFilteredByTag(exports.TAG_PROJECT)
        .forEach(function (x) {
        // var t = "INSERT INTO `world`.`project` (`title`, `date`, `description`, `url`) VALUES (";
        // t = t + '"' + x.data.title + '",';
        // t = t + '"' + x.data.date + '",';
        // t = t + '"' + x.data.description + '",';
        // t = t + '"' + x.data.page.fileSlug + '"';
        // t = t + ");\n";
        // console.log(t);
        // x.data.gallery?.forEach(g => {
        //   var t = "insert into world.image (project_id, title, source)";
        //   t = t + ' select id, ';
        //   t = t + '"' + (g.title ? g.title : "") + '", ';
        //   t = t + '"' + g.link + '" ';
        //   t = t + 'from world.project where url = ';
        //   t = t + '"' + x.data.page.fileSlug + '";';
        //   console.log(t);
        // });
        x.data.execution.flatMap(function (e) { return e.sub; }).forEach(function (s) {
            var _a;
            var t = "insert into world.statement (project_id, title, source, date, status, status_description)";
            t = t + ' select id, ';
            t = t + '"' + s.title + '", ';
            t = t + '"' + s.source + '", ';
            if (s.date) {
                t = t + '"' + ((_a = s.date) === null || _a === void 0 ? void 0 : _a.toISODate()) + '", ';
            }
            else {
                t = t + 'null, ';
            }
            t = t + '"' + s.status + '", ';
            t = t + '"' + s.description + '" ';
            t = t + 'from world.project where url = ';
            t = t + '"' + x.data.page.fileSlug + '";';
            console.log(t);
        });
    });
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

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var luxon = require("luxon");
// const { DateTime } = require("luxon");
var eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
var eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
var markdownIt = require("markdown-it");
var zverejnovanie_1 = require("./generators/zverejnovanie");
var numberString = require("number-string");
// TODO: deprecated
var gallery = function (content) {
    return "<div class=\"gallery\">" + content + "</div>";
};
// TODO: deprecated
var figure = function (link, src, title) {
    var figcaption = "";
    if (title) {
        figcaption = "<figcaption><h4>" + title + "</h4></figcaption>";
    }
    return "<figure><a href=\"" + link + "\"><img src=\"" + src + "\"></a>" + figcaption + "</figure>";
};
// TODO: deprecated
var timeline = function (content, date, title, source) {
    return "<div class=\"point\">\n    <span class=\"point-mark\"></span>\n    <span class=\"point-date\">\n        " + date + "\n    </span>\n    <h2>\n        " + title + "\n    </h2>\n    <span>\n        <a href=\"" + source + "\" target=\"blank\"><img src=\"/img/external-link.svg\" style=\"float:right\"></a>\n    </span>\n    <div class=\"timeline-body\">\n        " + content + "\n    </div>\n    </div>";
};
// TODO: deprecated
var alternativeAB = function (content) {
    return "<div class=\"row\">" + content + "</div>";
};
// TODO: deprecated
var alternativeABInner = function (content) {
    return "<div class=\"two-in-row\">" + content + "</div>";
};
var statusOrder = { success: 0, inwork: 1, error: 2 };
var conf = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginRss);
    eleventyConfig.addFilter("readableDate", function (dateObj) {
        return luxon.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter("json", function (object) {
        return JSON.stringify(object);
    });
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter("htmlDateString", function (dateObj) {
        return luxon.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });
    eleventyConfig.addFilter("postDate", function (dateObj) {
        var dateTime = luxon.DateTime.fromString(dateObj, "yyyy-LL-dd");
        return dateTime.toFormat("dd.LL.yyyy");
    });
    eleventyConfig.addFilter("date", function (timeline) {
        return timeline.toFormat("dd.LL.yyyy");
    });
    eleventyConfig.addFilter("value", function (value) {
        // const number = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR' }).format(value);
        var number = numberString.toMoney(value, {
            decimalMark: ",",
            thousandSeperator: " ",
            maxPrecision: 2,
            minPrecision: 0,
            symbol: "",
            symbolBehind: false,
            useParens: true
        });
        return number;
    });
    eleventyConfig.addFilter("log", function (object) {
        console.log(object);
        return object;
    });
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", function (array, n) {
        if (n < 0) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });
    eleventyConfig.addCollection("zverejnovanieBaStanoviska", function (collection) {
        var downloader = new zverejnovanie_1.ZverejnovanieDownloader();
        // return downloader.load();
        // TODO: for the future, I can publish list of all stanovisk, for now I need list only for myself
        return [];
    });
    eleventyConfig.addFilter("FMBudget", function (programs) {
        console.log(programs);
        var budgetItems = programs
            .flatMap(function (p) { return p.items; })
            .map(function (i) {
            i.statuses.forEach(function (s) {
                s.initAmount = i.amount;
                var percentPoint = s.amount / 100;
                if (s.status === 'success') {
                    percentPoint = s.initAmount / 100;
                }
                if (percentPoint == 0) {
                    s.usage = 0;
                }
                else {
                    s.usage = Math.round(s.realAmount / percentPoint);
                }
            });
            if (i.statuses[0]) {
                i.lastStatusAmount = i.statuses[0].amount;
            }
            return i;
        });
        var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
        var sorter = function (a, b) { return b.statuses[0].amount - a.statuses[0].amount; };
        var successItems = budgetItems.filter(function (i) { return i.statuses[0].status === 'success'; }).sort(sorter);
        var inworkItems = budgetItems.filter(function (i) { return i.statuses[0].status === 'inwork'; }).sort(sorter);
        var errorItems = budgetItems.filter(function (i) { return i.statuses[0].status === 'error'; }).sort(sorter);
        var postponeItems = budgetItems.filter(function (i) { return i.statuses[0].status === 'postpone'; }).sort(sorter);
        var success = {
            initAmount: successItems.map(function (i) { return i.statuses[0].initAmount; }).reduce(reducer),
            amount: successItems.map(function (i) { return i.statuses[0].amount; }).reduce(reducer),
            realAmount: successItems.map(function (i) { return i.statuses[0].realAmount; }).reduce(reducer),
            list: successItems
        };
        var inwork = {
            initAmount: inworkItems.map(function (i) { return i.statuses[0].initAmount; }).reduce(reducer),
            amount: inworkItems.map(function (i) { return i.statuses[0].amount; }).reduce(reducer),
            realAmount: inworkItems.map(function (i) { return i.statuses[0].realAmount; }).reduce(reducer),
            list: inworkItems
        };
        var error = {
            initAmount: errorItems.map(function (i) { return i.statuses[0].initAmount; }).reduce(reducer),
            amount: errorItems.map(function (i) { return i.statuses[0].amount; }).reduce(reducer),
            realAmount: errorItems.map(function (i) { return i.statuses[0].realAmount; }).reduce(reducer),
            list: errorItems
        };
        var postpone = {
            initAmount: postponeItems.map(function (i) { return i.statuses[0].initAmount; }).reduce(reducer),
            amount: postponeItems.map(function (i) { return i.statuses[0].amount; }).reduce(reducer),
            realAmount: postponeItems.map(function (i) { return i.statuses[0].realAmount; }).reduce(reducer),
            list: postponeItems
        };
        var all = {
            initAmount: success.initAmount + inwork.initAmount + error.initAmount + postpone.initAmount,
            amount: success.amount + inwork.amount + error.amount + postpone.amount,
            realAmount: success.realAmount + inwork.realAmount + error.realAmount + postpone.realAmount
        };
        var response = {
            all: all,
            success: success,
            inwork: inwork,
            error: error,
            postpone: postpone
        };
        return response;
    });
    eleventyConfig.addCollection("allMyContent", function (collection) {
        var scheduleList = [];
        var now = luxon.DateTime.local();
        collection
            .getFilteredByTag("projekt")
            .flatMap(function (page) {
            return page.data.schedule.map(function (schedule) {
                schedule.page = page; // TODO: I dont need all page
                schedule.sub.filter(function (sub) { return sub.timeline < now; }).forEach(function (sub) { return (schedule.timeline = sub.timeline); });
                return schedule;
            });
        })
            .forEach(function (schedule) {
            scheduleList.push(schedule);
        });
        return scheduleList
            .filter(function (schedule) { return schedule.timeline; })
            .filter(function (schedule) { return schedule.timeline < now; })
            .sort(function (a, b) { return a.timeline.toMillis() - b.timeline.toMillis(); });
    });
    eleventyConfig.addPairedShortcode("gallery", gallery); // TODO: I dont need
    eleventyConfig.addPairedShortcode("timeline", timeline); // TODO: I dont need
    eleventyConfig.addPairedShortcode("alternativeAB", alternativeAB); // TODO: I dont need
    eleventyConfig.addPairedShortcode("alternativeABInner", alternativeABInner); // TODO: I dont need
    eleventyConfig.addShortcode("figure", figure); // TODO: I dont need
    var markdownItOptions = {
        html: true,
        breaks: false,
        linkify: true
    };
    eleventyConfig.addPassthroughCopy({ "src/static/css": "css" });
    eleventyConfig.addPassthroughCopy({ "src/static/fonts": "fonts" });
    eleventyConfig.addPassthroughCopy({ "src/static/img": "img" });
    eleventyConfig.addPassthroughCopy({ "src/static/js": "js" });
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable("code"));
    eleventyConfig.addCollection("tagList", function (collection) {
        var tagSet = new Set();
        collection.getAll().forEach(function (item) {
            var e_1, _a;
            if ("tags" in item.data) {
                var tags = item.data.tags;
                tags = tags.filter(function (item) {
                    switch (item) {
                        // this list should match the `filter` list in tags.njk
                        case "all":
                        case "nav":
                        case "post":
                        case "posts":
                        case "budget":
                        case "budget2":
                            return false;
                    }
                    return true;
                });
                try {
                    for (var tags_1 = __values(tags), tags_1_1 = tags_1.next(); !tags_1_1.done; tags_1_1 = tags_1.next()) {
                        var tag = tags_1_1.value;
                        tagSet.add(tag);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (tags_1_1 && !tags_1_1.done && (_a = tags_1["return"])) _a.call(tags_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
        // returning an array in addCollection works in Eleventy 0.5.3
        return __spread(tagSet);
    });
    return {
        templateFormats: ["11ty.js", "md", "njk", "html"],
        // If your site lives in a different subdirectory, change this.
        // Leading or trailing slashes are all normalized away, so don’t worry about those.
        // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
        // This is only used for link URLs (it does not affect your file structure)
        // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/
        // You can also pass this in on the command line using `--pathprefix`
        // pathPrefix: "/",
        // markdownTemplateEngine: "njk",
        // htmlTemplateEngine: "njk",
        // dataTemplateEngine: "njk",
        // These are all optional, defaults are shown:
        dir: {
            input: "src",
            includes: "_includes",
            // layouts: "_layouts",
            data: "_data",
            output: "_site"
        }
    };
};
module.exports = conf;

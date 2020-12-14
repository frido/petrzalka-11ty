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
var numberString = require("number-string");
var invPlan_1 = require("./invPlan");
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
        console.log(object);
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
    eleventyConfig.addFilter("project", function (value) {
        if (value === 1) {
            return "1 projekt";
        }
        if (value === 2 || value === 3 || value === 4) {
            return value + ' projekty';
        }
        return value + ' projektov';
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
    eleventyConfig.addFilter("playGroundCategory", function (category) {
        if (category.length === 2) {
            return 'pre 0 - 14r deti';
        }
        if (category.length === 3) {
            return 'pre 0 - 14r + street workout';
        }
        return category.map(function (c) {
            if (c === 'A') {
                return 'pre 0 - 10r deti';
            }
            if (c === 'B') {
                return 'pre 10 - 14r deti';
            }
            if (c === 'C') {
                return 'street workout';
            }
        }).join(', ');
    });
    eleventyConfig.addFilter("playGroundStatus", function (flag) {
        if (flag === 'new') {
            return 'success';
        }
        if (flag === 'green' || flag === 'workout' || flag === 'green/workout' || flag === 'green/park') {
            return 'error';
        }
        return 'inwork';
    });
    eleventyConfig.addFilter("playGroundDescription", function (flag) {
        if (flag === 'new') {
            return 'výstavba nového ihriska';
        }
        if (flag === 'green') {
            return 'zrušenie ihriska';
        }
        if (flag === 'workout') {
            return 'zmena na street workout';
        }
        if (flag === 'green/workout') {
            return 'zrušenie alebo street workout';
        }
        if (flag === 'green/park') {
            return 'výstavba parkoviska';
        }
        return 'rekonštrukcia';
    });
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", function (array, n) {
        if (n < 0) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });
    invPlan_1.invPlanAddon(eleventyConfig);
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

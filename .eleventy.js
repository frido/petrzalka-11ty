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
var gallery = function (content) {
    return "<div class=\"gallery\">" + content + "</div>";
};
var figure = function (link, src, title) {
    var figcaption = "";
    if (title) {
        figcaption = "<figcaption><h4>" + title + "</h4></figcaption>";
    }
    return "<figure><a href=\"" + link + "\"><img src=\"" + src + "\"></a>" + figcaption + "</figure>";
};
var timeline = function (content, date, title, source) {
    return "<div class=\"point\">\n    <span class=\"point-mark\"></span>\n    <span class=\"point-date\">\n        " + date + "\n    </span>\n    <h2>\n        " + title + "\n    </h2>\n    <span>\n        <a href=\"" + source + "\" target=\"blank\"><img src=\"/img/external-link.svg\" style=\"float:right\"></a>\n    </span>\n    <div class=\"timeline-body\">\n        " + content + "\n    </div>\n    </div>";
};
var alternativeAB = function (content) {
    return "<div class=\"row\">" + content + "</div>";
};
var alternativeABInner = function (content) {
    return "<div class=\"two-in-row\">" + content + "</div>";
};
var conf = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginRss);
    eleventyConfig.addFilter("readableDate", function (dateObj) {
        return luxon.DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter("json", function (object) {
        return JSON.stringify(object);
    });
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', function (dateObj) {
        return luxon.DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });
    eleventyConfig.addFilter('postDate', function (dateObj) {
        var dateTime = luxon.DateTime.fromString(dateObj, 'yyyy-LL-dd');
        return dateTime.toFormat('dd.LL.yyyy');
    });
    eleventyConfig.addFilter('date', function (timeline) {
        return timeline.toFormat('dd.LL.yyyy');
    });
    eleventyConfig.addFilter('log', function (object) {
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
    eleventyConfig.addCollection("allMyContent", function (collection) {
        var scheduleList = [];
        var now = luxon.DateTime.local();
        collection.getFilteredByTag('projekt')
            .flatMap(function (page) {
            if (page.data.schedule) {
                return page.data.schedule
                    .map(function (schedule) {
                    schedule.page = page;
                    if (schedule.timelineDate) {
                        schedule.timeline = luxon.DateTime.fromString(schedule.timelineDate, 'yyyy-LL-dd');
                    }
                    if (schedule.sub) {
                        schedule.sub
                            .filter(function (sub) { return sub.timelineDate; })
                            .map(function (sub) {
                            sub.timeline = luxon.DateTime.fromString(sub.timelineDate, 'yyyy-LL-dd');
                            return sub;
                        })
                            .filter(function (sub) { return sub.timeline < now; })
                            .forEach(function (sub) { return schedule.timeline = sub.timeline; });
                    }
                    return schedule;
                });
            }
            return [];
        })
            .forEach(function (schedule) {
            scheduleList.push(schedule);
        });
        return scheduleList
            .filter(function (schedule) { return schedule.timeline; })
            .filter(function (schedule) { return schedule.timeline < now; })
            .sort(function (a, b) { return a.timeline.toMillis() - b.timeline.toMillis(); });
    });
    eleventyConfig.addPairedShortcode("gallery", gallery);
    eleventyConfig.addPairedShortcode("timeline", timeline);
    eleventyConfig.addPairedShortcode("alternativeAB", alternativeAB);
    eleventyConfig.addPairedShortcode("alternativeABInner", alternativeABInner);
    eleventyConfig.addShortcode("figure", figure);
    var markdownItOptions = {
        html: true,
        breaks: false,
        linkify: true
    };
    eleventyConfig.addPassthroughCopy({ "src/static/css": 'css' });
    eleventyConfig.addPassthroughCopy({ "src/static/fonts": 'fonts' });
    eleventyConfig.addPassthroughCopy({ "src/static/img": 'img' });
    eleventyConfig.addPassthroughCopy({ "src/static/js": 'js' });
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable('code'));
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
        templateFormats: [
            "11ty.js",
            "md",
            "njk",
            "html",
        ],
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
            data: "_data",
            output: "_site"
        }
    };
};
module.exports = conf;

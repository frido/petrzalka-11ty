"use strict";
var luxon = require("luxon");
var eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
var eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
var markdownIt = require("markdown-it");
var numberString = require("number-string");
var budget_addon_1 = require("./src/addons/budget/budget-addon");
var project_addon_1 = require("./src/addons/project/project-addon");
var playground_addon_1 = require("./src/addons/playground/playground-addon");
var grant_addon_1 = require("./src/addons/grant/grant-addon");
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
    eleventyConfig.addFilter("head", function (array, n) {
        if (n < 0) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });
    budget_addon_1.budgetAddon(eleventyConfig);
    playground_addon_1.playgroundAddon(eleventyConfig);
    project_addon_1.projectAddon(eleventyConfig);
    grant_addon_1.grantAddon(eleventyConfig);
    var markdownItOptions = {
        html: true,
        breaks: false,
        linkify: true
    };
    // dont neet to copy everything every time
    // enable it only if something in here change
    // eleventyConfig.addPassthroughCopy({ "eleventy/static/css": "css" });
    // eleventyConfig.addPassthroughCopy({ "eleventy/static/fonts": "fonts" });
    // eleventyConfig.addPassthroughCopy({ "eleventy/static/webfonts": "webfonts" });
    // eleventyConfig.addPassthroughCopy({ "eleventy/static/img": "img" });
    // eleventyConfig.addPassthroughCopy({ "eleventy/static/js": "js" });
    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable("code"));
    return {
        templateFormats: ["11ty.js", "md", "njk", "html"],
        dir: {
            input: "eleventy",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};
module.exports = conf;

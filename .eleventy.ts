import * as luxon from "luxon";
import * as eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import * as eleventyPluginRss from "@11ty/eleventy-plugin-rss";
import * as markdownIt from "markdown-it";
import * as numberString from "number-string";

import {budgetAddon} from './src/addons/budget/budgetAddon';
import {projectAddon} from './src/addons/project/projectAddon';
import {playgroundAddon} from './src/addons/playground/playgroundAddon';

const conf = function (eleventyConfig: any) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyPluginRss);

  eleventyConfig.addFilter("readableDate", (dateObj: Date) => {
    return luxon.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("json", (object: any) => {
    console.log(object);
    return JSON.stringify(object);
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj: Date) => {
    return luxon.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("postDate", (dateObj: string) => {
    const dateTime = luxon.DateTime.fromString(dateObj, "yyyy-LL-dd");
    return dateTime.toFormat("dd.LL.yyyy");
  });

  eleventyConfig.addFilter("date", (timeline: luxon.DateTime) => {
    return timeline.toFormat("dd.LL.yyyy");
  });

  eleventyConfig.addFilter("value", (value: number) => {
    const number = numberString.toMoney(value, {
      decimalMark: ",",
      thousandSeperator: " ",
      maxPrecision: 2,
      minPrecision: 0,
      symbol: "",
      symbolBehind: false,
      useParens: true,
    });
    return number;
  });

  eleventyConfig.addFilter("log", (object: any) => {
    console.log(object);
    return object;
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });
  
  budgetAddon(eleventyConfig);
  playgroundAddon(eleventyConfig);
  projectAddon(eleventyConfig);

  const markdownItOptions: markdownIt.Options = {
    html: true,
    breaks: false,
    linkify: true,
  };

  eleventyConfig.addPassthroughCopy({ "eleventy/static/css": "css" });
  eleventyConfig.addPassthroughCopy({ "eleventy/static/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "eleventy/static/img": "img" });
  eleventyConfig.addPassthroughCopy({ "eleventy/static/js": "js" });

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable("code"));

  return {
    templateFormats: ["11ty.js", "md", "njk", "html"],

    dir: {
      input: "eleventy",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};

export = conf;

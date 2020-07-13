import { TemplateCollection, TemplateCollectionItem } from "./@types/eleventy";

import * as luxon from "luxon";
// const { DateTime } = require("luxon");

import * as eleventyNavigationPlugin from "@11ty/eleventy-navigation";
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

import * as eleventyPluginRss from "@11ty/eleventy-plugin-rss";
// const pluginRss = require("@11ty/eleventy-plugin-rss");



import * as markdownIt from "markdown-it";

const conf = function (eleventyConfig: any) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyPluginRss);

    eleventyConfig.addFilter("readableDate", (dateObj: Date) => {
        return luxon.DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj: Date) => {
        return luxon.DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    const markdownItOptions: markdownIt.Options = {
        html: true,
        breaks: true,
        linkify: true
    };

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

    eleventyConfig.addCollection("tagList", (collection: TemplateCollection) => {
        let tagSet = new Set<string>();
        collection.getAll().forEach((item) => {
            if ("tags" in item.data) {
                let tags = item.data.tags;

                tags = tags.filter((item: string) => {
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

                for (const tag of tags) {
                    tagSet.add(tag);
                }
            }
        });

        // returning an array in addCollection works in Eleventy 0.5.3
        return [...tagSet];
    });

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        // If your site lives in a different subdirectory, change this.
        // Leading or trailing slashes are all normalized away, so don’t worry about those.

        // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
        // This is only used for link URLs (it does not affect your file structure)
        // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

        // You can also pass this in on the command line using `--pathprefix`
        // pathPrefix: "/",

        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",

        // These are all optional, defaults are shown:
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};

export = conf;
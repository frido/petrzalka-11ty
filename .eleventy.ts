import { TemplateCollection, TemplateCollectionItem } from "./@types/eleventy";

import * as luxon from "luxon";
// const { DateTime } = require("luxon");

import * as eleventyNavigationPlugin from "@11ty/eleventy-navigation";
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

import * as eleventyPluginRss from "@11ty/eleventy-plugin-rss";
// const pluginRss = require("@11ty/eleventy-plugin-rss");

import * as markdownIt from "markdown-it";

const gallery = (content: string): string => {
    return `<div class="gallery">${content}</div>`;
}

const figure = (link: string, src:string, title: string): string => {
    let figcaption = "";
    if (title) {
        figcaption = `<figcaption><h4>${title}</h4></figcaption>`
    }
    return `<figure><a href="${link}"><img src="${src}"></a>${figcaption}</figure>`;
}

const timeline = (content: string, date: Date, title: string, source: string): string => {
    return `<div class="point">
    <span class="point-mark"></span>
    <span class="point-date">
        ${date}
    </span>
    <h2>
        ${title}
    </h2>
    <span>
        <a href="${source}" target="blank"><img src="/img/external-link.svg" style="float:right"></a>
    </span>
    <div class="timeline-body">
        ${content}
    </div>
    </div>`;
}

const alternativeAB = (content: string): string => {
    return `<div class="row">${content}</div>`;
}

const alternativeABInner = (content: string): string => {
    return `<div class="two-in-row">${content}</div>`;
}


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

    eleventyConfig.addFilter('log', (object: any) => {
        console.log(object);
        return object;
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    eleventyConfig.addPairedShortcode("gallery", gallery);
    eleventyConfig.addPairedShortcode("timeline", timeline);
    eleventyConfig.addPairedShortcode("alternativeAB", alternativeAB);
    eleventyConfig.addPairedShortcode("alternativeABInner", alternativeABInner);
    eleventyConfig.addShortcode("figure", figure);

    const markdownItOptions: markdownIt.Options = {
        html: true,
        breaks: false,
        linkify: true
    };

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable('code'));

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
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};

export = conf;
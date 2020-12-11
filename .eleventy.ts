import { BudgetItem, BudgetItem2, BudgetYear, FMBudget, FMBudget2, PlayGroundCategory, Program, Schedule, ScheduleItem, TemplateCollection, TemplateCollectionItem } from "./@types/eleventy";

import * as luxon from "luxon";
// const { DateTime } = require("luxon");

import * as eleventyNavigationPlugin from "@11ty/eleventy-navigation";
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

import * as eleventyPluginRss from "@11ty/eleventy-plugin-rss";
// const pluginRss = require("@11ty/eleventy-plugin-rss");

import * as markdownIt from "markdown-it";
import { ZverejnovanieDownloader } from "./generators/zverejnovanie";

import * as numberString from "number-string";

// TODO: deprecated
const gallery = (content: string): string => {
  return `<div class="gallery">${content}</div>`;
};

// TODO: deprecated
const figure = (link: string, src: string, title: string): string => {
  let figcaption = "";
  if (title) {
    figcaption = `<figcaption><h4>${title}</h4></figcaption>`;
  }
  return `<figure><a href="${link}"><img src="${src}"></a>${figcaption}</figure>`;
};

// TODO: deprecated
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
};

// TODO: deprecated
const alternativeAB = (content: string): string => {
  return `<div class="row">${content}</div>`;
};

// TODO: deprecated
const alternativeABInner = (content: string): string => {
  return `<div class="two-in-row">${content}</div>`;
};

const statusOrder = {success: 0, inwork: 1, error: 2};

const conf = function (eleventyConfig: any) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyPluginRss);

  eleventyConfig.addFilter("readableDate", (dateObj: Date) => {
    return luxon.DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("json", (object: any) => {
    return JSON.stringify(object);
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
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

  eleventyConfig.addFilter("sortInvPlan", (page: any[]) => {
    return page.sort((a, b) => b.data.year - a.data.year);
  });

  eleventyConfig.addFilter("project", (value: number) => {
    if (value === 1) {
      return "1 projekt"
    }
    if (value === 2 || value === 3 || value === 4) {
      return value + ' projekty'
    }
    return value + ' projektov'
  });

  eleventyConfig.addFilter("value", (value: number) => {
    // const number = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR' }).format(value);
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

  eleventyConfig.addFilter("playGroundCategory", (category: PlayGroundCategory[]) => {
    if (category.length === 2) {
      return 'pre 0 - 14r deti'
    }
    if (category.length === 3) {
      return 'pre 0 - 14r + street workout'
    }
    return category.map(c => {
      if (c === 'A') {
        return 'pre 0 - 10r deti'
      }
      if (c === 'B') {
        return 'pre 10 - 14r deti'
      }
      if (c === 'C') {
        return 'street workout'
      }
    }).join(', ')
  });

  eleventyConfig.addFilter("playGroundStatus", (flag: string) => {
    if (flag === 'new') {
      return 'success'
    }
    if (flag === 'green' || flag === 'workout' || flag === 'green/workout' || flag === 'green/park') {
      return 'error'
    }
    return 'inwork'
  });

  eleventyConfig.addFilter("playGroundDescription", (flag: string) => {
    if (flag === 'new') {
      return 'výstavba nového ihriska'
    }
    if (flag === 'green') {
      return 'zrušenie ihriska'
    }
    if (flag === 'workout') {
      return 'zmena na street workout'
    }
    if (flag === 'green/workout') {
      return 'zrušenie alebo street workout'
    }
    if (flag === 'green/park') {
      return 'výstavba parkoviska'
    }
    return 'rekonštrukcia'
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  eleventyConfig.addCollection("zverejnovanieBaStanoviska", (collection: TemplateCollection) => {
    const downloader = new ZverejnovanieDownloader();
    // return downloader.load();
    // TODO: for the future, I can publish list of all stanovisk, for now I need list only for myself
    return [];
  });

  eleventyConfig.addFilter("FMBudget", (programs: Program[]) => {
    const budgetItems = programs
      .flatMap(p => p.items)
      .map((i: BudgetItem) => {
        i.statuses.forEach((s) => {
          s.initAmount = i.amount;
          let percentPoint = s.amount / 100;
          if (s.status === 'success') {
            percentPoint = s.initAmount / 100;
          }
          if (percentPoint == 0) {
            s.usage = 0;
          } else {
            s.usage = Math.round(s.realAmount / percentPoint);
          }
        });
        if (i.statuses[0]) {
          i.lastStatusAmount = i.statuses[0].amount;
        }
        return i;
      });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sorter = (a: BudgetItem, b:BudgetItem) => b.statuses[0].amount - a.statuses[0].amount;

    const successItems = budgetItems.filter(i => i.statuses[0].status === 'success').sort(sorter);
    const inworkItems = budgetItems.filter(i => i.statuses[0].status === 'inwork').sort(sorter);
    const errorItems = budgetItems.filter(i => i.statuses[0].status === 'error').sort(sorter);
    const postponeItems = budgetItems.filter(i => i.statuses[0].status === 'postpone').sort(sorter);

    const success = {
      initAmount: successItems.map(i => i.statuses[0].initAmount).reduce(reducer),
      amount: successItems.map(i => i.statuses[0].amount).reduce(reducer),
      realAmount: successItems.map(i => i.statuses[0].realAmount).reduce(reducer),
      list: successItems
    }

    const inwork = {
      initAmount: inworkItems.map(i => i.statuses[0].initAmount).reduce(reducer),
      amount: inworkItems.map(i => i.statuses[0].amount).reduce(reducer),
      realAmount: inworkItems.map(i => i.statuses[0].realAmount).reduce(reducer),
      list: inworkItems
    }

    const error = {
      initAmount: errorItems.map(i => i.statuses[0].initAmount).reduce(reducer),
      amount: errorItems.map(i => i.statuses[0].amount).reduce(reducer),
      realAmount: errorItems.map(i => i.statuses[0].realAmount).reduce(reducer),
      list: errorItems
    }

    const postpone = {
      initAmount: postponeItems.map(i => i.statuses[0].initAmount).reduce(reducer),
      amount: postponeItems.map(i => i.statuses[0].amount).reduce(reducer),
      realAmount: postponeItems.map(i => i.statuses[0].realAmount).reduce(reducer),
      list: postponeItems
    }

    const all = {
      initAmount: success.initAmount + inwork.initAmount + error.initAmount + postpone.initAmount,
      amount: success.amount + inwork.amount + error.amount + postpone.amount,
      realAmount: success.realAmount + inwork.realAmount + error.realAmount + postpone.realAmount,
    }

    const response = {
      all: all,
      success: success,
      inwork: inwork,
      error: error,
      postpone: postpone
    }

    return response
  });

  eleventyConfig.addFilter("FMBudget2", (items: BudgetItem2[]) => {
    const budgetItems = items
      .map((bi: BudgetItem2) => {
        let amountRef = bi.amountUpdated === 0 ? bi.amountOriginal : bi.amountUpdated;
        bi.usage = amountRef === 0 ? 0 : Math.round(bi.amountReal / amountRef);
        return bi;
      });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sorter = (a: BudgetItem2, b:BudgetItem2) => b.amountOriginal - a.amountOriginal;

    const successItems = budgetItems.filter(i => i.status === 'success').sort(sorter);
    const inworkItems = budgetItems.filter(i => i.status === 'inwork').sort(sorter);
    const errorItems = budgetItems.filter(i => i.status === 'error').sort(sorter);
    const postponeItems = budgetItems.filter(i => i.status === 'postpone').sort(sorter);

    const success = {
      amountOriginal: successItems.map(i => i.amountOriginal).reduce(reducer, 0),
      amountUpdated: successItems.map(i => i.amountUpdated).reduce(reducer, 0),
      amountReal: successItems.map(i => i.amountReal).reduce(reducer, 0),
      list: successItems
    }

    const inwork = {
      amountOriginal: inworkItems.map(i => i.amountOriginal).reduce(reducer, 0),
      amountUpdated: inworkItems.map(i => i.amountUpdated).reduce(reducer, 0),
      amountReal: inworkItems.map(i => i.amountReal).reduce(reducer, 0),
      list: inworkItems
    }

    const error = {
      amountOriginal: errorItems.map(i => i.amountOriginal).reduce(reducer, 0),
      amountUpdated: errorItems.map(i => i.amountUpdated).reduce(reducer, 0),
      amountReal: errorItems.map(i => i.amountReal).reduce(reducer, 0),
      list: errorItems
    }

    const postpone = {
      amountOriginal: postponeItems.map(i => i.amountOriginal).reduce(reducer, 0),
      amountUpdated: postponeItems.map(i => i.amountUpdated).reduce(reducer, 0),
      amountReal: postponeItems.map(i => i.amountReal).reduce(reducer, 0),
      list: postponeItems
    }

    const all = {
      amountOriginal: success.amountOriginal + inwork.amountOriginal + error.amountOriginal + postpone.amountOriginal,
      amountUpdated: success.amountUpdated + inwork.amountUpdated + error.amountUpdated + postpone.amountUpdated,
      amountReal: success.amountReal + inwork.amountReal + error.amountReal + postpone.amountReal,
    }

    const response = {
      all: all,
      success: success,
      inwork: inwork,
      error: error,
      postpone: postpone
    }

    return response
  });

  eleventyConfig.addCollection("allMyContent", (collection: TemplateCollection) => {
    let scheduleList: Schedule[] = [];
    const now = luxon.DateTime.local();
    collection
      .getFilteredByTag("projekt")
      .flatMap((page: TemplateCollectionItem) => {
        return page.data.schedule.map((schedule: Schedule) => {
          schedule.page = page; // TODO: I dont need all page
          schedule.sub.filter((sub) => sub.timeline < now).forEach((sub) => (schedule.timeline = sub.timeline));
          return schedule;
        });
      })
      .forEach((schedule) => {
        scheduleList.push(schedule);
      });
    return scheduleList
      .filter((schedule) => schedule.timeline)
      .filter((schedule) => schedule.timeline < now)
      .sort((a, b) => a.timeline.toMillis() - b.timeline.toMillis());
  });

  eleventyConfig.addPairedShortcode("gallery", gallery); // TODO: I dont need
  eleventyConfig.addPairedShortcode("timeline", timeline); // TODO: I dont need
  eleventyConfig.addPairedShortcode("alternativeAB", alternativeAB); // TODO: I dont need
  eleventyConfig.addPairedShortcode("alternativeABInner", alternativeABInner); // TODO: I dont need
  eleventyConfig.addShortcode("figure", figure); // TODO: I dont need

  const markdownItOptions: markdownIt.Options = {
    html: true,
    breaks: false,
    linkify: true,
  };

  eleventyConfig.addPassthroughCopy({ "src/static/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/static/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/static/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/static/js": "js" });

  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).disable("code"));

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
            case "budget":
            case "budget2":
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
      output: "_site",
    },
  };
};

export = conf;

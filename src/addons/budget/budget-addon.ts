import { DateTime } from "luxon";
import { Budget, BudgetStatus, FMBudget } from "../../@types/budget";
import { CollectionApi, Page, Post } from "../../@types/eleventy";
import { BUDGET_2020, BUDGET_2021 } from "./budget-data";

var log = require("debug")("Petrzalka:Budget");

export const LAYOUT_BUDGET = "layouts/budget.njk";
export const TAG_BUDGET = "budget2";

class BudgetImpl implements Budget {
  readonly title: string;
  readonly id: string;
  readonly previous: string;
  readonly year: number;
  readonly program: number;
  readonly amountOriginal: number;
  readonly amountUpdated: number;
  readonly amountReal: number;
  readonly comment: string;
  readonly status: BudgetStatus;
  usage: number;

  constructor(i: Budget){
    this.title = i.title;
    this.id = i.id;
    this.previous = i.previous;
    this.year = i.year;
    this.program = i.program;
    this.amountOriginal = i.amountOriginal;
    this.amountUpdated = i.amountUpdated;
    this.amountReal = i.amountReal;
    this.comment = i.comment;
    this.status = i.status;
    this.setUsage();
  }

  setUsage() {
    let amountRef = this.amountUpdated === 0 ? this.amountOriginal : this.amountUpdated;
    this.usage = amountRef === 0 ? 0 : Math.round(this.amountReal / amountRef);
  }

}

export class BudgetPage implements Post<FMBudget> {
  data(): FMBudget {
    throw new Error("Method not implemented.");
  }
  render(data: FMBudget): string {
    return "";
  }
  frontMatterWrapper(year: number, date: DateTime, items: Budget[]): FMBudget {
    return {
      layout: LAYOUT_BUDGET,
      tags: [TAG_BUDGET],
      items: items, // TODO: i dont neet items in here
      updatedDate: date,
      year: year
    };
  }
}

class BudgetAddon {
  list: BudgetImpl[] = [];

  constructor(fm: Budget[]) {
    this.list = fm.map(x => new BudgetImpl(x))
  }

  collection = (collection: CollectionApi<FMBudget>) => {
    return this.list;
  };

  static reducer = (accumulator, currentValue) => accumulator + currentValue;
  static sorter = (a: BudgetImpl, b: BudgetImpl) => b.amountOriginal - a.amountOriginal;

  static grouper(items: BudgetImpl[], status: BudgetStatus) {
    let list = items.sort(BudgetAddon.sorter);
    if (status) {
      list = items.filter((i) => i.status === status).sort(BudgetAddon.sorter);
    }
    // TODO: can be as object
    return {
      amountOriginal: list.map((i) => i.amountOriginal).reduce(BudgetAddon.reducer, 0),
      amountUpdated: list.map((i) => i.amountUpdated ? i.amountUpdated : i.amountOriginal).reduce(BudgetAddon.reducer, 0),
      amountReal: list.map((i) => i.amountReal).reduce(BudgetAddon.reducer, 0),
      list: list,
    };
  }

  static filterByYear(input: BudgetImpl[], year: number) {
    const out = input.filter((x) => x.year === year);
    log("filterByYear:IN:" + input.length);
    log("filterByYear:IN:" + year);
    log("filterByYear:OUT:" + out.length);
    return out;
  }

  static filterGroupByStatus(items: BudgetImpl[]) {
    // TODO: can be object
    const response = {
      all: BudgetAddon.grouper(items, null),
      success: BudgetAddon.grouper(items, "success"),
      inwork: BudgetAddon.grouper(items, "inwork"),
      error: BudgetAddon.grouper(items, "error"),
      postpone: BudgetAddon.grouper(items, "postpone"),
    };
    log("groupByStatus:IN:" + items.length);
    log("groupByStatus:OUT:" + response);
    return response;
  }

  static filterById(input: BudgetImpl[], id: string) {
    const out = input.find((x) => x.id === id);
    log("findById:IN:" + input.length);
    log("findById:IN:" + id);
    log("findById:OUT:" + out);
    return out;
  }

  static filterSortByYear(page: Page<FMBudget>[]) {
    return page.sort((a, b) => b.data.year - a.data.year);
  }
}

// Filter na vratenie items podla roka - nepotrebujem, to mam v page
export function budgetAddon(eleventyConfig: any) {
  const addon = new BudgetAddon(BUDGET_2020.concat(BUDGET_2021));
  eleventyConfig.addCollection("budgetCollection", addon.collection);
  eleventyConfig.addFilter("budgetFilterByYear", BudgetAddon.filterByYear);
  eleventyConfig.addFilter("budgetFilterGroupByStatus", BudgetAddon.filterGroupByStatus);
  eleventyConfig.addFilter("budgetFilterById", BudgetAddon.filterById);
  eleventyConfig.addFilter("budgetFilterSortByYear", BudgetAddon.filterSortByYear);
}


BUDGET_2020.map(x => {
  let t = "INSERT INTO `world`.`budget` (`title`, `year`, `program`, `amount_original`, `amount_updated`, `amount_real`, `comment`, `status`) VALUES (";
  t = t + '"' + x.title + '", '
  t = t + '"' + x.year + '", '
  t = t + '"' + x.program + '", '
  t = t + '"' + x.amountOriginal + '", '
  t = t + '"' + x.amountUpdated + '", '
  t = t + '"' + x.amountReal + '", '
  t = t + '"' + x.comment + '", '
  t = t + '"' + x.status; + '"'
  t  = t + ");\n";
  console.log(t);
})
import { BudgetItem2, FMBudget2, InvPlanStatus, TemplateCollection, TemplateCollectionItem } from "./@types/eleventy";

var log = require("debug")("Petrzalka:InvPlan");

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sorter = (a: BudgetItem2, b: BudgetItem2) => b.amountOriginal - a.amountOriginal;

function grouper(items: BudgetItem2[], status: InvPlanStatus) {
  let list = items;
  if (status) {
    list = items.filter((i) => i.status === status).sort(sorter);
  }
  return {
    amountOriginal: list.map((i) => i.amountOriginal).reduce(reducer, 0),
    amountUpdated: list.map((i) => i.amountUpdated).reduce(reducer, 0),
    amountReal: list.map((i) => i.amountReal).reduce(reducer, 0),
    list: list,
  };
}

function groupByStatus(items: BudgetItem2[]) {
  const budgetItems = items.map((bi: BudgetItem2) => {
    let amountRef = bi.amountUpdated === 0 ? bi.amountOriginal : bi.amountUpdated;
    bi.usage = amountRef === 0 ? 0 : Math.round(bi.amountReal / amountRef);
    return bi;
  });

  const response = {
    all: grouper(budgetItems, null),
    success: grouper(budgetItems, "success"),
    inwork: grouper(budgetItems, "inwork"),
    error: grouper(budgetItems, "error"),
    postpone: grouper(budgetItems, "postpone"),
  };
  log("groupByStatus:IN:" + items.length);
  log("groupByStatus:OUT:" + response);
  return response;
}

function collection(collection: TemplateCollection<FMBudget2>) {
  const list = collection
    .getFilteredByTag("budget2")
    .map((p) => p.data)
    .map((fm) => {
      fm.items.forEach((i) => (i.year = fm.year));
      return fm;
    })
    .flatMap((y) => y.items);
  log("collection:OUT:"+list.length);
  return list;
}

function findById(input: BudgetItem2[], id: string) {
  const out = input.find((x) => x.id === id);
  log("findById:IN:" + input.length);
  log("findById:IN:" + id);
  log("findById:OUT:" + out);
  return out;
}

function filterByYear(input: BudgetItem2[], year: number) {
  const out = input.filter((x) => x.year === year);
  log("filterByYear:IN:" + input.length);
  log("filterByYear:IN:" + year);
  log("filterByYear:OUT:" + out.length);
  return out;
}

function sortbyYear(page: TemplateCollectionItem<FMBudget2>[]) {
  return page.sort((a, b) => b.data.year - a.data.year);
}

// Filter na vratenie items podla roka - nepotrebujem, to mam v page
export function invPlanAddon(eleventyConfig: any) {
  eleventyConfig.addFilter("invPlanGroupByStatus", groupByStatus);
  eleventyConfig.addCollection("invPlanCollection", collection);
  eleventyConfig.addFilter("invPlanFindById", findById);
  eleventyConfig.addFilter("invPlanFilterByYear", filterByYear);
  eleventyConfig.addFilter("invPlanSortByYear", sortbyYear);
}

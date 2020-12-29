import { FMProject, Execution, CollectionApi, Page } from "../../@types/eleventy";
import * as luxon from "luxon";

const log = require("debug")("Petrzalka:Projects");
const statusOrder = { success: 0, inwork: 1, error: 2 };


export const LAYOUT_PROJECT = "layouts/post2.njk";

export const TAG_PROJECT = "project";
export const TAG_TEMPLATE = "template";

export const EXE_TITLE_UK = 'Uzemne konanie';
export const EXE_TITLE_PP = "Príprava projektu";

export const EXE_SUB_TITLE_ZKMZ = 'Stanovisko komisie MZ';
export const EXE_SUB_TITLE_ZSHM = "Záväzné stanovisko hlavného mesta";


function collection(collection: CollectionApi<FMProject>) {
  const now = luxon.DateTime.local();
  const x = collection
    .getFilteredByTag(TAG_PROJECT)
    .flatMap((page: Page<FMProject>) => {
      return page.data.execution.map((schedule: Execution) => {
        schedule.page = page;
        schedule.sub.filter((sub) => sub.date < now).forEach((sub) => (schedule.date = sub.date));
        return schedule;
      });
    })
    .filter((schedule) => schedule.date)
    .filter((schedule) => schedule.date < now);
    return x.sort((a, b) => a.date.toMillis() - b.date.toMillis());
}

function project(value: number) {
  if (value === 1) {
    return "1 projekt";
  }
  if (value === 2 || value === 3 || value === 4) {
    return value + " projekty";
  }
  return value + " projektov";
}

export function projectAddon(eleventyConfig: any) {
  eleventyConfig.addCollection("projectCollection", collection);
  eleventyConfig.addFilter("projectFilterProject", project);
}

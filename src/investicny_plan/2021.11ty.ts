import { FMBudget } from "../@types/eleventy";
import * as luxon from "luxon";
import { BUDGET_2021 } from "../addons/budget/budget-data";
import { BudgetPage } from "../addons/budget/budget-addon";

class Template extends BudgetPage {
  data(): FMBudget {
    return this.frontMatterWrapper(2021, luxon.DateTime.fromISO("2020-12-15"), BUDGET_2021);
  }
}

module.exports = Template;

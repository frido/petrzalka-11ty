import * as luxon from "luxon";
import { BUDGET_2020 } from "../addons/budget/budget-data";
import { BudgetPage } from "../addons/budget/budget-addon";
import { FMBudget } from "../@types/budget";

class Template extends BudgetPage {
  data(): FMBudget {
    return this.frontMatterWrapper(2020, luxon.DateTime.fromISO("2020-10-01"), BUDGET_2020);
  }
}

module.exports = Template;

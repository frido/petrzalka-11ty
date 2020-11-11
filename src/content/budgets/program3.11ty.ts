import { Budget, FMBudget } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Budget {
  render(data: FMBudget): string {
    return '';
  }
  data(): FMBudget {
    return {
      tags: ['budget2'],
      color: "#704521",
      icon: '002.png',
      title: 'Služby občanom',
      years: [
        {
          year: 2020,
          amount: 0,
          items: [
          ]
        }
      ]
    }
  }
}

module.exports = Template;

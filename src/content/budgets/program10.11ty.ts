import { Budget, FMBudget } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Budget {
  render(data: FMBudget): string {
    return '';
  }
  data(): FMBudget {
    return {
      tags: ['budget2'],
      color: "#000000",
      icon: '003.png',
      title: 'Doprava a komunikácie',
      years: [
        {
          year: 2020,
          amount: 100000,
          items: [
            {
              amount: 14000,
              title: 'Zabezpečenie klimatizácie do ZSS na Vavilovovej ulici',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "Z dovodu pandemie nebolo mozne realizovat, 26/07/2020 poziadalo ZSS o dotaciu pre zabezpecenie klimatizazie vo vlastnej rezii",
                  status: 'cancel'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

module.exports = Template;

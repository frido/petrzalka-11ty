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
              amount: 34757,
              title: 'Dofinancovanie ÚP zóny Kapitulský dvor',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 34757,
                  realAmount: 34757,
                  comment: "V procese spracovania návrhu ÚP",
                  status: 'inwork'
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

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
              amount: 20000,
              title: 'Obstaranie špeciálneho vozidla pre DVPZ Petržalka',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 20000,
                  realAmount: 0,
                  comment: "v príprave",
                  status: 'inwork'
                }
              ]
            }, {
              amount: 100000,
              title: 'nakup telco techniky - kamery',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 100000,
                  realAmount: 0,
                  comment: "",
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

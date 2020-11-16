import { Budget, FMBudget } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Budget {
  render(data: FMBudget): string {
    return '';
  }
  data(): FMBudget {
    return {
      tags: ['budget2'],
      color: "#134E84",
      icon: '001.png',
      title: 'Moderný miestny úrad',
      years: [
        {
          year: 2020,
          amount: 53000,
          items: [
            {
              amount: 3000,
              title: 'Nákup licencie software na verejné obstarávanie',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 1500,
                  realAmount: 0,
                  comment: "Príprava podkladov na verejné obstarávanie",
                  status: 'inwork'
                }
              ]
            },{
              amount: 30000,
              title: 'Virtualizácie serverov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 30000,
                  realAmount: 0,
                  comment: "priebežne sa plní",
                  status: 'inwork'
                }
              ]
            },{
              amount: 35000,
              title: 'Komunikačná infraštruktúra',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 30000,
                  realAmount: 16253.42,
                  comment: "priebežne sa plní",
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

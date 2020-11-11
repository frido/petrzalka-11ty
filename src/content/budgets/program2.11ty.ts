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
              title: 'Nákup licencie software na verejné obstarávanie v čiastke',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "príprava podkl. na VO",
                  status: 'inwork'
                }
              ]
            },{
              amount: 30000,
              title: 'Obstaranie virtualizácie serverov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "priebežne sa plní",
                  status: 'inwork'
                }
              ]
            },{
              amount: 35000,
              title: 'Komunikacna infrastruktura',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
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

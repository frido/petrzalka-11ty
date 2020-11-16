import { Budget, FMBudget } from "../../../@types/eleventy";
import * as luxon from "luxon";


class Template implements Budget {
  render(data: FMBudget): string {
    return '';
  }
  data(): FMBudget {
    return {
      tags: ['budget2'],
      color: "#99021B",
      icon: '000.png',
      title: 'Rozhodovanie, manažment a kontrola',
      years: [
        {
          year: 2020,
          amount: 0,
          items: [
            {
              amount: 0,
              title: 'Moderná prezentácia pamiatok a pamätihodností MČ',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "niCE life projekt. Náhradné čerpanie za neschválený pôvodný projekt. Pre potreby niCE life projektu sú potrebné iba bežné výdavky. Kapitálové výdavky v roku 2020 nebudú čerpané",
                  status: 'success'
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

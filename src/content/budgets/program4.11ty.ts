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
              amount: 100000,
              title: 'Rekonštrukcia chodníkov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 95000,
                  realAmount: 36836,
                  comment: "",
                  status: 'inwork'
                }
              ]
            },{
              amount: 80000,
              title: 'Rekonstrukcia a modernizácia',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "",
                  status: 'inwork'
                }
              ]
            },{
              amount: 145000,
              title: 'Vybudovanie cyklotrasy, prípadne nových chodníkov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 15852,
                  realAmount: 5352,
                  comment: "platba za PD, aktualne prebiehaju zistovania vlastnickych vztahov na pozemkoch cyklotras",
                  status: 'inwork'
                }
              ]
            },{
              amount: 370000,
              title: 'Prípravná projektová dokumentácia na budovanie nových chodníkov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "Nerealizuje sa, bolo by vhodné od MZ presunúť na opravu jestvujúcich chodnikov",
                  status: 'error'
                }
              ]
            },{
              amount: 23000,
              title: 'Projektová dokumentácia na nové parkoviská',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 14437.8,
                  realAmount: 14437.8,
                  comment: "zrealizované",
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

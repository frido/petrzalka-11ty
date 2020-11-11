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
              title: 'Nákup strojovej techniky na údržbu komunikácií, kosenie',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 100000,
                  realAmount: 0,
                  comment: "",
                  status: 'inwork'
                }
              ]
            },{
              amount: 80000,
              title: 'rekonstrukcia a modernizacia',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 80000,
                  realAmount: 4000,
                  comment: "",
                  status: 'inwork'
                }
              ]
            },{
              amount: 145000,
              title: 'Vybudovanie cyklotrasy, prípadne nových chodníkov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 13100,
                  realAmount: 0,
                  comment: "platba za PD, aktualne prebiehaju zistovania vlastnickych vztahov na pozemkoch cyklotras",
                  status: 'inwork'
                }
              ]
            },{
              amount: 370000,
              title: 'pripravna projektova dokumentacia - budovaie nových chopdníkov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "Nerealizuje sa, bolo by vhodné od MZ presunúť na opravu jestvujúcich chodnikov",
                  status: 'error'
                }
              ]
            },{
              amount: 23000,
              title: 'PD na nové parkoviská',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
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

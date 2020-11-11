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
              amount: 34651,
              title: 'Vybudovanie denného stacionáru',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 34756.8,
                  realAmount: 0,
                  comment: "NFP zamietnutý, aktualne prebieha odvolacie konanie",
                  status: 'inwork'
                }
              ]
            },{
              amount: 0,
              title: 'PD + realizácia',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 19800,
                  realAmount: 4200,
                  comment: "participatívny výskum na Nám. Republiky",
                  status: 'done'
                }
              ]
            },{
              amount: 300000,
              title: 'Riešenie sociálneho zar. pre seniorov, príp. na zvýšenie kapacity MŠ',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "prebratie objektu Hrobákova, na obhliadke objektu Hrobáková sa určila cena rekonštrukcie ref, inv. Činností na sumu 450-520000 €",
                  status: 'inwork'
                }
              ]
            },{
              amount: 15100,
              title: 'nakup budov, objektov a ich casti',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 15100,
                  realAmount: 15100,
                  comment: " zrealizované",
                  status: 'done'
                }
              ]
            },{
              amount: 29000,
              title: 'Vyhotovenie PD k novým projektom podľa vyhlásených výziev',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 2065,
                  realAmount: 0,
                  comment: "neocakava sa dalsie cerpanie",
                  status: 'done'
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

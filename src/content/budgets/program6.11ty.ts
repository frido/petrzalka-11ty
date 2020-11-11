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
              amount: 0,
              title: 'Vybudovanie klimatizácie v DK Zrkadlový háj ',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "spracováva sa PD, v rezii KZP",
                  status: 'cancel'
                }
              ]
            },{
              amount: 0,
              title: 'Rekonštrukcia jestvujúceho multifunkčného ihriska',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: " zrealizované - boli to cisto bezne vydavky",
                  status: 'done'
                }
              ]
            },{
              amount: 67123,
              title: 'Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 30000,
                  realAmount: 0,
                  comment: "inwork",
                  status: 'prebieha vyber projektanta'
                }
              ]
            },{
              amount: 0,
              title: 'Výmena mantinelov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 18534.36,
                  realAmount: 0,
                  comment: "vysutazene, montaz - polovica 10/2020",
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

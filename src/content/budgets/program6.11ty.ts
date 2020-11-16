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
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "spracováva sa PD, v rezii KZP",
                  status: 'error'
                }
              ]
            },{
              amount: 0,
              title: 'Rekonštrukcia jestvujúceho multifunkčného ihriska',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "zrealizované - boli to cisto bezne vydavky",
                  status: 'success'
                }
              ]
            },{
              amount: 67123,
              title: 'Revitalizácia športového areálu,  multifunkčného ihriska - I. fáza',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 30000,
                  realAmount: 0,
                  comment: "realiyovať sa bude PD na multifunkčné ihrisko a dráhu. Príprava súťaže.",
                  status: 'inwork'
                }
              ]
            },{
              amount: 0,
              title: 'Výmena mantinelov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-10-01"),
                  amount: 18534,
                  realAmount: 18534,
                  comment: "vysutazene, montaz - polovica 10/2020",
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

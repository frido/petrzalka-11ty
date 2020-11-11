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
              amount: 219348,
              title: 'Nakup vozidiel a plosiny',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 179348,
                  realAmount: 113075.99,
                  comment: "",
                  status: 'success'
                }
              ]
            },{
              amount: 18252,
              title: 'prevadzkove stroje',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 18252,
                  realAmount: 18252,
                  comment: "",
                  status: 'done'
                }
              ]
            },{
              amount: 0,
              title: 'Vybudovanie jedného nového výbehu pre psov',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "inwork",
                  status: 'prebieha identifikácia vhodných pozemkov, v roku 2020 sa nebude realizovať'
                }
              ]
            },{
              amount: 10000,
              title: 'Príspevky na stav. Úpravy a vybudovanie nových kontajnerových stanovíšť',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 10000,
                  realAmount: 0,
                  comment: "priebežne sa plní",
                  status: 'inwork'
                }
              ]
            },{
              amount: 63200,
              title: 'Na revitalizáciu verejných detských ihrísk',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 53322,
                  realAmount: 38322,
                  comment: "prebieha inventarizácia stavu DI",
                  status: 'inwork'
                }
              ]
            },{
              amount: 91614,
              title: 'nakup nakladnych automobilov + prevadzkove stroje a pristroje',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 89384.33,
                  realAmount: 89384.33,
                  comment: "",
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

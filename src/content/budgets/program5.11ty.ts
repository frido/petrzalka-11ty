import { Budget, FMBudget } from "../../../@types/eleventy";
import * as luxon from "luxon";

class Template implements Budget {
  render(data: FMBudget): string {
    return '';
  }
  data(): FMBudget {
    return {
      tags: ['budget2'],
      color: "#5E1F95",
      icon: '004.png',
      title: 'Vzdelávanie',
      years: [
        {
          year: 2020,
          amount: 1400720,
          items: [
            {
              amount: 420523,
              title: 'Rekonštrukcia skolkskych zariadeni',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 856300,
                  realAmount: 115963.85,
                  comment: "realizuje sa",
                  status: 'inwork',
                  items: [
                    {
                      title: 'PD rekonštrukcia priestorov kuchyne - realizačná dokumentácia',
                      status: 'success',
                      description: 'zrealizované'
                    },{
                      title: 'PD rekonštrukcia odpadov zo ŠJ vrátane lapača tukov',
                      status: 'success',
                      description: 'zrealizované'
                    },,{
                      title: 'PD rekonštrukcia šatní pri telocvični a bazéne ',
                      status: 'success',
                      description: 'zrealizované'
                    },,{
                      title: 'Rekonštrukcia hygienických zariadení v pavilóne B3',
                      status: 'inwork',
                      description: 'Realizuje sa termín ukončenia 30.9.2020'
                    },,{
                      title: 'Rekonštrukcia šatní pri telocvični a bazéne ',
                      status: 'inwork',
                      description: 'Realizuje sa termín ukončenia 30.9.2020'
                    },,{
                      title: 'Rekonštrukcia priestorov kuchyne a toaliet ŠKD na 2.NP pavilónu A1 vrátane gastrozariadení',
                      status: 'inwork',
                      description: 'Termín ukončenia prác koniec 10/2020'
                    },,{
                      title: 'Rekonštrukcia okien na 3. a 4. poschodí v pavilóne prístavby',
                      status: 'success',
                      description: 'zrealizované'
                    },,{
                      title: 'Rekonštrukcia vonkajšej terasy vstupov do 2. NP',
                      status: 'inwork',
                      description: 'realizuje sa, predpokadaný termín ukončenia prác 18.9.2020'
                    },,{
                      title: 'Prestavba školníckeho bytu na triedu MŠ a úniková cesta z 2.NP',
                      status: 'inwork',
                      description: 'Príprava súťaže'
                    },,{
                      title: 'Prestavba školníckeho bytu na triedu MŠ a zvýšenie kapacity kuchyne  vrátane gastrozariadenia',
                      status: 'inwork',
                      description: 'Príprava súťaže'
                    },,{
                      title: 'Prestavba hospodárskeho pavilónu',
                      status: 'inwork',
                      description: 'realizuje sa, spracováva sa zmena využitia stavby'
                    },,{
                      title: 'Prestavba hospodárskeho pavilónu',
                      status: 'inwork',
                      description: 'zrealizované, prebieha zmena účelu využívania'
                    },,{
                      title: 'Úprava oplotenia areálu MŠ',
                      status: 'cancel',
                      description: 'nerealizuje sa'
                    },,{
                      title: 'Rekonštrukcia hydroizolácie strechy',
                      status: 'inwork',
                      description: 'Žačali sa prvé rokovania s projektantom čakáme na CP za projekt'
                    },,{
                      title: 'Rekonštrukcia a vybavenie odborných učební',
                      status: 'inwork',
                      description: 'NFP schválený, dodavatel vysutazeny (s realizáciou projektu plánujeme začať od roku 2021, nepredpokladáme čerpanie v roku 2020 )'
                    },,{
                      title: 'Rekonštrukcia a modernizácia kuchýň a zariadení',
                      status: 'success',
                      description: 'zrealizované'
                    },,{
                      title: 'Vyplatenie zádržného dodávateľom prác na školských objektoch',
                      status: 'inwork',
                      description: 'priebežne sa plní'
                    },,{
                      title: 'Rekonštrukcia hygienických zariadení v pavilóne B3',
                      status: 'inwork',
                      description: 'prebiehajú práce, predpokladaný termín odovzdania 18.9.2020'
                    },
                  ]
                }
              ]
            },{
              amount: 777246,
              title: 'Dotacia na obnovu odborných učební ZŠ',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "zrusene",
                  status: 'cancel'
                }
              ]
            },{
              amount: 18740,
              title: 'Rekonštrukcia časti objektu za účelom zvýšenia kapacity',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 0,
                  realAmount: 0,
                  comment: "inwork",
                  status: 'NFP schválený, dodavatel vysutazeny - realizacia v 2021'
                }
              ]
            },{
              amount: 0,
              title: 'Nákup vozidla',
              statuses: [
                {
                  date: luxon.DateTime.fromISO("2020-09-01"),
                  amount: 20000,
                  realAmount: 0,
                  comment: "success",
                  status: 'nákup vozidla na rozvoz stravy'
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

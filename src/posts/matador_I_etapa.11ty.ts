import { ProjectPage } from "../addons/project/project-addon";
import * as luxon from "luxon";
import { FMProject } from "../@types/project";

class Template extends ProjectPage {
  data(): FMProject {
    return this.frontMatterWrapper( {
      title: "Rekonštrukcia a dostavba výrobných hál MATADOR - I. etapa",
      date: "2021-04-03",
      description: "Investičný zámer obsahuje rekonštrukciu časti pôvodnej haly a výstavbu troch bytových domov a dvoch penziónových domov so spoločnou podzemnou garážou. Zámerom predkladaného riešenia je využitie potenciálu lokality pre účely bývania, prechodného ubytovania, administratívy a obchodu formou urbanizácie a oživenia chátrajúceho výrobného areálu",
      "icon": "img/matador_I_etapa/4.png",
      gallery: [
        { link: 'img/matador_I_etapa/1.png' },
        { link: 'img/matador_I_etapa/2.png' },
        { link: 'img/matador_I_etapa/3.png' },
        { link: 'img/matador_I_etapa/4.png' }
      ],
      source: "https://www.petrzalka.sk/wp-content/uploads/2019/01/UPVaD_01_21_10_Rekonstrukcia_a_dostavba_vyrobnych_hal_Matador.pdf",
      execution: [
        {
          title: "Investičný zámer",
          status: "inwork",
          description: "prebieha", 
          sub: [
            {
              title: "Investičný zámer",
              source: "https://www.petrzalka.sk/wp-content/uploads/2019/01/UPVaD_01_21_10_Rekonstrukcia_a_dostavba_vyrobnych_hal_Matador.pdf",
              status: "unknown",
              description: "",
              date: luxon.DateTime.fromISO("2019-01-01")
            }
          ]
        }
      ]
    });
  }

  render(data: FMProject) {
    return `
    <p>
    Predmetom dokumentácie je investičný zámer „Rekonštrukcia a dostavba výrobných hál 
MATADOR - I. etapa“, ktorý obsahuje rekonštrukciu časti pôvodnej haly a výstavbu troch 
bytových domov a dvoch penziónových domov so spoločnou podzemnou garážou. Zámerom 
predkladaného riešenia je využitie potenciálu lokality pre účely bývania, prechodného 
ubytovania, administratívy a obchodu formou urbanizácie a oživenia chátrajúceho výrobného 
areálu.</p><p>
Snahou je maximálne zachovanie pôvodných výrobných hál, ktoré definujú celý
architektonický koncept novonavrhovanej štruktúry. Pôvodné halové objekty budú
rekonštruované a ich funkcia konvertovaná na administratívne účely a občiansku vybavenosť tak,
aby bol zachovaný ich industriálny charakter, ktorý bude jasne čitateľný aj v navrhovaných 
objektoch.</p><p>
Vzájomný vzťah novej a pôvodnej stavby bude plne rozvinutý v parteri, kde všetky 
objekty v maximálnej miere sú prepájané a necháva sa vyniknúť architektonická hodnota 
výrobných hál a tvarová jedinečnosť ich oblúkovej konštrukcie. Výnimočnosť oblúkových hál je 
tak z ulice jasne čitateľná. V novovzniknutých nádvoriach sú situované vstupy do objektov, 
vzniká exteriérový priestor so zeleňou pre umiestňovanie terás občianskej vybavenosti, ktorý
pomáha vytvárať živý, mestotvorný parter a vnáša do ulice ďalší level zelene.
</p><p>
Samotná forma novonavrhovaných objektov je zvolená tak, aby vhodne dopĺňala 
jestvujúci charakter a nekonkurovala halovým objektom. Ide o 5 jednoduchých kvádrových hmôt 
ktoré sú striedavo vkladané medzi jestvujúce nosné moduly. Materiály fasády a jej artikulácia je 
opäť volená tak, aby nekonkurovala pôvodnému charakteru. Objekty sú dopĺňané o zavesené
oceľové balkóny, ktoré svojou formou podtrhujú industriálny charakter celého navrhovaného 
súboru.</p>`;
  }
}

module.exports = Template;

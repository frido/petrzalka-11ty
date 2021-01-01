import { FMProject, Post } from "../@types/eleventy";
import { EXE_SUB_TITLE_ZKMZ, EXE_TITLE_PP, EXE_TITLE_UK, LAYOUT_PROJECT, TAG_PROJECT } from "../addons/project/project-addon";
import * as luxon from "luxon";

class Template implements Post<FMProject> {
  data(): FMProject {
    return {
      "title": "Rekonštrukcia a vybavenie odborných učební",
      "date": "2020-06-06",
      "tags": [TAG_PROJECT],
      "layout": LAYOUT_PROJECT,
      description: "Cieľom projektov je vytvorenie podmienok na zabezpečenie kvalitného primárneho vzdelávania a nižšieho stredného vzdelávania prispievajúceho k zvládnutiu povinnej školskej dochádzky. Tento cieľ sa naplní realizáciou aktivít jednotlivých projektov zameraných na vytvorenie odborných učební, čím sa vytvoria predpoklady pre zabezpečenie prístupu ku kvalitnejším verejným službám v oblasti povinnej školskej dochádzky a výchovy.",
      "sources": [
         "https://www.petrzalka.sk/oblasti/projektove-riadenie/budovanie-a-zlepsenie-technickeho-vybavenia-jazykovych-ucebni-skolskych-kniznic-odbornych-ucebni-rozneho-druhu-v-zakladnych-skolach/"
      ],
      "amount": 43599,
      "amountAll": 871980,
      "execution": [
         {
            "title": EXE_TITLE_PP,
            "status": "success",
            "description": "hotovo",
            "startReal": "2016",
            "sub": [ 
               {
                  "title": "Materiál na rokovanie MZ",
                  "status": "success",
                  "description": "",
                  source: "https://www.petrzalka.sk/wp-content/uploads/2017/05/10_Odsuhlasenie_projektov_vybavenie_odbornych_ucebni_v_ZS_Aktual.pdf",
                  date: luxon.DateTime.fromISO("2017-05-06")
               }
            ]
         }
      ]
   };
  }

  render(data: FMProject) {
    return `
    <p>
    Cieľom projektov je vytvorenie podmienok na zabezpečenie kvalitného primárneho
    vzdelávania a nižšieho stredného vzdelávania prispievajúceho k zvládnutiu povinnej školskej
    dochádzky. Tento cieľ sa naplní realizáciou aktivít jednotlivých projektov zameraných na
    vytvorenie odborných učební, čím sa vytvoria predpoklady pre zabezpečenie prístupu ku
    kvalitnejším verejným službám v oblasti povinnej školskej dochádzky a výchovy.
    </p><p>
    Špecifickým cieľom projektov je podpora základného vzdelávania zameraná na budovanie a
    rekonštrukciu odborných učební podporujúcich výučbu prírodovedných predmetov, výučbu
    polytechnickej výchovy, vúčbu cudzích jazykov ako aj výučbu informačno-komunikačných
    predmetov určených pre žiakov v základných školách mestskej časti Bratislava-Petržalka.
    Okrem modernizácie týchto odborných učební je cieľom projektov aj modernizácia školských
    knižníc. Nevyhnutnou súčasťou je zabezpečenie materiálno-technického vybavenia týchto
    odborných učební. Projekty sú teda zamerané na zlepšenie podmienok pre efektívnu, modernú
    výučbu a jej skvalitnenie. Realizácia projektov by tiež mala napomôcť zlepšeniu vzdelávacích
    výsledkov žiakov a k zlepšeniu kompetencií žiakov v súvislosti s ich celoživotným
    vzdelávaním. Doplnením inovatívnych a moderných materiálov a učebných pomôcok v rámci
    jednotlivých odborných učební sa uľahčí nielen príprava žiakov a učiteľov na vyučovanie ale
    aj celý priebeh edukácie, ale prispeje sa tiež ku skvalitneniu výstupov vyučovacieho procesu
    </p><p>
    Projektami na „Budovanie a zlepšenie technického vybavenia jazykových učební, školských
    knižníc, odborných učební rôzneho druhu v 11 základných školách mestskej časti BratislavaPetržalka plánuje mestská časť zrealizovať nasledovné typy aktivít:
    </p><p>
    * obstaranie jazykových učební na výučbu slovenského jazyka a cudzích jazykov, vrátane slovenského jazyka pre osoby vyrastajúce v inom jazykovom prostredí,
    * obstaranie školských knižníc vrátane priestorov pre ďalší rozvoj kľúčových kompetencií žiakov,
    * obstaranie prírodovedných učební,
    * obstaranie polytechnických učební,
    * obstaranie IKT učební, 
    </p>
    <h2>Harmonogram projektu</h2>
    <p>
    Plánovaný začiatok realizácie projektov v prípade schválenia ŽoNFP a po úspešnom
    ukončení procesu verejného obstarávania na realizátorov projektov je naplánovaný na rok
    2018 s rozdielnym ukončením realizácie projektov, čo závisí od rozsahu plánovaných aktivít
    v rámci jednotlivých projektov. Väčšina z projektov má však plánovaný koniec realizácie
    aktivít projektu na september 2018, príp. december 2018.
    </p>
    <h2>Zoznam škôl</h2>
    
    <h3>Základná škola Lachova 1</h3>
    <p>
    Doba realizácie projektu: 01/2020 - 09/2020
    </p><p>
    Cieľovou skupinou projektu sú žiaci 1. – 9. ročníka Základnej školy na
    Lachovej ulici č. 1, Bratislava, kde bude projekt aj realizovaný. Projekt
    rozširuje prístup žiakov k efektívnym a kvalitným verejným službám
    v súlade s Regionálnou územnou stratégiou Bratislavského kraja. Našou
    motiváciou je dopyt zákonných zástupcov žiakov o výučbu dvoch cudzích
    jazykov. Cieľom projektu je zlepšenie materiálno – technického
    vybavenia školy v synergii zlepšenia kľúčových kompetencií žiakov, čo
    znamená skvalitnenie a zatraktívnenie výučby anglického a nemeckého
    jazyka prostredníctvom moderných výučbových softvérov a metód
    podporujúcich aktivizáciu žiaka. Súčasťou projektu sú aktivity
    podporujúce zlepšenie jazykových kompetencií talentovaných žiakov tak
    aj žiakov so špecifickými vývinovými poruchami. Počet možných
    užívateľov nových zariadení bude celkovo v rámci celej základnej školy
    387 žiakov, pričom odborná učebňa bude zriadená pre 16 žiakov. 
    </p><p>
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Jazykova-u%C4%8Debna-Z%C5%A0-Lachova.pdf)
    </p>
    <h3>Základná škola Budatínska 61</h3>
    
    Doba realizácie projektu: 01/2020 - 12/2020
    
    Projekt je zameraný na zlepšenie podmienok pre modernú a efektívnu
    výučbu, jej skvalitnenie, a to s celkovým cieľom obstarania jazykovej
    učebne na výučbu slovenského jazyka a doplnkovo tiež cudzích jazykov
    (anglického a nemeckého) pre 17 žiakov. Taktiež na splnenie špecifických
    cieľov – zlepšenie jazykových kľúčových kompetencií žiakov, zvýšenie
    inkluzívnosti a rovnakého prístupu ku kvalitnému vzdelávaniu, zlepšenie
    vzdelávacích výsledkov žiakov a zlepšenie kompetencií žiakov v súvislosti
    s ich celoživotným vzdelávaním. Doplnením inovatívnych a aktivizujúcich
    učebných materiálov, výukových softvérov pre uvedené vyučovacie
    predmety, kvalitnejším materiálno-technickým a IKT vybavením učebne
    sa uľahčí nielen príprava žiakov a učiteľov na vyučovanie, priebeh
    edukácie, ale prispeje sa tiež ku skvalitneniu výstupov vyučovacieho
    procesu. Cieľovou skupinou sú žiaci druhého stupňa školy – 5. až 9.
    ročník. Realizácia projektu prispeje k riešeniu nasledovných problémov
    školy: nedostatok vlastných finančných prostriedkov na zriadenie
    jazykovej učebne; nedostatok moderných informačno-komunikačných
    technológií; nedostatok kvalitnej študijnej literatúry; chýbajúce
    podmienky pre samovzdelávanie / e-learning (žiaci, učitelia); obmedzená
    možnosť realizovania aktivizujúcich vyučovacích metód – projektové
    vyučovanie, vyučovanie na stanoviskách, CLIL, práca s výukovým
    softvérom; nemožnosť vytvárania elektronických edukačných materiálov
    pre výučbu intaktných žiakov, žiakov so zdravotným znevýhodnením a
    nadaných žiakov. 
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Jazyky-modernej%C5%A1ie-a-efekt%C3%ADvnej%C5%A1ie-Z%C5%A0-Budat%C3%ADnska.pdf)
    
    ### Základná škola Tupolevova 20
    
    Doba realizácie projektu: 01/2020 - 12/2020
    
    V rámci projektu budú vybavené nasledovné typy odborných učební:
    * Modernizácia technického vybavenia 2 učební IKT prostredníctvom
    zmodernizovania výpočtovej techniky (zlepšenie HW konfigurácie,
    zmodernizovanie SW na výučbu informatiky, informatickej výchovy, ako
    aj ostatných predmetov, pri ktorých by sme mohli využívať PC);
    * Modernizácia technického vybavenia Biologickej učebne počnúc
    novým nábytkom (stoly, stoličky, katedru, skrinky na učebné pomôcky a
    modely), IKT technikou a tiež učebnými pomôckami k predmetu
    (trojrozmerné modely – ľudské telo, rastlinné orgány, modely živočíchov,
    mikroskopy, lupy, rôzne výučbové materiály – CD a DVD);
    * Modernizácia technického vybavenia Knižnice formou rozšírenia
    knižničného fondu a vytvorenia príjemného prostredia pre žiakov
    a návštevníkov školskej knižnice, vrátane zmodernizovania knižničného
    nábytku a rozšírenia technológie v knižnici (technológia na požičiavanie
    kníh, notebooky s možnosťou pripojenia na internet, ktoré budú slúžiť na
    doplnenie vzdelávania).
    So zriadením učební a knižnice sú taktiež spojené drobné stavebné
    úpravy.
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Moderniz%C3%A1cia-technick%C3%A9ho-vybavenia-u%C4%8Debn%C3%AD-IKT-Moderniz%C3%A1cia-technick%C3%A9ho-vybavenia-Biologickej-u%C4%8Debne-Moderniz%C3%A1cia-technick%C3%A9ho-vybavenia-Kni%C5%BEnice-Z%C5%A0-Tupolevova.pdf)
    
    ### Základná škola Gessayova 2
    
    Doba realizácie projektu: 01/2020 - 12/2020
    
    Cieľom projektu je obstaranie odbornej učebne polytechnickej výchovy a
    obstaranie odbornej učebne chémie, konkrétne sa jedná o: 1. Zriadenie a
    obstaranie vybavenia odbornej učebne polytechnickej výchovy, 2.
    Zriadenie a obstaranie odbornej učebne chémie a 3. Zriadenie odbornej
    učebne polytechnickej výchovy a chémie – stavebné úpravy. Každá
    z učební bude zriadená pre 16 žiakov, pričom žiaci budú tieto 2 odborné
    učebne využívať na vyučovanie predmetov: A) pracovné vyučovanie na 1.
    stupni ZŠ, technika a svet práce na 2. stupni ZŠ a B) chémia – praktické
    cvičenia. Samotným cieľom projektu je tak zlepšenie pracovného
    školského prostredia, a tým efektívnejšie napĺňanie obsahu Školského
    vzdelávacieho programu vrátane príspevku k napĺňaniu cieľov
    inkluzívneho vzdelávania.
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Obstaranie-odbornej-u%C4%8Debne-polytechnickej-v%C3%BDchovy-a-obstaranie-odbornej-u%C4%8Debne-ch%C3%A9mie-Z%C5%A0-Gessayova.pdf)
    
    ### Základná škola Holíčska 50
    
    Doba realizácie projektu: 01/2020 - 10/2020
    
    Cieľom a obsahovou náplňou projektu je obstaranie 2 polytechnických
    učební a stavebno-technické úpravy pre potreby obstarania učební. Ide
    o nevyhnutné úpravy existujúceho priestoru, ktorý sa nateraz nedá
    využívať z dôvodu opotrebovania, nevyhovujúceho osvetlenia,
    chýbajúcich rozvodov vody a elektroinštalácií. Zrealizovanie
    nevyhnutných stavebných úprav a vybavenie polytechnických učební
    potrebným zariadením a modernými pomôckami zvýši motiváciu žiakov
    vzdelávať sa v technickej oblasti. Zvýšená motivácia by mohla mať
    priaznivý vplyv na celkové študijné výsledky žiakov z menej podnetného
    prostredia, získavanie potrebných zručností a pracovných návykov, čo by
    v budúcnosti mladým absolventom pomáhalo ľahšie sa uplatniť na trhu
    práce. Nadobudnutie pozitívneho vzťahu k technike by malo odstrániť
    nezáujem a predsudky žiakov a ich zákonných zástupcov voči technickým
    študijným a učebným odborom, čím by sa predchádzalo nevhodne
    zvolenej strednej škole a následnému zlyhávaniu v štúdiu na strednej
    škole. Zvýšenie záujmu o získanie kvalifikácie v technickej oblasti mladým
    absolventom umožní lepšiu uplatniteľnosť na trhu práce
    a prispeje k ďalšiemu znižovaniu nezamestnanosti v našom regióne. 
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Technikou-k-lep%C5%A1%C3%ADm-mo%C5%BEnostiam-mlad%C3%BDch-Z%C5%A0-Hol%C3%AD%C4%8Dska.pdf)
    
    ### Základná škola Černyševského 8
    
    Doba realizácie projektu: 01/2020 - 12/2020
    
    V rámci projektu príde k zriadeniu 4 odborných učební, pričom v prípade
    všetkých učební sa budú riešiť aj stavebno-technické úpravy:
    * Jazyková učebňa - Zriadenie a vybavenie učebne cudzích jazykov
    prispeje k zvýšeniu úrovne a modernizácie vyučovania jazykov
    prostredníctvom zavedenia moderných IKT technológií a využitia
    inovatívnych metód a foriem výučby zvýši efektívnosť vzdelávania v CJ.
    Cieľu skvalitnenia jazykovej prípravy žiakov prispieva využitie nielen
    tradičných, ale aj moderných prístupov a IKT;
    * Odborná učebňa biológie a chémie - Projekt prispieva k integrovanému
    prístupu aktivít a inkluzívnemu vzdelávaniu na biológii a chémii. Aktivity
    sú prispôsobené vzdelávacím potrebám každého žiaka s dôrazom na
    špecifické potreby každého jedinca;
    * Odborná učebňa Fyziky - V záujme zlepšovania výučby a spájania teórie
    s praxou lepšej predstavivosti žiakov a názorným ukážkam, vrátane
    zvýšenia manuálnej zručnosti žiakov, je vhodné vybaviť odbornú učebňu
    novými pomôckami;
    * Odborná učebňa Informatiky - V súlade s projektom je cieľom najmä
    rozvíjať u žiakov tvorbu programov v oblasti robotiky, žiakov naučiť
    pracovať s PC technikou (podporovanie informačných technológií
    v bežnom živote každého jedinca), v žiakoch evokovať zvýšený záujem
    o mimoškolskú činnosť v oblasti prípravy na súťaže, vo vyučovacom
    procese využívať formy moderného vyučovania pomocou IKT.
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Tvoriv%C3%A9-vyu%C4%8Dovanie-Z%C5%A0-%C4%8Cerny%C5%A1evsk%C3%A9ho.pdf)
    
    ### Základná škola Prokofievova 5
    
    Doba realizácie projektu: 01/2020 - 10/2020
    
    Ciele projektu sú v priamej súvislosti s definovanými problémami, ktoré
    bude projekt riešiť. Ide o podporu základného vzdelávania zameranú na
    budovanie a rekonštrukciu odborných učební, laboratórií podporujúcich
    polytechnickú výchovu, technické a prírodovedné zameranie žiakov,
    vybudovanie jazykových učební pre rozvoj jazykových zručností, a učební
    IKT pre rozvoj informačno-komunikačných zručností žiakov základných
    škôl. Nevyhnutnou súčasťou je zabezpečenie materiálno-technického
    vybavenia objektov s cieľom zlepšenia výsledkov žiakov v
    medzinárodnom, ako aj národnom meraní dosiahnutých vedomostí a ich
    úspešnosti na trhu práce. Realizácia projektu podporí rozvoj materiálnotechnického vybavenia základnej školy z hľadiska jej funkcie ako centra
    celoživotného vzdelávania a ich sprístupnenie podporených učební pre
    verejnosť a poskytovateľom celoživotného vzdelávania. Špecifický cieľ
    projektu Rozvoj a zvýšenie kľúčových kompetencií žiakov základných škôl
    sa bezprostredne dotýka aj žiakov so špeciálnymi potrebami v bežnej
    základnej škole, ktorým sa formou inklúzie zabezpečia kvalitné
    podmienky vzdelávania, ktoré rešpektujú ich špecifické vzdelávacie
    potreby. Investičné priority sú zamerané na budovanie a rekonštrukciu
    učební IKT, jazykovej učebne, učební polytechnických a prírodovedných. 
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/U%C4%8D%C3%ADme-sa-moderne-a-kvalitne-Z%C5%A0-Prokofievova.pdf)
    
    ### Základná škola Pankúchova 4
    
    Doba realizácie projektu: 01/2020 - 12/2020
    
    Cieľmi projektu sú: zlepšiť kľúčové kompetencie žiakov (žiaci 1.-9. ročníka
    na ZŠ Pankúchova 4.); skvalitniť informačnú a komunikačnú gramotnosť
    používateľov knižnice; technickým vybavením učební implementovať a
    rozvíjať metódy a postupy zamerané na stimuláciu rozvoja životných
    zručností a celoživotného učenia sa; vytvárať inkluzívne školské
    prostredie.
    Hlavné aktivity projektu (1. Obstaranie jazykovej učebne na výučbu
    cudzích jazykov na II. stupni, 2. Obstaranie technického vybavenia
    biologickej/chemickej učebne, 3. Zlepšenie technického vybavenia
    školskej knižnice, 4. Stavebno-technické úpravy) sa budú realizovať
    v učebni vyhradenej na vyučovanie cudzích jazykov, v najväčšej kmeňovej
    učebni, v ktorej predelením vznikne priestor na vybavenie biologickej/
    chemickej učebne. V už vytvorenej školskej knižnici zlepšíme technické
    vybavenie.
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/U%C4%8Dme-sa-kvalitne-u%C4%8Dme-sa-pre-%C5%BEivot-Z%C5%A0-Pank%C3%BAchova.pdf)
    
    ### Základná škola Nobelovo námestie 6
    
    Doba realizácie projektu: 01/2020 - 08/2020
    
    Cieľom projektu je vytvorenie podmienok na zvýšenie a zabezpečenie
    kvalitného primárneho vzdelávania a nižšieho stredného vzdelávania
    prispievajúceho k zvládnutiu povinnej školskej dochádzky. Cieľ sa naplní
    realizáciou aktivít zameraných na vytvorenie odborných učební, a tým sa
    vytvoria predpoklady pre zabezpečenie prístupu ku kvalitnejším verejným
    službám v oblasti povinnej školskej dochádzky a výchovy.
    Vytvorenie odborných učební prispieva k modernizácii metód a foriem
    práce so žiakmi. Vytvára priestor pre individuálny prístup k žiakom.
    V bežných triedach pracujeme s väčším počtom žiakov so špeciálnymi
    výchovno-vzdelávacími potrebami. Moderné výučbové metódy umožnia
    názorné priblíženie obsahu vzdelávania a následne okamžitú spätnú
    väzbu. Umožňujú žiakom interaktívne sa zapájať do vyučovacieho
    procesu. Cieľom aktivít je rozvoj čitateľskej gramotnosti a komunikačných
    zručností v slovenskom jazyku a v cudzích jazykoch a rozvoj počítačovej
    gramotnosti. Cieľ projektu bude naplnený prostredníctvom troch
    hlavných aktivít projektu a to: 1 - Vybavenie jazykovej učebne pre
    slovenský jazyk a literatúru, 2 - Vybavenie jazykovej učebne pre cudzie
    jazyky, 3 - Vybavenie odbornej učebne IKT. 
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Vybavenie-odborn%C3%BDch-u%C4%8Debn%C3%AD-v-Z%C5%A0-Nobelovo-n%C3%A1mm.pdf)
    
    ### Základná škola Dudova 2
    
    Doba realizácie projektu: 01/2020 - 10/2020
    
    Cieľom projektu je zriadenie 2 odborných učební – odbornej učebne na
    vyučovanie jazykov a odbornej učebne chémie, vrátane stavebnotechnických úprav oboch učební. V dôsledku zriadenia jazykovej učebne
    pre 16 žiakov príde k zlepšeniu podmienok na vyučovanie cudzích jazykov
    (anglický, nemecký a francúzsky) a k skvalitneniu komunikačných
    zručností žiakov v oblasti získavania informácií a ich interpretácií, lepšej
    formulácií problémov a návrhov ich riešenia v rodnom a najmä v cudzom
    jazyku. Vďaka modernému vybaveniu bude možné efektívnejšie pracovať
    aj so žiakmi, ktorí potrebujú individuálny prístup - vzdelávaním žiakov so
    ŠVVP v jazykovej učebni vytvoríme možnosť zapojiť sa aktívnejšie do
    vzdelávania bez prekážok s možnosťou využitia ďalších
    špecifických metód a foriem výchovy a vzdelávania. Druhou aktivitou
    projektu je zlepšenie podmienok na vyučovanie predmetu chémia
    prostredníctvom zriadenia odbornej učebne chémie pre 16 žiakov.
    Vyučovací predmet chémia má bádateľský a činnostný charakter, to
    znamená, že žiaci vlastnou činnosťou objavujú vlastnosti látok,
    zákonitosti ich správania a vzájomného pôsobenia. Obsah vyučovacieho
    predmetu tvoria nielen chemické poznatky, ale aj praktické činnosti,
    ktoré vyúsťujú do zvládnutia viacerých prvkov vedeckej činnosti, z
    ktorých najdôležitejší je experiment. Vykonávaním vlastných „vedeckých“
    činností si žiaci osvojujú dôležité spôsobilosti, predovšetkým spôsobilosť
    objektívne a spoľahlivo pozorovať a opísať pozorované. 
    
    [zdroj](https://www.petrzalka.sk/wp-content/uploads/2019/10/Znalos%C5%A5-jazykov-r%C3%BAca-bari%C3%A9ry-otv%C3%A1ra-dvere-a-sp%C3%A1ja-%C4%BEud%C3%AD-sk%C3%BAmame-a-objavujeme-svet-Z%C5%A0-Dudova.pdf)
    
    ### Základná škola Turnianska
    
    predloženie ŽoNFP za účelom realizácie projektu „Zriadenie odborných učební
    v priestoroch prístavby školy“, realizovaného v rámci Výzvy na predkladanie
    žiadostí o nenávratný finančný príspevok na budovanie a zlepšenie technického
    vybavenia jazykových učební, školských knižníc, odborných učební rôzneho druhu
    v základných školách, ktorého ciele sú v súlade s platným územným plánom hl. mesta
    SR Bratislava a PHSR Mestskej časti Bratislava-Petržalka.
    
    ## Dôvodová správa
    
    Ministerstvo pôdohospodárstva a rozvoja vidieka Slovenskej republiky Riadiaci orgán
    pre Integrovaný regionálny operačný program (ďalej len IROP) vyhlásilo v decembri 2016
    Výzvu na predkladanie Žiadosti o nenávratný finančný príspevok na budovanie a zlepšenie
    technického vybavenia jazykových učební, školských knižníc, odborných učební rôzneho
    druhu v základných školách. Výzva bola vyhlásená v rámci Prioritnej osi 2 - Ľahší prístup
    k efektívnym a kvalitnejším verejným službám, špecifický cieľ 2.2.2 – Zlepšenie kľúčových
    kompetencií žiakov základných škôl.
    
    Indikatívna výška finančných prostriedkov alokovaných na výzvu predstavuje
    35 601 822 Eur (zdroj EÚ), ktorá je stanovená podľa územnej príslušnosti na základe analýzy
    samosprávnych krajov vychádzajúcich z Regionálnych územných stratégií (ďalej len RIÚS),
    pričom pre Bratislavský samosprávny kraj je alokovaných 4 000 000 Eur.
    
    Proces poskytovania Nenávratného finančného príspevku je dvojkolový, čo znamená,
    že sa v rámci prvého kola sa mestská časť Bratislava-Petržalka zapojila do Výzvy na
    predkladanie projektových zámerov. V rámci tejto výzvy mestská časť podala 11
    projektových zámerov v rámci týchto základných škôl, ktoré sú v zriaďovatelskej pôsobnosti
    mestskej časti Bratislava-Petržalka: ZŠ Turnianska, ZŠ Tupolevova, ZŠ Pankúchova, ZŠ
    Prokofievova, ZŠ Nobelovo námestie, ZŠ Holíčska, ZŠ Lachova, ZŠ Černyševského, ZŠ
    Dudova, ZŠ Budatínska, ZŠ Gessayova. Po vydaní kladnej hodnotiacej správy sa môžeme
    zúčastniť procesu druhého kola a to zapojením sa do Výzvy na predkladanie Žiadostí
    o nenávratný finančný príspevok (ďalej len ŽoNFP).
    
    Dňa 9.3.2017 mestská časť Bratislava-Petržalka podala v riadnom termíne na
    Sprostredkovateľský a riadiaci orgán (SO/RO) 11 projektových zámerov pre 11 základných
    škôl. Momentálne na Sprostredkovateľskom a Riadiacom orgáne mesta Bratislava prebieha
    hodnotenie projektových zámerov a po splnení podmienok určených vo výzve, vydá SO/RO
    vo vzťahu k projektovým zámerom hodnotiace správy.
    
    Termín na predkladanie Žiadostí o Nenávratný finančný príspevok (ŽoNFP) je stanovený na
    15.5.2017. Vzhľadom k aktualizácii Príručky pre žiadateľa a z nej vyplývajúcich povinných
    príloh je ako jedna z povinných príloh k Žiadostiam o NFP aj uznesenie miestneho
    zastupiteľstva k podaniu a spolufinancovaniu projektov.
    `;
  }
}

module.exports = Template;

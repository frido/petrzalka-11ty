var fetchUrl = require("fetch").fetchUrl;
// var parse = require('node-html-parser').parse;

import { parse, HTMLElement } from "node-html-parser";
// const fetch = require('node-fetch');
import fetch, { } from "node-fetch";

class Statement {
  link: string = '';
  ziadatel: string = '';
  title: string = '';
  place: string = '';
  stateDate: string = '';
  publicDate: string = '';

  constructor(link: string) {
      this.link = link;
      Promise.all
  }

  add(text: string) {
    if (text.startsWith("Žiadateľ")) {
      this.ziadatel = text.substr("Žiadateľ: ".length);
    }
    if (text.startsWith("Obsah podania:")) {
      this.title = text.substr("Obsah podania: ".length);
    }
    if (text.startsWith("Lokalita:")) {
      this.place = text.substr("Lokalita: ".length);
    }
    if (text.startsWith("Vydané dňa:")) {
      this.stateDate = text.substr("Vydané dňa: ".length);
    }
    if (text.startsWith("Zverejnené dňa:")) {
      this.publicDate = text.substr("Zverejnené dňa: ".length);
    }
  }
}

class ZverejnovanieDownloader {
  private base = "https://zverejnovanie.bratislava.sk";
  private link = "/vismo/zobraz_dok.asp?p1=77275&id_ktg=1329&tzv=1&pocet=25&stranka=";

  private statements: Statement[] = [];

  constructor() {} 

  extractData(base: string, root: HTMLElement): Statement[] {
    const statements: Statement[] = [];
    const tdList = root.querySelectorAll("td");
    tdList.forEach((td) => {
      var a = td.querySelector("a");
      if (a) {
        var div = td.querySelector("div");
        if (div) {
          const statement = new Statement(base + a.rawAttributes.href);
          div.childNodes.forEach((subDiv) => {
            statement.add(subDiv.rawText);
          });
          statements.push(statement);
        }
      }
    });
    return statements;
  }

  load(callback: (data: Statement[]) => void): void {
    const urls: string[] = [];
    for(let i = 1 ; i < 17 ; i++) {
      urls.push( this.base + this.link + i );
    }
    console.log(urls);
    Promise.all(
      urls.map( u =>
        fetch(u)
          .then(response => response.text())
          .then(text => parse(text))
          .then(root => this.extractData(this.base, root))
          .then(statements => statements.filter(s => s.place.includes('Petržalka')))
      )
    )
    .then(sList => {
      sList.forEach(s => this.statements = this.statements.concat(s) );
      callback(this.statements)
    })
    .then(() => callback(this.statements));
  }
}

export { ZverejnovanieDownloader };

import { X_OK } from "constants";
import fetch, { } from "node-fetch";
import * as encoding from  'encoding';
const ImageCharts = require('image-charts');
import {appendFileSync} from 'fs';

const key = '1MXmzv7rPVg1v98CO9LbdVgUo5bULOiZuihK0seicZoLwZIdz7Vnx1NdqI8SDyn3qzIWfUE0olU6T1gItNpTLJch0X4YruUcUhATBzPlclnj4F0IgmuOGVMjoQJHBGxqJQmMmixifi2lnfQdnlZqaVFCtnSqbP19jxAblmq6GVFfy8Z2YI8LFyLeev5OEbJVNm8ZdEVoczQDyDlWK4FYw0jFeopMW3i5ICkGrjgkpea8Yw8EwElU1XG4H1';

class CssLoader<T> {
  constructor(private parser: { (items: string[]): T}) {
  }

  load(fileId: string) {
    return fetch('http://opendata.bratislava.sk/api/file/'+fileId+'/download', {headers: {key}})
    .then(response => response.buffer())
    .then(response => {
      let x = encoding.convert(response, 'utf-8', 'windows-1252');
      return x;
    })
    .then(response => response.toString('utf8'))
    .then(r => this.parse(r, this.parser))
  }

  parse(content: string, parser: { (items: string[]): T}): Css<T> {
    const data: T[] = [];
    const lines = content.split('\n');
    lines.forEach(line => {
      data.push(parser(line.split(',')));
    });
    return new Css<T>(data);
  };
}

class Css<T> {
  constructor(private list:T[]) {}

  filter(prop: string, value: string): Css<T> {
    return new Css<T>(this.list.filter(i => {
      return i[prop] === value
    }));
  }

  sort(prop: string): Css<T> {
    return new Css<T>(this.list.sort((a, b) => {
      return a[prop] - b[prop];
    }));
  }

  getList() :T[] {
    return this.list;
  }

  getChart(): any {
    const data = this.list.map(x => x['value']).join(',');
    const datalabels = this.list.map(x => Math.round(x['value'] / 1000) / 1000).join('|');
    const labels = this.list.map(x => x['rok']).join('|');
    console.log(data);
    return ImageCharts()
      .cht('bvs')
      .chxt('x,y')
      // .chl(datalabels)
      .chxl('0:|'+labels)
      .chd('a:' + data)
      .chs('999x300');
  }
};

// --------------------------------------------

interface Bla {
  okres: string;
  cast: string;
  rok: number;
  value: number;
}

const parser = (items: string[]): Bla => {
  return {
    okres: items[0],
    cast: items[1],
    rok: Number.parseInt(items[2]),
    value: Number.parseInt(items[3])
  }
}

new CssLoader<Bla>(parser)
.load('9878')
.then(css => { 
  let r = css.filter('cast', 'Petržalka').sort('rok').getChart().toURL();
  console.log(r);
})
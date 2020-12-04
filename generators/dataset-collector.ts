import { X_OK } from "constants";
import fetch, { } from "node-fetch";
import * as encoding from  'encoding';
const ImageCharts = require('image-charts');
import {appendFileSync} from 'fs';

const key = '1MXmzv7rPVg1v98CO9LbdVgUo5bULOiZuihK0seicZoLwZIdz7Vnx1NdqI8SDyn3qzIWfUE0olU6T1gItNpTLJch0X4YruUcUhATBzPlclnj4F0IgmuOGVMjoQJHBGxqJQmMmixifi2lnfQdnlZqaVFCtnSqbP19jxAblmq6GVFfy8Z2YI8LFyLeev5OEbJVNm8ZdEVoczQDyDlWK4FYw0jFeopMW3i5ICkGrjgkpea8Yw8EwElU1XG4H1';

async function f(page: number) {
  const x = await fetch('http://opendata.bratislava.sk/api/dataset', {headers: {key: key, page: page.toString()}});
  const json = await x.json();
  console.log(page);
  json.datasets.forEach(d => g(d.id, d.name));
}

async function g(id: number, name: string) {
  const x = await fetch('http://opendata.bratislava.sk/api/dataset/'+id+'/files', {headers: {key: key}});
  const json = await x.json();
  if (name.startsWith('Pozitívne testovaní') ||
      name.startsWith('Cyklosčítač') ||
      name.startsWith('Register adries') ||
      name.startsWith('Celomestský zoznam') ||
      name.startsWith('Počet prenesených') ||
      name.startsWith('Zmluvy') ||
      name.startsWith('Pozemky vo vlastníctve') ||
      name.startsWith('Vyhodnotenie cyklotrás') ||
      name.startsWith('Výsledky volieb') ||
      name.startsWith('Objednávky') ||
      name.includes('Free Wifi VisitBratislava') ||
      name.startsWith('SODB 2011')) {
    return
  }
  if (json.files) {
    json.files.forEach(e => {
      if(e.type === 'csv') {
        appendFileSync('aaa.txt', id + ' # ' + e.id + ' # ' + name + ' # ' + e.name + '\n')
      }
    })
  } else {
    console.log(json);
  };
  
}

for (let index = 1; index < 74; index++) {
  f(index);
}




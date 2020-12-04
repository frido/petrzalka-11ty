import { X_OK } from "constants";
import fetch, { } from "node-fetch";
import * as encoding from  'encoding';
const ImageCharts = require('image-charts');
import {appendFileSync, fstat, readFileSync} from 'fs';
import { listenerCount } from "process";

const key = '1MXmzv7rPVg1v98CO9LbdVgUo5bULOiZuihK0seicZoLwZIdz7Vnx1NdqI8SDyn3qzIWfUE0olU6T1gItNpTLJch0X4YruUcUhATBzPlclnj4F0IgmuOGVMjoQJHBGxqJQmMmixifi2lnfQdnlZqaVFCtnSqbP19jxAblmq6GVFfy8Z2YI8LFyLeev5OEbJVNm8ZdEVoczQDyDlWK4FYw0jFeopMW3i5ICkGrjgkpea8Yw8EwElU1XG4H1';


async function g(id: string, name: string) {
  const x = await fetch('http://opendata.bratislava.sk/api/file/'+id+'/download', {headers: {key: key}});
  const buffer = await x.buffer();
  let body: string = encoding.convert(buffer, 'utf-8', 'windows-1252').toString('utf8');
  const lines = body.split('\n');
  let max = 0;
  if(lines.length > 0) {
    const header = lines.shift();
    let delimiter = ','
    if (!header.includes('delimiter')) {
      delimiter = ';';
    }
    const head = header.split(delimiter);
    
    const rokIndex = head.indexOf('Rok');
    if (rokIndex > 0) {
      lines.forEach(l => {
        const rok = l.split(delimiter)[rokIndex];
        const r = parseInt(rok);
        if (r > max) {
          max = r;
        }
      })
    }
    if (max > 0) {
      console.log(max + ' -> ' + id + " -> " + header.trim() +  " -> " + name.trim());
      appendFileSync('bbb.txt', max + ' -> ' + id + " -> " + header.trim() +  " -> " + name.trim() + '\n');
    }
  }
  
  return max;
}

const content = readFileSync('aaa.txt').toString('utf-8');
content.split('\n').forEach(line => {
  const items = line.split(' - ');
  const rok = g(items[0], items[2]);
})
// console.log(content);

// g(9878);





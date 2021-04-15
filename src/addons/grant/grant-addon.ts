import { SPORT_GRANTS } from "./grant-sport-data";
import { OZ_GRANTS } from "./grant-oz-data";
import { Grant, GrantAmount } from "../../@types/grant";


const CURRENT_YEAR = 2021;

class GrantImpl implements Grant {
  title: string;
  amount: GrantAmount[];
  currentAmount: number;
  currentDetail: string;

  constructor(g: Grant ) {
    this.title = g.title;
    this.amount = g.amount.filter(x => x.year !== CURRENT_YEAR ).sort((a, b) => b.year - a.year);
    this.currentAmount = g.amount.find(x => x.year === CURRENT_YEAR)?.amount ?? 0;
    this.currentDetail = g.amount.find(x => x.year === CURRENT_YEAR)?.detail;
  }
}

function sportCollection() { 
  return SPORT_GRANTS.map(x => new GrantImpl(x)).sort((a, b) => b.currentAmount - a.currentAmount); 
};

function ozCollection() { 
  return OZ_GRANTS.map(x => new GrantImpl(x)).sort((a, b) => b.currentAmount - a.currentAmount); 
};

export function grantAddon(eleventyConfig: any) {
  eleventyConfig.addCollection("grantSportCollection", sportCollection);
  eleventyConfig.addCollection("grantOZCollection", ozCollection);
}

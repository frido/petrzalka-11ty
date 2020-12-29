import { CollectionApi, FMBudget, Grant, GrantAmount } from "../../@types/eleventy";
import { SPORT_GRANTS } from "./grantSportData";
import { OZ_GRANTS } from "./grantOZData";


const CURRENT_YEAR = 2020;

class GrantImpl implements Grant {
  title: string;
  amount: GrantAmount[];
  currentAmount: number;
  currentDetail: string;

  constructor(g: Grant ) {
    this.title = g.title;
    this.amount = g.amount;
    this.currentAmount = this.amount.find(x => x.year === CURRENT_YEAR)?.amount;
    this.currentDetail = this.amount.find(x => x.year === CURRENT_YEAR)?.detail;
  }
}

function sportCollection() { 
  return SPORT_GRANTS.map(x => new GrantImpl(x)); 
};

function ozCollection() { 
  return OZ_GRANTS.map(x => new GrantImpl(x)); 
};

export function grantAddon(eleventyConfig: any) {
  eleventyConfig.addCollection("grantSportCollection", sportCollection);
  eleventyConfig.addCollection("grantOZCollection", ozCollection);
}

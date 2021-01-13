import { DateTime } from "luxon";
import { FrontMatter } from "./eleventy";

export interface FMGrant extends FrontMatter {
  grants: Grant[];
}

export interface Grant {
  title: string;
  amount: GrantAmount[];
}

export interface GrantAmount {
  year: number;
  amount: number;
  detail?: string;
}
import { DateTime } from "luxon";
import { FrontMatter } from "./eleventy";

type BudgetStatus = "inwork" | "success" | "error" | "postpone";

export interface FMBudget extends FrontMatter {
  year: number;
  items: Budget[];
  updatedDate: DateTime;
}

export interface Budget {
  title: string;
  id: string;
  previous?: string;
  year: number;
  program: number;
  amountOriginal: number;
  amountUpdated: number;
  amountReal: number;
  comment: string;
  status: BudgetStatus;
  usage?: number;
}

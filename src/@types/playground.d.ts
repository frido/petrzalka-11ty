import { DateTime } from "luxon";
import { FrontMatter } from "./eleventy";

type PlaygroundCategory = "A" | "B" | "C";

export interface FMPlayGround extends FrontMatter {
    year: number;
    playgrounds: Playground[];
  }

export interface Playground {
  name: string;
  district: number;
  category: PlaygroundCategory[];
  year: number;
  flag: string;
}

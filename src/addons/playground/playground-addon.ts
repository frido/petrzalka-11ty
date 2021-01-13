import { Post } from "../../@types/eleventy";
import { FMPlayGround, Playground, PlaygroundCategory } from "../../@types/playground";

var log = require("debug")("Petrzalka:Playground");

export const LAYOUT_PLAYGROUND = "layouts/playground.njk";
export const TAG_PLAYGROUND = "playground";

export class PlayGroundPage implements Post<FMPlayGround> {
  data(): FMPlayGround {
    throw new Error("Method not implemented.");
  }
  render(data: FMPlayGround): string {
    return "";
  }
  frontMatterWrapper(year: number, playgrounds: Playground[]): FMPlayGround {
    return {
      year: year,
      layout: LAYOUT_PLAYGROUND,
      tags: [TAG_PLAYGROUND],
      playgrounds: playgrounds, // TODO: i dont need it in here
    };
  }
}

export class PlaygroundAddon {
  static description(flag: string) {
    if (flag === 'new') {
      return 'výstavba nového ihriska'
    }
    if (flag === 'green') {
      return 'zrušenie ihriska'
    }
    if (flag === 'workout') {
      return 'zmena na street workout'
    }
    if (flag === 'green/workout') {
      return 'zrušenie alebo street workout'
    }
    if (flag === 'green/park') {
      return 'výstavba parkoviska'
    }
    return 'rekonštrukcia'
  }
  
  static status(flag: string) {
    if (flag === 'new') {
      return 'success'
    }
    if (flag === 'green' || flag === 'workout' || flag === 'green/workout' || flag === 'green/park') {
      return 'error'
    }
    return 'inwork'
  }
  
  static category(category: PlaygroundCategory[]) {
    if (category.length === 2) {
      return 'pre 0 - 14r deti'
    }
    if (category.length === 3) {
      return 'pre 0 - 14r + street workout'
    }
    return category.map(c => {
      if (c === 'A') {
        return 'pre 0 - 10r deti'
      }
      if (c === 'B') {
        return 'pre 10 - 14r deti'
      }
      if (c === 'C') {
        return 'street workout'
      }
    }).join(', ')
  }
}

export function playgroundAddon(eleventyConfig: any) {
  eleventyConfig.addFilter("playgroundFilterDescription", PlaygroundAddon.description);
  eleventyConfig.addFilter("playgroundFilterStatus", PlaygroundAddon.status);
  eleventyConfig.addFilter("playgroundFilterCategory", PlaygroundAddon.category);
}

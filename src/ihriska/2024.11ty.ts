import { YEAR_2024 } from "../addons/playground/playgroundData";
import { PlayGroundPage } from "../addons/playground/playgroundAddon";

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(YEAR_2024);
  }
}

module.exports = Template;

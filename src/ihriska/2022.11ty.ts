import { YEAR_2022 } from "../addons/playground/playgroundData";
import { PlayGroundPage } from "../addons/playground/playgroundAddon";

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(YEAR_2022);
  }
}

module.exports = Template;

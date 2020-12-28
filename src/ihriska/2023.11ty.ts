import { YEAR_2023 } from "../addons/playground/playgroundData";
import { PlayGroundPage } from "../addons/playground/playgroundAddon";


class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(YEAR_2023);
  }
}

module.exports = Template;

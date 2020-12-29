import { YEAR_2024 } from "../addons/playground/playground-data";
import { PlayGroundPage } from "../addons/playground/playground-addon";

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(YEAR_2024);
  }
}

module.exports = Template;

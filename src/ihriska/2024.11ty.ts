import { YEAR_2024 } from "../addons/playground/playground-data";
import { PlayGroundPage } from "../addons/playground/playground-addon";

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(2024, YEAR_2024);
  }
}

module.exports = Template;

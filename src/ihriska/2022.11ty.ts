import { YEAR_2022 } from "../addons/playground/playground-data";
import { PlayGroundPage } from "../addons/playground/playground-addon";

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(2022, YEAR_2022);
  }
}

module.exports = Template;

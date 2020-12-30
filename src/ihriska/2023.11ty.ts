import { YEAR_2023 } from "../addons/playground/playground-data";
import { PlayGroundPage } from "../addons/playground/playground-addon";


class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(2023, YEAR_2023);
  }
}

module.exports = Template;

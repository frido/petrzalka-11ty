import { YEAR_2021 } from "../addons/playground/playground-data";
import { PlayGroundPage } from "../addons/playground/playground-addon";

// https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf

class Template extends PlayGroundPage {
  data() {
    return this.frontMatterWrapper(2021, YEAR_2021);
  }
}

module.exports = Template;

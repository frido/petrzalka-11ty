"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var playground_data_1 = require("../addons/playground/playground-data");
var playground_addon_1 = require("../addons/playground/playground-addon");
// https://www.petrzalka.sk/wp-content/uploads/2020/11/13.-Inform%C3%A1cia-k-verejn%C3%BDm-detsk%C3%BDm-ihrisk%C3%A1m-harmonogram-revitaliz%C3%A1cie-VDI_MZ-18_11_2020.pdf
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Template.prototype.data = function () {
        return this.frontMatterWrapper(2021, playground_data_1.YEAR_2021);
    };
    return Template;
}(playground_addon_1.PlayGroundPage));
module.exports = Template;

playground_data_1.YEAR_2024.map(function (x) {
    var t = "INSERT INTO `world`.`playground` (`title`, `district`,`category`,`year`,`flag`) VALUES (";
    t = t + '"' + x.name + '",';
    t = t + '"' + x.district + '",';
    t = t + '"' + x.category.join('') + '",';
    t = t + '"' + x.year + '",';
    t = t + '"' + x.flag + '"';
    t = t + ");\n";
    console.log(t);
});

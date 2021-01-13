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
var project_addon_1 = require("../addons/project/project-addon");
var luxon = require("luxon");
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Template.prototype.data = function () {
        return this.frontMatterWrapper({
            title: "Skladovo-prevádzkový areál - DEKTER, s.r.o.",
            date: "2020-11-05",
            description: "",
            icon: "",
            execution: [
                {
                    title: project_addon_1.EXE_TITLE_UK,
                    status: "inwork",
                    description: "",
                    sub: [
                        {
                            title: "Stanovisko komisie MZ",
                            source: "https://www.petrzalka.sk/wp-content/uploads/2020/10/KUPVaR-zapisnica_2020-09-29_overena.pdf",
                            status: "success",
                            description: "súhlasí",
                            date: luxon.DateTime.fromISO("2020-09-29")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

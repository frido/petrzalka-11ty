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
            title: "Lávky cez Chorvátske rameno",
            date: "2021-04-05",
            description: "Štyri lávky budú urbanisticky, architektonicky, funkčne a dopravne napojené do kontextu miesta. Návrh prinesie aj riešenie predpolia lávok na oboch brehoch a bude v maximálnej možnej miere rešpektovať tvarovanie terénu a zelene Chorvátskeho ramena.",
            icon: "img/lavky_cez_chorvatske_rameno/1.jpg",
            source: "https://mib.sk/sutaz/lavky-cez-chorvatske-rameno-v-petrzalke/?fbclid=IwAR16xcz6Ql7kGz5bRpXU7nRz-6aWyQQi_xj-ogqj822WExkFgHvf3-SOWAc",
            gallery: [
                { link: "img/lavky_cez_chorvatske_rameno/1.jpg" },
                { link: "img/lavky_cez_chorvatske_rameno/2.jpg" },
                { link: "img/lavky_cez_chorvatske_rameno/3.jpg" },
                { link: "img/lavky_cez_chorvatske_rameno/4.jpg" },
                { link: "img/lavky_cez_chorvatske_rameno/0.jpg" }
            ],
            execution: [
                {
                    title: "Príprava projektu",
                    status: "inwork",
                    description: "prebieha",
                    sub: [
                        {
                            title: "Súťaž",
                            source: "https://mib.sk/sutaz/lavky-cez-chorvatske-rameno-v-petrzalke/?fbclid=IwAR16xcz6Ql7kGz5bRpXU7nRz-6aWyQQi_xj-ogqj822WExkFgHvf3-SOWAc",
                            status: "inwork",
                            description: "prebieha",
                            date: luxon.DateTime.fromISO("2021-02-11")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    \u0160tyri l\u00E1vky bud\u00FA urbanisticky, architektonicky, funk\u010Dne a dopravne napojen\u00E9 do kontextu miesta. N\u00E1vrh prinesie aj rie\u0161enie predpolia l\u00E1vok na oboch brehoch a\u202Fbude v\u202Fmaxim\u00E1lnej mo\u017Enej miere re\u0161pektova\u0165 tvarovanie ter\u00E9nu a zelene Chorv\u00E1tskeho ramena.\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

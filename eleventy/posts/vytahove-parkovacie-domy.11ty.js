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
            "title": "Výťahové parkovacie domy",
            "date": "2020-10-27",
            "description": "Zámer budovania výťahových parkovacích domov spoločnosťou UpDown Parking v Petržalke",
            "icon": "/img/vytahove-parkovacie-domy/3.png",
            gallery: [
                { link: 'img/vytahove-parkovacie-domy/3.png' },
                { link: 'img/vytahove-parkovacie-domy/4.png' },
                { link: 'img/vytahove-parkovacie-domy/5.png' },
                { link: 'img/vytahove-parkovacie-domy/6.png' },
                { link: 'img/vytahove-parkovacie-domy/7.png' },
                { link: 'img/vytahove-parkovacie-domy/8.png' },
                { link: 'img/vytahove-parkovacie-domy/9.png' },
                { link: 'img/vytahove-parkovacie-domy/10.png' },
                { link: 'img/vytahove-parkovacie-domy/11.png' },
                { link: 'img/vytahove-parkovacie-domy/12.png' },
                { link: 'img/vytahove-parkovacie-domy/13.png' },
            ],
            "sources": [
                "http://updownparking.sk/assets/dist/images/presentation.pdf"
            ],
            "execution": [
                {
                    "title": "Investičný zámer",
                    "status": "inwork",
                    "description": "prebieha",
                    "sub": [
                        {
                            "title": "Infomateriál",
                            "source": "https://www.petrzalka.sk/wp-content/uploads/2020/09/INFO-7.-Z%C3%A1mer-budovania-v%C3%BD%C5%A5ahov%C3%BDch-parkovac%C3%ADch-domov-v-Petr%C5%BEalke.pdf",
                            "status": "success",
                            "description": "",
                            date: luxon.DateTime.fromISO("2020-08-26")
                        }
                    ]
                }
            ]
        });
    };
    Template.prototype.render = function (data) {
        return "\n    Z\u00E1mer budovania v\u00FD\u0165ahov\u00FDch parkovac\u00EDch domov spolo\u010Dnos\u0165ou UpDown Parking v Petr\u017Ealke.\n    ";
    };
    return Template;
}(project_addon_1.ProjectPage));
module.exports = Template;

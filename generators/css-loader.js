"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var encoding = require("encoding");
var ImageCharts = require('image-charts');
var key = '1MXmzv7rPVg1v98CO9LbdVgUo5bULOiZuihK0seicZoLwZIdz7Vnx1NdqI8SDyn3qzIWfUE0olU6T1gItNpTLJch0X4YruUcUhATBzPlclnj4F0IgmuOGVMjoQJHBGxqJQmMmixifi2lnfQdnlZqaVFCtnSqbP19jxAblmq6GVFfy8Z2YI8LFyLeev5OEbJVNm8ZdEVoczQDyDlWK4FYw0jFeopMW3i5ICkGrjgkpea8Yw8EwElU1XG4H1';
var CssLoader = /** @class */ (function () {
    function CssLoader(parser) {
        this.parser = parser;
    }
    CssLoader.prototype.load = function (fileId) {
        var _this = this;
        return node_fetch_1["default"]('http://opendata.bratislava.sk/api/file/' + fileId + '/download', { headers: { key: key } })
            .then(function (response) { return response.buffer(); })
            .then(function (response) {
            var x = encoding.convert(response, 'utf-8', 'windows-1252');
            return x;
        })
            .then(function (response) { return response.toString('utf8'); })
            .then(function (r) { return _this.parse(r, _this.parser); });
    };
    CssLoader.prototype.parse = function (content, parser) {
        var data = [];
        var lines = content.split('\n');
        lines.forEach(function (line) {
            data.push(parser(line.split(',')));
        });
        return new Css(data);
    };
    ;
    return CssLoader;
}());
var Css = /** @class */ (function () {
    function Css(list) {
        this.list = list;
    }
    Css.prototype.filter = function (prop, value) {
        return new Css(this.list.filter(function (i) {
            return i[prop] === value;
        }));
    };
    Css.prototype.sort = function (prop) {
        return new Css(this.list.sort(function (a, b) {
            return a[prop] - b[prop];
        }));
    };
    Css.prototype.getList = function () {
        return this.list;
    };
    Css.prototype.getChart = function () {
        var data = this.list.map(function (x) { return x['value']; }).join(',');
        var datalabels = this.list.map(function (x) { return Math.round(x['value'] / 1000) / 1000; }).join('|');
        var labels = this.list.map(function (x) { return x['rok']; }).join('|');
        console.log(data);
        return ImageCharts()
            .cht('bvs')
            .chxt('x,y')
            // .chl(datalabels)
            .chxl('0:|' + labels)
            .chd('a:' + data)
            .chs('999x300');
    };
    return Css;
}());
;
var parser = function (items) {
    return {
        okres: items[0],
        cast: items[1],
        rok: Number.parseInt(items[2]),
        value: Number.parseInt(items[3])
    };
};
new CssLoader(parser)
    .load('9878')
    .then(function (css) {
    var r = css.filter('cast', 'Petržalka').sort('rok').getChart().toURL();
    console.log(r);
});

"use strict";
exports.__esModule = true;
exports.ZverejnovanieDownloader = void 0;
var fetchUrl = require("fetch").fetchUrl;
// var parse = require('node-html-parser').parse;
var node_html_parser_1 = require("node-html-parser");
// const fetch = require('node-fetch');
var node_fetch_1 = require("node-fetch");
var Statement = /** @class */ (function () {
    function Statement(link) {
        this.link = '';
        this.ziadatel = '';
        this.title = '';
        this.place = '';
        this.stateDate = '';
        this.publicDate = '';
        this.link = link;
        Promise.all;
    }
    Statement.prototype.add = function (text) {
        if (text.startsWith("Žiadateľ")) {
            this.ziadatel = text.substr("Žiadateľ: ".length);
        }
        if (text.startsWith("Obsah podania:")) {
            this.title = text.substr("Obsah podania: ".length);
        }
        if (text.startsWith("Lokalita:")) {
            this.place = text.substr("Lokalita: ".length);
        }
        if (text.startsWith("Vydané dňa:")) {
            this.stateDate = text.substr("Vydané dňa: ".length);
        }
        if (text.startsWith("Zverejnené dňa:")) {
            this.publicDate = text.substr("Zverejnené dňa: ".length);
        }
    };
    return Statement;
}());
var ZverejnovanieDownloader = /** @class */ (function () {
    function ZverejnovanieDownloader() {
        this.base = "https://zverejnovanie.bratislava.sk";
        this.link = "/vismo/zobraz_dok.asp?p1=77275&id_ktg=1329&tzv=1&pocet=25&stranka=";
        this.statements = [];
    }
    ZverejnovanieDownloader.prototype.extractData = function (base, root) {
        var statements = [];
        var tdList = root.querySelectorAll("td");
        tdList.forEach(function (td) {
            var a = td.querySelector("a");
            if (a) {
                var div = td.querySelector("div");
                if (div) {
                    var statement_1 = new Statement(base + a.rawAttributes.href);
                    div.childNodes.forEach(function (subDiv) {
                        statement_1.add(subDiv.rawText);
                    });
                    statements.push(statement_1);
                }
            }
        });
        return statements;
    };
    ZverejnovanieDownloader.prototype.load = function (callback) {
        var _this = this;
        var urls = [];
        for (var i = 1; i < 17; i++) {
            urls.push(this.base + this.link + i);
        }
        console.log(urls);
        Promise.all(urls.map(function (u) {
            return node_fetch_1["default"](u)
                .then(function (response) { return response.text(); })
                .then(function (text) { return node_html_parser_1.parse(text); })
                .then(function (root) { return _this.extractData(_this.base, root); })
                .then(function (statements) { return statements.filter(function (s) { return s.place.includes('Petržalka'); }); });
        }))
            .then(function (sList) {
            sList.forEach(function (s) { return _this.statements = _this.statements.concat(s); });
            callback(_this.statements);
        })
            .then(function () { return callback(_this.statements); });
    };
    return ZverejnovanieDownloader;
}());
exports.ZverejnovanieDownloader = ZverejnovanieDownloader;

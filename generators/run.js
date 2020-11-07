"use strict";
exports.__esModule = true;
var zverejnovanie_1 = require("./zverejnovanie");
var run = new zverejnovanie_1.ZverejnovanieDownloader();
run.load(function (data) {
    data.forEach(function (d) { return console.log(d.title); });
});

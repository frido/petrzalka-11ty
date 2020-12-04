"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var ImageCharts = require('image-charts');
var fs_1 = require("fs");
var key = '1MXmzv7rPVg1v98CO9LbdVgUo5bULOiZuihK0seicZoLwZIdz7Vnx1NdqI8SDyn3qzIWfUE0olU6T1gItNpTLJch0X4YruUcUhATBzPlclnj4F0IgmuOGVMjoQJHBGxqJQmMmixifi2lnfQdnlZqaVFCtnSqbP19jxAblmq6GVFfy8Z2YI8LFyLeev5OEbJVNm8ZdEVoczQDyDlWK4FYw0jFeopMW3i5ICkGrjgkpea8Yw8EwElU1XG4H1';
function f(page) {
    return __awaiter(this, void 0, void 0, function () {
        var x, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_fetch_1["default"]('http://opendata.bratislava.sk/api/dataset', { headers: { key: key, page: page.toString() } })];
                case 1:
                    x = _a.sent();
                    return [4 /*yield*/, x.json()];
                case 2:
                    json = _a.sent();
                    console.log(page);
                    json.datasets.forEach(function (d) { return g(d.id, d.name); });
                    return [2 /*return*/];
            }
        });
    });
}
function g(id, name) {
    return __awaiter(this, void 0, void 0, function () {
        var x, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_fetch_1["default"]('http://opendata.bratislava.sk/api/dataset/' + id + '/files', { headers: { key: key } })];
                case 1:
                    x = _a.sent();
                    return [4 /*yield*/, x.json()];
                case 2:
                    json = _a.sent();
                    if (name.startsWith('Pozitívne testovaní') ||
                        name.startsWith('Cyklosčítač') ||
                        name.startsWith('Register adries') ||
                        name.startsWith('Celomestský zoznam') ||
                        name.startsWith('Počet prenesených') ||
                        name.startsWith('Zmluvy') ||
                        name.startsWith('Pozemky vo vlastníctve') ||
                        name.startsWith('Vyhodnotenie cyklotrás') ||
                        name.startsWith('Výsledky volieb') ||
                        name.startsWith('Objednávky') ||
                        name.includes('Free Wifi VisitBratislava') ||
                        name.startsWith('SODB 2011')) {
                        return [2 /*return*/];
                    }
                    if (json.files) {
                        json.files.forEach(function (e) {
                            if (e.type === 'csv') {
                                fs_1.appendFileSync('aaa.txt', id + ' # ' + e.id + ' # ' + name + ' # ' + e.name + '\n');
                            }
                        });
                    }
                    else {
                        console.log(json);
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
for (var index = 1; index < 74; index++) {
    f(index);
}

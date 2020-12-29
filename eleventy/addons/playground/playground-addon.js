"use strict";
exports.__esModule = true;
exports.playgroundAddon = exports.PlaygroundAddon = exports.PlayGroundPage = exports.TAG_PLAYGROUND = exports.LAYOUT_PLAYGROUND = void 0;
var log = require("debug")("Petrzalka:Playground");
exports.LAYOUT_PLAYGROUND = "layouts/ihriska.njk";
exports.TAG_PLAYGROUND = "playground";
var PlayGroundPage = /** @class */ (function () {
    function PlayGroundPage() {
    }
    PlayGroundPage.prototype.data = function () {
        throw new Error("Method not implemented.");
    };
    PlayGroundPage.prototype.render = function (data) {
        return "";
    };
    PlayGroundPage.prototype.frontMatterWrapper = function (playgrounds) {
        return {
            layout: exports.LAYOUT_PLAYGROUND,
            tags: [exports.TAG_PLAYGROUND],
            playgrounds: playgrounds
        };
    };
    return PlayGroundPage;
}());
exports.PlayGroundPage = PlayGroundPage;
var PlaygroundAddon = /** @class */ (function () {
    function PlaygroundAddon() {
    }
    PlaygroundAddon.description = function (flag) {
        if (flag === 'new') {
            return 'výstavba nového ihriska';
        }
        if (flag === 'green') {
            return 'zrušenie ihriska';
        }
        if (flag === 'workout') {
            return 'zmena na street workout';
        }
        if (flag === 'green/workout') {
            return 'zrušenie alebo street workout';
        }
        if (flag === 'green/park') {
            return 'výstavba parkoviska';
        }
        return 'rekonštrukcia';
    };
    PlaygroundAddon.status = function (flag) {
        if (flag === 'new') {
            return 'success';
        }
        if (flag === 'green' || flag === 'workout' || flag === 'green/workout' || flag === 'green/park') {
            return 'error';
        }
        return 'inwork';
    };
    PlaygroundAddon.category = function (category) {
        if (category.length === 2) {
            return 'pre 0 - 14r deti';
        }
        if (category.length === 3) {
            return 'pre 0 - 14r + street workout';
        }
        return category.map(function (c) {
            if (c === 'A') {
                return 'pre 0 - 10r deti';
            }
            if (c === 'B') {
                return 'pre 10 - 14r deti';
            }
            if (c === 'C') {
                return 'street workout';
            }
        }).join(', ');
    };
    return PlaygroundAddon;
}());
exports.PlaygroundAddon = PlaygroundAddon;
function playgroundAddon(eleventyConfig) {
    eleventyConfig.addFilter("playgroundFilterDescription", PlaygroundAddon.description);
    eleventyConfig.addFilter("playgroundFilterStatus", PlaygroundAddon.status);
    eleventyConfig.addFilter("playgroundFilterCategory", PlaygroundAddon.category);
}
exports.playgroundAddon = playgroundAddon;

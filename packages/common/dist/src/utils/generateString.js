"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateString = void 0;
var tslib_1 = require("tslib");
var node_crypto_1 = tslib_1.__importDefault(require("node:crypto"));
var generateString = function () {
    return node_crypto_1.default.randomUUID();
};
exports.generateString = generateString;
//# sourceMappingURL=generateString.js.map
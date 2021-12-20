"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GtrClient = void 0;
const base_1 = require("./base");
const apply_mixins_1 = require("./apply-mixins");
const funds_1 = require("./funds");
const organisations_1 = require("./organisations");
const outcomes_1 = require("./outcomes");
/**
 * Inherits from all the other classes featuring the API calls to the Prusa.
 *
 *
 */
class GtrClient extends base_1.Base {
}
exports.GtrClient = GtrClient;
(0, apply_mixins_1.applyMixins)(GtrClient, [funds_1.Funds, organisations_1.Organisations, outcomes_1.Outcomes]);
__exportStar(require("./generic.interfaces"), exports);
__exportStar(require("./funds/interfaces"), exports);
__exportStar(require("./organisations/interfaces"), exports);
__exportStar(require("./outcomes/interfaces"), exports);

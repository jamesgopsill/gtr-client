"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funds = void 0;
const base_1 = require("../base");
class Funds extends base_1.Base {
    async getFunds(params = {}) {
        const url = `${this.baseUrl}/funds`;
        return this.get(url, params);
    }
    async getFund(id) {
        const url = `${this.baseUrl}/funds/${id}`;
        return this.get(url);
    }
    async getProjectFunds(id) {
        const url = `${this.baseUrl}/projects/${id}/funds`;
        return this.get(url);
    }
    async getOrganisationFunds(id) {
        const url = `${this.baseUrl}/organisations/${id}/funds`;
        return this.get(url);
    }
}
exports.Funds = Funds;

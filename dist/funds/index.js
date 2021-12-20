"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funds = void 0;
const base_1 = require("../base");
class Funds extends base_1.Base {
    processFund(fund) {
        fund.created = new Date(fund.created);
        fund.start = new Date(fund.start);
        fund.end = new Date(fund.end);
        for (const link of fund.links.link) {
            link.start = new Date(link.start);
            link.end = new Date(link.end);
        }
    }
    async getFunds(params = {}) {
        const url = `${this.baseURL}/funds`;
        const res = await this.get(url, params);
        for (const fund of res.fund) {
            this.processFund(fund);
        }
        return res;
    }
    async getFund(id) {
        const url = `${this.baseURL}/funds/${id}`;
        const fund = await this.get(url);
        this.processFund(fund);
        return fund;
    }
    async getProjectFunds(id) {
        const url = `${this.baseURL}/projects/${id}/funds`;
        const res = await this.get(url);
        for (const fund of res.fund) {
            this.processFund(fund);
        }
        return res;
    }
    async getOrganisationFunds(id) {
        const url = `${this.baseURL}/organisations/${id}/funds`;
        const res = await this.get(url);
        for (const fund of res.fund) {
            this.processFund(fund);
        }
        return res;
    }
}
exports.Funds = Funds;

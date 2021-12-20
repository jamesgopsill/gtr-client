"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organisations = void 0;
const base_1 = require("../base");
class Organisations extends base_1.Base {
    processOrganisation(organisation) {
        organisation.created = new Date(organisation.created);
        for (const address of organisation.addresses.address) {
            address.created = new Date(address.created);
        }
    }
    async getOrganisations(params = {}) {
        const url = `${this.baseURL}/organisations`;
        const res = await this.get(url, params);
        for (const organisation of res.organisation) {
            this.processOrganisation(organisation);
        }
        return res;
    }
    async getOrganisation(id) {
        const url = `${this.baseURL}/organisations/${id}`;
        const res = await this.get(url);
        this.processOrganisation(res);
        return res;
    }
    async getProjectOrganisations(id) {
        const url = `${this.baseURL}/projects/${id}/organisations`;
        const res = await this.get(url);
        for (const organisation of res.organisation) {
            this.processOrganisation(organisation);
        }
        return res;
    }
    async getPersonOrganisations(id) {
        const url = `${this.baseURL}/persons/${id}/organisations`;
        const res = await this.get(url);
        for (const organisation of res.organisation) {
            this.processOrganisation(organisation);
        }
        return res;
    }
}
exports.Organisations = Organisations;

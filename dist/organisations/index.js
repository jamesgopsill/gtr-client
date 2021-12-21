"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organisations = void 0;
const base_1 = require("../base");
class Organisations extends base_1.Base {
    async getOrganisations(params = {}) {
        const url = `${this.baseUrl}/organisations`;
        return this.get(url, params);
    }
    async getOrganisation(id) {
        const url = `${this.baseUrl}/organisations/${id}`;
        return this.get(url);
    }
    async getOrganisationsProjects(id) {
        const url = `${this.baseUrl}/organisations/${id}/projects`;
        return this.get(url);
    }
    async getOrganisationsPersons(id) {
        const url = `${this.baseUrl}/organisations/${id}/persons`;
        return this.get(url);
    }
}
exports.Organisations = Organisations;

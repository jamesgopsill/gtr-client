"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persons = void 0;
const base_1 = require("../base");
class Persons extends base_1.Base {
    async getPersons(params) {
        const url = `${this.baseUrl}/persons`;
        return this.get(url);
    }
    async getPerson(id) {
        const url = `${this.baseUrl}/persons/${id}`;
        return this.get(url);
    }
    async getPersonOrganisations(id) {
        const url = `${this.baseUrl}/persons/${id}/organisations`;
        return this.get(url);
    }
    async getPersonProjects(id) {
        const url = `${this.baseUrl}/persons/${id}/projects`;
        return this.get(url);
    }
}
exports.Persons = Persons;

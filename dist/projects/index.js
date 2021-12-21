"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const base_1 = require("../base");
class Projects extends base_1.Base {
    async getProjects(params) {
        const url = `${this.baseUrl}/projects`;
        return this.get(url);
    }
    async getProjectOrganisations(id) {
        const url = `${this.baseUrl}/projects/${id}/organisations`;
        return this.get(url);
    }
}
exports.Projects = Projects;

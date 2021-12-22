"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const base_1 = require("../base");
class Projects extends base_1.Base {
    async getProjects(params) {
        const url = `${this.baseUrl}/projects`;
        return this.get(url);
    }
    async getProject(id) {
        const url = `${this.baseUrl}/projects/${id}`;
        return this.get(url);
    }
    async getProjectOrganisations(id) {
        const url = `${this.baseUrl}/projects/${id}/organisations`;
        return this.get(url);
    }
    async getProjectOutcomes(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes`;
        return this.get(url);
    }
    async getProjectKeyFindings(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/keyfindings`;
        return this.get(url);
    }
    async getProjectImpactSummaries(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/impactsummaries`;
        return this.get(url);
    }
    async getProjectPublications(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/publications`;
        return this.get(url);
    }
    async getProjectCollaborations(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/collaborations`;
        return this.get(url);
    }
    async getProjectIntellectualProperties(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/intellectualproperties`;
        return this.get(url);
    }
    async getProjectFurtherFunding(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/furtherfundings`;
        return this.get(url);
    }
    async getProjectPolicyInfluences(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/policyinfluences`;
        return this.get(url);
    }
    async getProjectProducts(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/products`;
        return this.get(url);
    }
    async getProjectResearchMaterials(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/researchmaterials`;
        return this.get(url);
    }
    async getProjectSpinOuts(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/spinouts`;
        return this.get(url);
    }
    async getProjectDisseminations(id) {
        const url = `${this.baseUrl}/projects/${id}/outcomes/disseminations`;
        return this.get(url);
    }
}
exports.Projects = Projects;

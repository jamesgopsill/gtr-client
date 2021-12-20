"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outcomes = void 0;
const base_1 = require("../base");
class Outcomes extends base_1.Base {
    async getOutcomes(params) {
        const url = `${this.baseUrl}/outcomes`;
        return this.get(url, params);
    }
    async getKeyFindings(params) {
        const url = `${this.baseUrl}/outcomes/keyfindings`;
        return this.get(url, params);
    }
    async getKeyFinding(id) {
        const url = `${this.baseUrl}/outcomes/keyfindings/${id}`;
        return this.get(url);
    }
    async getImpactSummaries(params) {
        const url = `${this.baseUrl}/outcomes/impactsummaries`;
        return this.get(url, params);
    }
    async getImpactSummary(id) {
        const url = `${this.baseUrl}/outcomes/impactsummaries/${id}`;
        return this.get(url);
    }
    async getPublications(params) {
        const url = `${this.baseUrl}/outcomes/publications`;
        return this.get(url, params);
    }
    async getPublication(id) {
        const url = `${this.baseUrl}/outcomes/publications/${id}`;
        return this.get(url);
    }
    async getCollaborations(params) {
        const url = `${this.baseUrl}/outcomes/collaborations`;
        return this.get(url, params);
    }
    async getCollaboration(id) {
        const url = `${this.baseUrl}/outcomes/collaborations/${id}`;
        return this.get(url);
    }
    async getIntellectualProperties(params) {
        const url = `${this.baseUrl}/outcomes/intellectualproperties`;
        return this.get(url, params);
    }
    async getIntellectualProperty(id) {
        const url = `${this.baseUrl}/outcomes/intellectualproperties/${id}`;
        return this.get(url);
    }
    async getPolicyInfluences(params) {
        const url = `${this.baseUrl}/outcomes/policyinfluences`;
        return this.get(url, params);
    }
    async getPolicyInfluence(id) {
        const url = `${this.baseUrl}/outcomes/policyinfluences/${id}`;
        return this.get(url);
    }
    async getProducts(params) {
        const url = `${this.baseUrl}/outcomes/products`;
        return this.get(url, params);
    }
    async getProduct(id) {
        const url = `${this.baseUrl}/outcomes/products/${id}`;
        return this.get(url);
    }
    async getResearchMaterials(params) {
        const url = `${this.baseUrl}/outcomes/researchmaterials`;
        return this.get(url, params);
    }
    async getResearchMaterial(id) {
        const url = `${this.baseUrl}/outcomes/researchmaterials/${id}`;
        return this.get(url);
    }
    async getSpinOuts(params) {
        const url = `${this.baseUrl}/outcomes/spinouts`;
        return this.get(url, params);
    }
    async getSpinOut(id) {
        const url = `${this.baseUrl}/outcomes/spinouts/${id}`;
        return this.get(url);
    }
    async getFurtherFundings(params) {
        const url = `${this.baseUrl}/outcomes/furtherfundings`;
        return this.get(url, params);
    }
    async getFurtherFunding(id) {
        const url = `${this.baseUrl}/outcomes/furtherfundings/${id}`;
        return this.get(url);
    }
}
exports.Outcomes = Outcomes;

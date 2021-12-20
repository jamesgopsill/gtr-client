"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outcomes = void 0;
const base_1 = require("../base");
class Outcomes extends base_1.Base {
    processCollaborationDates(c) {
        c.created = new Date(c.created);
        c.start = new Date(c.start);
        this.processLinksDates(c.links);
    }
    processFurtherFundingDates(f) {
        f.start = new Date(f.start);
        f.end = new Date(f.end);
        f.created = new Date(f.created);
        this.processLinksDates(f.links);
    }
    processKeyFindingDates(k) {
        k.created = new Date(k.created);
        this.processLinksDates(k.links);
    }
    processImpactSummaryDates(impact) {
        impact.created = new Date(impact.created);
        this.processLinksDates(impact.links);
    }
    processPublicationDates(p) {
        p.created = new Date(p.created);
        p.datePublished = new Date(p.datePublished);
        this.processLinksDates(p.links);
    }
    // #######################
    async getOutcomes(params) {
        const url = `${this.baseURL}/outcomes`;
        const res = await this.get(url, params);
        for (const c of res.collaboration) {
            this.processCollaborationDates(c);
        }
        for (const f of res.furtherFunding) {
            this.processFurtherFundingDates(f);
        }
        for (const impact of res.impactSummary) {
            this.processImpactSummaryDates(impact);
        }
        for (const k of res.keyFinding) {
            this.processKeyFindingDates(k);
        }
        for (const p of res.publication) {
            this.processPublicationDates(p);
        }
        return res;
    }
    async getKeyFindings(params) {
        const url = `${this.baseURL}/outcomes/keyfindings`;
        const res = await this.get(url, params);
        for (const k of res.keyFinding) {
            this.processKeyFindingDates(k);
        }
        return res;
    }
    async getKeyFinding(id) {
        const url = `${this.baseURL}/outcomes/keyfindings/${id}`;
        const res = await this.get(url);
        this.processKeyFindingDates(res);
        return res;
    }
    async getImpactSummaries(params) {
        const url = `${this.baseURL}/outcomes/impactsummaries`;
        const res = await this.get(url, params);
        for (const impact of res.impactSummary) {
            this.processImpactSummaryDates(impact);
        }
        return res;
    }
    async getImpactSummary(id) {
        const url = `${this.baseURL}/outcomes/impactsummaries/${id}`;
        const res = await this.get(url);
        this.processImpactSummaryDates(res);
        return res;
    }
    async getPublications(params) {
        const url = `${this.baseURL}/outcomes/publications`;
        const res = await this.get(url, params);
        for (const p of res.publication) {
            this.processPublicationDates(p);
        }
        return res;
    }
    async getPublication(id) {
        const url = `${this.baseURL}/outcomes/publications/${id}`;
        const res = await this.get(url);
        this.processPublicationDates(res);
        return res;
    }
    async getCollaborations(params) {
        const url = `${this.baseURL}/outcomes/collaborations`;
        const res = await this.get(url, params);
        for (const c of res.collaboration) {
            this.processCollaborationDates(c);
        }
        return res;
    }
    async getCollaboration(id) {
        const url = `${this.baseURL}/outcomes/collaborations/${id}`;
        const res = await this.get(url);
        this.processCollaborationDates(res);
        return res;
    }
}
exports.Outcomes = Outcomes;

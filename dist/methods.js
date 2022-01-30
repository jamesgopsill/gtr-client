"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssociatedObjectsMethods = exports.getObjectMethods = exports.getObjectsMethods = void 0;
exports.getObjectsMethods = [
    {
        name: "getPeople",
        path: "persons",
    },
    {
        name: "getProjects",
        path: "projects",
    },
    {
        name: "getOrganisations",
        path: "organisations",
    },
    {
        name: "getFunds",
        path: "funds",
    },
    {
        name: "getKeyFindings",
        path: "outcomes/keyfindings",
    },
    {
        name: "getImpactSummaries",
        path: "outcomes/impactsummaries",
    },
    {
        name: "getPublications",
        path: "outcomes/publications",
    },
    {
        name: "getCollaborations",
        path: "outcomes/collaborations",
    },
    {
        name: "getIntellectualProperties",
        path: "outcomes/intellectualproperties",
    },
    {
        name: "getPolicyInfluences",
        path: "outcomes/policyinfluences",
    },
    {
        name: "getProducts",
        path: "outcomes/products",
    },
    {
        name: "getResearchMaterials",
        path: "outcomes/researchmaterials",
    },
    {
        name: "getSpinouts",
        path: "outcomes/spinouts",
    },
    {
        name: "getFurtherFundings",
        path: "outcomes/furtherfundings",
    },
    {
        name: "getDisseminations",
        path: "outcomes/disseminations",
    },
];
exports.getObjectMethods = [
    {
        name: "getPerson",
        path: "persons",
    },
    {
        name: "getProject",
        path: "projects",
    },
    {
        name: "getOrganisation",
        path: "organisations",
    },
    {
        name: "getFund",
        path: "funds",
    },
    {
        name: "getKeyFinding",
        path: "outcomes/keyfindings",
    },
    {
        name: "getImpactSummary",
        path: "outcomes/impactsummaries",
    },
    {
        name: "getPublication",
        path: "outcomes/publications",
    },
    {
        name: "getCollaboration",
        path: "outcomes/collaborations",
    },
    {
        name: "getIntellectualProperty",
        path: "outcomes/intellectualproperties",
    },
    {
        name: "getPolicyInfluence",
        path: "outcomes/policyinfluences",
    },
    {
        name: "getProduct",
        path: "outcomes/products",
    },
    {
        name: "getResearchMaterial",
        path: "outcomes/researchmaterials",
    },
    {
        name: "getSpinOut",
        path: "outcomes/spinouts",
    },
    {
        name: "getFurtherFunding",
        path: "outcomes/furtherfundings",
    },
    {
        name: "getDissemination",
        path: "outcomes/disseminations",
    },
];
exports.getAssociatedObjectsMethods = [
    {
        name: "getPersonProjects",
        path: "persons/:id/projects",
    },
    {
        name: "getPersonOrganisations",
        path: "persons/:id/organisations",
    },
];

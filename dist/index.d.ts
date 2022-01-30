import * as interfaces from "./interfaces";
export * from "./interfaces";
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
export declare class GtrClient {
    protected baseUrl: string;
    debug: boolean;
    constructor(debug?: boolean);
    protected get(url: string, params?: {}): Promise<any>;
    protected recursiveProcessObjectDates(obj: any): void;
    protected getObject(id: string, path: string): Promise<any>;
    protected getObjects(path: string): Promise<any>;
    protected getAssociatedObjects(id: string, path: string): Promise<any>;
}
export interface GtrClient {
    getPeople: () => Promise<interfaces.PaginatedPersons>;
    getProjects: () => Promise<interfaces.PaginatedProjects>;
    getOrganisations: () => Promise<interfaces.PaginatedOrganisations>;
    getFunds: () => Promise<interfaces.PaginatedFunds>;
    getKeyFindings: () => Promise<interfaces.PaginatedKeyFindings>;
    getImpactSummaries: () => Promise<interfaces.PaginatedImpactSummaries>;
    getPublications: () => Promise<interfaces.PaginatedPublications>;
    getCollaborations: () => Promise<interfaces.PaginatedCollaborations>;
    getIntellectualProperties: () => Promise<interfaces.PaginatedIntellectualProperties>;
    getPolicyInfluences: () => Promise<interfaces.PaginatedPolicyInfluences>;
    getProducts: () => Promise<interfaces.PaginatedProducts>;
    getResearchMaterials: () => Promise<interfaces.PaginatedResearchMaterials>;
    getSpinouts: () => Promise<interfaces.PaginatedSpinOuts>;
    getFurtherFundings: () => Promise<interfaces.PaginatedFurtherFunding>;
    getDisseminations: () => Promise<interfaces.PaginatedDissemination>;
    getPerson: (id: string) => Promise<interfaces.Person>;
    getOrganisation: (id: string) => Promise<interfaces.Organisation>;
    getFund: (id: string) => Promise<interfaces.Fund>;
    getKeyFinding: (id: string) => Promise<interfaces.KeyFinding>;
    getImpactSummary: (id: string) => Promise<interfaces.ImpactSummary>;
    getPublication: (id: string) => Promise<interfaces.Publication>;
    getCollaboration: (id: string) => Promise<interfaces.Collaboration>;
    getIntellectualProperty: (id: string) => Promise<interfaces.PolicyInfluence>;
    getProduct: (id: string) => Promise<interfaces.Product>;
    getResearchMaterial: (id: string) => Promise<interfaces.ResearchMaterial>;
    getSpinOut: (id: string) => Promise<interfaces.SpinOut>;
    getFurtherFunding: (id: string) => Promise<interfaces.FurtherFunding>;
    getDissemination: (id: string) => Promise<interfaces.Dissemination>;
    getPersonProjects: (id: string) => Promise<interfaces.PaginatedProjects>;
    getPersonOrganisations: (id: string) => Promise<interfaces.PaginatedProjects>;
}

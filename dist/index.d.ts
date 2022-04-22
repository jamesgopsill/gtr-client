import type * as i from "./interfaces";
export * from "./interfaces";
export { ResponseError } from "./response-error";
export declare class GtrClient {
    protected baseUrl: string;
    debug: boolean;
    constructor(debug?: boolean);
    protected get(url: string, params?: {
        [name: string]: any;
    }): Promise<any>;
    protected recursiveProcessObjectDates(obj: any): void;
    protected getObject(id: string, path: string): Promise<any>;
    protected getObjects(path: string, params?: {}): Promise<any>;
    protected getAssociatedObjects(id: string, path: string): Promise<any>;
}
export interface GtrClient {
    /**
     * Retrieves information about the people on the GtR database.
     */
    getPeople: (params?: i.PeopleQuery) => Promise<i.PaginatedPersons>;
    /**
     * Retrieve information about the projects on the GtR database.
     */
    getProjects: (params?: i.ProjectsQuery) => Promise<i.PaginatedProjects>;
    /**
     * Retrieve information about the organisations on the GtR database.
     */
    getOrganisations: (params?: i.OrganisationsQuery) => Promise<i.PaginatedOrganisations>;
    /**
     * Retrieve information about the funds on the GtR database.
     */
    getFunds: (params?: i.FundsQuery) => Promise<i.PaginatedFunds>;
    /**
     * Retrieve information about the outcomes on the GtR database.
     */
    getOutcomes: (params?: i.OutcomesQuery) => Promise<i.PaginatedOutcomes>;
    /**
     * Retrieve information about the key findings on the GtR database.
     */
    getKeyFindings: (params?: i.KeyFindingsQuery) => Promise<i.PaginatedKeyFindings>;
    /**
     * Retrieve information about the impact summaries on the GtR database.
     */
    getImpactSummaries: (params?: i.ImpactSummariesQuery) => Promise<i.PaginatedImpactSummaries>;
    getPublications: (params?: i.PublicationsQuery) => Promise<i.PaginatedPublications>;
    getCollaborations: (params?: i.CollaborationsQuery) => Promise<i.PaginatedCollaborations>;
    getIntellectualProperties: (params?: i.IntellectualPropertiesQuery) => Promise<i.PaginatedIntellectualProperties>;
    getPolicyInfluences: (params?: i.PolicyInfluencesQuery) => Promise<i.PaginatedPolicyInfluences>;
    getProducts: (params?: i.ProductsQuery) => Promise<i.PaginatedProducts>;
    getResearchMaterials: (params?: i.ResearchMaterialsQuery) => Promise<i.PaginatedResearchMaterials>;
    getSpinouts: (params?: i.SpinoutsQuery) => Promise<i.PaginatedSpinOuts>;
    getFurtherFundings: (params?: i.FurtherFundingsQuery) => Promise<i.PaginatedFurtherFunding>;
    getDisseminations: (params?: i.DisseminationsQuery) => Promise<i.PaginatedDissemination>;
    getPerson: (id: string) => Promise<i.Person>;
    getOrganisation: (id: string) => Promise<i.Organisation>;
    getFund: (id: string) => Promise<i.Fund>;
    getKeyFinding: (id: string) => Promise<i.KeyFinding>;
    getImpactSummary: (id: string) => Promise<i.ImpactSummary>;
    getPublication: (id: string) => Promise<i.Publication>;
    getCollaboration: (id: string) => Promise<i.Collaboration>;
    getIntellectualProperty: (id: string) => Promise<i.PolicyInfluence>;
    getProduct: (id: string) => Promise<i.Product>;
    getResearchMaterial: (id: string) => Promise<i.ResearchMaterial>;
    getSpinOut: (id: string) => Promise<i.SpinOut>;
    getFurtherFunding: (id: string) => Promise<i.FurtherFunding>;
    getDissemination: (id: string) => Promise<i.Dissemination>;
    getPersonProjects: (id: string) => Promise<i.PaginatedProjects>;
    getPersonOrganisations: (id: string) => Promise<i.PaginatedProjects>;
    getProjectFunds: (id: string) => Promise<i.PaginatedFunds>;
    getProjectOrganisations: (id: string) => Promise<i.PaginatedOrganisations>;
    getProjectPersons: (id: string) => Promise<i.PaginatedPersons>;
    getProjectOutcomes: (id: string) => Promise<i.Outcomes>;
    getProjectKeyFindings: (id: string) => Promise<i.PaginatedKeyFindings>;
    getProjectImpactSummaries: (id: string) => Promise<i.PaginatedImpactSummaries>;
    getProjectPublications: (id: string) => Promise<i.PaginatedPublications>;
    getProjectCollaborations: (id: string) => Promise<i.PaginatedCollaborations>;
    getProjectIntellectualProperties: (id: string) => Promise<i.PaginatedIntellectualProperties>;
    getProjectProducts: (id: string) => Promise<i.PaginatedProducts>;
    getProjectResearchMaterials: (id: string) => Promise<i.PaginatedResearchMaterials>;
    getProjectSpinOuts: (id: string) => Promise<i.PaginatedSpinOuts>;
    getProjectDisseminations: (id: string) => Promise<i.PaginatedDissemination>;
}

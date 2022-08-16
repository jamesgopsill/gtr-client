import * as i from "./interfaces";
export * from "./interfaces";
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
    getPeople: (params?: i.PeopleQuery) => Promise<i.PaginatedPersons>;
    getProjects: (params?: i.ProjectsQuery) => Promise<i.PaginatedProjects>;
    getOrganisations: (params?: i.OrganisationsQuery) => Promise<i.PaginatedOrganisations>;
    getFunds: (params?: i.FundsQuery) => Promise<i.PaginatedFunds>;
    getOutcomes: (params?: i.OutcomesQuery) => Promise<i.PaginatedOutcomes>;
    getKeyFindings: (params?: i.KeyFindingsQuery) => Promise<i.PaginatedKeyFindings>;
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
    getPerson: (id: string) => Promise<i.SingleObjectResponse<i.Person>>;
    getOrganisation: (id: string) => Promise<i.SingleObjectResponse<i.Organisation>>;
    getFund: (id: string) => Promise<i.SingleObjectResponse<i.Fund>>;
    getKeyFinding: (id: string) => Promise<i.SingleObjectResponse<i.KeyFinding>>;
    getImpactSummary: (id: string) => Promise<i.SingleObjectResponse<i.ImpactSummary>>;
    getPublication: (id: string) => Promise<i.SingleObjectResponse<i.Publication>>;
    getCollaboration: (id: string) => Promise<i.SingleObjectResponse<i.Collaboration>>;
    getIntellectualProperty: (id: string) => Promise<i.SingleObjectResponse<i.PolicyInfluence>>;
    getProduct: (id: string) => Promise<i.SingleObjectResponse<i.Product>>;
    getResearchMaterial: (id: string) => Promise<i.SingleObjectResponse<i.ResearchMaterial>>;
    getSpinOut: (id: string) => Promise<i.SingleObjectResponse<i.SpinOut>>;
    getFurtherFunding: (id: string) => Promise<i.SingleObjectResponse<i.FurtherFunding>>;
    getDissemination: (id: string) => Promise<i.SingleObjectResponse<i.Dissemination>>;
    getPersonProjects: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedProjects>>;
    getPersonOrganisations: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedProjects>>;
    getProjectFunds: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedFunds>>;
    getProjectOrganisations: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedOrganisations>>;
    getProjectPersons: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedPersons>>;
    getProjectOutcomes: (id: string) => Promise<i.SingleObjectResponse<i.Outcomes>>;
    getProjectKeyFindings: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedKeyFindings>>;
    getProjectImpactSummaries: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedImpactSummaries>>;
    getProjectPublications: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedPublications>>;
    getProjectCollaborations: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedCollaborations>>;
    getProjectIntellectualProperties: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedIntellectualProperties>>;
    getProjectProducts: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedProducts>>;
    getProjectResearchMaterials: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedResearchMaterials>>;
    getProjectSpinOuts: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedSpinOuts>>;
    getProjectDisseminations: (id: string) => Promise<i.SingleObjectResponse<i.PaginatedDissemination>>;
}

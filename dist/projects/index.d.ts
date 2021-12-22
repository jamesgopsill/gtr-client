import { GenericFilterParams, PaginatedCollaborations, PaginatedDissemination, PaginatedFurtherFunding, PaginatedImpactSummaries, PaginatedIntellectualProperties, PaginatedKeyFindings, PaginatedOrganisations, PaginatedOutcomes, PaginatedPolicyInfluences, PaginatedProducts, PaginatedProjects, PaginatedPublications, PaginatedResearchMaterials, PaginatedSpinOuts, Project } from "..";
import { Base } from "../base";
export declare class Projects extends Base {
    getProjects(params?: GenericFilterParams): Promise<PaginatedProjects>;
    getProject(id: string): Promise<Project>;
    getProjectOrganisations(id: string): Promise<PaginatedOrganisations>;
    getProjectOutcomes(id: string): Promise<PaginatedOutcomes>;
    getProjectKeyFindings(id: string): Promise<PaginatedKeyFindings>;
    getProjectImpactSummaries(id: string): Promise<PaginatedImpactSummaries>;
    getProjectPublications(id: string): Promise<PaginatedPublications>;
    getProjectCollaborations(id: string): Promise<PaginatedCollaborations>;
    getProjectIntellectualProperties(id: string): Promise<PaginatedIntellectualProperties>;
    getProjectFurtherFunding(id: string): Promise<PaginatedFurtherFunding>;
    getProjectPolicyInfluences(id: string): Promise<PaginatedPolicyInfluences>;
    getProjectProducts(id: string): Promise<PaginatedProducts>;
    getProjectResearchMaterials(id: string): Promise<PaginatedResearchMaterials>;
    getProjectSpinOuts(id: string): Promise<PaginatedSpinOuts>;
    getProjectDisseminations(id: string): Promise<PaginatedDissemination>;
}

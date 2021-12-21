import { Collaboration, Dissemination, FurtherFunding, GenericFilterParams, ImpactSummary, IntellectualProperty, KeyFinding, PaginatedCollaborations, PaginatedDissemination, PaginatedImpactSummaries, PaginatedIntellectualProperties, PaginatedKeyFindings, PaginatedOutcomes, PaginatedPolicyInfluences, PaginatedProducts, PaginatedPublications, PaginatedResearchMaterials, PaginatedSpinOuts, PolicyInfluence, Product, Publication, ResearchMaterial, SpinOut } from "..";
import { Base } from "../base";
export declare class Outcomes extends Base {
    getOutcomes(params?: GenericFilterParams): Promise<PaginatedOutcomes>;
    getKeyFindings(params?: GenericFilterParams): Promise<PaginatedKeyFindings>;
    getKeyFinding(id: string): Promise<KeyFinding>;
    getImpactSummaries(params?: GenericFilterParams): Promise<PaginatedImpactSummaries>;
    getImpactSummary(id: string): Promise<ImpactSummary>;
    getPublications(params?: GenericFilterParams): Promise<PaginatedPublications>;
    getPublication(id: string): Promise<Publication>;
    getCollaborations(params?: GenericFilterParams): Promise<PaginatedCollaborations>;
    getCollaboration(id: string): Promise<Collaboration>;
    getIntellectualProperties(params?: GenericFilterParams): Promise<PaginatedIntellectualProperties>;
    getIntellectualProperty(id: string): Promise<IntellectualProperty>;
    getPolicyInfluences(params?: GenericFilterParams): Promise<PaginatedPolicyInfluences>;
    getPolicyInfluence(id: string): Promise<PolicyInfluence>;
    getProducts(params?: GenericFilterParams): Promise<PaginatedProducts>;
    getProduct(id: string): Promise<Product>;
    getResearchMaterials(params?: GenericFilterParams): Promise<PaginatedResearchMaterials>;
    getResearchMaterial(id: string): Promise<ResearchMaterial>;
    getSpinOuts(params?: GenericFilterParams): Promise<PaginatedSpinOuts>;
    getSpinOut(id: string): Promise<SpinOut>;
    getFurtherFundings(params?: GenericFilterParams): Promise<FurtherFunding[]>;
    getFurtherFunding(id: string): Promise<FurtherFunding>;
    getDisseminations(params?: GenericFilterParams): Promise<PaginatedDissemination>;
    getDissemination(id: string): Promise<Dissemination>;
}

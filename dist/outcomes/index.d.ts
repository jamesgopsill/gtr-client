import { Base } from "../base";
import { FilterParams } from "../generic.interfaces";
import { Collaboration, FurtherFunding, ImpactSummary, IntellectualProperty, KeyFinding, PaginatedCollaborations, PaginatedImpactSummaries, PaginatedIntellectualProperties, PaginatedKeyFindings, PaginatedOutcomes, PaginatedPolicyInfluences, PaginatedProducts, PaginatedPublications, PaginatedResearchMaterials, PaginatedSpinOuts, PolicyInfluence, Product, Publication, ResearchMaterial, SpinOut } from "./interfaces";
export declare class Outcomes extends Base {
    getOutcomes(params?: FilterParams): Promise<PaginatedOutcomes>;
    getKeyFindings(params?: FilterParams): Promise<PaginatedKeyFindings>;
    getKeyFinding(id: string): Promise<KeyFinding>;
    getImpactSummaries(params?: FilterParams): Promise<PaginatedImpactSummaries>;
    getImpactSummary(id: string): Promise<ImpactSummary>;
    getPublications(params?: FilterParams): Promise<PaginatedPublications>;
    getPublication(id: string): Promise<Publication>;
    getCollaborations(params?: FilterParams): Promise<PaginatedCollaborations>;
    getCollaboration(id: string): Promise<Collaboration>;
    getIntellectualProperties(params?: FilterParams): Promise<PaginatedIntellectualProperties>;
    getIntellectualProperty(id: string): Promise<IntellectualProperty>;
    getPolicyInfluences(params?: FilterParams): Promise<PaginatedPolicyInfluences>;
    getPolicyInfluence(id: string): Promise<PolicyInfluence>;
    getProducts(params?: FilterParams): Promise<PaginatedProducts>;
    getProduct(id: string): Promise<Product>;
    getResearchMaterials(params?: FilterParams): Promise<PaginatedResearchMaterials>;
    getResearchMaterial(id: string): Promise<ResearchMaterial>;
    getSpinOuts(params?: FilterParams): Promise<PaginatedSpinOuts>;
    getSpinOut(id: string): Promise<SpinOut>;
    getFurtherFundings(params?: FilterParams): Promise<any>;
    getFurtherFunding(id: string): Promise<FurtherFunding>;
}

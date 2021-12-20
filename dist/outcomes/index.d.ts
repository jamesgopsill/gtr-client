import { FilterParams } from "..";
import { Base } from "../base";
import { Collaboration, FutureFunding, ImpactSummary, KeyFinding, PaginatedCollaborations, PaginatedImpactSummaries, PaginatedKeyFindings, PaginatedOutcomes, PaginatedPublications, Publication } from "./interfaces";
export declare class Outcomes extends Base {
    protected processCollaborationDates(c: Collaboration): void;
    protected processFurtherFundingDates(f: FutureFunding): void;
    protected processKeyFindingDates(k: KeyFinding): void;
    protected processImpactSummaryDates(impact: ImpactSummary): void;
    protected processPublicationDates(p: Publication): void;
    getOutcomes(params?: FilterParams): Promise<PaginatedOutcomes>;
    getKeyFindings(params?: FilterParams): Promise<PaginatedKeyFindings>;
    getKeyFinding(id: string): Promise<KeyFinding>;
    getImpactSummaries(params?: FilterParams): Promise<PaginatedImpactSummaries>;
    getImpactSummary(id: string): Promise<ImpactSummary>;
    getPublications(params?: FilterParams): Promise<PaginatedPublications>;
    getPublication(id: string): Promise<Publication>;
    getCollaborations(params?: FilterParams): Promise<PaginatedCollaborations>;
    getCollaboration(id: string): Promise<Collaboration>;
}

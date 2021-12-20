import { Links, Paginated } from "..";
export interface PaginatedOutcomes extends Paginated {
    artisticAndCreativeProduct: any[];
    collaboration: Collaboration[];
    exploitation: any[];
    furtherFunding: FurtherFunding[];
    impactSummary: ImpactSummary[];
    intellectualProperty: IntellectualProperty[];
    keyFinding: KeyFinding[];
    policyInfluence: PolicyInfluence[];
    product: Product[];
    researchDatabaseAndModel: any[];
    researchMaterial: any[];
    softwareAndTechnicalProduct: any[];
    spinOut: SpinOut[];
    otherResearchItem: any[];
    publication: any[];
}
export interface OutcomeBase {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
}
export interface PaginatedKeyFindings extends Paginated {
    keyFinding: KeyFinding[];
}
export interface PaginatedImpactSummaries extends Paginated {
    impactSummary: ImpactSummary[];
}
export interface PaginatedPublications extends Paginated {
    publication: Publication[];
}
export interface PaginatedCollaborations extends Paginated {
    collaboration: Collaboration[];
}
export interface PaginatedIntellectualProperties extends Paginated {
    intellectualProperty: IntellectualProperty[];
}
export interface PaginatedPolicyInfluences extends Paginated {
    policyInfluence: PolicyInfluence[];
}
export interface PaginatedProducts extends Paginated {
    product: Product[];
}
export interface PaginatedResearchMaterials extends Paginated {
    researchMaterial: ResearchMaterial[];
}
export interface PaginatedFurtherFunding extends Paginated {
    furtherFunding: FurtherFunding[];
}
export interface PaginatedSpinOuts extends Paginated {
    spinOut: SpinOut[];
}
export interface SpinOut extends OutcomeBase {
    description: string;
    companyName: string;
    impact: string;
    website: string;
    yearEstablished: string;
}
export interface ResearchMaterial extends OutcomeBase {
    title: string;
    description: string;
    type: string;
    impact: string;
    providedToOthers: boolean;
}
export interface Product extends OutcomeBase {
    title: string;
    description: string;
    type: string;
    stage: string;
    status: string;
    yearDevelopmentCompleted: number;
    impact: string;
    supportingUrl: string;
}
export interface PolicyInfluence extends OutcomeBase {
    influence: string;
    type: string;
    impact: string;
    areas: {
        item: any[];
    };
    geographicReach: string;
}
export interface IntellectualProperty extends OutcomeBase {
    title: string;
    description: string;
    protection: string;
    patentId: string;
    yearProtectedGranted: number;
    impact: string;
    licensed: string;
}
export interface Publication extends OutcomeBase {
    title: string;
    type: string;
    journalTitle: string;
    datePublished: Date;
    publicationUrl: string;
    pubMedId: string;
    issn: string;
    volumeTitle: string;
    doi: string;
    issue: string;
    author: string;
}
export interface Collaboration extends OutcomeBase {
    description: string;
    parentOrganisation: string;
    childOrganisation: string;
    principalInvestigatorContribution: string;
    partnerContribution: string;
    start: Date;
    sector: string;
    country: string;
    impact: string;
}
export interface FurtherFunding extends OutcomeBase {
    description: string;
    amount: {
        currencyCode: string;
        amount: number;
    };
    organisation: string;
    fundingId: string;
    start: Date;
    end: Date;
    sector: string;
    country: string;
}
export interface KeyFinding extends OutcomeBase {
    description: string;
    exploitationPathways: string;
    sectors: {
        item: string[];
    };
    supportingUrl: string;
}
export interface ImpactSummary extends OutcomeBase {
    description: string;
    impactTypes: {
        item: string[];
    };
    sector: string;
    firstYearOfImpact: number;
}

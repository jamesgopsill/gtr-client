import { Links, Paginated } from "..";
export interface PaginatedOutcomes extends Paginated {
    artisticAndCreativeProduct: any[];
    collaboration: Collaboration[];
    exploitation: any[];
    furtherFunding: FutureFunding[];
    impactSummary: any[];
    intellectualProperty: any[];
    keyFinding: KeyFinding[];
    policyInfluence: any[];
    product: any[];
    researchDatabaseAndModel: any[];
    researchMaterial: any[];
    softwareAndTechnicalProduct: any[];
    spinOut: any[];
    otherResearchItem: any[];
    publication: any[];
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
export interface Publication {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
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
export interface Collaboration {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
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
export interface FutureFunding {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
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
export interface KeyFinding {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
    description: string;
    exploitationPathways: string;
    sectors: {
        item: string[];
    };
    supportingUrl: string;
}
export interface ImpactSummary {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
    description: string;
    impactTypes: {
        item: string[];
    };
    sector: string;
    firstYearOfImpact: number;
}

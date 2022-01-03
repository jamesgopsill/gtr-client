import { Address, Links } from ".";
export declare enum GtrObject {
    PERSON = "persons",
    PROJECT = "projects",
    ORGANISATION = "organisations",
    FUND = "funds",
    KEYFINDING = "outcomes/keyfindings",
    IMPACTSUMMARY = "outcomes/impactsummaries",
    PUBLICATION = "outcomes/publications",
    COLLABORATION = "outcomes/collaborations",
    INTELLECTUAL_PROPERTY = "outcomes/intellectualproperties",
    POLICY_INFLUENCE = "outcomes/policyinfluences",
    PRODUCT = "outcomes/products",
    RESEARCH_MATERIAL = "outcomes/researchmaterials",
    SPIN_OUT = "outcomes/spinouts",
    FURTHER_FUNDING = "outcomes/furtherfundings",
    DISSEMINATION = "outcomes/disseminations"
}
export declare type GtrObjectResponseType<T> = T extends "persons" ? Person : T extends "projects" ? Project : T extends "organisations" ? Organisation : T extends "funds" ? Fund : T extends "outcomes/keyfindings" ? KeyFinding : T extends "outcomes/impactsummaries" ? ImpactSummary : T extends "outcomes/publications" ? Publication : T extends "outcomes/collaborations" ? Collaboration : T extends "outcomes/intellectualproperties" ? IntellectualProperty : T extends "outcomes/policyinfluences" ? PolicyInfluence : T extends "outcomes/products" ? Product : T extends "outcomes/researchmaterials" ? ResearchMaterial : T extends "outcomes/spinouts" ? SpinOut : T extends "outcomes/furtherfundings" ? FurtherFunding : T extends "outcomes/disseminations" ? Dissemination : never;
export interface Person {
    links: Links[];
    id: string;
    href: string;
    created: Date;
    firstName: string;
    otherNames: string;
    surname: string;
    orcidId?: string;
}
export interface Project {
    links: Links;
    id: string;
    href: string;
    created: Date;
    identifiers: {
        identifier: [
            {
                value: string;
                type: string;
            }
        ];
    };
    title: string;
    status: string;
    grantCategory: string;
    leadFunder: string;
    leadOrganisationDepartment: string;
    abstractText: string;
    healthCategories: {
        healthCategory: [
            {
                id: string;
                text: string;
            }
        ];
    };
    researchActivities: {
        researchActivity: any[];
    };
    researchSubjects: {
        researchSubject: [
            {
                id: string;
                text: string;
                percentage: number;
            }
        ];
    };
    researchTopics: {
        researchTopic: [
            {
                id: string;
                text: string;
            }
        ];
    };
    rcukProgrammes: {
        rcukProgramme: any[];
    };
}
export interface Organisation {
    links: Links;
    id: string;
    href: string;
    created: Date;
    addresses: {
        address: Address[];
    };
}
export interface Fund {
    links: Links;
    id: string;
    href: string;
    created: Date;
    start: Date;
    end: Date;
    valuePounds: {
        currencyCode: string;
        amount: number;
    };
    category: string;
}
export interface OutcomeBase {
    links: Links;
    id: string;
    outcomeid: string;
    href: string;
    created: Date;
}
export interface Dissemination extends OutcomeBase {
    description: string;
    form: string;
    primaryAudience: string;
    yearsOfDissemination: string;
    impact: string;
    geographicReach: string;
    partOfOfficialScheme: boolean;
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

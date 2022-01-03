import {
	Collaboration,
	Dissemination,
	FilterParamsBase,
	Fund,
	FurtherFunding,
	ImpactSummary,
	IntellectualProperty,
	KeyFinding,
	Organisation,
	Paginated,
	Person,
	PolicyInfluence,
	Product,
	Project,
	Publication,
	ResearchMaterial,
	SpinOut,
} from "."

/**
 * The objects that can be requested. The enum denotes the api endpoint.
 */
export enum GtrObjects {
	PEOPLE = "persons",
	PROJECTS = "projects",
	ORGANISATIONS = "organisations",
	FUNDS = "funds",
}

/**
 * The map of response type against the enum value from GetObjects.
 */
export type GtrObjectsResponseType<T> = T extends "persons"
	? PaginatedPersons
	: T extends "projects"
	? PaginatedProjects
	: T extends "organisations"
	? PaginatedOrganisations
	: T extends "funds"
	? PaginatedFunds
	: never

/**
 * The map of filters against the enum value of the GetObjects.
 */
export type GtrObjectsFiltersType<T> = T extends "persons"
	? FilterParamsBase
	: T extends "projects"
	? FilterParamsBase
	: T extends "organisations"
	? FilterParamsBase
	: T extends "funds"
	? FilterParamsBase
	: undefined

export interface PaginatedPersons extends Paginated {
	person: Person[]
}

export interface PaginatedProjects extends Paginated {
	project: Project[]
}

export interface PaginatedOrganisations extends Paginated {
	organisation: Organisation[]
}

export interface PaginatedFunds extends Paginated {
	fund: Fund[]
}

export interface PaginatedKeyFindings extends Paginated {
	keyFinding: KeyFinding[]
}

export interface PaginatedImpactSummaries extends Paginated {
	impactSummary: ImpactSummary[]
}

export interface PaginatedPublications extends Paginated {
	publication: Publication[]
}

export interface PaginatedCollaborations extends Paginated {
	collaboration: Collaboration[]
}

export interface PaginatedIntellectualProperties extends Paginated {
	intellectualProperty: IntellectualProperty[]
}

export interface PaginatedPolicyInfluences extends Paginated {
	policyInfluence: PolicyInfluence[]
}

export interface PaginatedProducts extends Paginated {
	product: Product[]
}

export interface PaginatedResearchMaterials extends Paginated {
	researchMaterial: ResearchMaterial[]
}

export interface PaginatedFurtherFunding extends Paginated {
	furtherFunding: FurtherFunding[]
}

export interface PaginatedSpinOuts extends Paginated {
	spinOut: SpinOut[]
}

export interface PaginatedDissemination extends Paginated {
	dissemination: Dissemination[]
}

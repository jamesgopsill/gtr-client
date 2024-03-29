export type PaginatedResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: ErrorMessage
	  } & Response)

export interface ErrorMessage {
	text: string
	timestamp: number
}

export interface GenericPaginatedData {
	page: number
	size: number
	totalPages: number
	totalSize: number
}

export type SingleObjectResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: null
	  } & Response)

export type PaginatedPersons = PaginatedResponse<
	GenericPaginatedData & { person: Person[] }
>
export type PaginatedProjects = PaginatedResponse<
	GenericPaginatedData & { project: Project[] }
>
export type PaginatedOrganisations = PaginatedResponse<
	GenericPaginatedData & { organisation: Organisation[] }
>
export type PaginatedFunds = PaginatedResponse<
	GenericPaginatedData & { fund: Fund[] }
>
export type PaginatedOutcomes = PaginatedResponse<
	GenericPaginatedData & {
		artisticAndCreativeProduct: any[]
		collaboration: Collaboration[]
		dissemination: Dissemination[]
		exploitation: any[]
		furtherFunding: Fund[]
		impactSummary: ImpactSummary[]
		intellectualProperty: IntellectualProperty[]
		keyFinding: KeyFinding[]
		policyInfluence: PolicyInfluence[]
		product: Product[]
		researchDatabaseAndModel: any[]
		researchMaterial: any[]
		softwareAndTechnicalProduct: any[]
		spinOut: SpinOut[]
		otherResearchItem: any[]
		publication: Publication[]
	}
>
export type PaginatedKeyFindings = PaginatedResponse<
	GenericPaginatedData & { keyFinding: KeyFinding[] }
>
export type PaginatedImpactSummaries = PaginatedResponse<
	GenericPaginatedData & { impactSummary: ImpactSummary[] }
>
export type PaginatedPublications = PaginatedResponse<
	GenericPaginatedData & { publication: Publication[] }
>
export type PaginatedCollaborations = PaginatedResponse<
	GenericPaginatedData & { collaboration: Collaboration[] }
>
export type PaginatedIntellectualProperties = PaginatedResponse<
	GenericPaginatedData & { intellectualProperty: IntellectualProperty[] }
>
export type PaginatedPolicyInfluences = PaginatedResponse<
	GenericPaginatedData & { policyInfluence: PolicyInfluence[] }
>
export type PaginatedProducts = PaginatedResponse<
	GenericPaginatedData & { product: Product[] }
>
export type PaginatedResearchMaterials = PaginatedResponse<
	GenericPaginatedData & { researchMaterial: ResearchMaterial[] }
>
export type PaginatedFurtherFunding = PaginatedResponse<
	GenericPaginatedData & { furtherFunding: FurtherFunding[] }
>
export type PaginatedSpinOuts = PaginatedResponse<
	GenericPaginatedData & { spinOut: SpinOut[] }
>
export type PaginatedDissemination = PaginatedResponse<
	GenericPaginatedData & { dissemination: Dissemination[] }
>

export type PaginatedProjectOrganisations = GenericPaginatedData & {
	organisation: Organisation[]
}

export interface Link {
	href: string
	rel: string
	start: Date
	end: Date
	otherAttributes: any
}

export interface Links {
	link: Link[]
}

export interface Address {
	id: string
	created: Date
	line1: string
	line2: string
	postCode: string
	region: string
	country: string
	type: string
}

export interface Person {
	links: Links[]
	id: string
	href: string
	created: Date
	firstName: string
	otherNames: string
	surname: string
	orcidId?: string
}

export interface Project {
	links: Links
	id: string
	href: string
	created: Date
	identifiers: {
		identifier: [
			{
				value: string
				type: string
			},
		]
	}
	title: string
	status: string
	grantCategory: string
	leadFunder: string
	leadOrganisationDepartment: string
	abstractText: string
	healthCategories: {
		healthCategory: [
			{
				id: string
				text: string
			},
		]
	}
	researchActivities: {
		researchActivity: any[]
	}
	researchSubjects: {
		researchSubject: [
			{
				id: string
				text: string
				percentage: number
			},
		]
	}
	researchTopics: {
		researchTopic: [
			{
				id: string
				text: string
			},
		]
	}
	rcukProgrammes: {
		rcukProgramme: any[]
	}
}

export interface Outcomes {
	artisticAndCreativeProduct: any[]
	collaboration: Collaboration[]
	dissemination: Dissemination[]
	exploitation: any[]
	furtherFunding: Fund[]
	impactSummary: ImpactSummary[]
	intellectualProperty: IntellectualProperty[]
	keyFinding: KeyFinding[]
	policyInfluence: PolicyInfluence[]
	product: Product[]
	researchDatabaseAndModel: any[]
	researchMaterial: any[]
	softwareAndTechnicalProduct: any[]
	spinOut: SpinOut[]
	otherResearchItem: any[]
	publication: Publication[]
}

export interface Organisation {
	name: string
	links: Links
	id: string
	href: string
	created: Date
	addresses: {
		address: Address[]
	}
}

export interface Fund {
	links: Links
	id: string
	href: string
	created: Date
	start: Date
	end: Date
	valuePounds: {
		currencyCode: string
		amount: number
	}
	category: string
}

export interface OutcomeBase {
	links: Links
	id: string
	outcomeid: string
	href: string
	created: Date
}

export interface Dissemination extends OutcomeBase {
	description: string
	form: string
	primaryAudience: string
	yearsOfDissemination: string
	impact: string
	geographicReach: string
	partOfOfficialScheme: boolean
}

export interface SpinOut extends OutcomeBase {
	description: string
	companyName: string
	impact: string
	website: string
	yearEstablished: string
}

export interface ResearchMaterial extends OutcomeBase {
	title: string
	description: string
	type: string
	impact: string
	providedToOthers: boolean
}

export interface Product extends OutcomeBase {
	title: string
	description: string
	type: string
	stage: string
	status: string
	yearDevelopmentCompleted: number
	impact: string
	supportingUrl: string
}

export interface PolicyInfluence extends OutcomeBase {
	influence: string
	type: string
	impact: string
	areas: {
		item: any[]
	}
	geographicReach: string
}

export interface IntellectualProperty extends OutcomeBase {
	title: string
	description: string
	protection: string
	patentId: string
	yearProtectedGranted: number
	impact: string
	licensed: string
}

export interface Publication extends OutcomeBase {
	title: string
	type: string
	journalTitle: string
	datePublished: Date
	publicationUrl: string
	pubMedId: string
	issn: string
	volumeTitle: string
	doi: string
	issue: string
	author: string
}

export interface Collaboration extends OutcomeBase {
	description: string
	parentOrganisation: string
	childOrganisation: string
	principalInvestigatorContribution: string
	partnerContribution: string
	start: Date
	sector: string
	country: string
	impact: string
}

export interface FurtherFunding extends OutcomeBase {
	description: string
	amount: {
		currencyCode: string
		amount: number
	}
	organisation: string
	fundingId: string
	start: Date
	end: Date
	sector: string
	country: string
}

export interface KeyFinding extends OutcomeBase {
	description: string
	exploitationPathways: string
	sectors: {
		item: string[]
	}
	supportingUrl: string
}

export interface ImpactSummary extends OutcomeBase {
	description: string
	impactTypes: {
		item: string[]
	}
	sector: string
	firstYearOfImpact: number
}

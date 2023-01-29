import type * as i from "./interfaces/index.js"
import { getObjectMethods, getObjectsMethods } from "./methods.js"

export * from "./interfaces/index.js"

// The GtrClient class to construct the API from
export class GtrClient {
	protected baseUrl = "https://gtr.ukri.org/gtr/api"
	public debug: boolean

	constructor(debug: boolean = false) {
		this.debug = debug
		// Create the get objects methods
		for (const method of getObjectsMethods) {
			//@ts-ignore: Not exactly sure why but it's something about the key value (ts(7053))
			this[method.name] = (params: {}) => {
				return this.getObjects(method.path, params)
			}
		}
		// Add the get object methods
		for (const method of getObjectMethods) {
			//@ts-ignore
			this[method.name] = (id: string) => {
				return this.getObject(id, method.path)
			}
		}
	}

	protected async get(url: string, params: { [name: string]: any } = {}) {
		// Perform key conversion
		let requestParams: any = {}
		const keyConversions = {
			query: "q",
			page: "p",
			pageSize: "s",
			sort: "so",
			searchFields: "f",
			sortFields: "sf",
		}

		for (const [key, value] of Object.entries(keyConversions)) {
			if (params[key]) {
				requestParams[value] = params[key]
			}
		}

		// Add additional search params
		if (Object.keys(params).length !== 0) {
			url += "?" + new URLSearchParams(requestParams).toString()
		}

		if (this.debug) console.log(`|- Query: ${url}`)

		const config: RequestInit = {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/vnd.rcuk.gtr.json-v7",
			},
		}

		const r: i.ResponseWithDataAttribute = await fetch(url, config)
		const json = await r.json()
		this.recursiveProcessObjectDates(json)
		r.data = json
		return r
	}

	protected recursiveProcessObjectDates(obj: any) {
		Object.keys(obj).forEach((key) => {
			// If the object is a number and it has a length of 13 then consider it as a date
			if (typeof obj[key] == "number") {
				if (obj[key].toString().length == 13) {
					// console.log("Date Found")
					obj[key] = new Date(obj[key])
				}
			}
			// If it is an array then iterate through the objects and perform the recursive process objects
			if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
				for (const el of obj[key]) {
					// console.log(el)
					this.recursiveProcessObjectDates(el)
				}
			}
			// if it is an object then process it
			if (typeof obj[key] == "object" && Array.isArray(obj[key]) == false) {
				this.recursiveProcessObjectDates(obj[key])
			}
		})
	}

	protected async getObject(id: string, path: string): Promise<any> {
		const url = `${this.baseUrl}/${path}/${id}`
		return this.get(url)
	}

	protected async getObjects(path: string, params: {} = {}): Promise<any> {
		const url = `${this.baseUrl}/${path}`
		return this.get(url, params)
	}

	protected async getAssociatedObjects(id: string, path: string): Promise<any> {
		let url = `${this.baseUrl}/${path}`
		url = url.replace(":id", id)
		return this.get(url)
	}
}

// Details of the additional methods added programmatically to the GtrClient
export interface GtrClient {
	// #########
	// methods implementing getObjects()
	// Retrieves information about the people on the GtR database.
	getPeople: (params?: i.PeopleQuery) => Promise<i.PaginatedPersons>

	// Retrieve information about the projects on the GtR database.
	getProjects: (params?: i.ProjectsQuery) => Promise<i.PaginatedProjects>

	// Retrieve information about the organisations on the GtR database.
	getOrganisations: (
		params?: i.OrganisationsQuery
	) => Promise<i.PaginatedOrganisations>

	// Retrieve information about the funds on the GtR database.
	getFunds: (params?: i.FundsQuery) => Promise<i.PaginatedFunds>

	// Retrieve information about the outcomes on the GtR database.
	getOutcomes: (params?: i.OutcomesQuery) => Promise<i.PaginatedOutcomes>

	// Retrieve information about the key findings on the GtR database.
	getKeyFindings: (
		params?: i.KeyFindingsQuery
	) => Promise<i.PaginatedKeyFindings>

	// Retrieve information about the impact summaries on the GtR database.
	getImpactSummaries: (
		params?: i.ImpactSummariesQuery
	) => Promise<i.PaginatedImpactSummaries>
	getPublications: (
		params?: i.PublicationsQuery
	) => Promise<i.PaginatedPublications>
	getCollaborations: (
		params?: i.CollaborationsQuery
	) => Promise<i.PaginatedCollaborations>
	getIntellectualProperties: (
		params?: i.IntellectualPropertiesQuery
	) => Promise<i.PaginatedIntellectualProperties>
	getPolicyInfluences: (
		params?: i.PolicyInfluencesQuery
	) => Promise<i.PaginatedPolicyInfluences>
	getProducts: (params?: i.ProductsQuery) => Promise<i.PaginatedProducts>
	getResearchMaterials: (
		params?: i.ResearchMaterialsQuery
	) => Promise<i.PaginatedResearchMaterials>
	getSpinouts: (params?: i.SpinoutsQuery) => Promise<i.PaginatedSpinOuts>
	getFurtherFundings: (
		params?: i.FurtherFundingsQuery
	) => Promise<i.PaginatedFurtherFunding>
	getDisseminations: (
		params?: i.DisseminationsQuery
	) => Promise<i.PaginatedDissemination>

	// getObject Methods
	//
	getPerson: (id: string) => Promise<i.SingleObjectResponse<i.Person>>
	getOrganisation: (
		id: string
	) => Promise<i.SingleObjectResponse<i.Organisation>>
	getFund: (id: string) => Promise<i.SingleObjectResponse<i.Fund>>
	getKeyFinding: (id: string) => Promise<i.SingleObjectResponse<i.KeyFinding>>
	getImpactSummary: (
		id: string
	) => Promise<i.SingleObjectResponse<i.ImpactSummary>>
	getPublication: (id: string) => Promise<i.SingleObjectResponse<i.Publication>>
	getCollaboration: (
		id: string
	) => Promise<i.SingleObjectResponse<i.Collaboration>>
	getIntellectualProperty: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PolicyInfluence>>
	getProduct: (id: string) => Promise<i.SingleObjectResponse<i.Product>>
	getResearchMaterial: (
		id: string
	) => Promise<i.SingleObjectResponse<i.ResearchMaterial>>
	getSpinOut: (id: string) => Promise<i.SingleObjectResponse<i.SpinOut>>
	getFurtherFunding: (
		id: string
	) => Promise<i.SingleObjectResponse<i.FurtherFunding>>
	getDissemination: (
		id: string
	) => Promise<i.SingleObjectResponse<i.Dissemination>>
	// getAssociatedObjects Methods
	//
	getPersonProjects: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedProjects>>
	getPersonOrganisations: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedProjects>>
	getProjectFunds: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedFunds>>
	getProjectOrganisations: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedOrganisations>>
	getProjectPersons: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedPersons>>
	getProjectOutcomes: (
		id: string
	) => Promise<i.SingleObjectResponse<i.Outcomes>>
	getProjectKeyFindings: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedKeyFindings>>
	getProjectImpactSummaries: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedImpactSummaries>>
	getProjectPublications: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedPublications>>
	getProjectCollaborations: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedCollaborations>>
	getProjectIntellectualProperties: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedIntellectualProperties>>
	getProjectProducts: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedProducts>>
	getProjectResearchMaterials: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedResearchMaterials>>
	getProjectSpinOuts: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedSpinOuts>>
	getProjectDisseminations: (
		id: string
	) => Promise<i.SingleObjectResponse<i.PaginatedDissemination>>
}
